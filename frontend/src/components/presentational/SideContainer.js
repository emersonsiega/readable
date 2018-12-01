import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import { Button } from '../presentational/Components'

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
`

//TODO: Move to another component
const Categories = () => (
    <>
        <label>Categories</label>
        <ul>
            <li>React</li>
            <li>Redux</li>
            <li>ES6</li>
        </ul>
    </>
)

//TODO: Move to another component
const Sort = () => (
    <>
        <label>Sort posts</label>
        <ul>
            <li>Newest</li>
            <li>Oldest</li>
            <li>More popular</li>
            <li>Less popular</li>
            <li>More commented</li>
        </ul>
    </>
)

const SideContainer = ({history, location}) => {

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
                <Categories></Categories>
                <Sort></Sort>
            </SideOptions>
        </Side>
    )
}

export default withRouter(SideContainer)