import * as React from "react";
import { SVGProps } from "react";

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 35 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31.172 0H3.828C1.718 0 0 1.784 0 3.977v17.046C0 23.216 1.717 25 3.828 25h27.344C33.282 25 35 23.216 35 21.023V3.977C35 1.784 33.283 0 31.172 0ZM3.828 2.273h27.344c.905 0 1.64.764 1.64 1.704V6.25H2.189V3.977c0-.94.736-1.704 1.64-1.704Zm27.344 20.454H3.828c-.904 0-1.64-.764-1.64-1.704v-12.5h30.625v12.5c0 .94-.736 1.704-1.641 1.704Z"
      fill="#444"
    />
  </svg>
);

export default SvgWallet;
