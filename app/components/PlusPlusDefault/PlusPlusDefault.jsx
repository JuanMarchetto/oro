/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlusPlusDefault = ({ className, plusPlusDefault = "/plus-plus-default-368.png" }) => {
  return <img className={`absolute w-6 h-6 top-0 left-0 ${className}`} alt="Plus plus default" src={plusPlusDefault} />;
};

PlusPlusDefault.propTypes = {
  plusPlusDefault: PropTypes.string,
};
