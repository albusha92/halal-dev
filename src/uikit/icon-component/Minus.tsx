import * as React from "react";

function SvgMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 .923V3h15V.923H0z" fill="#737373" />
    </svg>
  );
}

export default SvgMinus;
