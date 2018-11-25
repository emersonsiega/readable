import React from 'react'
import { connect } from 'react-redux'

import NewComment from  '../presentational/NewComment'

const postComment = (comment) => {

    alert(comment.body)
}

const NewCommentContainer = (props) => {
    return (
        <NewComment 
            parentId={props.parentId} 
            onSubmit={postComment}
        />
    )
}

export default connect()(NewCommentContainer)