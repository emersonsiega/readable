import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: url('./assets/fonts/roboto-v18-latin-300.eot'); /* IE9 Compat Modes */
      src: local('Roboto Light'), local('Roboto-Light'),
          url('./assets/fonts/roboto-v18-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('./assets/fonts/roboto-v18-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
          url('./assets/fonts/roboto-v18-latin-300.woff') format('woff'), /* Modern Browsers */
          url('./assets/fonts/roboto-v18-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
          url('./assets/fonts/roboto-v18-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 400;
      src: url('./assets/fonts/roboto-v18-latin-italic.eot'); /* IE9 Compat Modes */
      src: local('Roboto Italic'), local('Roboto-Italic'),
          url('./assets/fonts/roboto-v18-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('./assets/fonts/roboto-v18-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
          url('./assets/fonts/roboto-v18-latin-italic.woff') format('woff'), /* Modern Browsers */
          url('./assets/fonts/roboto-v18-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
          url('./assets/fonts/roboto-v18-latin-italic.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url('./assets/fonts/roboto-v18-latin-regular.eot'); /* IE9 Compat Modes */
      src: local('Roboto'), local('Roboto-Regular'),
          url('./assets/fonts/roboto-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('./assets/fonts/roboto-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('./assets/fonts/roboto-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
          url('./assets/fonts/roboto-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
          url('./assets/fonts/roboto-v18-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      src: url('./assets/fonts/roboto-v18-latin-500.eot'); /* IE9 Compat Modes */
      src: local('Roboto Medium'), local('Roboto-Medium'),
          url('./assets/fonts/roboto-v18-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('./assets/fonts/roboto-v18-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
          url('./assets/fonts/roboto-v18-latin-500.woff') format('woff'), /* Modern Browsers */
          url('./assets/fonts/roboto-v18-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
          url('./assets/fonts/roboto-v18-latin-500.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      src: url('./assets/fonts/roboto-v18-latin-700.eot'); /* IE9 Compat Modes */
      src: local('Roboto Bold'), local('Roboto-Bold'),
          url('./assets/fonts/roboto-v18-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('./assets/fonts/roboto-v18-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
          url('./assets/fonts/roboto-v18-latin-700.woff') format('woff'), /* Modern Browsers */
          url('./assets/fonts/roboto-v18-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
          url('./assets/fonts/roboto-v18-latin-700.svg#Roboto') format('svg'); /* Legacy iOS */
    }

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
`

export {
    GlobalStyle,
    Button,
}