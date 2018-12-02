import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { 
    PostContainer,
    Input,
    InputArea,
    Button,
    ErrorLabel,
} from './Components'

const FooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const ButtonDiv = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const InputContainerBigger = styled(InputContainer)`
    flex-grow: 2;
    margin-right: 20px;
`

const initialState = (comment = {}) => ({
    body: comment.body || '',
    author: comment.author || ''
})

const NewComment = ({comment = {}, onSubmit, postId}) => {
    const [fields, addFields] = useState(initialState())
    const [error, setError] = useState({})
    const isBeingEdited = comment !== undefined && comment.isBeingEdited === true

    useEffect(() => {
        addFields(initialState(comment))
    }, [comment.id])

    const handleChange = (e) => {
        const { id, value } = e.target

        addFields({
            ...fields,
            [id]: value
        })
    }

    const hasError = (validations) => {
        const errors = validations.reduce((acc, v) =>
            Object.assign({}, { ...acc }, { [v.id]: v.validate() }), {})

        setError({
            ...error,
            ...errors
        })

        return Object.values(errors).indexOf(true) !== -1
    }

    const verifyAndSubmit = (e) => {
        e.preventDefault()

        const err = hasError([
            { id: 'body', validate: () => fields.body.length < 10 },
            { id: 'author', validate: () => fields.author.length < 2 },
        ])

        if (!err) {
            onSubmit({
                parentId: postId,
                author: fields.author,
                body: fields.body,
            })
            addFields(initialState())
        }
    }

    return (
        <PostContainer>
            <InputContainer>
                <InputArea
                    tabIndex={1}
                    id='body'
                    rows={4}
                    placeholder='What are your thoughts?'
                    hasError={error.body}
                    value={fields.body}
                    onChange={handleChange}
                />
                {error.body === true && <ErrorLabel size={10} />}
            </InputContainer>
            <FooterDiv>
                <InputContainerBigger>
                    <Input
                        tabIndex={2}
                        id='author'
                        type='text'
                        disabled={isBeingEdited}
                        placeholder='Author'
                        hasError={error.author}
                        value={fields.author}
                        onChange={handleChange}
                    />
                    {error.author === true && <ErrorLabel size={2} />}
                </InputContainerBigger>
                <ButtonDiv>
                    <Button 
                        tabIndex={3}
                        onClick={verifyAndSubmit}
                    >
                    Compose
                    </Button>
                </ButtonDiv>
            </FooterDiv>
        </PostContainer>
    )
}

export default NewComment