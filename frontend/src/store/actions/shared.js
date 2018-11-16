import { handleFetchPosts } from './posts'
import { handleFetchTheme } from './theme'
import { setLoggedUser } from './loggedUser'

const LOGGED_USER = 'John'

const handleFetchData = () => dispatch => {
    Promise.all([
        dispatch(handleFetchPosts()),
        dispatch(handleFetchTheme()),
        dispatch(setLoggedUser(LOGGED_USER))
    ]).catch( (err) => console.log(`Failed to fetch data from server ${err}`) )
}

export {
    handleFetchData,
}