import React from 'react'
import styled from 'styled-components'
import { FaComments } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

import Vote from './Vote'
import dateTimeFormatter from '../../utils/DateTimeHelper'
import { IconZoom, Link } from './Components'
import { postType } from '../../types'

const PostContainer = styled.article`
    background: ${props => props.theme.foreground};
    color: ${props => props.theme.color};
    min-height: 9em;
    width: 100%;
    padding: 10px;
    margin: 5px 0px 5px 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;

    &:hover {
        box-shadow: 0px 0px 10px ${props => props.theme.foreground};
    }

    transition: background-color 0.8s ease;
`

const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 10%;
`

const CommentsContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 2em;
    align-items: baseline;
`

const CommentsLabel = styled.label`
    font-size: 1em;
    margin-left: 5px;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    flex-grow: 2;
    justify-content: space-between;
    width: 90%;
`

const Title = styled.label`
    font-size: 3em;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: hidden;
    max-height: 100%;
    line-height: 1.3;
`

const PostDetails = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

const Detail = styled.label`
    font-size: 1em;
    font-style: italic;
    padding-left: 10px;
    font-weight: 300;
`

const Body = styled.p`
    font-size: 1em;
    min-height: 100px;
`

const Post = (props) => {
    const {
        id, title, body, voteScore, 
        author, timestamp, onVoteDown,
        onVoteUp, voted, commentCount, 
        category
    } = props

    const showComplete = props.match.params.post_id !== undefined

    return (
        <PostContainer>
            <ActionsContainer>
                <Vote 
                    onVoteDown={onVoteDown}
                    onVoteUp={onVoteUp}
                    voteScore={voteScore}
                    voted={voted}
                />
                <CommentsContainer>
                    <IconZoom highlight={commentCount !== 0}>
                        <FaComments />
                    </IconZoom>
                    <CommentsLabel>{commentCount}</CommentsLabel>
                </CommentsContainer>
            </ActionsContainer>
            <InfoContainer>
                {showComplete === true 
                    ? <>
                        <Title>{title}</Title>
                        <Body>{body}</Body>
                    </>
                    : <Title><Link to={`/${category}/${id}`}>{title}</Link></Title>}
                <PostDetails>
                    <Detail>{dateTimeFormatter(timestamp)}</Detail>
                    <Detail>{author}</Detail>
                </PostDetails>
            </InfoContainer>
        </PostContainer>
    )
}

Post.propTypes = { ...postType }

Post.defaultProps = {
    voteScore: 0,
    commentCount: 0,
}

export default withRouter(Post)