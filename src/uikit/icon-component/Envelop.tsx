import * as React from "react";

function SvgEnvelop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.906.172H2.101C.945.172.01 1.125.01 2.288L0 14.984C0 16.148.945 17.1 2.1 17.1h16.806c1.155 0 2.1-.952 2.1-2.116V2.288a2.115 2.115 0 00-2.1-2.116zm0 4.232l-8.403 5.29-8.402-5.29V2.288l8.402 5.29 8.403-5.29v2.116z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEnvelop;
