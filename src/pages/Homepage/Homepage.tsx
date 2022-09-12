import React from "react";
import { useSelector } from "react-redux";
import CreatePost from "../../components/CreatePost/CreatePost";
import FriendRequest from "../../components/FriendRequest/FriendRequest";
import PageComponent from "../../components/PageComponent/PageComponent";
import PostsHomepage from "../../components/PostsHomepage/PostsHomepage";
import { State } from "../../typings/redux-typings/redux-typings";
import "./Homepage.scss";

const Homepage = () => {
  return <PageComponent component={<HomePageComponent />} />;
};

const HomePageComponent = () => {
  const { theme } = useSelector((state: State) => state.theme);
  return (
    <div className={`homepage homepage-${theme}`}>
      <div className="homepage__main">
        <CreatePost />
        <PostsHomepage />
      </div>
      <div
        className={` homepage__right-sidebar-${theme} homepage__right-sidebar`}
      >
        <FriendRequest />
      </div>
    </div>
  );
};

export default Homepage;
