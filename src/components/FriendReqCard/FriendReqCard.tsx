import React from "react";
import "./FriendReqCard.scss";

const FriendReqCard = ({ theme }: any) => {
  return (
    <div className="friend__req-card">
      <div className="friend__req-wrapper">
        <img src="https://picsum.photos/400" alt="" />
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
