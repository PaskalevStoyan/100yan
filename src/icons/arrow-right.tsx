import React from "react";

export const ArrowRight = () => {
  return (
    <svg
      role="img"
      aria-label="Arrow Right"
      className="arrow-right-icon"
      fill="none"
      height="50"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 16 16 12 12 8" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  );
};
