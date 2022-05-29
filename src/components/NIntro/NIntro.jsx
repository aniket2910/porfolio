import React, { useEffect } from "react";
import "./Nintro.css";
import me5 from "../../img/me4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Bounce from "react-reveal/Bounce";
import MailIcon from "@mui/icons-material/Mail";

const NIntro = () => {
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
      className="wrapper"
    >
      <div className="container">
        <div className="i-wrapper">
          <div data-aos="fade" className="i-left">
            <Fade left>
              <div className="i-img">
                <img src={me5} alt="" />
              </div>
            </Fade>
          </div>
          <div className="i-right">
            <Fade right>
              <div>
                <p data-aos="fade-right" className="i-text">
                  Hi 👋,
                </p>
                <p data-aos="fade-right" className="i-text">
                  {" "}
                  I'am <span className="span-name">Aniket Solanki</span>
                </p>
                <p data-aos="fade-right" className="i-text">
                  MERN Developer
                </p>
              </div>
            </Fade>
            <Flip right>
              <div className="i-resume">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://google.com"
                  className="r-btn"
                >
                  Resume
                </a>
              </div>
            </Flip>

            <div className="work">
              <Bounce>
                <div className="work-icon">
                  <a
                    className="linked_in"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/solanki-aniket0411"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </Bounce>
              <Bounce>
                <div className="work-icon">
                  <a
                    className="github"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/aniket2910"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </Bounce>
              <Bounce>
                <div className="work-icon">
                  <a
                    className="email"
                    href="mailto:solankianiket0411@gmail.com"
                  >
                    <MailIcon />
                  </a>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NIntro;
