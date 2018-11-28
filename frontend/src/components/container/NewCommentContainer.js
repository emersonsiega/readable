import React from 'react'
import { connect } from 'react-redux'

import NewComment from  '../presentational/NewComment'
import { handleAddComment } from '../../store/actions/comments'

const NewCommentContainer = (props) => {
    
    const postComment = (comment) => {
        const { dispatch } = props
        dispatch(handleAddComment(comment))
    }

    return (
        <NewComment 
            postId={props.postId} 
            onSubmit={postComment}
        />
    )
}

export default connect()(NewCommentContainer)