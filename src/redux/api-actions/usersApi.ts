import { AxiosError } from "axios";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";
import { RegisterCredentials } from "../../pages/Register/Register";
import { client } from "../../utils/networkRequest";
import {
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
