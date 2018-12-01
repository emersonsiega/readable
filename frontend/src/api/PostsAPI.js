import axios from 'axios'

import { getToken } from '../utils/TokenHelper'

class PostsAPI {
    //TODO: buscar o endpoint de algum lugar...
    static _service = axios.create({
        baseURL: "http://localhost:3001/posts",
        timeout: 20000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })

    static posts() {
        const request = this._service.get()

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

    static getPost(postId) {
        const request = this._service.get(`/${postId}`)

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

    static comments(postId) {
        const request = this._service.get(`/${postId}/comments`)

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

    static newPost(post) {
        const request = this._service.post( '', post )

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

    static editPost(postID, title, body) {
        const request = this._service.put( `/${postID}`, { title, body } )

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

    static deletePost(postID) {
        const request = this._service.delete(`/${postID}`)

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

    static votePost(id, vote) {
        const request = this._service.post( `/${id}`, { option: vote } )

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

}

export default PostsAPI