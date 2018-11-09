import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme.color};
        margin: 0;
        padding: 0;
        font-family: Roboto, sans-serif;
        line-height: 1.5;
        scroll-behavior: smooth;
    }
`

const Button = styled.button`
    background: ${props => props.theme.link};
    color: ${props => props.theme.linkColor};
    border: solid 1px transparent;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    outline: none;

    &:hover {
        box-shadow: 0px 0px 10px 0px ${props => props.theme.link}
    }
`

const HeaderTitle = styled.h1`
    font-family: 'Playball',cursive;
    font-weight: 300;
    color: ${({theme}) => theme.headerColor};
    margin: 0;
    padding: 0;
`

const Icon = styled.div`
    color: ${props => props.highlight === true
        ? props.theme.link
        : props.theme.color};
    cursor: pointer;
`

export {
    GlobalStyle,
    Button,
    Icon,
    HeaderTitle,
}