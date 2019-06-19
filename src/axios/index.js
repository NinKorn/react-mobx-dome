import axios from 'axios'

// 默认URL
axios.defauls.baseURL = ''
// 请求超时
axios.defaults.timeout = 100000
//请求拦截
axios.interceptors.request.use(config => {
    return config
})
//相应拦截
axios.interceptors.response.use(response => {
    // 在这里你可以判断后台返回数据携带的请求码
    if (response.data.retcode === 200 || response.data.retcode === '200') {
        return response.data.data || response.data
    } else {
        // 非200请求抱错
        throw Error(response.data.msg || '服务异常')
    }
})

export default axios