import * as types from "./actionTypes";
import axios from "axios";

export const addOrder = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_ORDER_REQUEST });
  const token = localStorage.getItem("token");
  return axios
    .post(`https://voosh-4em8.onrender.com/add-order`, payload, {
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
    .get(`https://voosh-4em8.onrender.com/get-order`, {
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

export const updateOrder = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_ORDER_REQUEST });
  return axios
    .patch(`https://voosh-4em8.onrender.com/update-order`, payload)
    .then((res) => {
      //   console.log(res.data);
      return dispatch({
        type: types.UPDATE_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_ORDER_FAILURE, payload: err });
    });
};

export const deleteOrder = (id) => (dispatch) => {
  return axios
    .delete(`https://voosh-4em8.onrender.com/delete-order/${id}`)
    .then((res) => {
      console.log("userDelete", res.data);
      return dispatch({
        type: types.DELETE_ORDER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
