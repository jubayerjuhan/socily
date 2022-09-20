import { Theme } from "../../redux/reducers/themeReducer";

export interface State {
  user: {
    isLoggedin: boolean;
    user: User;
    error: string;
    jwtToken: string;
<<<<<<< HEAD
    otpError: string;
    otpSuccess: boolean;
    otpLoading: boolean;
=======
>>>>>>> 1148e39152abdd89b9b3dee19d92480d056df1f7
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
