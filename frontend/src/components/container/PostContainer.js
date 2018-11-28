import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from'react-router-dom'

import Post from '../presentational/Post'
import { handleDeletePost } from '../../store/actions/posts'

const PostContainer = ({post = {}, history, onDeletePost}) => {
    const handleDelete = (e) => {
        e.preventDefault()
        onDeletePost(post.id)
        history.push('/')
    }

    const handleVoteUp = (e) => {
        e.preventDefault()
        alert('vote Up')
    }

    const handleVoteDown = (e) => {
        e.preventDefault()
        alert('vote Down')
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
    onDeletePost: (id) => dispatch(handleDeletePost(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContainer))