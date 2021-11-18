import * as React from "react";

function SvgCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.969 2.956h-.998v-2h-1.997v2H4.991v-2H2.995v2h-.998c-1.099 0-1.997.9-1.997 2v16c0 1.099.898 1.999 1.997 1.999h15.972c1.098 0 1.996-.9 1.996-2v-16c0-1.1-.898-1.999-1.996-1.999zm0 18H1.997v-13h15.972v13z"
        fill="#444"
      />
    </svg>
  );
}

export default SvgCalendar;
