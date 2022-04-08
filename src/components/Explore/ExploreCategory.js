import React from "react";
import { Link } from "react-router-dom";
export default function ExploreCategory(props) {
  return (
    <>
      <Link to="/" className="exploreCategory">
          <img src={props.img} alt='Reload page'/>
          <h3>{props.category}</h3>
      </Link>
    </>
  );
}
