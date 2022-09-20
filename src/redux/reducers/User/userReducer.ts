import { State } from "../../../typings/redux-typings/redux-typings";
import {
  CLEAR_ERROR,
  LOGIN_COMPLETE,
  LOGIN_ERROR,
  LOGIN_PENDING,
<<<<<<< HEAD
  OTP_ERROR,
  OTP_PENDING,
  OTP_VERIFIED,
=======
>>>>>>> 1148e39152abdd89b9b3dee19d92480d056df1f7
  SET_JWTTOKEN,
  SIGN_UP_COMPLETE,
  SIGN_UP_ERROR,
  SIGN_UP_PENDING,
  UserAction,
} from "./usertypings";

export const userReducer = (state = {}, action: UserAction): any => {
  switch (action.type) {
    case SIGN_UP_PENDING:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_COMPLETE:
      return {
        ...state,
        loading: false,
        isLoggedin: true,
        user: action.payload,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
<<<<<<< HEAD

    // login
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_COMPLETE:
      return {
        ...state,
        loading: false,
        isLoggedin: true,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
=======
>>>>>>> 1148e39152abdd89b9b3dee19d92480d056df1f7
    case CLEAR_ERROR:
      return {
        ...state,
        error: undefined,
      };
    case SET_JWTTOKEN:
      return {
        ...state,
        jwtToken: action.payload,
      };

<<<<<<< HEAD
    //     // send otp

    case OTP_PENDING:
      return {
        ...state,
        otpLoading: true,
      };
    case OTP_VERIFIED:
      return {
        ...state,
        otpLoading: false,
        otpSuccess: true,
      };
    case OTP_ERROR:
      return {
        ...state,
        otpLoading: false,
        otpError: action.payload,
      };

=======
>>>>>>> 1148e39152abdd89b9b3dee19d92480d056df1f7
    default:
      return state;
  }
};
