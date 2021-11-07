import * as React from "react";

function SvgPinterest(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.12 6.348c-1.25 0-2.09.687-2.433 1.338H9.65v-1.13H7.183v8.285h2.57V10.74c0-1.08.204-2.125 1.542-2.125 1.318 0 1.338 1.233 1.338 2.194v4.034H15.203V10.29c0-2.227-.48-3.942-3.082-3.942zM5.57 6.556H2.999v8.285H5.57V6.556zM4.283 2.432a1.49 1.49 0 00-1.49 1.49c0 .822.667 1.504 1.49 1.504s1.49-.682 1.49-1.504c0-.823-.668-1.49-1.49-1.49z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPinterest;
