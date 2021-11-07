import * as React from "react";

function SvgMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 90 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#menu_svg__pattern0)" d="M0 0h90v56H0z" />
      <defs>
        <pattern
          id="menu_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#menu_svg__image0_101:22"
            transform="scale(.01111 .01786)"
          />
        </pattern>
        <image
          id="menu_svg__image0_101:22"
          width={90}
          height={56}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default SvgMenu;
