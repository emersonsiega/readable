import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

export const themes = {
    dark: {
        background: '#242424',
        color: '#f2f2f2',
        foreground: '#4f4f4f',
        link: '#6fcf97',
        linkColor: '#333',
        headerBackground: '#4f4f4f',
        headerColor: '#6fcf97',
    },
    light: {
        background: '#f2f2f2',
        color: '#333', 
        foreground: '#dedede',
        link: '#6fcf97',
        linkColor: '#333',
        headerBackground: '#6fcf97',
        headerColor: '#333',
    }
}

const ThemeProvider = (props) => {
    const {theme = 'dark'} = props

    return (
        <Provider theme={themes[theme]}>
            {props.children}
        </Provider>
    )
}

export default ThemeProvider