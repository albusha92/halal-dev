import * as React from "react";
import { SVGProps } from "react";

const SvgCallOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 35c.637-2.329 1.252-4.586 1.87-6.843.169-.62.353-1.237.499-1.863a.79.79 0 0 0-.055-.509C.678 22.813-.072 19.623.184 16.25c.43-5.688 3.05-10.165 7.764-13.364C11.095.755 14.624-.23 18.412.045 25.269.54 30.349 3.91 33.22 10.135c2.8 6.074 2.125 12.03-1.777 17.477-2.806 3.914-6.702 6.2-11.475 6.911-3.692.552-7.201-.083-10.524-1.783a.839.839 0 0 0-.542-.049c-2.832.73-5.66 1.473-8.489 2.214-.12.029-.235.052-.413.095Zm4.164-4.123c.109-.02.155-.026.198-.038 1.596-.419 3.193-.832 4.787-1.263.327-.09.585-.052.884.123 3.205 1.91 6.656 2.539 10.303 1.792 7.716-1.58 12.669-8.876 11.348-16.632-1.12-6.584-6.808-11.626-13.464-11.908-3.682-.155-6.99.9-9.835 3.245-3.254 2.68-5.028 6.16-5.287 10.366-.192 3.098.589 5.97 2.263 8.589.192.301.233.563.132.907-.454 1.582-.879 3.176-1.33 4.819Z"
      fill="#115C07"
    />
    <path
      d="M11.848 9.369c.786-.204 1.145.275 1.41.962.387 1.008.815 1.998 1.24 2.992.144.333.138.634-.077.924-.348.468-.687.942-1.054 1.396-.23.284-.267.54-.078.861 1.416 2.395 3.4 4.124 5.987 5.152.336.135.615.083.844-.204.443-.549.902-1.086 1.324-1.648.244-.328.531-.428.885-.262 1.229.575 2.458 1.155 3.67 1.766.146.075.275.35.272.532-.032 1.84-.571 2.727-2.55 3.554-1.12.469-2.277.354-3.428.032-4.17-1.157-7.24-3.776-9.7-7.227-.773-1.086-1.473-2.203-1.766-3.524-.42-1.878.046-3.506 1.43-4.861.436-.428.965-.532 1.59-.445Z"
      fill="#115C07"
    />
  </svg>
);

export default SvgCallOutline;