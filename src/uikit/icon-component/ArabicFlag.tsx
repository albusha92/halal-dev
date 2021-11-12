import * as React from "react";

function SvgArabicFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 9 6"
      {...props}
    >
      <path fill="#00732f" d="M0 0h9v6H0z" />
      <path fill="#fff" d="M0 2h9v4H0z" />
      <path d="M0 4h9v2H0z" />
      <path fill="red" d="M0 0h2.25v6H0z" />
    </svg>
  );
}

export default SvgArabicFlag;
