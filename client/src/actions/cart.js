import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "./types";

export const addToCart = (cartProduct) => (dispatch, getState) => {
  const found = getState().cart.products.filter(
    (product) => product.product.id === cartProduct.id
  );
  dispatch({
    type:
      getState().cart.products.length === 0 || found.length === 0
        ? ADD_TO_CART
        : UPDATE_CART,
    payload: cartProduct,
  });
};

export const updateQuantity = (product, increase) => (dispatch) => {
  dispatch({
    type: increase ? INCREASE_QUANTITY : DECREASE_QUANTITY,
    payload: product,
  });
};

export const removeFromCart = (product) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: product,
  });
};
