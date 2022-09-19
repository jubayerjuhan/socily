import { Theme } from "../../redux/reducers/themeReducer";

export interface State {
  user: {
    isLoggedin: boolean;
    user: User;
    error: string;
    jwtToken: string;
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
