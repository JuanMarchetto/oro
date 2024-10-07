/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Question48 = ({ color = "#666666", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.23999 7.72672C7.24011 7.10958 7.40065 6.50308 7.70587 5.9667C8.01109 5.43032 8.45051 4.9825 8.98101 4.66718C9.5115 4.35185 10.1149 4.17985 10.7319 4.16804C11.3489 4.15623 11.9584 4.30503 12.5006 4.59984C13.0428 4.89464 13.499 5.32532 13.8245 5.84963C14.15 6.37394 14.3336 6.97386 14.3574 7.59054C14.3811 8.20723 14.2441 8.81948 13.9598 9.36725C13.6755 9.91501 13.2537 10.3795 12.7358 10.7151C11.7875 11.3301 10.8 12.2034 10.8 13.3334M10.8 15.8334H10.8083"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Question48.propTypes = {
  color: PropTypes.string,
};
