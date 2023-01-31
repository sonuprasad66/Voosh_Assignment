import * as types from "./actionTypes";

const initialState = {
  order: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ORDER_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        order: payload,
      };

    case types.GET_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        order: [],
      };

    case types.ADD_ORDER_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.ADD_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case types.ADD_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
