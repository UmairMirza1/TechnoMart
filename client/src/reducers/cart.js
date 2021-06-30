import { ADD_TO_CART, UPDATE_CART } from "../actions/types";

const initialState = {
  user: null,
  products: [],
  isLoaded: false,
};

const cart = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, { pid: payload, quantity: 1 }],
        isLoaded: true,
      };
    case UPDATE_CART:
      return {
        ...state,
        products: state.products.map((product) =>
          product.pid === payload
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        ),
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default cart;
