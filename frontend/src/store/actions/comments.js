import PostsAPI from '../../api/PostsAPI'
import CommentsAPI from '../../api/CommentsAPI'

const FETCH_COMMENTS_BY_POST = 'FETCH_COMMENTS_BY_POST'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

const fetchComments = (comments, post_id) => ({
    type: FETCH_COMMENTS_BY_POST,
    comments,
    post_id
})

const handleFetchComments = post_id => dispatch => {
    PostsAPI.comments(post_id)
        .then( data => dispatch(fetchComments(data, post_id)) )
        .catch(err => console.log(`Failed to load comments ${JSON.stringify(err)}`))
}

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

const handleAddComment = comment => dispatch => {
    dispatch(addComment(comment))

    CommentsAPI.newComment(comment)
        .catch( err => dispatch(deleteComment(comment.id)))
}

const deleteComment = id => ({
    type: DELETE_COMMENT,
    id
})

//TODO: handleDeleteComment 

export {
    FETCH_COMMENTS_BY_POST,
    handleFetchComments,
    ADD_COMMENT,
    handleAddComment,
    DELETE_COMMENT,

}