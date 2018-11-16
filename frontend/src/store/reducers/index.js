import { combineReducers } from 'redux'

import posts from '../reducers/posts'
import theme from '../reducers/theme'
import loggedUser from '../reducers/loggedUser'

export default combineReducers({
    posts,
    theme,
    loggedUser,
})