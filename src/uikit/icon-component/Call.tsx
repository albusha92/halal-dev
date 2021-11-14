import * as React from "react";

function SvgCall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.002 8.791a16.927 16.927 0 007.286 7.437l2.433-2.483c.298-.304.74-.406 1.127-.27a12.38 12.38 0 003.947.643 1.12 1.12 0 011.106 1.128v3.939a1.12 1.12 0 01-1.106 1.128C8.414 20.313 0 11.725 0 1.13 0 .508.498 0 1.106 0h3.87A1.12 1.12 0 016.08 1.129c0 1.41.221 2.764.63 4.028a1.15 1.15 0 01-.276 1.151L4.002 8.791z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgCall;
