import React from 'react'
import { connect } from 'react-redux'

import NewComment from  '../presentational/NewComment'
import { 
    handleAddComment, 
    handleEditComment 
} from '../../store/actions/comments'

const NewCommentContainer = (props) => {
    
    const postComment = ({ body, author }) => {
        const { comment, editComment, addComment } = props

        console.log('comment being edited', comment)

        if ( comment !== null && comment.isBeingEdited === true ) {
            console.log('editing', comment, body)
            editComment(comment.id, body)
        } else {
            console.log('posting', body, author)
            addComment(body, author)
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

const mapStateToProps = ({comments}, {postId}) => {
    const comment = Object.values(comments[postId] || {}).find(c => c.isBeingEdited === true) || null

    console.log('comment', comment)

    return {
        comment: comment
    }
}

const mapDispatchToProps = dispatch => ({
    editComment: (id, body) => dispatch(handleEditComment(id, body)),
    addComment: (body, author) => dispatch(handleAddComment({ body, author }))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCommentContainer)