import { axiosInstance } from '../API/index'

export const sendCard = (data) => axiosInstance.post('/card', data)
