import { 
    FETCH_POSTS,
    INCREASE_COMMENT_COUNTER,
    DECREASE_COMMENT_COUNTER,
    DELETE_POST,
} from '../actions/posts'

const post = (post = {}) => ({
    [post.id] : {
        ...post
    }
})

const posts = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                ...action.posts.reduce((acc, p) => Object.assign({}, post(acc), post(p)))
            }
        case INCREASE_COMMENT_COUNTER:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    commentCount: state[action.id].commentCount + 1
                }
            }
        case DECREASE_COMMENT_COUNTER:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    commentCount: state[action.id].commentCount - 1
                }
            }
        case DELETE_POST:
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    deleted: true
                }
            }
        default:
            return state

    }
}

export default posts