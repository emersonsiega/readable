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

const PostContainer = ({post = {}}) => (
    <Post 
        id={post.id}
        title={post.title}
        body={post.body}
        author={post.author}
        timestamp={post.timestamp}
        onVoteDown={handleVoteDown}
        onVoteUp={handleVoteUp}
        voteScore={post.voteScore}
        commentCount={post.commentCount}
        category={post.category}
        voted={''}
    />
)

const mapStateToProps = ({ posts }, {id, match}) => ({
    post: {
        ...posts[match.params.post_id || id]
    }
})

export default withRouter(connect(mapStateToProps)(PostContainer))