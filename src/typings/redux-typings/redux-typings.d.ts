import { Theme } from "../../redux/reducers/themeReducer";

export interface State {
  user: {
    isLoggedin: boolean;
    user: User;
    error: string;
    jwtToken: string;
    otpError: string;
    otpSuccess: boolean;
    otpLoading: boolean;
  };
  theme: Theme;
}

interface User {
  email: string;
  name: string;
  friends: string;
  verified: boolean;
  _id: string;
  createdAt: string;
}
