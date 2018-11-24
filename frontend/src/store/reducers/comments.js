import { FETCH_COMMENTS_BY_POST } from '../actions/comments'

const comment = (comment = {}) => ({
    [comment.id]: {
        ...comment
    }
})

const comments = (state = {}, action = { comments: [] }) => {
    switch(action.type) {
        case FETCH_COMMENTS_BY_POST:
            if ( action.comments.length !== 0 ) {
                return {
                    ...state,
                    [action.post_id]: {
                        ...action.comments.reduce((acc, c) => Object.assign({}, comment(acc), comment(c)))
                    }
                }    
            }

            return state
        default:
            return state
    }
}

export default comments