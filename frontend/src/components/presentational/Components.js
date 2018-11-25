import styled, { css } from 'styled-components'
import transition from "styled-transition-group"
import { Link as RouterLink } from 'react-router-dom'

const Button = styled.button`
    background: ${props => props.theme.link};
    color: ${props => props.theme.linkColor};
    box-shadow: 0px 0px 3px ${props => props.theme.link};
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    outline: none;

    &:hover, :focus {
        box-shadow: 0px 0px 10px ${props => props.theme.link}
    }
`

const Icon = styled.div`
    color: ${props => props.highlight === true
        ? props.theme.link
        : props.theme.color};
    cursor: pointer;
    display: flex;
    transition: 0.2s linear;

    &:hover {
        color: ${props => props.theme.hover};
        transition: 0.2s linear;
    }
`

const IconZoom = styled(Icon)`
    transition: transform 300ms ease-in-out;
    transform-origin: center;

    &:hover {
        transform: scale(1.2);
    }
`

const Fade = transition.div`
  &:enter { opacity: 0.01; }
  &:enter-active {
    opacity: 1;
    transition: opacity ${props => props.time ? props.time : 0}ms ease-in;
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }
`

const Link = styled(RouterLink)`
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
`

const PostContainer = styled.article`
    background: ${props => props.theme.foreground};
    color: ${props => props.theme.color};
    min-height: 9em;
    max-width: 100%;
    padding: 10px;
    margin: 5px 0px 5px 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-color 0.8s ease;

    &:hover {
        box-shadow: 0px 0px 10px ${props => props.theme.foreground};
    }
`

const PostHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const PostFooter = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: 10px;
`

const PostFooterRight = styled.div`
    margin-left: auto;
`

const PostDetail = styled.label`
    font-size: 1em;
    font-style: italic;
    padding-left: 10px;
    font-weight: 300;
`

const PostBody = styled.p`
    font-size: 1em;
    min-height: 200px;
    margin-bottom: auto;
`

const PostActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-right: auto;
`

const inputStyle = css`
    border: none;
    box-shadow: 0px 0px 3px ${props => props.hasError ? props.theme.error : props.theme.hover};
    color: ${props => props.theme.color};
    padding: 10px;
    background: transparent;
    border-radius: 5px;
    outline: none;

    &:focus, :hover {
        box-shadow: 0px 0px 10px ${props => props.hasError ? props.theme.error : props.theme.hover};
    }
`

const Input = styled.input`${inputStyle}`

const InputArea = styled.textarea`
    ${inputStyle}
    min-height: 3.5em;
`

const ErrorLabel = styled.label`
    color: ${props => props.theme.error};
`

export {
    Button,
    Icon,
    IconZoom,
    Fade,
    Link,
    PostContainer,
    PostHeader,
    PostFooter,
    PostFooterRight,
    PostDetail,
    PostBody,
    PostActions,
    Input,
    InputArea,
    ErrorLabel,
}