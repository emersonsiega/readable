import React from 'react'
import styled from 'styled-components'
import { FaComments, FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

import Vote from './Vote'
import dateTimeFormatter from '../../utils/DateTimeHelper'
import { IconZoom, Link } from './Components'
import { postType } from '../../types'

const PostContainer = styled.article`
    background: ${props => props.theme.foreground};
    color: ${props => props.theme.color};
    min-height: 9em;
    max-width: 100%;
    padding: 10px;
    margin: 5px 0px 5px 0px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-color 0.8s ease;

    &:hover {
        box-shadow: 0px 0px 10px ${props => props.theme.foreground};
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Footer = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: 10px;
`

const FooterRight = styled.div`
    margin-left: auto;
`

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

const Detail = styled.label`
    font-size: 1em;
    font-style: italic;
    padding-left: 10px;
    font-weight: 300;
`

const Body = styled.p`
    font-size: 1em;
    min-height: 200px;
    margin-bottom: auto;
`

const IconZoomBig = styled(IconZoom)`
    font-size: 2em;
`

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-right: auto;
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

    return (
        <PostContainer>
            <Header>
                <Vote
                    onVoteDown={onVoteDown}
                    onVoteUp={onVoteUp}
                    voteScore={voteScore}
                    voted={voted}
                />
                {isCompactMode()
                    ? <Title>{title}</Title>
                    : <Title><Link to={`/${category}/${id}`}>{title}</Link></Title>
                }
            </Header>
            {isCompactMode() && (
                <Body>{body}</Body>
            )}
            <Footer>
                {isCompactMode() 
                    ? (
                        <Actions>
                            <IconZoomBig><FaRegEdit onClick={onEdit}/></IconZoomBig>
                            <IconZoomBig><FaTrashAlt onClick={onDelete}/></IconZoomBig>
                        </Actions>
                    )
                    : (
                        <Actions>
                            <IconZoomBig highlight={commentCount !== 0}>
                                <FaComments />
                            </IconZoomBig>
                            <CommentsLabel>{commentCount}</CommentsLabel>
                        </Actions>
                    )
                }
                <FooterRight>
                    <Detail>{author}</Detail>
                    <Detail>{dateTimeFormatter(timestamp)}</Detail>
                </FooterRight>
            </Footer>
        </PostContainer>
    )
}

Post.propTypes = { ...postType }

Post.defaultProps = {
    voteScore: 0,
    commentCount: 0,
}

export default withRouter(Post)