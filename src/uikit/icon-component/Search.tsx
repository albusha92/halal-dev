import * as React from "react";

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.83 16.718l-4.648-4.492c1.217-1.299 1.965-3.016 1.965-4.906C15.146 3.277 11.756 0 7.573 0S0 3.277 0 7.32s3.39 7.32 7.573 7.32a7.703 7.703 0 004.767-1.635l4.665 4.51c.227.22.596.22.824 0a.55.55 0 000-.797zM7.572 13.514c-3.539 0-6.408-2.773-6.408-6.194 0-3.42 2.87-6.194 6.408-6.194 3.539 0 6.408 2.773 6.408 6.194 0 3.42-2.869 6.194-6.408 6.194z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgSearch;
