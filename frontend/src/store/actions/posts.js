import PostsAPI from '../../api/PostsAPI'

const FETCH_POSTS = 'FETCH_POSTS'

const fetchPosts = posts => ({
    type: FETCH_POSTS,
    posts
})

const handleFetchPosts = () => dispatch => {
    PostsAPI.posts()
        .then(data => dispatch(fetchPosts(data)))
        .catch(err => console.log(`Failed to load posts ${JSON.stringify(err)}`))
}

export {
    FETCH_POSTS,
    handleFetchPosts,
}