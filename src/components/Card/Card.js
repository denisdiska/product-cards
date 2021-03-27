import React, { useState } from "react";
import PropTypes from "prop-types";

import { CustomButton } from "../UI";
import { Popup } from "../Popup";
import "./Card.scss";

function Card({ name, category, price }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const buyBtn = {
    nameBtn: "Buy",
    classBtn: "btn-buy",
  };
  return (
    <div className="card">
      <p className="card-category">{category}</p>
      <h3 className="card-name">{name}</h3>
      <div className="card-content">
        <span className="card-content__badge">$</span>
        <p className="card-content__price">{price}</p>
        <CustomButton {...buyBtn} callBack={toggleModal} />
        <Popup
          props={isOpen}
          name={name}
          category={category}
          price={price}
          closeModal={toggleModal}
        />
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
