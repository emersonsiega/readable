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

const Comments = styled.div`
    display: flex;
    align-items: flex-end;  
`

const Post = (props) => {
    const {
        id, title, body, voteScore, 
        author, timestamp, onVoteDown,
        onVoteUp, voted, commentCount, 
        category
    } = props

    const isCompactMode = props.match.params.post_id !== undefined

    return (
        <PostContainer>
            <Header>
                <Vote
                    onVoteDown={onVoteDown}
                    onVoteUp={onVoteUp}
                    voteScore={voteScore}
                    voted={voted}
                />
                {isCompactMode === true
                    ? <Title>{title}</Title>
                    : <Title><Link to={`/${category}/${id}`}>{title}</Link></Title>}
            </Header>
            {isCompactMode === true && (
                <Body>{body}</Body>
            )}
            <Footer>
                <Comments>
                    <IconZoomBig highlight={commentCount !== 0}>
                        <FaComments />
                    </IconZoomBig>
                    <CommentsLabel>{commentCount}</CommentsLabel>
                </Comments>
                <FooterRight>
                    <Detail>{author}</Detail>
                    <Detail>{dateTimeFormatter(timestamp)}</Detail>
                </FooterRight>
            </Footer>
        </PostContainer>
    )

    // return (
    //     <PostContainer>
    //         <ActionsContainer>
    //             <Vote 
    //                 onVoteDown={onVoteDown}
    //                 onVoteUp={onVoteUp}
    //                 voteScore={voteScore}
    //                 voted={voted}
    //             />
    //             <CommentsContainer>
    //                 <IconZoom highlight={commentCount !== 0}>
    //                     <FaComments />
    //                 </IconZoom>
    //                 <CommentsLabel>{commentCount}</CommentsLabel>
    //             </CommentsContainer>
    //         </ActionsContainer>
    //         <InfoContainer>
    //             {isCompactMode === true 
    //                 ? <>
    //                     <Title>{title}</Title>
    //                     <Body>{body}</Body>
    //                 </>
    //                 : <Title><Link to={`/${category}/${id}`}>{title}</Link></Title>}
    //             <PostDetails>
    //                 <Detail>{dateTimeFormatter(timestamp)}</Detail>
    //                 <Detail>{author}</Detail>
    //             </PostDetails>
    //         </InfoContainer>
    //     </PostContainer>
    // )
}

Post.propTypes = { ...postType }

Post.defaultProps = {
    voteScore: 0,
    commentCount: 0,
}

export default withRouter(Post)