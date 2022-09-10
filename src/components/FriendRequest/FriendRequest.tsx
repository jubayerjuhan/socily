import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../typings/redux-typings/redux-typings";
import FriendReqCard from "../FriendReqCard/FriendReqCard";
import "./FriendRequest.scss";

const FriendRequest = () => {
  const { theme } = useSelector((state: State) => state.theme);
  return (
    <div className={`friendRequest-${theme}`}>
      <p className="friend__req-header">Friend Requests</p>
      <div className={`friend__req-list friend__req-list-${theme}`}>
        <FriendReqCard theme={theme} />
        <FriendReqCard theme={theme} />
        <FriendReqCard theme={theme} />
      </div>
    </div>
  );
};

export default FriendRequest;
