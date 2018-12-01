import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

import PostContainer from './PostContainer'
import { Fade } from '../presentational/Components'

const PostsList = ({posts = []}) => (
    <TransitionGroup>
        {posts.map( (post, i) => post.deleted === false && (
            <Fade key={post.id} timeout={500} time={500 + i * 10}>
                <PostContainer postId={post.id} />
            </Fade>
        ) )}
    </TransitionGroup>
)

const mapStateToProps = ({posts}, {match}) => ({
    posts: Object.values(posts).filter(post => !match.params.category || post.category === match.params.category)
})

export default withRouter(connect(mapStateToProps)(PostsList))