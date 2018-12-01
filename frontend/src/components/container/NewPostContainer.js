import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import NewPost from '../presentational/NewPost'
import { 
    handleAddPost, 
    handleEditPost,
} from '../../store/actions/posts'

const NewPostContainer = ({history, categories = [], post, addPost, editPost}) => {
    const redirect = (id, category) => history.push(`/${category}/${id}`)

    const onSubmit = (post) => {
        if ( post.id === undefined ) {
            addPost( post )
                .then( id => redirect(id, post.category))
        } else {
            editPost(post)
            redirect(post.id, post.category)
        }
    }

    return (
        <NewPost 
            onSubmit={onSubmit}
            categories={categories}
            post={post}
        />
    )
}

const mapStateToProps = ({categories = {}, posts}, {match}) => ({
    categories: Object.keys(categories).map( k => ({ value: k, text: categories[k] }) ) || [],
    post: Object.values(posts).find(p => p.id === match.params.post_id)
})

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(handleAddPost(post)),
    editPost: post => dispatch(handleEditPost(post.id, post.title, post.body))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPostContainer))