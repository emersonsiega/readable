import React from 'react'
import { connect } from 'react-redux'
import {
    TransitionGroup
} from 'react-transition-group'

import Post from '../presentational/Post'
import { Fade } from '../presentational/Components'

const PostsList = ({posts = []}) => (
    <TransitionGroup>
        {posts.map( (post, i) => post.deleted === false && (
            <Fade key={post.id} timeout={500 + i * 1000} time={500 + i*1000}>
                <Post 
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    timestamp={post.timestamp}
                    onVoteDown={() => alert('vote Down')}
                    onVoteUp={() => alert('vote Up')}
                    voteScore={post.voteScore}
                    commentCount={post.commentCount}
                    voted={''}
                />
            </Fade>
        ) )}
    </TransitionGroup>
)

const mapStateToProps = ({posts}) => ({
    posts: Object.values(posts)
})

export default connect(mapStateToProps)(PostsList)