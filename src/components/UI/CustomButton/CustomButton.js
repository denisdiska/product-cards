import React from "react";

import classNames from "classnames";

import Icon from "../../Icon";
import "./CustomButton.scss";

export default function CustomButton({
  nameBtn,
  classBtn,
  callBack,
  addArrow,
  submit,
}) {
  const classes = classNames("btn", classBtn);

  return (
    <>
      <button onClick={callBack} className={classes} type={submit}>
        {nameBtn}
        {addArrow && <Icon component="arrowRight" className="btn-order__img" />}
      </button>
    </>
  );
}
