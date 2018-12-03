import React from 'react'
import styled from 'styled-components'
import { FaLongArrowAltLeft, FaSadCry } from 'react-icons/fa'

import { Link, IconZoom } from './Components'

const PostNotFoundContainer = styled.section`
    height: calc(100vh - 65px);
    margin: auto;
`

const Content = styled.div`
    top: 30vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PostNotFoundMessage = styled.p`
    font-size: 4em;
    font-weight: 200;
    margin: 0;
`

const HomeLink = styled(Link)`
    font-weight: 300;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Icon = styled(IconZoom)`
    color: ${props => props.theme.hover};
    font-size: 4em;
    display: flex;
    align-items: center;
` 

const PostNotFound = () => (
    <PostNotFoundContainer>
        <Content>
            <Icon>
                <FaSadCry />
            </Icon>
            <PostNotFoundMessage>Post not found</PostNotFoundMessage>
            <HomeLink to='/'>
                <FaLongArrowAltLeft /> Back to home
            </HomeLink>
        </Content>
    </PostNotFoundContainer>
)

export default PostNotFound