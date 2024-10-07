/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const AddAdd323 = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15.8333V10M10 10V4.16667M10 10L4.16667 10M10 10L15.8333 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

AddAdd323.propTypes = {
  color: PropTypes.string,
};
