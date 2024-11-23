import React from "react";
import "./Shop.css";
import CoffeeBag from "../../assets/images/Rectangle2";

const Shop = () => {
  return (
    <>
      <div className="shop__wrapper">
        <p>Popular Product</p>
        <h1>Coffee popular Product</h1>
        <div className="product__wrapper">
          <div className="card__wrapper">
            <div className="product__card">
              <div className="product__image">
                <img src={CoffeeBag} alt="" />
              </div>
              <div className="product__info"></div>
            </div>
          </div>
          <div className="card__wrapper">
            <div className="product__card">
              <div className="product__image">
                <img src={CoffeeBag} alt="" />
              </div>
              <div className="product__info"></div>
            </div>
          </div>
          <div className="card__wrapper">
            <div className="product__card">
              <div className="product__image">
                <img src={CoffeeBag} alt="CoffereBag.svg" />
              </div>
              <div className="product__info"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
