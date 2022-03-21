import { combineReducers } from "redux";
import Baskt from "./Baskt";
import Products from "./products";
import user from "./user";
import Notifications from "./notification";
export default combineReducers({ Baskt, Products, user, Notifications });
