import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineThunderbolt } from "react-icons/ai";
import { State } from "../../typings/redux-typings/redux-typings";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./Sidebar.scss";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
const sidebar = [
  {
    name: "News Feed",
    link: "/news-feed",
    icon: <IoNewspaperOutline />,
    color: "#0464D1",
  },
  {
    name: "Peoples",
    link: "/peoples",
    icon: <BsPeople />,
    color: "#FB5519",
  },
  {
    name: "Stories",
    link: "/stories",
    icon: <AiOutlineThunderbolt />,
    color: "#129e53",
  },
  {
    name: "Profile",
    link: "/profile",
    icon: <HiOutlineUserCircle />,
    color: "#0a3c34",
  },
];
const account = [
  {
    name: "Account Settings",
    link: "/account-settings",
    icon: <AiOutlineSetting />,
    color: "#0464D1",
  },
];

const Sidebar = ({ className, active, setSidebar }: any) => {
  const { theme } = useSelector((state: State) => state.theme);
  return (
    <div className={`sidebar sidebar-${theme} ${className}`}>
      {active && (
        <div className="close__sidebar">
          <FaTimes onClick={() => setSidebar(!active)} />
        </div>
      )}
      <div className={`sidebar__feeds sidebar__feeds-${theme}`}>
        <p className="feed__header">News Feeds</p>
        <div className="feed__links">
          {sidebar.map((bar, key) => (
            <div className="feed__link" key={key}>
              <div
                className="feed__link-icon"
                style={{
                  backgroundColor: bar.color,
                }}
              >
                {bar.icon}
              </div>
              <p className={`feed__link-text feed__link-text-${theme}`}>
                {bar.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={`sidebar__feeds sidebar__feeds-${theme}`}>
        <p className="feed__header">News Feeds</p>
        <div className="feed__links">
          {account.map((bar, key) => (
            <div className="feed__link" key={key}>
              <div className="feed__link-icon-dark">{bar.icon}</div>
              <p className={`feed__link-text feed__link-text-${theme}`}>
                {bar.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
