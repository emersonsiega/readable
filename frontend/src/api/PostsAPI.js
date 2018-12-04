import axios from 'axios'

import { getToken } from '../utils/TokenHelper'
import { url } from './Config'

class PostsAPI {
    static _service = axios.create({
        baseURL: `${url}/posts`,
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