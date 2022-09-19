import { State } from "../../../typings/redux-typings/redux-typings";
import {
  CLEAR_ERROR,
  LOGIN_COMPLETE,
  LOGIN_ERROR,
  LOGIN_PENDING,
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

    default:
      return state;
  }
};
