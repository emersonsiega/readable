import {
    CHANGE_SORT,
} from '../actions/sort'

const sort = (state = {}, action) => {
    switch ( action.type ) {
        case CHANGE_SORT:
            return {
                sortType: action.sortType,
                orderType: action.orderType,
            }
        default:
            return state
    }
}

export default sort