import React from 'react'
import styled from 'styled-components'
import { FaMoon, FaRegMoon } from 'react-icons/fa'

import { IconRotate } from '../presentational/Components'
import { navType, THEME_LIGHT } from '../../types'

const NavHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 0px 10px 0px ${props => props.theme.background};

    transition: background-color 0.3s ease;
`

const AppTitle = styled.h1`
    font-family: 'Playball',cursive;
    font-weight: 300;
    font-size: 2.5em;
    color: ${({ theme }) => theme.link};
    margin: 10px;
    padding: 0;
    flex-grow: 2;
`

const ThemeToggler = styled.div`
    display: flex;
    align-self: center;
    flex-grow: 1;
    justify-content: flex-end;
    margin: 10px;
    font-size: 1.7em;
`

const IconRotateColored = styled(IconRotate)`
    color: ${props => props.theme.color};
`

const Nav = (props) => {
    const handleThemeToggle = () => {
        props.toggleTheme()
    }

    return (
        <NavHeader>
            <AppTitle>Readable</AppTitle>
            <ThemeToggler>
                <IconRotateColored degress={-20} onClick={handleThemeToggle}>
                    {props.theme === THEME_LIGHT 
                        ? <FaRegMoon />
                        : <FaMoon />
                    }
                </IconRotateColored> 
            </ThemeToggler>
        </NavHeader>
    )
}

Nav.propTypes = { ...navType }

export default Nav