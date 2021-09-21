import { axiosInstance } from '.'

export const getCards = () => axiosInstance.get('http://127.0.0.1:3000/cards')
