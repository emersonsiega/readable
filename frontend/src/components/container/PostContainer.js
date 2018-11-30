import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from'react-router-dom'

import Post from '../presentational/Post'
import {
    handleDeletePost,
    handleVotePost,
} from '../../store/actions/posts'
import {
    VOTED_DOWN,
    VOTED_UP,
} from '../../types'

const PostContainer = ({post = {}, history, onDeletePost, onVotePost}) => {
    const handleDelete = (e) => {
        e.preventDefault()
        onDeletePost(post.id)
        history.push('/')
    }

    const handleVoteUp = (e) => {
        e.preventDefault()
        onVotePost(post.id, VOTED_UP)
    }

    const handleVoteDown = (e) => {
        e.preventDefault()
        onVotePost(post.id, VOTED_DOWN)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        alert('edited')
    }

    return (
        <Post
            id={post.id}
            title={post.title}
            body={post.body}
            author={post.author}
            timestamp={post.timestamp}
            onVoteDown={handleVoteDown}
            onVoteUp={handleVoteUp}
            onDelete={handleDelete}
            onEdit={handleEdit}
            voteScore={post.voteScore}
            commentCount={post.commentCount}
            category={post.category}
            voted={''}
        />
    )
}

const mapStateToProps = ({posts}, {postId}) => ({
    post: posts[postId]
})

const mapDispatchToProps = dispatch => ({
    onDeletePost: (id) => dispatch(handleDeletePost(id)),
    onVotePost: (id, vote) => dispatch(handleVotePost(id, vote))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContainer))