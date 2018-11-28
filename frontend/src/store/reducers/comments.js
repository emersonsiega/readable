import { 
    FETCH_COMMENTS_BY_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    TOGGLE_EDITING,
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
            return {
                ...state,
                [action.parentId]: {
                    ...state[action.parentId],
                    [action.id]: {
                        ...state[action.parentId][action.id],
                        deleted: true
                    }
                }
            }
        case EDIT_COMMENT:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    body: action.body,
                    timestamp: action.timestamp,
                    isBeingEdited: undefined
                }
            }
        case TOGGLE_EDITING:
            return {
                ...state,
                [action.parentId]: {
                    ...state[action.parentId],
                    [action.id]: {
                        ...state[action.parentId][action.id],
                        isBeingEdited: state[action.parentId][action.id].isBeingEdited !== true
                    }
                }
            }
        default:
            return state
    }
}

export default comments