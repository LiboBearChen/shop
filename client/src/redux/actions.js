import axios from "axios";
import { USER_SERVER } from "../components/Config.js";
const Types = {
  LOGIN_USER: "login_user",
  REGISTER_USER: "register_user",
  AUTH_USER: "auth_user",
  LOGOUT_USER: "logout_user",
  ADD_TO_CART_USER: "add_to_cart_user",
  GET_CART_ITEMS_USER: "get_cart_items_user",
  REMOVE_CART_ITEM_USER: "remove_cart_item_user",
  ON_SUCCESS_BUY_USER: "on_success_buy_user",
};

function registerUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

function auth() {
  const request = axios
    .get(`${USER_SERVER}/auth`)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

function addToCart(_id) {
  const request = axios
    .get(`${USER_SERVER}/addToCart?productId=${_id}`)
    .then((response) => response.data);

  return {
    type: ADD_TO_CART_USER,
    payload: request,
  };
}

function getCartItems(cartItems, userCart) {
  const request = axios
    .get(`/api/product/products_by_id?id=${cartItems}&type=array`)
    .then((response) => {
      //add quantity data to product info
      userCart.forEach((cartItem) => {
        response.data.forEach((productDetail, i) => {
          if (cartItem.id === productDetail._id) {
            response.data[i].quantity = cartItem.quantity;
          }
        });
      });
      return response.data;
    });

  return {
    type: GET_CART_ITEMS_USER,
    payload: request,
  };
}

function removeCartItem(id) {
  const request = axios
    .get(`/api/users/removeFromCart?_id=${id}`)
    .then((response) => {
      response.data.cart.forEach((item) => {
        response.data.cartDetail.forEach((k, i) => {
          if (item.id === k._id) {
            response.data.cartDetail[i].quantity = item.quantity;
          }
        });
      });
      return response.data;
    });

  return {
    type: REMOVE_CART_ITEM_USER,
    payload: request,
  };
}

function onSuccessBuy(data) {
  return {
    type: ON_SUCCESS_BUY_USER,
    payload: data,
  };
}

export default {
  registerUser,
  loginUser,
  auth,
  logoutUser,
  addToCart,
  getCartItems,
  removeCartItem,
  onSuccessBuy,
};
