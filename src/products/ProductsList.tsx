import React, { useState } from "react";
import "./products.scss";
import product from "../assets/img/product.svg";
import plus from "../assets/img/plud-add.svg";
const ProductsList = () => {
  const [addProduct, setAddProduct] = useState(true)
  return (
    <div className="products">
      <h1>Product list</h1>
      <div className="products--cat">
        <div className="products--cat__block">
          <img src={product} alt="" />
          <h1>Vegetables, fruits</h1>
        </div>
        <div className="products--cat__block">
          <img src={product} alt="" />
          <h1>Vegetables, fruits</h1>
        </div>
        <div className="products--cat__block">
          <img src={product} alt="" />
          <h1>Vegetables, fruits</h1>
        </div>
        <div className="products--cat__block">
          <img src={product} alt="" />
          <h1>Vegetables, fruits</h1>
        </div>
        <div className="products--cat__block">
          <img src={product} alt="" />
          <h1>Vegetables, fruits</h1>
        </div>
        {addProduct ? 
        <div className="products--cat__todo">
          <div className="products--cat__todo--do">
            <img src={plus} alt="" />
          </div>
        </div> : <div className="products--cat__block"></div>}
        
      </div>
    </div>
  );
};

export default ProductsList;
