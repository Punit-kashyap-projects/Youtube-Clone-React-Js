import React, { useEffect, useState } from "react";
import "../css/MainContent.css";
import Navbar from "./Navbar";
import Home from "./Home"
import Explore from "./Explore/Explore"
import Loading from "react-fullscreen-loading";
import { Routes, Route } from "react-router-dom";

export default function MainContent() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && <Loading loading background="black" loaderColor="red" />}

      <div id="mainContent">
        <Navbar />
        
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
