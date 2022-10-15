import http from './http'

// 封装 get 请求 返回的是一个promise
export function get (url, params) {
    return new Promise((resolve, reject) => {
        http.get(url, { params }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
// 封装 post 请求 返回的是一个promise
export function post (url, params) {
    return new Promise((resolve, reject) => {
        http.post(url, JSON.stringify(params), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export const getWeather = data => get('/weather', data)
export const getYearBooks = data => get('/getYearBooks', data)
export const getPopulation = data => get('/getPopulation', data)
export const getFourData = data => get('/getFourData', data)
