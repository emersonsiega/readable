import { FETCH_COMMENTS_BY_POST } from '../actions/comments'

const comment = (comment = {}) => ({
    [comment.id]: {
        ...comment
    }
})

const comments = (state = {}, action) => {
    switch(action.type) {
        case FETCH_COMMENTS_BY_POST:
            return {
                ...state,
                ...action.comments.reduce((acc, c) => Object.assign({}, comment(acc), comment(c)))
            }
        default:
            return state
    }
}

export default comments