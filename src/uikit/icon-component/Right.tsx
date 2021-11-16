import * as React from "react";

function SvgRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.103 1.747l4.41 3.544-4.41 3.544 1.358 1.089L7.238 5.29 1.461.658.103 1.748z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRight;
