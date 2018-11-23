import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PostContainer from './PostContainer'
import CommentsList from './CommentsList'
import { handleFetchComments } from '../../store/actions/comments'

class PostPage extends Component {
    postId = () => {
        const { match } = this.props

        return match.params.post_id;
    }

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(handleFetchComments(this.postId()))
    }

    render() {
        return (
            <>
                <PostContainer />
                <CommentsList post_id={this.postId()}/>
            </>
        )
    }
}

export default withRouter(connect()(PostPage))