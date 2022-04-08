import React from "react";
import "../../css/Explore.css";
import icon from "../../Pics/ytIcon.jpg";
import { Link } from "react-router-dom";

export default function VideoSlip() {
  const wordLimitor = (text) => {
    if (text.length > 120) {
      return `${text.slice(0, 120)}...`;
    }
    return text;
  };
  return (
    <Link to='/' className="videoSlip">
      <img src={icon} alt="Reload page" />
      <div className="videoSlipInfoCont">
        <p className="videoTitle">
          {wordLimitor(
            "This is the title of the video given by the uplaoder!!  the uplaoder!! the uplaoder!! the uplaoder!! the uplaoder!! the uplaoder!! the uplaoder!! the uplaoder!!uplaoderuplaoder"
          )}
        </p>
        <p className="videoBasicInfo">Channel Name 7M views . 3 hours ago</p>
        <p className="videoSlipDesc">
          {wordLimitor(
            "This is the decription give decription give decription give decription give decription give decription give decription give decription give decription give decription give decription give decription give decription give decription give decription give decription givedecription give decription give"
          )}
        </p>
      </div>
    </Link>
  );
}
