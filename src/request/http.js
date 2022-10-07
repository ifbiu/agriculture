import axios from 'axios'
import config from './config'
import { isJSON } from '@/utils'

const instance = axios.create({
    baseURL: config.baseURL
})

instance.defaults.transformRequest = [
    function (data) {
        return data
    }
]
// 添加响应拦截器
instance.defaults.transformResponse = [
    function (data) {
        if (isJSON(data)) {
            return JSON.parse(data)
        }
        return data
    }
]

export default instance