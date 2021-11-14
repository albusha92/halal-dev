import * as React from "react";

function SvgTurkeyFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 -30000 90000 60000"
      {...props}
    >
      <path fill="#e30a17" d="M0-30000h90000v60000H0z" />
      <path
        fill="#fff"
        d="M41750 0l13568-4408-8386 11541V-7133l8386 11541zm925 8021a15000 15000 0 110-16042 12000 12000 0 100 16042z"
      />
    </svg>
  );
}

export default SvgTurkeyFlag;
