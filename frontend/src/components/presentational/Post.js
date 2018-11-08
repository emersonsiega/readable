import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
    FaComments
} from 'react-icons/fa'

import Vote, {VotePropTypes} from './Vote'
import dateTimeFormatter from '../../utils/DateTimeHelper'

const PostContainer = styled.div`
    background: ${props => props.theme.foreground};
    color: ${props => props.theme.color};
    height: 9em;
    width: auto;
    padding: 10px;
    margin: 5px 0px 5px 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
`

const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 10%;
`

const CommentsContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 2em;
    align-items: baseline;
    cursor: pointer;
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
`

const Post = ({ title, voteScore, author, timestamp, onVoteDown, onVoteUp, voted, commentCount }) => {
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
                    <FaComments />
                    <CommentsLabel>{commentCount}</CommentsLabel>
                </CommentsContainer>
            </ActionsContainer>
            <InfoContainer>
                <Title>{title}</Title>
                <PostDetails>
                    <Detail>{author}</Detail>
                    <Detail>{dateTimeFormatter(timestamp)}</Detail>
                </PostDetails>
            </InfoContainer>
        </PostContainer>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.any.isRequired,
    commentCount: PropTypes.number,
    ...VotePropTypes,
}

Post.defaultProps = {
    voteScore: 0,
    commentCount: 0,
}

export default Post