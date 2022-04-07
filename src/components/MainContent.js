import React from "react";
import "../css/MainContent.css";
import Navbar from "./Navbar";
import Category from "./Category";
import VideoCard from "./VideoCard";

export default function MainContent() {
  return (
    <>
      <div id="mainContent">
        <Navbar />
        <Category />
        <div id='contentDisplay'>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
        </div>
      </div>
    </>
  );
}
