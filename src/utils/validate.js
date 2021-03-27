export const validate = (values) => {
  const errors = {};
  const checkKey = (key) => Object.prototype.hasOwnProperty.call(values, key);

  if (checkKey("formName")) {
    if (!values.formName) {
      errors.formName = "This field in required";
    } else if (/[^A-Z]/i.test(values.formName)) {
      errors.formName = "Only letters allowed";
    }
  }

  if (checkKey("formPhone")) {
    if (checkKey("formPhone") && !values.formPhone) {
      errors.formPhone = "This field in required";
    } else if (/[^0-9]/i.test(values.formPhone)) {
      errors.formPhone = "Only numbers allowed";
    } else if (values.formPhone.length !== 12) {
      errors.formPhone = "Should contain 12 characters";
    }
  }

  return errors;
};

export default validate;
