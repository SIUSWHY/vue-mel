import axios from 'axios'
import Vue from 'vue'
const { VUE_APP_SERVER_URL } = process.env

export const axiosInstance = axios.create({
  baseURL: VUE_APP_SERVER_URL
  // timeout: 1000
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'Bearer ' + Vue.$cookies.get('authToken')
    console.log(config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(null, (error) => {
  // eslint-disable-next-line no-debugger
  // debugger
  alert(error.response?.data?.errors[0])
  return Promise.reject(error)
})
