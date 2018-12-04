import React from 'react'
import styled from 'styled-components'
import { FaSun, FaMoon } from 'react-icons/fa'

import { IconZoom, Link } from '../presentational/Components'
import { navType, THEME_LIGHT } from '../../types'

const NavHeader = styled.div`
    box-shadow: 0px 0px 10px 0px ${props => props.theme.background};
    background: ${({ theme }) => theme.background};
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: background-color 0.3s ease;
`

const AppTitle = styled.h1`
    font-family: 'Playball',cursive;
    font-weight: 300;
    font-size: 2.5em;
    color: ${({ theme }) => theme.link};
    margin: 10px 0 10px 20px;
    padding: 0;
    flex-grow: 2;
`

const ThemeToggler = styled.div`
    display: flex;
    align-self: center;
    flex-grow: 1;
    justify-content: flex-end;
    margin: 10px 20px 10px 0;
    font-size: 1.7em;
`

const Nav = ({toggleTheme, theme}) => (
    <NavHeader>
        <AppTitle>
            <Link to='/'>Readable</Link>
        </AppTitle>
        <ThemeToggler>
            <IconZoom onClick={toggleTheme}>
                {theme === THEME_LIGHT 
                    ? <FaMoon />
                    : <FaSun />
                }
            </IconZoom> 
        </ThemeToggler>
    </NavHeader>
)

Nav.propTypes = { ...navType }

export default Nav