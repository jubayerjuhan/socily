import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../typings/redux-typings/redux-typings";
import "./NavIcon.scss";

const NavIconRound = ({ icon }: any) => {
  const { theme } = useSelector((state: State) => state.theme);

  // there is a navIcon selected class on navIcon
  // add the class - navIcon-selected
  return <div className={`navIconRound navIcon-${theme}`}>{icon}</div>;
};

export default NavIconRound;
