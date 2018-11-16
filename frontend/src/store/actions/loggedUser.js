const SET_LOGGED_USER = 'SET_LOGGED_USER'

const setLoggedUser = ( user ) => ({
    type: SET_LOGGED_USER, 
    user
})

export {
    SET_LOGGED_USER,
    setLoggedUser,
}