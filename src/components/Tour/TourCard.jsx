import { useState } from "react";
import "./Tour.css";

export default function TourCard() {
  const [engState, setEngState] = useState(false);
  const [manState, setManState] = useState(false);
  const [freState, setFreState] = useState(false);

  const handleEnglish = (evt) => {
    setEngState(!engState);
    console.log("eng", engState);
  };

  const handleMandarin = (evt) => {
    setManState(!manState);
    console.log("man", manState);
  };

  const handleFrench = (evt) => {
    setFreState(!freState);
    console.log("fre", freState);
  };

  return (
    <div className="tourCard">
      <img
        className="tourCard_img"
        src="https://picsum.photos/500/400"
        alt="tour-card-img"
      />
      <div className="tourCard-header">
        <h3>Singapore History Gallery</h3>
      </div>

      <div className={engState ? "tourCard-lang-expand" : "tourCard-lang"}>
        <div className="lang-n-schedule">
          <p>English</p>
          {engState && (
            <div className="tour-lang-schedule">
              <br />
              <span>Mon-Fri (11am & 2pm)</span>
              <br />
              <span>Sat-Sun (11am, 2pm, and 3pm)</span>
            </div>
          )}
        </div>
        <button className="tourbtn" onClick={handleEnglish}>
          {engState ? "-" : "+"}
        </button>
      </div>

      <div className={manState ? "tourCard-lang-expand" : "tourCard-lang"}>
        <div className="lang-n-schedule">
          <p>Mandarin</p>
          {manState && (
            <div className="tour-lang-schedule">
              <br />
              <span>Mon-Fri (2pm)</span>
              <br />
              <span>Sat-Sun (11am)</span>
            </div>
          )}
        </div>
        <button className="tourbtn" onClick={handleMandarin}>
          {manState ? "-" : "+"}
        </button>
      </div>

      <div className={freState ? "tourCard-lang-expand" : "tourCard-lang"}>
        <div className="lang-n-schedule">
          <p>French</p>
          {freState && (
            <div className="tour-lang-schedule">
              <br />
              <span>Wed & Fri (2pm)</span>
              <br />
              <span>Sat-Sun (2pm)</span>
            </div>
          )}
        </div>
        <button className="tourbtn" onClick={handleFrench}>
          {freState ? "-" : "+"}
        </button>
      </div>
    </div>
  );
}
