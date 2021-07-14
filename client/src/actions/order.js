import { ADD_PAYMENT, ADD_SHIPPING } from "./types";

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
