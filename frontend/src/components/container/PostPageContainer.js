import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { handleFetchComments } from '../../store/actions/comments'
import PostPage from '../presentational/PostPage'
import PostNotFound from '../presentational/PostNotFound'

class PostPageContainer extends Component {
    componentDidMount() {
        const { fetchComments, postId } = this.props
        fetchComments( postId )
    }

    render = () => {
        return this.props.post.id !== undefined 
            ?   <PostPage
                    postId={this.props.post.id}
                    commentCount={this.props.post.commentCount}
                />
            :   <PostNotFound />
    }
}

const mapStateToProps = ({posts}, {match}) => ({
    post: posts[match.params.post_id] || {},
    postId: match.params.post_id
})

const mapDispatchToProps = dispatch => ({
    fetchComments: (postId) => dispatch(handleFetchComments(postId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPageContainer))