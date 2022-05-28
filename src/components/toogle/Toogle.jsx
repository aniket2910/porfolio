import React, { useContext } from "react";
import "./Toogle.css";
import S from "../../img/sun.png";
import M from "../../img/moon.png";
import { ThemeContext } from "../../context";

const Toogle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOOGLE" });
  };

  return (
    <div className="t">
      <img src={S} alt="" className="t-icon" />
      <img src={M} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? "0px" : "25px" }}
      ></div>
    </div>
  );
};

export default Toogle;
