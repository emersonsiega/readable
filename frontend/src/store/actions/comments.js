import v4 from 'uuid/v4'

import PostsAPI from '../../api/PostsAPI'
import CommentsAPI from '../../api/CommentsAPI'
import { 
    increaseCommentCounter,
    decreaseCommentCounter,
} from './posts'

const FETCH_COMMENTS_BY_POST = 'FETCH_COMMENTS_BY_POST'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT'
const TOGGLE_EDITING = 'TOGGLE_EDITING'

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

const editComment = (id, timestamp, body) => ({
    type: EDIT_COMMENT,
    id,
    timestamp,
    body,
})

const handleEditComment = (id, body) => dispatch => {
    const timestamp = new Date().getTime()
    CommentsAPI.editComment(id, timestamp, body)
        .then( _ => dispatch(editComment(id, timestamp, body)))
        .catch( err => console.log('Failed to edit comment', err))
}

const toggleEditing = (id, parentId) => ({
    type: TOGGLE_EDITING,
    id,
    parentId,
})

export {
    FETCH_COMMENTS_BY_POST,
    handleFetchComments,
    ADD_COMMENT,
    handleAddComment,
    DELETE_COMMENT,
    handleDeleteComment,
    EDIT_COMMENT,
    handleEditComment,
    TOGGLE_EDITING,
    toggleEditing,
}