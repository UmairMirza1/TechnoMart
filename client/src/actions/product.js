import axios from "axios";
import { GET_PRODUCTS } from "./types";

export const getProductsAction = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=4"
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
