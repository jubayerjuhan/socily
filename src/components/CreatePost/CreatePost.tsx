import React from "react";
import "./CreatePost.scss";
import { BiEdit } from "react-icons/bi";
import { State } from "../../typings/redux-typings/redux-typings";
import { useSelector } from "react-redux";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
const CreatePost = () => {
  const { theme } = useSelector((state: State) => state.theme);

  return (
    <div className={`createPost createPost-${theme}`}>
      <div className="createPost__header">
        <div className="createPost__header-icon">
          <BiEdit />
        </div>
        <p className="createPost__header-text">Create Post</p>
      </div>
      <div className={`createPost__field createPost__field-${theme} `}>
        <img src="https://picsum.photos/400" alt="" />
        <textarea
          name=""
          id=""
          // cols="30"
          // rows="5"
          placeholder="What's On Your Mind"
        />
      </div>
      <div className="createPost__selectMedia">
        <div className="selectMedia__lebel">
          <label htmlFor="mediaSelect" className="btn">
            <MdOutlinePhotoSizeSelectActual />
            <p>Photos/Video</p>
          </label>
          <input
            id="mediaSelect"
            style={{ visibility: "hidden" }}
            type="file"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
