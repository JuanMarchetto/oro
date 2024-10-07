/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlusPlusDefault353 = ({ color = "#999999", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 11.0833V7M7 7V2.91667M7 7L2.91667 7M7 7L11.0833 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.05"
      />
    </svg>
  );
};

PlusPlusDefault353.propTypes = {
  color: PropTypes.string,
};
