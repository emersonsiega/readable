import { 
    FETCH_THEME, 
    TOGGLE_THEME
} from '../actions/theme'

const theme = (state = null, action) => {
    switch(action.type) {
        case FETCH_THEME:
        case TOGGLE_THEME: {
            return action.theme
        }
        default:
            return state
    }
} 

export default theme