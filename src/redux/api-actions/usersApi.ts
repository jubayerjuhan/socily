import { Dispatch } from "redux";
import { LoginCredentials } from "../../pages/Login/Login";
import { RegisterCredentials } from "../../pages/Register/Register";
import { storeAtLocalstorage } from "../../utils/localstorage_func";
import { client } from "../../utils/networkRequest";
import {
  LOGIN_COMPLETE,
  LOGIN_ERROR,
  LOGIN_PENDING,
  SET_JWTTOKEN,
  SIGN_UP_COMPLETE,
  SIGN_UP_ERROR,
  SIGN_UP_PENDING,
  UserAction,
} from "../reducers/User/usertypings";
import store from "../store";
export type TypedDispatch = typeof store.dispatch;

export const registerUser =
  (cred: RegisterCredentials) => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: SIGN_UP_PENDING, payload: "" });
      const { data } = await client.post("/register", cred);
      dispatch({ type: SIGN_UP_COMPLETE, payload: data.user });
      dispatch({ type: SET_JWTTOKEN, payload: data.jwtToken });
      console.log(data.jwtToken, "data.jwt usersapi.ts");
      storeAtLocalstorage("jwtToken", data.jwtToken);
      return true;
    } catch (error: any) {
      dispatch({
        type: SIGN_UP_ERROR,
        payload: error?.response?.data?.message
          ? error.response.data.message
          : error.message,
      });

      return false;
    }
  };
export const loginUser =
  (cred: LoginCredentials) => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: LOGIN_PENDING, payload: "" });
      const { data } = await client.post("/login", cred);
      dispatch({ type: LOGIN_COMPLETE, payload: data.user });
      dispatch({ type: SET_JWTTOKEN, payload: data.jwtToken });
      console.log(data.jwtToken, "data.jwt usersapi.ts login");
      storeAtLocalstorage("jwtToken", data.jwtToken);
      return true;
    } catch (error: any) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error?.response?.data?.message
          ? error.response.data.message
          : error.message,
      });

      return false;
    }
  };
