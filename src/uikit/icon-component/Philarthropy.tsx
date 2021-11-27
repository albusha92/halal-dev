import * as React from "react";

function SvgPhilarthropy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 42 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#philarthropy_svg__pattern0)" d="M.208 0h41v41h-41z" />
      <defs>
        <pattern
          id="philarthropy_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#philarthropy_svg__image0_609_3275"
            transform="scale(.00195)"
          />
        </pattern>
        <image
          id="philarthropy_svg__image0_609_3275"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFDMENGQjRFNEMzOTExRUNBODhFRUYzNzhFMzkyMDFDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFDMENGQjRGNEMzOTExRUNBODhFRUYzNzhFMzkyMDFDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUMwQ0ZCNEM0QzM5MTFFQ0E4OEVFRjM3OEUzOTIwMUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUMwQ0ZCNEQ0QzM5MTFFQ0E4OEVFRjM3OEUzOTIwMUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Ad/39AAAQ/ElEQVR42uzd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"
        />
      </defs>
    </svg>
  );
}

export default SvgPhilarthropy;
