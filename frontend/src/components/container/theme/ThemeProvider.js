import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { connect } from 'react-redux'

import GlobalStyle from '../../presentational/theme/GlobalStyle'
import { THEME_LIGHT } from '../../../types'

const themes = {
    dark: {
        background: '#242424',
        color: '#f2f2f2',
        foreground: '#4f4f4f',
        link: '#6fcf97',
        linkColor: '#333',
        hover: '#6faacf',
    },
    light: {
        background: '#f2f2f2',
        color: '#333', 
        foreground: '#dedede',
        link: '#6fcf97',
        linkColor: '#333',
        hover: '#6faacf',
    }
}

const ThemeProvider = (props) => (
    <Provider theme={props.theme}>
        <>
            <GlobalStyle />
            {props.children}
        </>
    </Provider>
)

const mapStateToProps = ({theme}) => ({
    theme: themes[theme || THEME_LIGHT]
})

export default connect(mapStateToProps)(ThemeProvider)