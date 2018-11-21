import { combineReducers } from 'redux'

import posts from '../reducers/posts'
import comments from '../reducers/comments'
import theme from '../reducers/theme'
import loggedUser from '../reducers/loggedUser'

export default combineReducers({
    posts,
    comments,
    theme,
    loggedUser,
})