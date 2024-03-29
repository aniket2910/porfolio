import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MailIcon from "@mui/icons-material/Mail";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      id="about"
      className="wrapper"
    >
      <div className="container">
        <Flip left>
          <div className="a-content">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">I'am Aniket Solanki</p>
            <p className="a-desc">
              Quick learner and an aspiring full-stack web developer with core
              knowledge of MERN stack technology. Looking forward to applying
              and enhancing my skills and knowledge as a developer.
            </p>
            <Bounce left>
              <div className="connect-at">
                <div className="connect-icon">
                  <MailIcon />
                </div>
                <a href="mailto:solankianiket0411@gmail.com">
                  solankianiket0411@gmail.com
                </a>
              </div>
            </Bounce>
          </div>
        </Flip>
      </div>
    </div>
  );
};

export default About;
