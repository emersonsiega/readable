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

const InputBigger = styled(Input)`
    flex-grow: 2;
    margin-right: 20px;
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

class NewComment extends Component {
    state = {
        fields: {
        },
        error: {}
    }

    onChangeField = (e) => {
        const {id, value} = e.target
        console.log(id)

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
            ...this.state.fields
        })
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
                        value={this.state.body}
                        onChange={this.onChangeField}
                    />
                    {this.state.error.body && (
                        <ErrorLabel>Minimum size is 10 characters</ErrorLabel>
                    )}
                </InputContainer>
                <FooterDiv>
                    <InputContainer>
                        <InputBigger
                            tabIndex={2}
                            id='author'
                            type='text'
                            placeholder='Author'
                            hasError={this.state.error.author}
                            value={this.state.author}
                            onChange={this.onChangeField}
                        />
                        {this.state.error.author && (
                            <ErrorLabel>Minimum size is 2 characters</ErrorLabel>
                        )}
                    </InputContainer>
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