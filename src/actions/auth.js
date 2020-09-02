import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const clearError = () => {
  return {
    type: actionTypes.AUTH_CLEAR,
  };
};

export const authSuccess = (token, userId, user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
    user: user,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  localStorage.removeItem("user");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authLogout = () => {
  return (dispatch) => {
    let url = "/api/v1/users/logout";
    axios
      .get(url)
      .then(() => {
        dispatch(logout());
      })
      .catch(() => {
        dispatch(authFail("Something went wrong!"));
      });
  };
};

export const auth = ({
  email,
  password,
  passwordConfirm,
  dateOfBirth,
  contact,
  name,
}) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      dateOfBirth: dateOfBirth,
      contact: contact,
      name: name,
    };
    let url = "/api/v1/users/signup";
    axios
      .post(url, authData)
      .then((response) => {
        localStorage.setItem("user", response.data.data.user.name);
        localStorage.setItem("userId", response.data.data.user._id);
        localStorage.setItem("token", response.data.token);

        let token, userId, user;
        user = localStorage.getItem("user");
        userId = localStorage.getItem("userId");
        token = localStorage.getItem("token");

        dispatch(authSuccess(token, userId, user));
      })
      .catch((error) => {
        dispatch(
          authFail(
            error.response.data.message ||
              "Email already exist. Please try with different keyword!"
          )
        );
      });
  };
};

export const authLogin = ({ email, password }) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };
    let url = "/api/v1/users/login";
    axios
      .post(url, authData)
      .then((response) => {
        localStorage.setItem("user", response.data.data.user.name);
        localStorage.setItem("userId", response.data.data.user._id);
        localStorage.setItem("token", response.data.token);

        let token, userId, user;
        user = localStorage.getItem("user");
        userId = localStorage.getItem("userId");
        token = localStorage.getItem("token");

        dispatch(authSuccess(token, userId, user));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data));
      });
  };
};

export const resetPassword = ({
  email,
  password,
  passwordConfirm,
  dateOfBirth,
  contact,
  name,
}) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      dateOfBirth: dateOfBirth,
      contact: contact,
      name: name,
    };
    let url = "/api/v1/users/forgotPassword";
    axios
      .post(url, authData)
      .then((response) => {
        localStorage.setItem("user", response.data.data.user.name);
        localStorage.setItem("userId", response.data.data.user._id);
        localStorage.setItem("token", response.data.token);

        let token, userId, user;
        user = localStorage.getItem("user");
        userId = localStorage.getItem("userId");
        token = localStorage.getItem("token");

        dispatch(authSuccess(token, userId, user));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data));
      });
  };
};
