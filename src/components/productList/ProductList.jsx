import React, { useEffect } from "react";
import Product from "../product/Product";
import "./ProductList.css";
import data from "../../data";
import AOS from "aos";
import "aos/dist/aos.css";
import Flip from "react-reveal/Flip";
import { Element } from "react-scroll/modules";
const ProductList = () => {
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
      id="projects"
    >
      <div className="container">
        <Flip top>
          <div className="pl">
            <div className="pl-texts">
              <h1 className="pl-title">My Projects</h1>
            </div>
            <div className="pl-list">
              {data.map((item) => (
                <Product key={item.id} {...item} />
              ))}
            </div>
          </div>
        </Flip>
      </div>
    </div>
  );
};

export default ProductList;
