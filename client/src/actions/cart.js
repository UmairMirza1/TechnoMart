import { ADD_TO_CART, UPDATE_CART } from "./types";

export const addToCart = (pid) => (dispatch, getState) => {
  const found = getState().cart.products.filter(
    (product) => product.pid === pid
  );
  dispatch({
    type:
      getState().cart.products.length === 0 || found.length === 0
        ? ADD_TO_CART
        : UPDATE_CART,
    payload: pid,
  });
};
