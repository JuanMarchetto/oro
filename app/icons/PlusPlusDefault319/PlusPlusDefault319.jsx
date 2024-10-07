/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlusPlusDefault319 = ({ color = "#4D4D4D", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9.5V6M6 6V2.5M6 6L2.5 6M6 6L9.5 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.9"
      />
    </svg>
  );
};

PlusPlusDefault319.propTypes = {
  color: PropTypes.string,
};
