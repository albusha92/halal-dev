import * as React from "react";

function SvgMarker(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.312 0C3.28 0 0 3.339 0 7.443c0 2.296 1.161 5.082 3.451 8.282a36.495 36.495 0 003.397 4.082.652.652 0 00.917.01c.07-.067 1.726-1.67 3.405-3.979 2.292-3.152 3.454-5.977 3.454-8.395C14.624 3.34 11.344 0 7.312 0zm0 10.656a3.579 3.579 0 01-3.575-3.574 3.579 3.579 0 013.575-3.575 3.579 3.579 0 013.574 3.575 3.579 3.579 0 01-3.574 3.574z"
        fill="#222"
      />
    </svg>
  );
}

export default SvgMarker;
