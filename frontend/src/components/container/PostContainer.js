import React from 'react'
import { connect } from 'react-redux'

import Post from '../presentational/Post'

const PostContainer = (props) => {
    const {posts = []} = props

    return (
        <div>
            {posts.map( post => post.deleted === false && (
                <Post 
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    timestamp={post.timestamp}
                    onVoteDown={() => alert('vote Down')}
                    onVoteUp={() => alert('vote Up')}
                    voteScore={post.voteScore}
                    commentCount={post.commentCount}
                    voted={''}
                />
            ) )}
        </div>
    )
}

const mapStateToProps = ({posts}) => ({
    posts: Object.values(posts)
})

export default connect(mapStateToProps)(PostContainer)