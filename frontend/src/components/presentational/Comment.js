import React from 'react'
import styled from 'styled-components'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'
import dateTimeFormatter from '../../utils/DateTimeHelper'

import { 
    PostContainer, 
    PostHeader,
    PostBody,
    PostFooter,
    PostFooterRight,
    PostDetail,
    PostActions,
    IconZoom,
} from './Components'
import { commentType, voteType } from '../../types'
import Vote from './Vote'

const CommentContainer = styled(PostContainer)`
    max-height: 9em;
`

const CommentHeader = styled(PostHeader)`
    align-items: flex-start;
`

const CommentBody = styled(PostBody)`
    margin-right: auto;
    margin-left: 20px;
`

const IconZoomMedium = styled(IconZoom)`
    font-size: 1.5em;
`

const Comment = ({voteScore, body, author, timestamp, onDelete, onEdit, onVoteDown, onVoteUp}) => (
    <CommentContainer>
        <CommentHeader>
            <Vote 
                voteScore={voteScore}
                onVoteUp={onVoteUp}
                onVoteDown={onVoteDown}
            />
            <CommentBody>{body}</CommentBody>
        </CommentHeader>
        <PostFooter>
            <PostActions>
                <IconZoomMedium><FaRegEdit onClick={onEdit}/></IconZoomMedium>
                <IconZoomMedium><FaTrashAlt onClick={onDelete}/></IconZoomMedium>
            </PostActions>
            <PostFooterRight>
                <PostDetail>{author}</PostDetail>
                <PostDetail>{dateTimeFormatter(timestamp)}</PostDetail>
            </PostFooterRight>
        </PostFooter>
    </CommentContainer>
)

Comment.propTypes = { ...commentType, ...voteType }

export default Comment