import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup } from 'react-transition-group'

import PostContainer from './PostContainer'
import { Fade } from '../presentational/Components'

const PostsList = ({posts = []}) => (
    <TransitionGroup>
        {posts.map( (post, i) => post.deleted === false && (
            <Fade key={post.id} timeout={500 + i * 1000} time={500 + i*1000}>
                <PostContainer postId={post.id} />
            </Fade>
        ) )}
    </TransitionGroup>
)

const mapStateToProps = ({posts}) => ({
    posts: Object.values(posts)
})

export default connect(mapStateToProps)(PostsList)