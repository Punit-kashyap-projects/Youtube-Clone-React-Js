import React from "react";
import "../css/CardOptions.css";
import queue from "../Pics/queue.svg";
import watch_later from "../Pics/watch_later.svg";
import save_to_playlist from "../Pics/save_to_playlist.svg";
import share from "../Pics/share.svg";
import no_interested from "../Pics/no_interested.svg";
import dont_recommend from "../Pics/dont_recommend.svg";
import report from "../Pics/report.svg";

export default function CardOptions() {
  const response = () => {
    alert("This is  just the prototype created by the Punit kumar kashyap!");
  };

  return (
    <div className="cardOption">
      <div className="subCardOptionGroup bottom-grey">

        <button onClick={response}>
          <img src={queue} alt="Reload page" /> <span>Add to queue</span>
        </button>

        <button onClick={response}>
          <img src={watch_later} alt="Reload page" />{" "}
          <span>Save to Watch later</span>
        </button>

        <button onClick={response}>
          <img src={save_to_playlist} alt="Reload page" />{" "}
          <span>Save to playlist</span>
        </button>

        <button onClick={response}>
          <img src={share} alt="Reload page" /> <span>Share</span>
        </button>
        
      </div>

      <div className="subCardOptionGroup">

        <button onClick={response}>
          <img src={no_interested} alt="Reload page" />
          <span>Not interested</span>
        </button>

        <button onClick={response}>
          <img src={dont_recommend} alt="Reload page" />
          <span>Don't recommend channel</span>
        </button>

        <button onClick={response}>
          <img src={report} alt="Reload page" />
          <span>Report</span>
        </button>

      </div>
    </div>
  );
}
