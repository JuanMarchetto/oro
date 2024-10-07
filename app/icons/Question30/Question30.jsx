/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Question30 = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.95197 6.18136C5.95206 5.68765 6.08049 5.20244 6.32467 4.77334C6.56885 4.34424 6.92038 3.98599 7.34478 3.73372C7.76918 3.48146 8.25186 3.34386 8.74548 3.33441C9.2391 3.32497 9.7267 3.44401 10.1604 3.67985C10.5942 3.91569 10.9592 4.26024 11.2196 4.67969C11.48 5.09913 11.6269 5.57907 11.6459 6.07242C11.6648 6.56576 11.5552 7.05557 11.3278 7.49378C11.1004 7.93199 10.763 8.30356 10.3486 8.57203C9.58996 9.06403 8.79997 9.76269 8.79997 10.6667M8.79997 12.6667H8.80663"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Question30.propTypes = {
  color: PropTypes.string,
};
