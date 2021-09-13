import axios from 'axios'

// require
import Vue from 'vue'

export const getCards = () => axios.get('http://127.0.0.1:3000/cards')

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'Bearer ' + Vue.$cookies.get('authToken')
    console.log(config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(null, (error) => {
  // eslint-disable-next-line no-debugger
  // debugger
  alert(error.response?.data?.errors[0])
  return Promise.reject(error)
})
