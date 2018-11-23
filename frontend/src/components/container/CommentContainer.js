import React from 'react'
import { connect } from 'react-redux'

const CommentContainer = ({comment}) => (
    <div style={{border: 'solid 1px'}}>
        <h4>{comment.body}</h4>
    </div>
)

const mapStateToProps = ({ comments = {} }, { id, parentId }) => ({
    comment: comments[parentId][id]
})

export default connect(mapStateToProps)(CommentContainer)