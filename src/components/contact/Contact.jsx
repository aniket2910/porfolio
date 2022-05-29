import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import P from "../../img/phone.png";
import E from "../../img/email.png";
import A from "../../img/address.png";
import { ThemeContext } from "../../context";
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kf0hdda",
        "template_o0kio8q",
        formRef.current,
        "D4FR2STktE0XbxG2R"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={P} alt="" className="c-icon" />
              +91 1234567890
            </div>
            <div className="c-info-item">
              <img src={E} alt="" className="c-icon" />
              demo@gmail.com
            </div>
            <div className="c-info-item">
              <img src={A} className="c-icon" alt="" />
              Address
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank You"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
