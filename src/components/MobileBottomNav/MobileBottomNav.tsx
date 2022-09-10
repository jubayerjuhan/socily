import React from "react";
import "./MobileBottomNav.scss";
import { FiHome } from "react-icons/fi";
import { BsPeople, BsCameraVideo, BsShop } from "react-icons/bs";
const MobileBottomNav = () => {
  const navlinks = [
    { name: "Home", link: "/home", icon: <FiHome /> },
    { name: "Peoples", link: "/peoples", icon: <BsPeople /> },
    { name: "Videos", link: "/videos", icon: <BsCameraVideo /> },
    { name: "Shop", link: "/BsShop", icon: <BsShop /> },
    { name: "Shop", link: "/BsShop", icon: <BsShop /> },
  ];
  return (
    <div className="mobile__bottom-nav">
      {navlinks.map((nav) => (
        <>{nav.icon}</>
      ))}
    </div>
  );
};

export default MobileBottomNav;
