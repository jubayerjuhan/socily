import React from "react";
import "./NavIconPrimary.scss";

const NavIcon = ({ icon, size, onClick }: any) => {
  return (
    <div className="navIcon-primary" onClick={onClick}>
      {icon}
    </div>
  );
};

export default NavIcon;
