import PostsAPI from '../../api/PostsAPI'

const FETCH_COMMENTS_BY_POST = 'FETCH_COMMENTS_BY_POST'

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

export {
    FETCH_COMMENTS_BY_POST,
    handleFetchComments,
}