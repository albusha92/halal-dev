import * as React from "react";

function SvgArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 .651l5 5.346L10 .65H0z" fill="currentColor" />
    </svg>
  );
}

export default SvgArrowDown;
