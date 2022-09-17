import React from "react";
import "./FriendReqCard.scss";

const FriendReqCard = ({ theme }: any) => {
  return (
    <div className="friend__req-card">
      <div className="friend__req-wrapper">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <div className={`req__card-info-${theme} req__card-info`}>
          <p className="name">Jubayer Juhan</p>
          <p className="location">Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="friend__req-buttons">
        <button className="btn-confirm">Confirm</button>
        <button className="btn-cancel">Cancel</button>
      </div>
    </div>
  );
};

export default FriendReqCard;
