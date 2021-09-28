import { axiosInstance } from '../API/index'

export const sendCard = (data) =>
  axiosInstance.post('/cards/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
