import axios from "axios";
import {
  CLEAR_PRODUCTS,
  CLEAR_PRODUCT,
  CLICK_CATEGORY,
  GET_PRODUCTS,
  GET_PRODUCT,
} from "./types";

export const getProductsAction = (limit) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTechnoMartProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/api/product/all");
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data.payload,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryProducts = (category) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/product/${category}`
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data.payload,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CLEAR_PRODUCTS,
    });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/product/single/${id}`
    );
    dispatch({
      type: GET_PRODUCT,
      payload: response.data.payload,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CLEAR_PRODUCT,
    });
  }
};

export const clickCategory = () => (dispatch) => {
  dispatch({
    type: CLICK_CATEGORY,
  });
};
