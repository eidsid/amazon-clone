import { combineReducers } from "redux";
import Baskt from "./Baskt";
import Products from "./products";
import user from "./user";
export default combineReducers({ Baskt, Products, user });
