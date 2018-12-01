import { FETCH_CATEGORIES } from '../actions/categories'

const categories = (state = {}, action) => {
    switch( action.type ) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                ...Object.values(action.categories)
                    .map(c => c.path)
                    .reduce((acc = {}, v) => 
                        Object.assign({}, { ...acc }, { [v.toLowerCase()]: v.toUpperCase() })
                        , {})
            }
        default:
            return state
    }
}

export default categories