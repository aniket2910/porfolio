import React from "react";
import "./Intro.css";
import me from "../../img/me.png";
import me1 from "../../img/me1.jpg";
import me3 from "../../img/me3.jpg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Aniket Soalnki</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">WEB DEVELOPER</div>
              <div className="i-title-item">REACT JS</div>
              <div className="i-title-item">MONGO DB</div>
              <div className="i-title-item">NODE JS</div>
              <div className="i-title-item">EXPESS JS</div>
            </div>
          </div>
          <div className="i-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            maxime beatae voluptates perspiciatis repudiandae praesentium,
            reiciendis maiores eveniet recusandae fugit quisquam provident
            deserunt, corporis a, earum eligendi dolores. Inventore, aspernatur.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-right-img">
          <img src={me1} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
