import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

module.exports = {
  axiosInstance
}
