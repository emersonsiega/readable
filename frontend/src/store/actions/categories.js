import CategoryAPI from '../../api/CategoryAPI'

const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

const fetchCategories = (categories) => ({
    type: FETCH_CATEGORIES,
    categories,
})

const handleFetchCategories = () => dispatch => {
    CategoryAPI.categories()
        .then(data => dispatch(fetchCategories(data)))
}

export {
    FETCH_CATEGORIES,
    handleFetchCategories,
}