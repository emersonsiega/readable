import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup } from 'react-transition-group'

import { Fade } from '../presentational/Components'
import CommentContainer from './CommentContainer'

const CommentsList = ({ comments, parentId }) => (
    <TransitionGroup>
        <h4>{comments.length || 0} replies</h4>

        {comments.map((comment, i) => (
            <Fade key={comment} timeout={500 + i * 1000} time={500 + i * 1000}>
                <CommentContainer id={comment} parentId={parentId} />
            </Fade>
        ))}
    </TransitionGroup>
)

const mapStateToProps = ({comments = {}}, {post_id}) => ({
    comments: Object.keys(comments[post_id] || {}),
    parentId: post_id
})

export default connect(mapStateToProps)(CommentsList)