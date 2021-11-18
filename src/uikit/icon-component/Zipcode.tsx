import * as React from "react";

function SvgZipcode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.94 10.986A8.994 8.994 0 0012 3.046V.986h-2v2.06a8.994 8.994 0 00-7.94 7.94H0v2h2.06a8.994 8.994 0 007.94 7.94v2.059h2v-2.06a8.994 8.994 0 007.94-7.94H22v-2h-2.06zm-8.94 8c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgZipcode;
