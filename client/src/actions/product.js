import axios from "axios";
import { GET_PRODUCTS } from "./types";

export const getProductsAction = () => async (dispatch) => {
  try {
    console.log("in action");
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
