import * as React from "react";

function SvgFacebookRound(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25 12.573C25 5.905 19.404.5 12.5.5S0 5.905 0 12.573C0 18.6 4.571 23.594 10.547 24.5v-8.437H7.373v-3.49h3.174v-2.66c0-3.025 1.866-4.697 4.721-4.697 1.367 0 2.798.236 2.798.236v2.971H16.49c-1.552 0-2.037.93-2.037 1.887v2.263h3.467l-.554 3.49h-2.913V24.5C20.43 23.594 25 18.6 25 12.573z"
        fill="#444"
      />
    </svg>
  );
}

export default SvgFacebookRound;
