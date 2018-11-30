import React from 'react'
import { connect } from 'react-redux'

import NewComment from  '../presentational/NewComment'
import { 
    handleAddComment, 
    handleEditComment 
} from '../../store/actions/comments'

const NewCommentContainer = (props) => {
    
    const postComment = ({ body, author }) => {
        const { comment, postId, editComment, addComment } = props

        if ( comment !== null && comment.isBeingEdited === true ) {
            editComment(comment, body)
        } else {
            addComment(postId, body, author)
        }
    }

    return (
        <NewComment 
            postId={props.postId} 
            onSubmit={postComment}
            comment={props.comment}
        />
    )
}

const mapStateToProps = ({comments}, {postId}) => ({
    comment: Object.values(comments[postId] || {}).find(c => c.isBeingEdited === true) || null
})

const mapDispatchToProps = dispatch => ({
    editComment: ({ parentId, id, timestamp }, body) => dispatch(handleEditComment(parentId, id, body, timestamp)),
    addComment: (parentId, body, author) => dispatch(handleAddComment({ parentId, body, author }))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCommentContainer)