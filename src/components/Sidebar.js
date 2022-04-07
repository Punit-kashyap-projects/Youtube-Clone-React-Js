import React from "react";
import "../css/Sidebar.css";
import hamburger from "../Pics/hamburger.svg";
import home from "../Pics/home.svg";
import library from "../Pics/library.svg";
import explore from "../Pics/explore.svg";
import subscription from "../Pics/subscription.svg"

export default function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <div className="sideBarOption">
          <img src={hamburger} alt="Reload page" style={{height: '30px'}}/>
        </div>

        <div className="sideBarOption hover1">
          <img src={home} alt="Reload page" />
          <p>Home</p>
        </div>

        <div className="sideBarOption hover1">
          <img src={explore} alt="Reload page" />
          <p>Explore</p>
        </div>

        <div className="sideBarOption hover1">
          <img src={hamburger} alt="Reload page" />
          <p>Shorts</p>
        </div>
        <div className="sideBarOption hover1">
          <img src={subscription} alt="Reload page" />
          <p>Subscriptions</p>
        </div>

        <div className="sideBarOption hover1">
          <img src={library} alt="Reload page" />
          <p>Library</p>
        </div>
      </div>
    </>
  );
}
