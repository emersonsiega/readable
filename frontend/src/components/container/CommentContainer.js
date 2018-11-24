import React from 'react'
import { connect } from 'react-redux'

import Comment from '../presentational/Comment'

const CommentContainer = ({comment}) => (
    <Comment 
        id={comment.id}
        parentId={comment.parentId}
        body={comment.body}
        timestamp={comment.timestamp}
        author={comment.author}
        voteScore={comment.voteScore}
    />
)

const mapStateToProps = ({ comments = {} }, { id, parentId }) => ({
    comment: comments[parentId][id]
})

export default connect(mapStateToProps)(CommentContainer)