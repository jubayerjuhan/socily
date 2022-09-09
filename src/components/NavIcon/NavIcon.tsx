import React from "react";
import "./NavIcon.scss";

const NavIconRound = ({ icon }: any) => {
  const theme = "light";

  // there is a navIcon selected class on navIcon
  // add the class - navIcon-selected
  return <div className={`navIconRound navIcon-${theme}`}>{icon}</div>;
};

export default NavIconRound;
