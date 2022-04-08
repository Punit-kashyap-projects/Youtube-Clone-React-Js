import React, { useState } from "react";
import "../css/VideoCard.css";
import youtubeIcon from "../Pics/ytIcon.jpg";
import user from "../Pics/user2.png";
import moreOpt from "../Pics/three_circles.svg";
import CardOptions from "./CardOptions";

export default function VideoCard(props) {
  const [display, setDisplay] = useState(false);

  const toggleOpt = (id) => {
   display ? setDisplay(false) : setDisplay(true);
  //  let element = document.getElementById(id)
  //  if(element.classList.includes('videoCardEffect')){
  //    console.log(true);
  //  }else{
  //    console.log(false);
  //  }
  console.log(id);
  };

  return (
    <>
      {" "}
      <a className="videoCard videoCardEffect" href="#" key={props.key} id={props.key}>
        <span className="hoveringTag">Keep hovering for preview</span>
        <img src={youtubeIcon} alt="Reload page" className="thumbnail" />
        <span className="timeTag">3:09</span>

        <div className="videoInfo">
          <img src={user} alt="Reload page" className="channelDp invert" />
          <p>This is the Description! given by the user</p>
          <button className="toggleOpt" onClick={() => toggleOpt(props.key)}>
            <img
              src={moreOpt}
              alt="Reload page"
              className="channelDp height-20 invert"
            />
          </button>
        </div>

        <div className="videoStats">
          <p className="channelName">Channel Name</p>
          <p className="stats">1k views ° 8 hours ago</p>
        </div>
        {display && <CardOptions />}
      </a>
    </>
  );
}
