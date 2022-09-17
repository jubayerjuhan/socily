import React from "react";
import MessageSingle from "../MessageSingle/MessageSingle";
import MessageUser from "../MessageUser/MessageUser";
import WriteMessage from "../WriteMessage/WriteMessage";
import "./ChatBox.scss";

const ChatBox = () => {
  return (
    <>
      <div className="chatbox">
        <div className="chatbox__header">
          <MessageUser />
        </div>
        <div className="all__chat-message">
          <MessageSingle my={true} />
          <MessageSingle my={false} />
          <MessageSingle my={false} />
          <MessageSingle my={true} />
          <MessageSingle my={false} />
          <MessageSingle my={false} />
          <MessageSingle my={true} />
          <MessageSingle my={false} />
          <MessageSingle my={true} />
          <MessageSingle my={false} />
          <MessageSingle my={true} />
        </div>
        <WriteMessage />
      </div>
    </>
  );
};

export default ChatBox;
