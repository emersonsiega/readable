import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup } from 'react-transition-group'

import { Fade } from '../presentational/Components'
import CommentContainer from './CommentContainer'
import SortHelper from '../../utils/SortHelper'

const CommentsList = ({ comments = [] }) => (
    <TransitionGroup>
        <>
            {comments.map((comment, i) => comment.deleted === false && (
                <Fade key={comment.id} timeout={500 + i * 1000} time={500 + i * 1000}>
                    <CommentContainer comment={comment} />
                </Fade>
            ))}
        </>
    </TransitionGroup>
)

const mapStateToProps = ({comments = {}, sort = {}}, {postId}) => {
    const orderedComments = SortHelper(Object.values(comments[postId] || {}), sort)
    
    return {
        comments: orderedComments
    }
}

export default connect(mapStateToProps)(CommentsList)