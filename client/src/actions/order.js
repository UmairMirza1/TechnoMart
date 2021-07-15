import axios from "axios";
import {
  ADD_PAYMENT,
  ADD_SHIPPING,
  CLEAR_CART,
  CLEAR_ORDER,
  ORDER_CONFIRM,
  ORDER_ERROR,
} from "./types";

export const addShipping = (shipping, cart) => (dispatch) => {
  dispatch({
    type: ADD_SHIPPING,
    payload: {
      shipping,
      cart,
    },
  });
};

export const addPayment = (payment) => (dispatch) => {
  dispatch({
    type: ADD_PAYMENT,
    payload: payment,
  });
};

export const addOrder = (order) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(
      "http://localhost:5000/api/product/order",
      order,
      config
    );
    dispatch({
      type: ORDER_CONFIRM,
    });
    dispatch({
      type: CLEAR_CART,
    });
    dispatch({
      type: CLEAR_ORDER,
    });
    return response.data.payload;
  } catch (error) {
    console.log(error);
    dispatch({
      type: ORDER_ERROR,
    });
  }
};
