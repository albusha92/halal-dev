import * as React from "react";

function SvgArrowRightSquare(props: React.SVGProps<SVGSVGElement>) {
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
        d="M28.12 21.764l-15.12 9v-3.528l10.512-6.372L13 14.384V11l15.12 9.108v1.656z"
        fill="#C4C4C4"
      />
      <path stroke="#C4C4C4" d="M.5.5h40v40H.5z" />
    </svg>
  );
}

export default SvgArrowRightSquare;
