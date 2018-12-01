import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import NewPost from '../presentational/NewPost'
import { 
    handleAddPost, 
} from '../../store/actions/posts'

const NewPostContainer = ({history, categories = [], addPost}) => {
    const redirect = (id, category) => history.push(`/${category}/${id}`)

    const onSubmit = (post) => {
        if ( post.id === undefined ) {
            addPost( post )
                .then( id => redirect(id, post.category))
        } else {
            alert('Update will works soon..')
        }
    }

    return (
        <NewPost 
            onSubmit={onSubmit}
            categories={categories}
        />
    )
}

const mapStateToProps = ({categories = {}}) => ({
    categories: Object.keys(categories).map( k => ({ value: k, text: categories[k] }) ) || []
})

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(handleAddPost(post))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPostContainer))