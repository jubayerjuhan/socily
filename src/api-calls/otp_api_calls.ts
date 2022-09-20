import { Dispatch } from "react";
import {
  OTP_ERROR,
  OTP_PENDING,
  OTP_VERIFIED,
  SIGN_UP_COMPLETE,
  UserAction,
} from "../redux/reducers/User/usertypings";
import { client } from "../utils/networkRequest";

export const requestNewOtp = async (email: string) => {
  try {
    const { data } = await client.post("/request-otp", { email });
    return data?.success;
  } catch (err) {
    return false;
  }
};

export const verifyOtp =
  (otp: string) => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: OTP_PENDING, payload: "" });
      const { data } = await client.post("/verify-user", { otp });
      if (data.success) {
        dispatch({ type: OTP_VERIFIED, payload: "" });
        dispatch({ type: SIGN_UP_COMPLETE, payload: data.user });
      }
    } catch (error: any) {
      dispatch({
        type: OTP_ERROR,
        payload: error?.response?.data?.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
