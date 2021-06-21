import {
  SORT_PRICE_ASCENDING,
  SORT_PRICE_DESCENDING,
  SORT_NAME_ASCENDING,
  SORT_NAME_DESCENDING,
  GET_RANGE,
} from "./types";

export const sortPriceAction = (products, ascending) => (dispatch) => {
  if (ascending) {
    dispatch({
      type: SORT_PRICE_ASCENDING,
      payload: products,
    });
  } else {
    dispatch({
      type: SORT_PRICE_DESCENDING,
      payload: products,
    });
  }
};

export const sortNameAction = (products, ascending) => (dispatch) => {
  if (ascending) {
    dispatch({
      type: SORT_NAME_ASCENDING,
      payload: products,
    });
  } else {
    dispatch({
      type: SORT_NAME_DESCENDING,
      payload: products,
    });
  }
};

export const getRangeAction = (products, starting, ending) => (dispatch) => {
  dispatch({
    type: GET_RANGE,
    payload: { products, starting, ending },
  });
};
