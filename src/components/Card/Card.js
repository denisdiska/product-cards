import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

function Card({ name, category, price }) {
  // console.log(name);
  return (
    <div className="card">
      <p className="card-category">{category}</p>
      <h3 className="card-name">{name}</h3>
      <div className="card-content">
        <p className="card-content__badge">$</p>
        <p className="card-content__price">{price}</p>
        <p className="card-content__btn">button</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
