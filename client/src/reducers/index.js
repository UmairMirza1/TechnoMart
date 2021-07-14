import { combineReducers } from "redux";
import product from "./product";
import cart from "./cart";
import order from "./order";

export default combineReducers({ product, cart, order });
