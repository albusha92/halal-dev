import * as React from "react";
import { SVGProps } from "react";

const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.938 1.142a.346.346 0 0 0-.559-.001L6.277 6.144a.347.347 0 0 1-.558 0L1.617 1.14a.347.347 0 0 0-.559 0 .561.561 0 0 0 .001.683L5.16 6.827c.231.282.535.423.838.423.304 0 .607-.141.838-.423l4.101-5.003a.561.561 0 0 0 0-.682Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.6}
    />
  </svg>
);

export default SvgChevronDown;
