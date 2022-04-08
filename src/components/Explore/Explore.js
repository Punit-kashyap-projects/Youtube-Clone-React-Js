import React from "react";
import "../../css/Explore.css";
import ExploreCategory from "./ExploreCategory";
import fire from "../../Pics/fire.png";
import music from "../../Pics/music.svg";
import movies from "../../Pics/movies.svg";
import live from "../../Pics/live.png";
import gaming from "../../Pics/gaming.svg";
import news from "../../Pics/news.svg";
import sports from "../../Pics/sports.svg";
import learning from "../../Pics/learning.svg";
import beauty from "../../Pics/beauty.svg";
import VideoSlip from "./VideoSlip";

export default function Explore() {
  return (
    <div id="exploreCont">
      <div className="flex-wrap">
        <ExploreCategory img={fire} category={"Trending"} />
        <ExploreCategory img={music} category={"Music"} />
        <ExploreCategory img={movies} category={"Movies"} />
        <ExploreCategory img={live} category={"Live"} />
        <ExploreCategory img={gaming} category={"Gaming"} />
        <ExploreCategory img={news} category={"News"} />
        <ExploreCategory img={sports} category={"Sports"} />
        <ExploreCategory img={learning} category={"Learning"} />
        <ExploreCategory img={beauty} category={"Fashion & Beauty"} />
      </div>

      <div id="trendingVideo">
        <h4 className="white-color">Trending Videos</h4>
        <VideoSlip />
        <VideoSlip />
        <VideoSlip />
        <VideoSlip />
        <VideoSlip />
        <VideoSlip />
        <VideoSlip />
        <VideoSlip />
      </div>
    </div>
  );
}
