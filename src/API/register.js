import { axiosInstance } from '../API/index'

export const registerUser = (data) => axiosInstance.post('/register', data)
