import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import {
    PostContainer,
    Input,
    InputArea,
    Button,
    Select,
    Option,
    ErrorLabel,
} from '../presentational/Components'

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const NewPostContainer = styled(PostContainer)`
    height: 100%;
    justify-content: space-around;
`

const TitleInput = styled(Input)`
    font-size: 1.7em;
`

const InputBigger = styled(Input)`
    width: 200px;
`

const initialState = (post = {}) => ({
    title: post.title || '',
    body: post.body || '',
    author: post.author || '',
    category: post.category || ''
})

const NewPost = ({onSubmit, post = {}, categories = []}) => {
    const [fields, addFields] = useState(initialState())
    const [error, setError] = useState({})
    const idEditing = post.id !== undefined

    useEffect(() => {
        addFields(initialState(post))
    }, [post.id])

    const fieldValue = e => {
        const { options } = e.target

        let value;
        if (options) {
            const { selectedIndex } = options
            value = options[selectedIndex].value
        } else {
            value = e.target.value
        }

        return value
    }
    
    const handleChange = (e) => {
        const {id} = e.target
        const value = fieldValue(e)

        addFields({
            ...fields,
            [id]: value
        })
    }

    const hasError = (validations) => {
        const errors = validations.reduce( (acc, v) => 
            Object.assign( {}, { ...acc }, { [v.id]: v.validate() } ), {} )
        
        setError({
            ...error,
            ...errors
        })

        return Object.values(errors).indexOf(true) !== -1
    }

    const verifyAndSubmit = e => {
        e.preventDefault()

        const err = hasError([
            { id: 'title', validate: () => fields.title.length < 5 },
            { id: 'body', validate: () => fields.body.length < 10 },
            { id: 'author', validate: () => fields.author.length < 2 },
            { id: 'category', validate: () => fields.category.length < 1 }
        ])

        if ( !err ) {
            onSubmit({
                id: post.id,
                title: fields.title,
                author: fields.author,
                body: fields.body,
                category: fields.category
            })
        }

    }

    return (
        <NewPostContainer>
            <TitleInput
                id='title'
                type='text'
                placeholder='Title'
                value={fields.title}
                hasError={error.title}
                onChange={handleChange}
            />
            {error.title && <ErrorLabel size={5} />}
            <InputArea
                id='body'
                rows={20}
                placeholder='What are your thoughts?'
                hasError={error.body}
                value={fields.body}
                onChange={handleChange}
            />
            {error.body && <ErrorLabel size={10} />}
            <Footer>
                <FooterColumn>
                    <InputBigger
                        id='author'
                        type='text'
                        placeholder='Author'
                        disabled={idEditing}
                        hasError={error.author}
                        value={fields.author}
                        onChange={handleChange}
                    />
                    {error.author && <ErrorLabel size={2} />}
                </FooterColumn>
                <FooterColumn>
                    <Select
                        id='category'
                        placeholder='Category'
                        value={fields.category}
                        disabled={idEditing}
                        hasError={error.category}
                        onChange={handleChange}
                    >
                        <Option value="" disabled hidden>Category...</Option>
                        {categories.map( cat => (
                            <Option key={cat.value} value={cat.value}>{cat.text}</Option>
                        ))}
                    </Select>
                    {error.category && <ErrorLabel isSelect />}
                </FooterColumn>
                <Button onClick={verifyAndSubmit}>Compose</Button>
            </Footer>
        </NewPostContainer>
    )
}

export default NewPost