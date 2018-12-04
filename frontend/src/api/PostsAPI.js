import axios from 'axios'

import { getToken } from '../utils/TokenHelper'

class PostsAPI {
    //TODO: buscar o endpoint de algum lugar...
    static _service = axios.create({
        baseURL: `http://${window.origin}/api/posts`,
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
    }

    static getPost(postId) {
        const request = this._service.get(`/${postId}`)

        return request
            .then(response => response.data)
    }

    static comments(postId) {
        const request = this._service.get(`/${postId}/comments`)

        return request
            .then(response => response.data)
    }

    static newPost(post) {
        const request = this._service.post( '', post )

        return request
            .then(response => response.data)
    }

    static editPost(postID, title, body) {
        const request = this._service.put( `/${postID}`, { title, body } )

        return request
            .then(response => response.data)
    }

    static deletePost(postID) {
        const request = this._service.delete(`/${postID}`)

        return request
            .then(response => response.data)
    }

    static votePost(id, vote) {
        const request = this._service.post( `/${id}`, { option: vote } )

        return request
            .then(response => response.data)
    }

}

export default PostsAPI