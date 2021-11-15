import * as React from "react";

function SvgRectangle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#115C07" d="M0 0h10v10H0z" />
    </svg>
  );
}

export default SvgRectangle;
