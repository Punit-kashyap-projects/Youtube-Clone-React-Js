import React from "react";
import Icon from "../Pics/icon.jpg";
import "../css/Navbar.css";
import mic from "../Pics/mic.svg";
import search from "../Pics/search.svg";
import notification from "../Pics/bell.svg"
import square from "../Pics/square.svg"
import user from "../Pics/user.svg"

export default function Navbar() {
  return (
    <div id="navbar">
      <ul>
        <li>
          <img src={Icon} alt="Reload page" id="icon" />
        </li>
        <li>
          <div id="searchCont">

            <div id='searchBar'>
              <input type="text" />
              <button className="darkBtn">
                <img src={search} alt="Reload page" />
              </button>
            </div>

            <button className="darkBtnRound">
              <img src={mic} alt="Reload page" />
            </button>

          </div>
        </li>

        <li>
            <div id='navOptionCont'>
                <button><img src={mic} alt='Reload page'/></button>
                <button><img src={square} alt='Reload page'/></button>
                <button><img src={notification} alt='Reload page'/></button>
                <button><img src={user} alt='Reload page'/></button>
            </div>
        </li>
      </ul>
    </div>
  );
}
