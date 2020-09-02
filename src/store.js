import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import userState from "./reducers/auth";

let token, userId, user;
user = localStorage.getItem("user");
userId = localStorage.getItem("userId");
token = localStorage.getItem("token");

const initialState = {
  user: {
    token: token,
    userId: userId,
    user: user,
    loading: false,
    error: null,
  },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    user: userState,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
