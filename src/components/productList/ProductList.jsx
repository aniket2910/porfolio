import React from "react";
import Product from "../product/Product";
import "./ProductList.css";
import data from "../../data";
console.log(data);
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire</h1>
        <p className="pl-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          distinctio sed accusantium. Ipsam, doloribus. Ullam, voluptatibus
          facilis? Odio fugiat eligendi temporibus soluta fuga sapiente,
          reiciendis laboriosam. Pariatur repellendus vel itaque!
        </p>
      </div>
      <div className="pl-list">
        {data.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
