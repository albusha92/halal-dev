import * as React from "react";

function SvgEnglishFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
      <path fill="#FFF" d="M0 0h800v480H0" />
      <path stroke="#C8102E" strokeWidth={96} d="M0 240h800M400 0v480" />
    </svg>
  );
}

export default SvgEnglishFlag;
