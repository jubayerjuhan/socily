import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../typings/redux-typings/redux-typings";
import "./PostCard.scss";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
// import { BiComment } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";

const PostCard = () => {
  const { theme } = useSelector((state: State) => state.theme);
  const [liked, setLiked] = useState(false);

  return (
    <div className={`postCard postCard-${theme}`}>
      <div className="postCard__user">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4w-s6C06bufKFXvrhHyFar7L5uMiURvyLKIgspsf&s"
          alt=""
          className="postCard__user-image"
        />
        <div className="postcard__userInfo">
          <p>Surfiya Zakir</p>
          <span>22 min ago</span>
        </div>
      </div>
      <p className="postCard__caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
        dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
        mollis pharetra. Proin blandit ac massa sed rhoncus.
      </p>
      <img
        src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=2000"
        alt=""
        className="postCard__image"
      />
      <div className="postCard__action">
        <div className={`likeButton likeButton-${liked}`}>
          <HiOutlineHeart
            className={`${!liked ? "active" : "disable"}`}
            onClick={() => setLiked(!liked)}
          />
          <HiHeart
            className={`${liked ? "active" : "disable"}`}
            onClick={() => setLiked(!liked)}
          />

          <p className="action__count">203 Likes</p>
        </div>
        <div className={`likeButton likeButton-${liked}`}>
          <FaRegComment size={25} />
          <p className="action__count">203 Comments</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
