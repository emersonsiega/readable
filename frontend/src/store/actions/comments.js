import PostsAPI from '../../api/PostsAPI'

const FETCH_COMMENTS_BY_POST = 'FETCH_COMMENTS_BY_POST'

const fetchComments = (comments) => ({
    type: FETCH_COMMENTS_BY_POST,
    comments
})

const handleFetchComments = post_id => dispatch => {
    PostsAPI.comments(post_id)
        .them( data => dispatch(fetchComments(data)) )
        .catch(err => console.log(`Failed to load comments ${JSON.stringify(err)}`))
}

export {
    FETCH_COMMENTS_BY_POST,
    handleFetchComments,
}