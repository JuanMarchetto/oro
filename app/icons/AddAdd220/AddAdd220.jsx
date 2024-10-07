/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const AddAdd220 = ({ color = "#3FF47E", className }) => {
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
        d="M8.00001 12.6667V7.99999M8.00001 7.99999V3.33333M8.00001 7.99999L3.33334 7.99999M8.00001 7.99999L12.6667 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
      />
    </svg>
  );
};

AddAdd220.propTypes = {
  color: PropTypes.string,
};
