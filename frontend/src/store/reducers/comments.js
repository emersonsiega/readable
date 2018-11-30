import { 
    FETCH_COMMENTS_BY_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    TOGGLE_EDITING,
    VOTE_COMMENT,
} from '../actions/comments'

import { fromArray } from '../../utils/ObjectFormat'
import { VOTED_UP } from '../../types'

const toggleEditing = (state, id, parentId) => ({
    [id]: {
        ...state[parentId][id],
        isBeingEdited: !state[parentId][id].isBeingEdited
    }
})

const comments = (state = {}, action = { comments: [] }) => {
    switch(action.type) {
        case FETCH_COMMENTS_BY_POST:
            if ( action.comments.length !== 0 ) {
                return {
                    ...state,
                    [action.post_id]: {
                        ...fromArray( action.comments )
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
                [action.parentId]: {
                    ...state[action.parentId],
                    [action.id]: {
                        ...state[action.parentId][action.id],
                        body: action.body,
                        isBeingEdited: false
                    }
                }
            }
        case TOGGLE_EDITING:
            let newState
            const isBeingEdited = Object.keys(state[action.parentId]).find( 
                k => k !== action.id && state[action.parentId][k].isBeingEdited === true )

            if ( isBeingEdited !== undefined ) {
                // Toggle the isBeingEdited property from other comment
                // Keep just one comment in "edition mode" per time
                newState = toggleEditing( state, isBeingEdited, action.parentId )
            }

            return {
                ...state,
                [action.parentId]: {
                    ...state[action.parentId],
                    ...newState,
                    ...toggleEditing( state, action.id, action.parentId )
                }
            }
        case VOTE_COMMENT:
            return {
                ...state,
                [action.parentId]: {
                    ...state[action.parentId],
                    [action.id]: {
                        ...state[action.parentId][action.id],
                        voteScore: action.vote === VOTED_UP 
                            ? state[action.parentId][action.id].voteScore + 1
                            : state[action.parentId][action.id].voteScore - 1
                    }
                }
            }
        default:
            return state
    }
}

export default comments