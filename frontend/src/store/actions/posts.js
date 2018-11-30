import PostsAPI from '../../api/PostsAPI'

import {
    VOTED_UP,
    VOTED_DOWN
} from '../../types'

const FETCH_POSTS = 'FETCH_POSTS'
const INCREASE_COMMENT_COUNTER = 'INCREASE_COMMENT_COUNTER'
const DECREASE_COMMENT_COUNTER = 'DECREASE_COMMENT_COUNTER'
const DELETE_POST = 'DELETE_POST'
const VOTE_POST = 'VOTE_POST'

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

export {
    FETCH_POSTS,
    handleFetchPosts,
    INCREASE_COMMENT_COUNTER,
    increaseCommentCounter,
    DECREASE_COMMENT_COUNTER,
    decreaseCommentCounter,
    DELETE_POST,
    handleDeletePost,
    VOTE_POST,
    handleVotePost,
}