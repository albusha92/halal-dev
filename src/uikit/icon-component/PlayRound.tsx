import * as React from "react";

function SvgPlayRound(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 64 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M64 31c0 17.12-14.327 31-32 31C14.327 62 0 48.12 0 31 0 13.88 14.327 0 32 0c17.673 0 32 13.88 32 31z"
        fill="#115C07"
      />
      <path
        d="M45.5 26.99c3.333 1.925 3.333 6.736 0 8.66l-15 8.66c-3.333 1.925-7.5-.48-7.5-4.33V22.66c0-3.849 4.167-6.255 7.5-4.33l15 8.66z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgPlayRound;
