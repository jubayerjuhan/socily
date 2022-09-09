import React from "react";
import "./Navbar.scss";
import logo from "../../assets/image/SOCILY.png";
import SearchBar from "../SearchBar/SearchBar";
import { FiHome } from "react-icons/fi";
import NavIconRound from "../NavIcon/NavIcon";
import NavIcon from "../NavIconPrimary/NavIcon";
import {
  BsPerson,
  BsPeople,
  BsBell,
  BsCameraVideo,
  BsShop,
  BsChatRight,
  BsMoon,
} from "react-icons/bs";

const Navbar = () => {
  const navlinks = [
    { name: "Home", link: "/home", icon: <FiHome /> },
    { name: "Peoples", link: "/peoples", icon: <BsPeople /> },
    { name: "Videos", link: "/videos", icon: <BsCameraVideo /> },
    { name: "Shop", link: "/BsShop", icon: <BsShop /> },
    { name: "Shop", link: "/BsShop", icon: <BsShop /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="" className="logo__image" />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="navbar__icons">
        {navlinks.map((link, key) => (
          <NavIconRound icon={link.icon} key={key} />
        ))}
        <NavIcon icon={<BsBell />} />
        <NavIcon icon={<BsChatRight />} />
        <NavIcon icon={<BsMoon />} />
        <NavIcon icon={<BsPerson />} />
      </div>
    </nav>
  );
};

export default Navbar;
