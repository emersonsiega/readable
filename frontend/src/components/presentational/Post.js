import React from 'react'
import styled from 'styled-components'
import { FaComments, FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

import Vote from './Vote'
import dateTimeFormatter from '../../utils/DateTimeHelper'
import { 
    IconZoom, 
    Link, 
    PostContainer, 
    PostHeader, 
    PostFooter, 
    PostFooterRight, 
    PostDetail,
    PostBody,
    PostActions,
} from './Components'
import { postType } from '../../types'

const CommentsLabel = styled.label`
    font-size: 1em;
    margin-left: 5px;
`

const Title = styled.label`
    font-size: 3em;
    overflow: hidden;
    line-height: 1.3;
    margin-left: 50px;
    margin-right: auto;
`

const IconZoomBig = styled(IconZoom)`
    font-size: 2em;
`

const Post = (props) => {
    const {
        id, title, body, voteScore, 
        author, timestamp, onVoteDown,
        onVoteUp, voted, commentCount, 
        category, onEdit, onDelete
    } = props

    const compactMode = props.match.params.post_id !== undefined
    const isCompactMode = () => compactMode === true

    const LinkToPost = (props) => <Link to={`/${category}/${id}`}>{props.children}</Link>

    return (
        <PostContainer>
            <PostHeader>
                <Vote
                    onVoteDown={onVoteDown}
                    onVoteUp={onVoteUp}
                    voteScore={voteScore}
                    voted={voted}
                />
                {isCompactMode()
                    ? <Title>{title}</Title>
                    : <Title><LinkToPost>{title}</LinkToPost></Title>
                }
            </PostHeader>
            {isCompactMode() && (
                <PostBody>{body}</PostBody>
            )}
            <PostFooter>
                {isCompactMode() 
                    ? (
                        <PostActions>
                            <IconZoomBig><FaRegEdit onClick={onEdit}/></IconZoomBig>
                            <IconZoomBig><FaTrashAlt onClick={onDelete}/></IconZoomBig>
                        </PostActions>
                    )
                    : (
                        <PostActions>
                            <LinkToPost>
                                <IconZoomBig highlight={commentCount !== 0}>
                                    <FaComments />
                                </IconZoomBig>
                            </LinkToPost>
                            <CommentsLabel>{commentCount}</CommentsLabel>
                        </PostActions>
                    )
                }
                <PostFooterRight>
                    <PostDetail>{author}</PostDetail>
                    <PostDetail>{dateTimeFormatter(timestamp)}</PostDetail>
                </PostFooterRight>
            </PostFooter>
        </PostContainer>
    )
}

Post.propTypes = { ...postType }

Post.defaultProps = {
    voteScore: 0,
    commentCount: 0,
}

export default withRouter(Post)