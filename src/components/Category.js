import React from "react";
import "../css/Category.css";
import navigate from "../Pics/navigate.svg";

export default function Category() {
  return (
    <>
      <div id="categoryDisplay">
        <div className="navigateBtn">
          <button>
            <img src={navigate} alt="Reload page" />
          </button>
        </div>

        <div id="categories" className="scroll-none">
          <button className="categoryBtn activeCategory">All</button>
          <button className="categoryBtn">Sports</button>
          <button className="categoryBtn">Sports</button>
          <button className="categoryBtn">Sports</button>
          <button className="categoryBtn">Sports</button>
          <button className="categoryBtn">Sports</button>
          <button className="categoryBtn">Sports</button>
          <button className="categoryBtn">Sports</button>
          <button className="categoryBtn">Sports</button>
          <button className="categoryBtn">Sports</button>
          <button className="categoryBtn">Sports</button>
          <button className="categoryBtn">Sports</button>
          <button className="categoryBtn">Sports</button>
        </div>

        <div className="navigateBtn">
          <button>
            <img src={navigate} alt="Reload page" className="rotate" />
          </button>
        </div>
      </div>
    </>
  );
}
