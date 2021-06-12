import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <svg height="40px" width="40px" id="svg2" version="1.1" viewBox="0 0 32 32">
      <g id="background">
        <rect fill="none" height="35" width="35"></rect>
      </g>
      <g id="sourcecode">
        <polygon points="22,22 22,26 32,16 22,6 22,10 28,16 " fill="#000"></polygon>
        <polygon points="10,22 10,26 0,16 10,6 10,10 4,16" fill="#000"></polygon>
        <polygon points="10,20 14,20 22,12 18,12" fill="#000"></polygon>
      </g>
    </svg>
  );
}
