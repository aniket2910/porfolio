import React from "react";
import "./About.css";
import me from "../../img/me2.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          voluptates corporis eaque repellendus sint.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque,
          saepe facere explicabo quia neque doloribus dolore magni sunt atque
          vel quis distinctio ea officia!
        </p>
        {/* <div className="a-award">
            <img src="" alt="" className="a-award-img" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
