import axios from "axios";
const apiUrl = "https://api.jsonbin.io/b/620162014ce71361b8d201a0/1";
export const getItems = () => axios.get(apiUrl);
export const createItem = (item) => axios.post(apiUrl, item);
export const deleteItem = (id) => axios.delete(`${apiUrl}${id}`);
