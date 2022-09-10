import "./Navbar.scss";
import logo from "../../assets/image/SOCILY.png";
import SearchBar from "../SearchBar/SearchBar";
import { FiHome } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
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
  BsSearch,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import { State } from "../../typings/redux-typings/redux-typings";
import { useDispatch } from "react-redux";
import MobileBottomNav from "../MobileBottomNav/MobileBottomNav";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { theme } = useSelector((state: State) => state.theme);
  const dispatch = useDispatch();
  const navlinks = [
    { name: "Home", link: "/home", icon: <FiHome /> },
    { name: "Peoples", link: "/peoples", icon: <BsPeople /> },
    { name: "Videos", link: "/videos", icon: <BsCameraVideo /> },
    { name: "Shop", link: "/BsShop", icon: <BsShop /> },
    { name: "Shop", link: "/BsShop", icon: <BsShop /> },
  ];
  const tabletIcons = [
    { name: "Message", link: "/message", icon: <BsChatRight /> },
    { name: "Video", link: "/videos", icon: <BsCameraVideo /> },
    { name: "Search", link: "/search", icon: <BsSearch /> },
  ];

  // handle dark mode
  const handleDarkMode = () => {
    let payload = "";
    if (theme === "dark") payload = "light";
    else payload = "dark";
    dispatch({ type: "SET_THEME", payload });
  };
  return (
    <>
      <nav className={`navbar navbar-${theme}`}>
        <div className="navbar__logo">
          <img src={logo} alt="" className="logo__image" />
        </div>
        <SearchBar />
        <div className="navbar__icons">
          {navlinks.map((link, key) => (
            <NavIconRound icon={link.icon} key={key} />
          ))}
          <NavIcon icon={<BsBell />} />
          <NavIcon icon={<BsChatRight />} />
          <NavIcon onClick={handleDarkMode} icon={<BsMoon />} />
          <NavIcon icon={<BsPerson />} />
        </div>
        <div className="navbar__tablet-icons">
          {tabletIcons.map((link, key) => (
            <NavIconRound icon={link.icon} key={key} />
          ))}
          <RiMenu3Fill
            onClick={() => setSidebar(true)}
            color={theme === "dark" ? "white" : "#1a2236"}
            size={26}
          />
        </div>
        <MobileBottomNav />
        <Sidebar
          closeAble={true}
          className={sidebar ? `sidebarMobile-active` : "sidebarMobile"}
          setSidebar={setSidebar}
          active={sidebar}
        />
      </nav>
    </>
  );
};

export default Navbar;
