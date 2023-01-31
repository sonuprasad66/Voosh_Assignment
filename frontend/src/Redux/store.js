import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as AuthReducer } from ".././Redux/Auth/reducer";
import { reducer as OrderReducer } from ".././Redux/Order/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  OrderReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
