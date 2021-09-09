import { axiosInstance } from '../API/index'

export const authUser = (data) => axiosInstance.post('/login', data)
