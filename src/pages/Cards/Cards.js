import React, { useState } from "react";
import { GetAppContext } from "../../context/appContext";
import { Card, CustomButton, Popup } from "../../components";

import "./Cards.scss";

function Cards() {
  const context = GetAppContext();
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const { my_data } = context;
  const btnCheapset = {
    nameBtn: "Buy cheapset",
    classBtn: "btn-cheapset",
  };

  const minPrice = my_data?.reduce((res, obj) =>
    obj.price < res.price ? obj : res
  );

  return (
    <div className="cards">
      <div className="wrapper">
        {my_data?.map((el, ind) => (
          <div className="card-wrapper" key={ind}>
            <Card {...el} />
          </div>
        ))}
      </div>
      <CustomButton {...btnCheapset} callBack={toggleModal} />
      <Popup props={isOpen} {...minPrice} closeModal={toggleModal} />
    </div>
  );
}

export default Cards;
