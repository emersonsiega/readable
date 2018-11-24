import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup } from 'react-transition-group'

import { Fade } from '../presentational/Components'
import CommentContainer from './CommentContainer'

const CommentsList = ({ comments = [], parentId }) => (
    <TransitionGroup>
        <>
            {comments.map((comment, i) => (
                <Fade key={comment} timeout={500 + i * 1000} time={500 + i * 1000}>
                    <CommentContainer id={comment} parentId={parentId} />
                </Fade>
            ))}
        </>
    </TransitionGroup>
)

const mapStateToProps = ({comments = {}}, {parentId}) => ({
    comments: Object.keys(comments[parentId] || {}),
    parentId: parentId
})

export default connect(mapStateToProps)(CommentsList)