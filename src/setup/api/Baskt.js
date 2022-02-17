import axios from "axios";
const apiUrl = "https://fakestoreapi.com/products";
export const getItems = () => axios.get(apiUrl);
export const createItem = (item) => axios.post(apiUrl, item);
export const deleteItem = (id) => axios.delete(`${apiUrl}${id}`);
