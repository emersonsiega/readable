import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from'react-router-dom'

import Post from '../presentational/Post'

const handleVoteUp = (e) => {
    e.preventDefault()
    alert('vote Up')
}

const handleVoteDown = (e) => {
    e.preventDefault()
    alert('vote Down')
}

const handleDelete = (e) => {
    e.preventDefault()
    alert('deleted')
}

const handleEdit = (e) => {
    e.preventDefault()
    alert('edited')
}

const PostContainer = ({post = {}}) => (
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

const mapStateToProps = ({posts}, {postId}) => ({
    post: posts[postId]
})

export default withRouter(connect(mapStateToProps)(PostContainer))