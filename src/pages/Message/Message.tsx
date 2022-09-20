import React from "react";
import ChatBox from "../../components/ChatBox/ChatBox";
import MessageUser from "../../components/MessageUser/MessageUser";
import "./Message.scss";
const Message = () => {
  return (
    <div className="messages">
      <div className="message-main">
        <div className="users">
          <MessageUser />
          <MessageUser />
          <MessageUser />
          <MessageUser />
          <MessageUser />
          <MessageUser />
          <MessageUser />
          <MessageUser />
          <MessageUser />
          <MessageUser />
          <MessageUser />
          <MessageUser />
          <MessageUser />
        </div>
        <ChatBox />
      </div>
    </div>
  );
};

export default Message;
