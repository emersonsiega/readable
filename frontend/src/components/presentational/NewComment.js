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

const INITIAL_STATE = {
    fields: {
        body: '',
        author: '',
    },
    error: {}
}

class NewComment extends Component {
    state = INITIAL_STATE

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

        this.setState(INITIAL_STATE)
    }

    render() {
        return (
            <PostContainer>
                <InputContainer>
                    <InputArea
                        tabIndex={1}
                        id='body'
                        placeholder='What are your thoughts?'
                        hasError={this.state.error.body}
                        value={this.state.fields.body}
                        onChange={this.onChangeField}
                    />
                    {this.state.error.body && (
                        <ErrorLabel>Minimum size is 10 characters</ErrorLabel>
                    )}
                </InputContainer>
                <FooterDiv>
                    <InputContainerBigger>
                        <Input
                            tabIndex={2}
                            id='author'
                            type='text'
                            placeholder='Author'
                            hasError={this.state.error.author}
                            value={this.state.fields.author}
                            onChange={this.onChangeField}
                        />
                        {this.state.error.author && (
                            <ErrorLabel>Minimum size is 2 characters</ErrorLabel>
                        )}
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