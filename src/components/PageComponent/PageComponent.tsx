import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./PageComponent.scss";

const PageComponent = ({ component }: any) => {
  return (
    <div className="pageComponent">
      <Navbar />
      <div className="pageComponent__wrapper">
        <Sidebar />
        <div className="pageComponent__content">{component}</div>
      </div>
    </div>
  );
};

export default PageComponent;
