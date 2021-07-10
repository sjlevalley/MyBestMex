import { createContext, useContext, useEffect, useReducer } from "react";
import * as userApi from "./userApi";

const initialAuthState = {
  // Start with pending set to true because the auth state must be fetched
  // from the server to determine if the user is logged in when the
  // AuthProvider is initialized.
  pending: true,
  error: "",
  user: null,
};

const AuthContext = createContext({
  ...initialAuthState,
  login: async () => { },
  logout: async () => { },
  signup: async () => { },
  isLoggedIn: () => false,
});

// action types
const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGOUT = "LOGOUT";

const authReducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, pending: false, error: action.error };

    case LOGIN_PENDING:
      return { ...state, pending: true, error: "" };

    case LOGIN_SUCCESS:
      return { ...state, user: action.user, pending: false };

    case LOGOUT:
      return { ...state, user: null, pending: false, error: "" };

    default:
      throw new Error(`Invalid auth action type: ${action.type}`);
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    // pending initial state is already true
    userApi
      .get()
      .then(({ result }) => dispatch({ type: LOGIN_SUCCESS, user: result }))
      .catch(() => {
        // An error should mean that the user does not have a session or the
        // session has expired.
        dispatch({ type: LOGOUT });
      });
  }, []);

  const isLoggedIn = () => !!state.user;

  const login = async ({ email, password }) => {
    dispatch({ type: LOGIN_PENDING });
    const { result, error } = await userApi.login({ email, password });
    if (error) {
      return dispatch({ type: LOGIN_ERROR, error });
    }
    dispatch({ type: LOGIN_SUCCESS, user: result });
  };

  const logout = async () => {
    dispatch({ type: LOGOUT });
    await userApi.logout();
  };

  const signup = async ({ email, username, password }) => {
    dispatch({ type: LOGIN_PENDING });
    const { result, error } = await userApi.signup({
      email,
      username,
      password,
    });
    if (error) {
      return dispatch({ type: LOGIN_ERROR, error });
    }
    dispatch({ type: LOGIN_SUCCESS, user: result });
  };

  return (
    <AuthContext.Provider
      value={{ ...state, login, logout, signup, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
