export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_COMPLETE = "LOGIN_COMPLETE";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const OTP_PENDING = "OTP_PENDING";
export const OTP_VERIFIED = "OTP_VERIFIED";
export const OTP_ERROR = "OTP_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const SIGN_UP_PENDING = "SIGN_UP_PENDING";
export const SIGN_UP_COMPLETE = "SIGN_UP_COMPLETE";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SET_JWTTOKEN = "SET_JWTTOKEN";

export type UserAction = userSuccess;

export interface userSuccess {
  type: string;
  payload: any;
}
