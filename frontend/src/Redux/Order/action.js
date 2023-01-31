import * as types from "./actionTypes";
import axios from "axios";

export const addOrder = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_ORDER_REQUEST });
  const token = localStorage.getItem("token");
  return axios
    .post(`http://localhost:8080/add-order`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      //   console.log(res.data);
      return dispatch({ type: types.ADD_ORDER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.ADD_ORDER_FAILURE, payload: err });
    });
};

export const getOrder = (payload) => (dispatch) => {
  dispatch({ type: types.GET_ORDER_REQUEST });
  const token = localStorage.getItem("token");
  return axios
    .get(`http://localhost:8080/get-order`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      //   console.log(res.data);
      return dispatch({ type: types.GET_ORDER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.GET_ORDER_FAILURE, payload: err });
    });
};
