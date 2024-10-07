/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlusPlusDefault221 = ({ color = "#3FF47E", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00001 12.6667V8.00001M8.00001 8.00001V3.33334M8.00001 8.00001L3.33334 8.00001M8.00001 8.00001L12.6667 8.00001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
};

PlusPlusDefault221.propTypes = {
  color: PropTypes.string,
};
