import React from "react";

import PropTypes from "prop-types";
import * as Icons from "./data";

const Icon = (props) => {
  const { component, ...attrs } = props;
  let Component = null;
  if (Icons[component]) {
    Component = Icons[component];
  }

  return Component !== null && <Component {...attrs} />;
};

Icon.propTypes = {
  component: PropTypes.string.isRequired,
};

export default Icon;
