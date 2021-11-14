import * as React from "react";

function SvgEnvelop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 21"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.147.97H2.572C1.157.97.012 2.092.012 3.465L0 18.447c0 1.374 1.157 2.497 2.572 2.497h20.575c1.414 0 2.572-1.123 2.572-2.497V3.467c0-1.374-1.158-2.498-2.572-2.498zm0 17.477H2.572V5.963l10.287 6.242 10.288-6.242v12.484zM12.859 9.708L2.572 3.466h20.575L12.859 9.708z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEnvelop;
