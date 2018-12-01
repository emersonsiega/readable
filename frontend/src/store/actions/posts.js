import PostsAPI from '../../api/PostsAPI'
import {
    VOTED_UP,
    VOTED_DOWN
} from '../../types'
import { toPersist } from '../../utils/ObjectFormat'

const FETCH_POSTS = 'FETCH_POSTS'
const INCREASE_COMMENT_COUNTER = 'INCREASE_COMMENT_COUNTER'
const DECREASE_COMMENT_COUNTER = 'DECREASE_COMMENT_COUNTER'
const DELETE_POST = 'DELETE_POST'
const VOTE_POST = 'VOTE_POST'
const ADD_POST = 'ADD_POST'
const EDIT_POST = 'EDIT_POST'

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

const votePost = (id, vote) => ({
    type: VOTE_POST,
    id,
    vote
})

const handleVotePost = (id, vote) => dispatch => {
    dispatch(votePost(id, vote))

    PostsAPI.votePost(id, vote)
        .catch(err => {
            console.log(`Failed to ${vote} post`, err)
            dispatch(votePost(id, vote === VOTED_UP ? VOTED_DOWN : VOTED_UP))
        })
}

const addPost = (post) => ({
    type: ADD_POST,
    post,
})

const handleAddPost = (post) => dispatch => {
    const newPost = toPersist(post)

    return PostsAPI.newPost(newPost)
        .then( data => {
            dispatch(addPost({ ...newPost, ...data })) 
            return newPost.id
        })
        .catch( err => console.log('Failed to add post', err) )
}

const editPost = (id, title, body) => ({
    type: EDIT_POST,
    id,
    title,
    body,
})

const handleEditPost = (id, title, body) => dispatch => {
    PostsAPI.editPost(id, title, body)
        .then(_ => dispatch(editPost(id, title, body)) )
        .catch(err => console.log('Failed to edit post', err))
}

export {
    FETCH_POSTS,
    INCREASE_COMMENT_COUNTER,
    DECREASE_COMMENT_COUNTER,
    DELETE_POST,
    VOTE_POST,
    ADD_POST,
    EDIT_POST,
    
    handleFetchPosts,
    increaseCommentCounter,
    decreaseCommentCounter,
    handleDeletePost,
    handleVotePost,
    handleAddPost,
    handleEditPost,
}