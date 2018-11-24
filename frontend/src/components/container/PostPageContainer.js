import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { handleFetchComments } from '../../store/actions/comments'
import PostPage from '../presentational/PostPage'

class PostPageContainer extends Component {
    componentDidMount() {
        const { dispatch, postId } = this.props

        dispatch(handleFetchComments(postId))
    }

    render() {
        const { postId, commentsCount } = this.props

        return (
            <PostPage 
                postId={postId}
                commentsCount={commentsCount}
            />
        )
    }
}

const mapStateToProps = ({comments = {}}, {match}) => {
    const commentsList = comments[match.params.post_id] || {}

    return {
        postId: match.params.post_id,
        commentsCount: Object.keys( commentsList ).length
    }
}

export default withRouter(connect(mapStateToProps)(PostPageContainer))