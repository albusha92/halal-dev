import * as React from "react";
import { SVGProps } from "react";

const SvgSaveArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.9 18.436.75 27.344V.75h20.3v26.489l-9.135-8.78-.496-.477-.518.454Z"
      fill="#fff"
      stroke="#444"
      strokeWidth={1.5}
    />
    <path
      d="M10.546 14.354a.5.5 0 0 0 .708 0l3.181-3.182a.5.5 0 1 0-.707-.708L10.9 13.293l-2.828-2.829a.5.5 0 1 0-.708.708l3.182 3.182ZM10.4 4v10h1V4h-1Z"
      fill="#444"
    />
  </svg>
);

export default SvgSaveArrowDown;
