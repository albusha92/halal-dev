import * as React from "react";

function SvgTrust(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 43 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#trust_svg__pattern0)" d="M.208 0h42v42h-42z" />
      <defs>
        <pattern
          id="trust_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#trust_svg__image0_609_3273"
            transform="scale(.00195)"
          />
        </pattern>
        <image
          id="trust_svg__image0_609_3273"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1NjU2RjkwNEMzODExRUM5NDA3RUY1RkU3OThEMjQ3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk1NjU2RjkxNEMzODExRUM5NDA3RUY1RkU3OThEMjQ3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTU2NTZGOEU0QzM4MTFFQzk0MDdFRjVGRTc5OEQyNDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTU2NTZGOEY0QzM4MTFFQzk0MDdFRjVGRTc5OEQyNDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BQNxOAAAWrklEQVR42uzd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"
        />
      </defs>
    </svg>
  );
}

export default SvgTrust;
