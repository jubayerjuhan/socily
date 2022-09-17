import React from "react";
import "./MessageUser.scss";

const MessageUser = () => {
  return (
    <div className="message__user">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-E8-moq_eCC5VGLWGNWU8vsS2n5_Zw3tmD1qgPLG&s"
        alt=""
      />
      <div className="info">
        <p>Jubayer Juhan</p>
        <p className="lastMessage">This Is The Last Message</p>
      </div>
    </div>
  );
};

export default MessageUser;
