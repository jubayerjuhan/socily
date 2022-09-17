import React from "react";
import "./MessageSingle.scss";

interface message {
  my: boolean;
}

const Message = ({ my }: message) => {
  return (
    <div className={`${my ? "myMessage" : ""}`}>
      <div className={`message message-${my ? "my" : ""}`}>
        <p>Hello World This is My message</p>
      </div>
    </div>
  );
};

export default Message;
