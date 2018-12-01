import { handleFetchPosts } from './posts'
import { handleFetchTheme } from './theme'
import { setLoggedUser } from './loggedUser'
import { handleFetchCategories } from './categories'
import { changeSort } from './sort'

import {
    SortType, 
    OrderType
} from '../../types'

const LOGGED_USER = 'John'

const handleFetchData = () => dispatch => {
    Promise.all([
        dispatch(handleFetchPosts()),
        dispatch(handleFetchTheme()),
        dispatch(handleFetchCategories()),
        dispatch(setLoggedUser(LOGGED_USER)),
        dispatch(changeSort(SortType.timestamp, OrderType.desc))
    ]).catch( (err) => console.log('Failed to fetch data from server', err) )
}

export {
    handleFetchData,
}