import React from "react";
import Modal from "react-modal";

import { useFormik } from "formik";

import Icon from "../Icon";
import { CustomButton, Input } from "../UI/";

import { validate } from "../../utils/validate";
import "./Popup.scss";

Modal.setAppElement("#root");

function Popup({ props, closeModal, category, name, price }) {
  const orderBtn = {
    nameBtn: "order",
    classBtn: "btn-order",
    submit: "submit",
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      formName: "",
      formPhone: "",
    },

    onSubmit: ({ formName, formPhone }) => {
      console.log(formName, formPhone);
    },
    validate,
  });

  // onClick={`${callBack}`}
  console.log(errors.formName);

  return (
    <Modal
      isOpen={props}
      onRequestClose={closeModal}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
    >
      <div className="popup">
        <Icon
          onClick={closeModal}
          component="ellipseWhite"
          className="popup-close"
        />
        <p className="popup-category">{category}</p>
        <h3 className="popup-name">{name}</h3>
        <div className="popup-content">
          <span className="popup-content__badge">$</span>
          <p className="popup-content__price">{price}</p>
        </div>
        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="popup-form__wrapper">
            <Input
              className="form__input-err"
              id="formName"
              onChange={handleChange}
              value={values.formName}
              onBlur={handleBlur}
              label="bla bla"
              placeholder="Name"
              withLabel
              error={touched.formName && errors.formName}
              type="text"
            />
            <Input
              className="form__input-err"
              id="formPhone"
              onChange={handleChange}
              value={values.formPhone}
              onBlur={handleBlur}
              label="bla bla"
              placeholder="Number"
              withLabel
              error={touched.formPhone && errors.formPhone}
              type="text"
            />
          </div>
          <CustomButton callBack={closeModal} {...orderBtn} addArrow={true} />
        </form>
      </div>
    </Modal>
  );
}

export default Popup;
