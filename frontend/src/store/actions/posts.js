import PostsAPI from '../../api/PostsAPI'

const FETCH_POSTS = 'FETCH_POSTS'
const INCREASE_COMMENT_COUNTER = 'INCREASE_COMMENT_COUNTER'

const fetchPosts = posts => ({
    type: FETCH_POSTS,
    posts
})

const handleFetchPosts = () => dispatch => {
    PostsAPI.posts()
        .then(data => dispatch(fetchPosts(data)))
        .catch(err => console.log(`Failed to load posts ${JSON.stringify(err)}`))
}

const increaseCommentCounter = id => ({
    type: INCREASE_COMMENT_COUNTER,
    id,
})

export {
    FETCH_POSTS,
    handleFetchPosts,
    INCREASE_COMMENT_COUNTER,
    increaseCommentCounter,
}