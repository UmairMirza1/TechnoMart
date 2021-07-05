import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "../actions/types";

const initialState = {
  products: [],
  total: 0,
};

const cart = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [
          ...state.products,
          { product: payload, quantity: 1, newPrice: payload.price },
        ],
        total: state.total + payload.price,
      };
    case UPDATE_CART:
      return {
        ...state,
        products: state.products.map((product) =>
          product.product.id === payload.id
            ? {
                ...product,
                quantity: product.quantity + 1,
                newPrice: product.newPrice + product.product.price,
              }
            : product
        ),
        total: state.total + payload.price,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.product.id === payload.id
            ? {
                ...product,
                quantity: product.quantity + 1,
                newPrice: product.newPrice + product.product.price,
              }
            : product
        ),
        total: state.total + payload.price,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.product.id === payload.id
            ? {
                ...product,
                quantity: product.quantity - 1,
                newPrice: product.newPrice - product.product.price,
              }
            : product
        ),
        total: state.total - payload.price,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.product.id !== payload.product.id
        ),
        total: state.total - payload.newPrice,
      };
    default:
      return state;
  }
};

export default cart;
