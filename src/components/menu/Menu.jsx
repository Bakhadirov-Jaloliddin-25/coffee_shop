import React from "react";
import "./Menu.css";
import cardImage1 from "../../assets/images/Rectangle41.svg";
import cardImage2 from "../../assets/images/Rectangle42.svg";
import cardImage3 from "../../assets/images/Rectangle43.svg";

const Menu = () => {
  return (
    <>
      <div className="container">
        <div className="menu__wrapper">
          <div className="menu__card">
            <h2>
              <span>01</span> Best Coffee Flavour
            </h2>
            <img src={cardImage1} alt="card image 1" />
          </div>
          <div className="menu__card">
            <h2>
              <span>02</span> Place to get lost
            </h2>
            <img src={cardImage2} alt="card image 2" />
          </div>
          <div className="menu__card">
            <h2>
              <span>03</span> Proper roesting
            </h2>
            <img src={cardImage3} alt="card image 3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
