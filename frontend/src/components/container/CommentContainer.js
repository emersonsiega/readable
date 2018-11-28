import React from 'react'
import { connect } from 'react-redux'

import Comment from '../presentational/Comment'
import { handleDeleteComment } from '../../store/actions/comments'

const CommentContainer = ({comment, dispatch}) => {
    const onDelete = e => {
        e.preventDefault()
        dispatch(handleDeleteComment(comment.id, comment.parentId))
    }

    const onVoteUp = e => {
        e.preventDefault()
        alert('voted up')
    }

    const onVoteDown = e => {
        e.preventDefault()
        alert('voted down')
    }

    return (
        <Comment 
            id={comment.id}
            parentId={comment.parentId}
            body={comment.body}
            timestamp={comment.timestamp}
            author={comment.author}
            voteScore={comment.voteScore}
            onDelete={onDelete}
            onVoteUp={onVoteUp}
            onVoteDown={onVoteDown}
        />
    )
}

export default connect()(CommentContainer)