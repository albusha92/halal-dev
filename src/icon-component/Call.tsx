import * as React from "react";

function SvgCall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.395 13.128c-1.224 0-2.427-.192-3.566-.568-.558-.19-1.245-.016-1.585.334l-2.249 1.697C8.387 13.2 6.781 11.593 5.407 9.005l1.648-2.19a1.617 1.617 0 00.398-1.638 11.373 11.373 0 01-.57-3.572C6.883.72 6.163 0 5.278 0H1.605C.72 0 0 .72 0 1.605 0 11.748 8.252 20 18.395 20 19.28 20 20 19.28 20 18.395v-3.662c0-.885-.72-1.605-1.605-1.605z"
        fill="#222"
      />
    </svg>
  );
}

export default SvgCall;
