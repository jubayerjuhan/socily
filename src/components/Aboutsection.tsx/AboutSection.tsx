import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useSelector } from "react-redux";
import { State } from "../../typings/redux-typings/redux-typings";
import "./AboutSection.scss";
const AboutSection = () => {
  const { theme } = useSelector((state: State) => state.theme);
  return (
    <div
      className={`card w-100 shadow-xss rounded-xxl border-0 mb-3 aboutSection aboutSection-${theme}`}
    >
      <div className="card-body d-block">
        <h4 className="fw-700 mb-3 font-xsss text-grey-900 title">About</h4>
        <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0 font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus
        </p>
      </div>
      <div className="card-body d-flex pt-0 location">
        <FaLocationArrow />
        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
          Flodia, Austia{" "}
        </h4>
      </div>
    </div>
  );
};

export default AboutSection;
