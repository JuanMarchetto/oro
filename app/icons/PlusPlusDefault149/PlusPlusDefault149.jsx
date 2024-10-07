/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlusPlusDefault149 = ({ color = "#F43F5E", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 14.25V9M9 9V3.75M9 9L3.75 9M9 9L14.25 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  );
};

PlusPlusDefault149.propTypes = {
  color: PropTypes.string,
};
