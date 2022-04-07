import React from "react";
import "../css/VideoCard.css";
import youtubeIcon from "../Pics/ytIcon.jpg";
import user from "../Pics/user2.png"

export default function VideoCard() {
  return (
    <>
      {" "}
      <a className="videoCard" href="#">
        <span className="hoveringTag">Keep hovering for preview</span>
        <img src={youtubeIcon} alt="Reload page" className="thumbnail" />
        <span className="timeTag">3:09</span>

        <div className="videoInfo">
          <img src={user} alt="Reload page" className="channelDp invert" />
          <p>This is the Description! given by the user</p>
        </div>

        <div className="videoStats">
          <p className="channelName">Channel Name</p>
          <p className="stats">1k views ° 8 hours ago</p>
        </div>
      </a>
    </>
  );
}
