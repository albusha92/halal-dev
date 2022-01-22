import * as React from "react";
import { SVGProps } from "react";

const SvgChatSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 31 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.2 35h-1.845v-4.114c-.577-.078-1.11-.125-1.634-.223-3.7-.693-6.764-2.488-9.164-5.386-2.206-2.664-3.396-5.74-3.542-9.196-.129-3.033.557-5.89 2.147-8.48C5.017 2.945 9.192.365 14.652.03c3.602-.222 6.903.799 9.792 2.973 4.01 3.021 6.124 7.076 6.303 12.097.094 2.63-.485 5.156-1.424 7.6-1.3 3.386-3.18 6.392-5.89 8.838-1.637 1.476-3.478 2.603-5.636 3.148-.525.134-1.064.21-1.597.314ZM9.234 21.58c.159 0 .294.016.424-.002 2.182-.288 3.664-1.973 3.67-4.182.005-1.903.001-3.805 0-5.707 0-.11-.009-.218-.014-.326H7.197v6.147h2.038v4.07Zm10.26-4.075v4.079c.147 0 .272.012.393-.002 2.138-.253 3.677-1.95 3.693-4.092.014-1.948.003-3.896.002-5.843 0-.098-.012-.194-.018-.28h-6.11v6.137l2.04.001Z"
      fill="#115C07"
    />
  </svg>
);

export default SvgChatSolid;