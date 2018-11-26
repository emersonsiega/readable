import { 
    FETCH_COMMENTS_BY_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
} from '../actions/comments'

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
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: {
                    ...state[action.comment.parentId],
                    [action.comment.id]: {
                        ...action.comment
                    }
                }
            }
        case DELETE_COMMENT:
            delete state[action.parentId][action.id]
            
            return {
                ...state
            }
        default:
            return state
    }
}

export default comments