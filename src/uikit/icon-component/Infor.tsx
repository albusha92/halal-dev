import * as React from "react";

function SvgInfor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.927.06C4.895.06 0 4.974 0 11.03 0 17.085 4.895 22 10.927 22c6.031 0 10.926-4.915 10.926-10.97 0-6.056-4.895-10.97-10.926-10.97zm1.092 16.455H9.834V9.933h2.185v6.582zm0-8.776H9.834V5.545h2.185v2.194z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgInfor;
