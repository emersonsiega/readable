import axios from 'axios'

import { getToken } from '../utils/TokenHelper'

class CommentsAPI {
    //TODO: buscar o endpoint de algum lugar...
    static _service = axios.create({
        baseURL: `http://${window.origin}/api/comments`,
        timeout: 20000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
    
    static newComment(comment) {
        const request = this._service.post( '', comment )

        return request
            .then(response => response.data)
    }

    static voteComment(id, vote) {
        const request = this._service.post( `/${id}`, {option: vote} )

        return request
            .then(response => response.data)
    }

    static editComment(commentId, timestamp, body) {
        const request = this._service.put( `/${commentId}`, {timestamp, body} )

        return request
            .then(response => response.data)
    }

    static deleteComment(commentId) {
        const request = this._service.delete(`/${commentId}`)

        return request
            .then(response => response.data)
    }

}

export default CommentsAPI