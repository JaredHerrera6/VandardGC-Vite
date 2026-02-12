import React from "react";

const VandardIcon = ({ size = 32, title = "Vandard Icon" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
  >
    <title>{title}</title>
    <image
      href="/android-chrome-512x512.png"
      width="512"
      height="512"
      preserveAspectRatio="xMidYMid meet"
    />
  </svg>
);

export default VandardIcon;
