import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

import PostContainer from './PostContainer'
import { Fade, FullDiv } from '../presentational/Components'
import SortHelper from '../../utils/SortHelper'
import PostNotFound from '../presentational/PostNotFound'

const PostsList = ({posts = []}) => (
    <FullDiv>
        { posts.length === 0 && <PostNotFound/> }
        <TransitionGroup>
            {posts.map( (post, i) => post.deleted === false && 
                <Fade key={post.id} timeout={500} time={500 + i * 10}>
                    <PostContainer postId={post.id} />
                </Fade>
            )}
        </TransitionGroup>
    </FullDiv>
)

const mapStateToProps = ({posts, sort}, {match}) => {
    const sortedPosts = SortHelper( Object.values(posts), sort )
    
    const filteredPosts = sortedPosts.filter( 
        post => !match.params.category || post.category === match.params.category 
    )

    return {
        posts: filteredPosts
    }
}

export default withRouter(connect(mapStateToProps)(PostsList))