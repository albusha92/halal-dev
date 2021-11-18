import * as React from "react";

function SvgPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 17 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.379.982C3.759.982 0 4.741 0 9.361c0 1.828.578 3.565 1.671 5.022l6.191 8.338c.016.02.04.028.057.046.31.332.756.248.976-.046 1.783-2.378 5.05-6.82 6.307-8.496v-.003l.008-.01a8.318 8.318 0 001.548-4.851c0-4.62-3.76-8.379-8.38-8.379zm0 12.899a4.532 4.532 0 01-4.52-4.52 4.532 4.532 0 014.52-4.52 4.532 4.532 0 014.52 4.52 4.532 4.532 0 01-4.52 4.52z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgPin;
