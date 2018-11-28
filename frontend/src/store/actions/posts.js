import PostsAPI from '../../api/PostsAPI'

const FETCH_POSTS = 'FETCH_POSTS'
const INCREASE_COMMENT_COUNTER = 'INCREASE_COMMENT_COUNTER'
const DECREASE_COMMENT_COUNTER = 'DECREASE_COMMENT_COUNTER'
const DELETE_POST = 'DELETE_POST'

const fetchPosts = posts => ({
    type: FETCH_POSTS,
    posts
})

const handleFetchPosts = () => dispatch =>
    PostsAPI.posts()
        .then(data => dispatch(fetchPosts(data)))
        .catch(err => console.log('Failed to load posts', err))

const increaseCommentCounter = id => ({
    type: INCREASE_COMMENT_COUNTER,
    id,
})

const decreaseCommentCounter = id => ({
    type: DECREASE_COMMENT_COUNTER,
    id,
})

const deletePost = id => ({
    type: DELETE_POST,
    id,
})

const handleDeletePost = (id) => dispatch =>
    PostsAPI.deletePost(id)
        .then(_ => dispatch(deletePost(id)))
        .catch( err =>  console.log('Failed to delete post', err) )

export {
    FETCH_POSTS,
    handleFetchPosts,
    INCREASE_COMMENT_COUNTER,
    increaseCommentCounter,
    DECREASE_COMMENT_COUNTER,
    decreaseCommentCounter,
    DELETE_POST,
    handleDeletePost,
}