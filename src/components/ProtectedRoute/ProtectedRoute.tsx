import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { State } from "../../typings/redux-typings/redux-typings";
const ProtectedRoute = ({ children }: any) => {
  const user = useSelector((state: State) => state.user);
  console.log(user, "user");

  if (!user.isLoggedin) return <Navigate to={"/login"} />;
  if (!user.user.verified) return <Navigate to={"/enter-otp"} />;
  return children;
};

export default ProtectedRoute;
