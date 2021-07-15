import { ADD_PAYMENT, ADD_SHIPPING, CLEAR_ORDER } from "../actions/types";

const initialState = {
  cart: {},
  shipping: {},
  payment: {},
  fee: 0,
  total: 0,
};

const order = (state = initialState, action) => {
  const { type, payload } = action;

  const checkFee = (total) => {
    if (
      payload.shipping.city.toLowerCase() === "stockholm" &&
      payload.shipping.country.toLowerCase() === "sweden"
    ) {
      return total ? payload.cart.total : 0;
    } else {
      state.fee = 10;
      return total ? payload.cart.total + state.fee : 10;
    }
  };

  switch (type) {
    case ADD_SHIPPING:
      return {
        ...state,
        cart: payload.cart.products,
        shipping: payload.shipping,
        fee: checkFee(false),
        total: checkFee(true),
      };
    case ADD_PAYMENT:
      return {
        ...state,
        payment: payload,
      };
    case CLEAR_ORDER:
      return initialState;
    default:
      return state;
  }
};

export default order;
