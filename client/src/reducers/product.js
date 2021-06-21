import {
  CLEAR_PRODUCTS,
  GET_PRODUCTS,
  GET_RANGE,
  SORT_NAME_ASCENDING,
  SORT_NAME_DESCENDING,
  SORT_PRICE_ASCENDING,
  SORT_PRICE_DESCENDING,
} from "../actions/types";

const initialState = {
  products: [],
  isLoaded: false,
  isSorted: false,
  isPriceAscending: false,
  isNameAscending: false,
  isInRange: false,
};

const products = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoaded: true,
        isSorted: false,
      };
    case SORT_PRICE_ASCENDING:
      return {
        ...state,
        products: payload.sort((a, b) => {
          return a.price - b.price;
        }),
        isLoaded: true,
        isSorted: true,
        isPriceAscending: true,
      };
    case SORT_PRICE_DESCENDING:
      return {
        ...state,
        products: payload.sort((a, b) => {
          return b.price - a.price;
        }),
        isLoaded: true,
        isSorted: true,
        isPriceAscending: false,
      };
    case SORT_NAME_ASCENDING:
      return {
        ...state,
        products: payload.sort((a, b) => {
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        }),
        isLoaded: true,
        isSorted: true,
        isNameAscending: true,
      };
    case SORT_NAME_DESCENDING:
      return {
        ...state,
        products: payload.sort((a, b) => {
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          if (y < x) {
            return -1;
          }
          if (y > x) {
            return 1;
          }
          return 0;
        }),
        isLoaded: true,
        isSorted: true,
        isNameAscending: false,
      };
    case GET_RANGE:
      return {
        ...state,
        products: payload.products.filter(
          (product) =>
            product.price >= payload.starting && product.price <= payload.ending
        ),
        isLoaded: true,
        isSorted: true,
        isInRange: true,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: [],
        isLoaded: true,
        isSorted: false,
      };
    default:
      return state;
  }
};

export default products;
