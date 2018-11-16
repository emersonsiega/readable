import { FETCH_POSTS } from '../actions/posts'

const post = (post = {}) => ({
    [post.id] : {
        ...post
    }
})

const posts = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                ...action.posts.reduce((acc, p) => Object.assign({}, post(acc), post(p)))
            }
        default:
            return state

    }
}

export default posts