import React from "react";
import "./Product.css";
import p1 from "../../img/p_1.png";

const Product = ({ link, img }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} rel="noreferrer" target="_blank">
        <img src={img.p1} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
