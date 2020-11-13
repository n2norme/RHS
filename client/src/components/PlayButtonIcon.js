import React from 'react';
import './PlayButton.scss';

function PlayButtonIcon() {
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2cm"
      height="2cm"
      x="0"
      y="0"
      viewBox="0 0 213.7 213.7"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="7"
        d="M73.5 62.5L148.5 105.8 73.5 149.1z"
        className="triangle"
      ></path>
      <circle
        cx="106.8"
        cy="106.8"
        r="103.3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="7"
        className="circle"
      ></circle>
    </svg>
    )
}

export default PlayButtonIcon
