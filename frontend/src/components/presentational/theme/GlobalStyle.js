import { createGlobalStyle } from 'styled-components'

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

export default GlobalStyle