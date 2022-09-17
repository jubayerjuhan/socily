import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./WriteMessage.scss";

const WriteMessage = () => {
  return (
    <div className="writeMessage">
      <input type="text" name="" id="" placeholder="Write Message..." />
      <div>
        <BsFillArrowRightCircleFill />
      </div>
    </div>
  );
};

export default WriteMessage;
