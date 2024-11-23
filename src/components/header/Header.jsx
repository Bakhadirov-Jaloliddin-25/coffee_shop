import React from "react";
import "./Header.css";
import Logo from "../../assets/images/Logo.svg";
import Search from "../../assets/images/search.svg";
import ShoppingBag from "../../assets/images/shopping-bag.svg";

const Header = () => {
  return (
    <>
      <div className="header__container">
        <div className="header__wrapper">
          <div className="navbar__left">
            <ul className="navbar__info">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Reservation</a>
              </li>
            </ul>
          </div>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="navbar__right">
            <ul className="navbar__info">
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Contract</a>
              </li>
            </ul>
            <div className="header__icon">
              <img src={Search} alt="Search.svg" />
              <img src={ShoppingBag} alt="Shopping-bag.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
