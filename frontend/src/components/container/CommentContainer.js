import React from 'react'
import { connect } from 'react-redux'

import Comment from '../presentational/Comment'
import { 
    handleDeleteComment,
    toggleEditing,
} from '../../store/actions/comments'

const CommentContainer = ({comment, onDelete, onEdit}) => {
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
    onEdit: (comment) => dispatch(toggleEditing(comment.id, comment.parentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)