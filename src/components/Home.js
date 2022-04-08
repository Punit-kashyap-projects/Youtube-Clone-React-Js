import React from "react";
import VideoCard from "./VideoCard";
import Category from "./Category";

export default function Home(props) {
  return (
    <>
      <Category />
      <div id="contentDisplay">
        {<VideoCard loading={props.loading} key="1" />}
        {<VideoCard loading={props.loading} key="2" />}
        {<VideoCard loading={props.loading} key="3" />}
        {<VideoCard loading={props.loading} key="4" />}
        {<VideoCard loading={props.loading} key="5" />}
        {<VideoCard loading={props.loading} key="6" />}
        {<VideoCard loading={props.loading} key="7" />}
        {<VideoCard loading={props.loading} key="8" />}
        {<VideoCard loading={props.loading} key="9" />}
        {<VideoCard loading={props.loading} key="10" />}
        {<VideoCard loading={props.loading} key="11" />}
        {<VideoCard loading={props.loading} key="12" />}
        {<VideoCard loading={props.loading} key="13" />}
        {<VideoCard loading={props.loading} key="14" />}
        {<VideoCard loading={props.loading} key="15" />}
        {<VideoCard loading={props.loading} key="16" />}
        {<VideoCard loading={props.loading} key="17" />}
        {<VideoCard loading={props.loading} key="18" />}
        {<VideoCard loading={props.loading} key="19" />}
        {<VideoCard loading={props.loading} key="20" />}
      </div>
    </>
  );
}
