import axios from "axios";
import {
  CLEAR_PRODUCTS,
  CLEAR_PRODUCT,
  CLICK_CATEGORY,
  GET_PRODUCTS,
  GET_PRODUCT,
} from "./types";

export const getCategoryProducts = (category) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/product/category/${category}`);
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
    const response = await axios.get(`/api/product/single/${id}`);
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
export const searchProducts = (term) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/product/search/${term}`);
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data.payload,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CLEAR_PRODUCT,
    });
  }
};

export const highlightProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/product/highlights");
    dispatch({
      type: GET_PRODUCTS,
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
