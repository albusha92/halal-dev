import * as React from "react";

function SvgDropDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.863 1.102a.469.469 0 00-.663 0L6.331 5.96a.47.47 0 01-.663 0L.8 1.102a.469.469 0 10-.662.663l4.868 4.858c.274.274.634.412.994.412s.72-.137.994-.411l4.868-4.859a.469.469 0 00.001-.663z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDropDown;
