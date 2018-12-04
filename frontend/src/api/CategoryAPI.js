import axios from 'axios'

import { getToken } from '../utils/TokenHelper'
import { url } from './Config'

class CategoryAPI {
    static _service = axios.create({
        baseURL: `${url}/`,
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
    }
}

export default CategoryAPI