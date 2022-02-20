import axios from "axios";

export const api = "https://fakestoreapi.com/products";

export const getProducts = () => axios.get(api);
export const getProductsCat = () => axios.get(`${api}/`);
