import axios from 'axios'
import { Toast } from 'antd-mobile'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URI,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

axiosInstance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers = Object.assign({}, config.headers, { Authorization: token })
  }

  return config
})

axiosInstance.interceptors.response.use(
  (res) => {
    if (res.status !== 200 && typeof res.data?.msg === 'string') {
      Toast.show(res.data.msg)
    }

    return res
  },
  (err) => {
    if (typeof err?.response?.data?.msg === 'string') {
      Toast.show(err.response.data.msg)
    }

    return Promise.reject(err)
  }
)

export default axiosInstance
export { axiosInstance as http }
