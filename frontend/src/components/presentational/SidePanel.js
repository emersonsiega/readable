import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import { Button } from './Components'
import CategoriesContainer from '../container/CategoriesContainer'
import SortContainer from '../container/SortContainer'

const Side = styled.aside`
    position: fixed;
    top: 70px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    width: 20%;
`

const SideOptions = styled.div`
    margin-top: auto;
    margin-bottom: auto;
`

const Compose = styled(Button)`
    width: 200px;
    height: 100px;
    max-height: 50px;
    font-size: 1em;
    margin-bottom: 20px;
`

const SidePanel = ({history, location}) => {

    const handleNewPost = (e) => {
        e.preventDefault()
        history.push('/new')
    }

    return (
        <Side>
            {location.pathname !== '/new' && (
                <Compose onClick={handleNewPost}>New post</Compose>
            ) }
            <SideOptions>
                <CategoriesContainer />
                <SortContainer />
            </SideOptions>
        </Side>
    )
}

export default withRouter(SidePanel)