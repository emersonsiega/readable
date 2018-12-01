import React, { Component } from 'react'
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

const initialState = () => ({
    fields: {
        body: '',
        author: '',
    },
    error: {}
})

class NewComment extends Component {
    constructor(props) {
        super(props)

        this.state = initialState()
    }

    onChangeField = (e) => {
        const {id, value} = e.target

        this.setState((state) => ({
            fields: {
                ...state.fields,
                [id]: value
            }
        }))
    }

    hasError = () => {
        const { body = '', author = '' } = this.state.fields
        const error = {
            body: body.length < 10,
            author: author.length < 2
        }

        this.setState({
            error
        })

        return error.body || error.author
    }

    verifyAndSubmit = (e) => {
        e.preventDefault()

        if ( this.hasError() ) {
            return
        }

        this.props.onSubmit({
            ...this.state.fields,
            parentId: this.props.postId
        })

        this.setState(initialState())
    }

    componentDidUpdate( prevProps ) {
        const { comment } = this.props
        if ( comment !== prevProps.comment ) {
            this.setState({
                fields: {
                    body: comment ? comment.body : '',
                    author: comment ? comment.author : ''
                }
            })
        }
    }

    render() {
        const { body, author } = this.state.fields
        const { error } = this.state
        const { comment } = this.props
        const isBeingEdited = comment !== null && comment.isBeingEdited === true

        return (
            <PostContainer>
                <InputContainer>
                    <InputArea
                        tabIndex={1}
                        id='body'
                        rows={4}
                        placeholder='What are your thoughts?'
                        hasError={error.body}
                        value={body}
                        onChange={this.onChangeField}
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
                            value={author}
                            onChange={this.onChangeField}
                        />
                        {error.author === true && <ErrorLabel size={2} />}
                    </InputContainerBigger>
                    <ButtonDiv>
                        <Button 
                            tabIndex={3}
                            onClick={this.verifyAndSubmit}
                        >
                        Compose
                        </Button>
                    </ButtonDiv>
                </FooterDiv>
            </PostContainer>
        )
    }
}

export default NewComment