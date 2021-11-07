import * as React from "react";

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#facebook_svg__clip0_3:3042)">
        <path
          d="M10.471 2.653h1.434V.113A18.21 18.21 0 009.815 0C7.749 0 6.333 1.323 6.333 3.755v2.238H4.05v2.84h2.282v7.147h2.797V8.834h2.19l.347-2.84H9.13V4.035c0-.82.218-1.383 1.342-1.383z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="facebook_svg__clip0_3:3042">
          <path fill="#fff" d="M0 0h15.71v15.98H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgFacebook;
