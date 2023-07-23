import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, ADD_TO_CART,INCREMENT_CART_COUNT } from "./action";

const initialState = {
  isLoggedIn: false,
  error: "",
  user: null,
  cartItems: [], 
  cartCount: 0,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: "",
        user: action.payload.email,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload,
        user: null,
      };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          cartItems: [], 
        };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload], 
      };
      case INCREMENT_CART_COUNT:
      return {
        ...state,
        cartCount: state.cartCount + 1, 
      };
    default:
      return state;
  }
};

export default loginReducer;
