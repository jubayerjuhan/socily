import React from "react";
import { useSelector } from "react-redux";
import AboutSection from "../../components/Aboutsection.tsx/AboutSection";
import CreatePost from "../../components/CreatePost/CreatePost";
import MobileBottomNav from "../../components/MobileBottomNav/MobileBottomNav";
import PageComponent from "../../components/PageComponent/PageComponent";
import PostCard from "../../components/PostCard/PostCard";
import UserPageCoverSection from "../../components/UserPageCoverSection/UserPageCoverSection";
import { State } from "../../typings/redux-typings/redux-typings";
import "./User.scss";

const User = () => {
  return <PageComponent component={<UserPage />} />;
};

export default User;

const UserPage = () => {
  const { theme } = useSelector((state: State) => state.theme);
  return (
    <div className={`userPage userPage-${theme}`}>
      <UserPageCoverSection />
      <div className="user-main">
        <AboutSection />
        <div className="user-right">
          <div className="createPost-wrapper-main">
            <CreatePost />
          </div>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
};
