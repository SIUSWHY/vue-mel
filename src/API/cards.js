import axios from "axios";

export const getCards = () => axios.get("http://127.0.0.1:3000/cards?");
