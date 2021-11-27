import * as React from "react";

function SvgArrowLeftSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.88 19.236l15.12-9v3.528l-10.512 6.372L28 26.616V30l-15.12-9.108v-1.656z"
        fill="#C4C4C4"
      />
      <path stroke="#C4C4C4" d="M40.5 40.5H.5V.5h40z" />
    </svg>
  );
}

export default SvgArrowLeftSquare;
