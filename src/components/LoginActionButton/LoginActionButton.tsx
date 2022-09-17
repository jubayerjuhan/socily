import React from "react";
import "./LoginActionButton.scss";

const LoginActionButton = ({ handleClick, icon }: any) => {
  return (
    <div className="form-group mb-1">
      <a
        href=""
        onClick={handleClick}
        className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"
      >
        {icon} Sign in with Google
      </a>
    </div>
  );
};

export default LoginActionButton;
