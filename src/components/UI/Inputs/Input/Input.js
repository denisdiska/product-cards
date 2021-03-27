import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";
import "./Input.scss";

import Icon from "../../../Icon";

export default function Input({
  id,
  onChange,
  onBlur,
  value,
  placeholder,
  withLabel,
  error,
  type,
  className,
}) {
  const classes = classNames("form__input", `${error ? className : ""}`);
  return (
    <>
      {error && <Icon component="ellipseRed" className="form__label-img" />}

      <input
        className={classes}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label="bla bla"
        placeholder={placeholder}
        error={error}
        type={type}
      />

      {withLabel && (
        <label className="form__label" htmlFor={id}>
          <p className="form__label-text">{error}</p>
        </label>
      )}
    </>
  );
}

Input.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  withIcon: PropTypes.func,
  withLabel: PropTypes.bool,
};
