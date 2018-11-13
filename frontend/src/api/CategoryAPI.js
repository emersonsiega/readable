import axios from 'axios'

import { getToken } from '../utils/TokenHelper'

class CategoryAPI {
    //TODO: buscar o endpoint de algum lugar...
    static _service = axios.create({
        baseURL: "http://localhost:3001",
        timeout: 20000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })

    static postsByCategory(category) {
        const request = this._service.get(`/${category}/posts`)

        return request
            .then(response => response.data)
            .catch(err => err.response)
    }

    static categories() {
        const request = this._service.get(`/categories`)

        return request
            .then(response => response.data.categories)
            .catch(err => err.response )
    }
}

export default CategoryAPI