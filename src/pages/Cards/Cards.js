import React from "react";
import { GetAppContext } from "../../context/appContext";
import { Card } from "../../components";

function Cards() {
  const context = GetAppContext();
  // console.log(context);
  return (
    <>
      {context?.my_data?.map((el, ind) => (
        <Card key={ind} {...el} />
      ))}
    </>
  );
}

export default Cards;
