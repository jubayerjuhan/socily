import React from "react";
import "./BigTextInput.scss";

const BigTextInput = ({ icon, ...otherProps }: any) => {
  return (
    <div className="form-group icon-input mb-3 bigtextinput">
      {icon}
      <input
        type="text"
        className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
        placeholder="Your Email Address"
        {...otherProps}
      />
    </div>
  );
};

export default BigTextInput;
