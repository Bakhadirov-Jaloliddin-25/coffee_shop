import React from "react";
import "./Shop.css";
import CoffeeBag from "../../assets/images/Rectangle 2.svg";
import ShoppingBag from "../../assets/images/shopping-bag.svg";
import Rate from "../../assets/images/rate.svg";
import Machine from "../../assets/images/machine.svg";

const Shop = () => {
  return (
    <>
      <div className="container">
        <div className="shop__wrapper">
          <p className="product__title">Popular Product</p>
          <h1>Coffee popular Product</h1>
          <div className="product__wrapper">
            <div className="card__wrapper">
              <div className="product__card">
                <div className="product__image">
                  <img src={CoffeeBag} alt="" />
                </div>
                <img className="product__rate" src={Rate} alt="rate.svg" />
                <div className="product__info">brazil coffee gred</div>
                <p className="product__price">
                  Price - <span>$320.00/</span> $358
                </p>
                <button className="product_btn">
                  <img src={ShoppingBag} alt="" />
                  Add to card
                </button>
              </div>
            </div>
            <div className="card__wrapper">
              <div className="product__card">
                <div className="product__image">
                  <img src={CoffeeBag} alt="" />
                </div>
                <img className="product__rate" src={Rate} alt="rate.svg" />
                <div className="product__info">brazil coffee gred</div>
                <p className="product__price">
                  Price - <span>$320.00/</span> $358
                </p>
                <button className="product_btn">
                  <img src={ShoppingBag} alt="" />
                  Add to card
                </button>
              </div>
            </div>
            <div className="card__wrapper">
              <div className="product__card">
                <div className="product__image">
                  <img src={CoffeeBag} alt="CoffereBag.svg" />
                </div>
                <img className="product__rate" src={Rate} alt="rate.svg" />
                <div className="product__info">brazil coffee gred</div>
                <p className="product__price">
                  Price - <span>$320.00/</span> $358
                </p>
                <button className="product_btn">
                  <img src={ShoppingBag} alt="" />
                  Add to card
                </button>
              </div>
            </div>
          </div>
          <div className="btn__wwrapper">
            <button className="btn__view__all">View all product</button>
          </div>
        </div>
        <div className="container">
          <div className="shop__machine_wrapper">
            <div className="machine__img">
              <img src={Machine} alt="machine.svg" />
            </div>
            <div className="machine__info">
              <h1 className="machine__title">Coffee machine, buy for home</h1>
              <p>
                mauris rhoncus in imperdiet placerat. vestibu emismd nisl
                suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
                nibhtincidunt. donec et nib maximus, est eu, mattis nuce.
                preasent ut quam quis quam venen atis fri ngilla. morbi
                vastibulum id tells mmodo mattis. aliauam erat volutpal.
              </p>
              <button className="machine__btn">Discover now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
