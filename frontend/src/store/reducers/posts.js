import { 
    FETCH_POSTS,
    INCREASE_COMMENT_COUNTER,
    DECREASE_COMMENT_COUNTER,
    DELETE_POST,
    VOTE_POST,
    ADD_POST,
} from '../actions/posts'

import { VOTED_UP } from '../../types'

import { fromArray } from '../../utils/ObjectFormat'

const posts = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                ...fromArray( action.posts )
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
        case VOTE_POST:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    voteScore: action.vote === VOTED_UP 
                        ? state[action.id].voteScore + 1 
                        : state[action.id].voteScore - 1
                }
            }
        case ADD_POST:
            return {
                ...state,
                [action.post.id]: {
                    ...action.post
                }
            }
        default:
            return state

    }
}

export default posts