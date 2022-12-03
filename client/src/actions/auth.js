import axios from "axios";
import {
  LOGIN,
  SIGNUP,
} from "./types";

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post("/api/auth/login", {email,password}, config);
    dispatch({
      type: LOGIN,
    });
    return response.data.payload;
  } catch (error) {
    console.log(error);

  }
};

export const signup = (firstname, lastname, email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post("/api/auth/signup", {firstname, lastname, email, password}, config);
    dispatch({
      type: SIGNUP,
    });
    return response.data.payload;
  } catch (error) {
    console.log(error);

  }
};
