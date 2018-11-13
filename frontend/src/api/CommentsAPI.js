import axios from 'axios'

import { getToken } from '../utils/TokenHelper'

class CommentsAPI {
    //TODO: buscar o endpoint de algum lugar...
    static _service = axios.create({
        baseURL: "http://localhost:3001/comments",
        timeout: 20000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
    
    static newComment(comment) {
        const request = this._service.post( '', JSON.stringify({ comment }) )

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

    static voteComment(id, vote) {
        const request = this._service.post( `/${id}`, JSON.stringify({ vote }) )

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

    static editComment(commentId, timestamp, body) {
        const request = this._service.put( `/${commentId}`, JSON.stringify({ timestamp, body }) )

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

    static deleteComment(commentId) {
        const request = this._service.delete(`/${commentId}`)

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

}

export default CommentsAPI