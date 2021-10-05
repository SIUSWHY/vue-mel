import { axiosInstance } from '.'

export const getCards = () => axiosInstance.get('/cards')
