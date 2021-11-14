import * as React from "react";

function SvgPlayVideo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 70 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M47.5 31.629c3.333 1.924 3.333 6.736 0 8.66l-15 8.66c-3.333 1.925-7.5-.48-7.5-4.33V27.3c0-3.85 4.167-6.255 7.5-4.33l15 8.66z"
        fill="#fff"
      />
      <path
        d="M68 35.958c0 18.225-14.775 33-33 33s-33-14.775-33-33S16.775 2.96 35 2.96s33 14.774 33 33z"
        stroke="#fff"
        strokeWidth={4}
      />
    </svg>
  );
}

export default SvgPlayVideo;
