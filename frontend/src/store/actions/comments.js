import v4 from 'uuid/v4'

import PostsAPI from '../../api/PostsAPI'
import CommentsAPI from '../../api/CommentsAPI'
import { 
    increaseCommentCounter,
    decreaseCommentCounter,
} from './posts'
import {
    VOTED_DOWN,
    VOTED_UP,
} from '../../types'

const FETCH_COMMENTS_BY_POST = 'FETCH_COMMENTS_BY_POST'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT'
const TOGGLE_EDITING = 'TOGGLE_EDITING'
const VOTE_COMMENT = 'VOTE_COMMENT'

const fetchComments = (comments, post_id) => ({
    type: FETCH_COMMENTS_BY_POST,
    comments,
    post_id
})

const handleFetchComments = post_id => dispatch => {
    PostsAPI.comments(post_id)
        .then(data => dispatch(fetchComments(data, post_id)))
        .catch(err => console.log(`Failed to load comments ${JSON.stringify(err)}`))
}

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

const formatComment = (comment) => ({
    id: v4(),
    timestamp: new Date().getTime(),
    deleted: false,
    voteScore: 0,
    ...comment,
})

const handleAddComment = comment => dispatch => {
    const newComment = formatComment(comment)

    dispatch(addComment(newComment))

    CommentsAPI.newComment(newComment)
        .then(_ => {
            dispatch(increaseCommentCounter(newComment.parentId))
        })
        .catch( err => {
            console.warn('Failed to save comment', err)
            dispatch(deleteComment(newComment.id, newComment.parentId))
        })
}

const deleteComment = (id, parentId) => ({
    type: DELETE_COMMENT,
    id,
    parentId,
})

const handleDeleteComment = (id, parentId) => dispatch => {
    CommentsAPI.deleteComment( id )
        .then( _ => {
            dispatch(deleteComment(id, parentId))
            dispatch(decreaseCommentCounter(parentId))
        } )
        .catch( err => console.warn('Failed to delete comment', err) )
}

const editComment = (parentId, id, body) => ({
    type: EDIT_COMMENT,
    parentId, 
    id, 
    body
})

const handleEditComment = (parentId, id, body, timestamp) => dispatch => {
    CommentsAPI.editComment(id, timestamp, body)
        .then( _ => dispatch(editComment(parentId, id, body)))
        .catch( err => console.log('Failed to edit comment', err))
}

const toggleEditing = (id, parentId) => ({
    type: TOGGLE_EDITING,
    id,
    parentId,
})

const voteComment = (parentId, id, vote) => ({
    type: VOTE_COMMENT,
    parentId,
    id,
    vote,
})

const handleVoteComment = (parentId, id, vote) => dispatch => {
    dispatch(voteComment(parentId, id, vote))

    CommentsAPI.voteComment(id, vote)
        .catch( err => {
            console.log(`Failed to ${vote} comment`, err)
            dispatch(voteComment(parentId, id, vote === VOTED_UP ? VOTED_DOWN : VOTED_UP))
        })
}

export {
    FETCH_COMMENTS_BY_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    TOGGLE_EDITING,
    VOTE_COMMENT,

    handleFetchComments,
    handleAddComment,
    handleDeleteComment,
    handleEditComment,
    toggleEditing,
    handleVoteComment,
}