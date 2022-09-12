import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../typings/redux-typings/redux-typings";
import PostCard from "../PostCard/PostCard";
import "./PostsHomepage.scss";

const PostsHomepage = () => {
  const { theme } = useSelector((state: State) => state.theme);

  return (
    <div className={`post__homepage post__homepage-${theme}`}>
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default PostsHomepage;
