import React from 'react'
import { connect } from 'react-redux'

import Comment from '../presentational/Comment'
import { 
    handleDeleteComment,
    toggleEditing,
    handleVoteComment,
} from '../../store/actions/comments'
import {
    VOTED_DOWN,
    VOTED_UP,
} from '../../types'

const CommentContainer = ({comment, onDelete, onEdit, onVote}) => {
    const onDeleteClick = e => {
        e.preventDefault()
        onDelete(comment)
    }

    const onEditClick = e => {
        e.preventDefault()
        onEdit(comment)
    }

    const onVoteUp = e => {
        e.preventDefault()
        onVote(comment, VOTED_UP)
    }

    const onVoteDown = e => {
        e.preventDefault()
        onVote(comment, VOTED_DOWN)
    }

    return (
        <Comment 
            id={comment.id}
            parentId={comment.parentId}
            body={comment.body}
            timestamp={comment.timestamp}
            author={comment.author}
            voteScore={comment.voteScore}
            onDelete={onDeleteClick}
            onEdit={onEditClick}
            onVoteUp={onVoteUp}
            onVoteDown={onVoteDown}
        />
    )
}

const mapStateToProps = props => props

const mapDispatchToProps = dispatch => ({
    onDelete: (comment) => dispatch(handleDeleteComment(comment.id, comment.parentId)),
    onEdit: (comment) => dispatch(toggleEditing(comment.id, comment.parentId)),
    onVote: (comment, vote) => dispatch(handleVoteComment(comment.parentId, comment.id, vote))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)