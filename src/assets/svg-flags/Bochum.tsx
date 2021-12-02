import * as React from "react";
import { SVGProps } from "react";

const SvgBochum = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" {...props}>
    <path d="M.25 150h500V0H.25z" fill="#0f47af" />
    <path
      d="m.25 150 .5 149.5h499v-149"
      fill="#fff"
      stroke="#000"
      strokeLinecap="square"
    />
  </svg>
);

export default SvgBochum;
