export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const ADD_TO_CART = "ADD_TO_CART"; 
export const INCREMENT_CART_COUNT = "INCREMENT_CART_COUNT";

export const login = (email, password) => (dispatch) => {
  if (email === "admin@gmail.com" && password === "Abcd@1234") {
    dispatch({ type: LOGIN_SUCCESS, payload: { email } });
  } else {
    dispatch({ type: LOGIN_FAILURE, payload: "Invalid email or password" });
  }
};

export const logout = () => {
  return { type: LOGOUT };
};

export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: product };
};
export const incrementCartCount = () => {
  return { type: INCREMENT_CART_COUNT };
};
