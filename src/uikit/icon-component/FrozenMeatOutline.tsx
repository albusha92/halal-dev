import * as React from "react";
import { SVGProps } from "react";

const SvgFrozenMeatOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M35 24.348v2.486c-.062.19-.139.374-.185.568-.898 3.714-3.149 6.227-6.856 7.152-3.731.93-6.94-.184-9.483-3.108-.109-.125-.238-.23-.323-.31-.684.734-1.279 1.476-1.975 2.106-2.38 2.152-6.036 2.22-8.427.1-1.413-1.252-2.85-2.53-3.998-4.012-1.085-1.401-2.073-2.993-2.634-4.659-1.939-5.75-1.287-11.408 1.41-16.764 3.399-6.75 9.31-9.256 16.59-7.218 4.372 1.223 8.16 3.524 11.604 6.442 1.992 1.689 3.73 3.535 4.277 6.21v1.953l-1.798 4.36L35 24.348ZM3.531 18.722c.059.579.1 1.527.258 2.457.424 2.496 1.205 4.833 3.327 6.452 1.661 1.269 3.344 1.122 4.708-.458.731-.847 1.368-1.78 1.993-2.711 1.758-2.62 4.252-4.499 6.6-6.51 1.183-1.014 2.689-1.456 4.253-1.614.232-.023.482-.048.685-.15 3.185-1.584 4.864-5.11 1.054-7.997-2.677-2.029-5.654-3.534-8.95-4.35C12.87 2.71 9.137 4.1 6.504 8.018c-2.097 3.12-2.864 6.636-2.974 10.705Zm30.294 6.801c-.025-4.52-3.695-8.13-8.23-8.097-4.469.032-8.082 3.71-8.048 8.192.034 4.491 3.68 8.121 8.142 8.107a8.159 8.159 0 0 0 8.136-8.202Zm-6.507-9.217c1.396.502 1.396.502 2.147-.469 2.364-3.055 1.786-6.94-1.523-9.42-3.003-2.249-6.297-3.956-9.978-4.844C12.488.253 7.762 1.944 4.69 6.517 1.822 10.785.87 15.575 1.364 20.643c.248 2.556.99 4.98 2.568 7.082 2.699 3.593 7.231 4.482 10.224.298 1.094-1.529 2.574-2.897 2.498-5.164-.394.442-.745.788-1.042 1.177-1.06 1.383-2.02 2.847-3.167 4.152-1.523 1.733-3.773 1.91-5.688.63-1.78-1.19-2.876-2.895-3.483-4.885-1.717-5.626-.993-11.018 1.969-16.047 2.164-3.675 5.373-5.81 9.8-5.523 4.938.321 9.192 2.437 12.845 5.619 2.615 2.277 2.462 5.432-.009 7.862-.15.143-.32.263-.56.462ZM16.37 26.912c-1.978 3.12-4.236 5.642-8.553 4.878 1.305 1.419 2.723 2.044 4.447 1.916 2.366-.176 3.788-1.726 5.003-3.539.1-.147.051-.44-.013-.64-.264-.835-.559-1.66-.884-2.615Zm15.697-16.796c-.087 1.146.005 2.47-.332 3.671-.344 1.228-1.107 2.342-1.695 3.52l1.986 1.374c2.42-2.217 2.333-6.856.041-8.565Z"
      fill="#000"
    />
    <path
      d="M14.493 5.168c2.518.016 4.25 1.365 4.462 3.524.12 1.232-.329 2.318-1.028 3.31-1.621 2.305-4.777 3.585-7.21 2.93-2.595-.7-3.74-3.057-2.69-5.535 1.025-2.417 3.82-4.245 6.466-4.23Zm-2.56 8.747c2.449.023 4.868-1.607 5.658-3.686.69-1.818-.279-3.554-2.206-3.811-2.488-.332-4.437.67-5.871 2.666-.726 1.01-.994 2.168-.403 3.338.614 1.212 1.787 1.429 2.822 1.493ZM21.218 29.19l-1.416-.208.53-1.342c-.08-.041-.426-.14-.653-.363-.174-.17-.32-.536-.25-.736.055-.158.454-.201.705-.283.046-.014.111.03.166.052.567.229 1.208.747 1.682.625.848-.22 1.594-.83 2.53-1.358-.888-.515-1.61-1.021-2.406-1.353-.288-.12-.744.184-1.13.275-.514.12-1.123.902-1.531.117-.417-.804.575-.825.982-1.163.023-.02.042-.04-.027.027l-.616-1.298 1.393-.232c0-.114-.067-.451.022-.742.07-.231.321-.549.511-.563.195-.014.42.288.621.462.034.028.038.115.027.17-.389 2.107 1.335 2.425 2.723 3.236 0-1.003.073-1.887-.039-2.746-.039-.307-.513-.573-.811-.83-.222-.19-.549-.29-.708-.516-.14-.199-.233-.586-.13-.758.09-.149.506-.2.74-.144.3.073.563.3.687.371.306-.404.576-.763.844-1.12l.926 1.115c.086-.053.355-.298.668-.38.225-.058.58.029.74.187.101.1-.044.456-.092.694-.009.046-.076.1-.126.119-1.955.73-1.525 2.357-1.447 4.014.83-.485 1.616-.915 2.363-1.4.153-.097.216-.393.243-.608.052-.41-.028-.85.092-1.23.086-.265.416-.45.638-.67.172.233.412.442.5.701.087.258.02.565.02.643l1.395.227-.552 1.3c.062.034.366.117.535.316.195.229.273.557.4.843-.283.07-.693.295-.835.183-1.64-1.305-2.823-.096-4.23.769.844.486 1.611.955 2.408 1.365.162.083.451-.027.659-.107.328-.127.637-.309.957-.463.388-.188.857-.378 1.026.169.065.216-.277.596-.496.848-.143.165-.395.236-.44.261l.55 1.335c-.42.052-.84.101-1.375.167 0 .142.065.469-.02.751-.073.24-.32.428-.488.637-.22-.193-.442-.385-.66-.58-.016-.014-.016-.059-.011-.085.413-2.1-1.307-2.448-2.723-3.276 0 1.014-.024 1.909.02 2.802.008.177.25.372.423.507.327.254.74.416 1.005.718.183.207.176.584.254.884-.286.023-.587.113-.854.05-.268-.065-.502-.281-.584-.33-.314.41-.582.76-.852 1.11l-.916-1.086c-.075.044-.327.27-.62.35-.236.064-.52-.05-.784-.085.053-.285.104-.569.161-.85.004-.022.041-.045.068-.054 1.98-.733 1.45-2.388 1.448-4.012-.868.502-1.684.903-2.405 1.436-.222.165-.185.687-.256 1.047-.106.533.211 1.41-.628 1.417-.915.007-.469-.886-.586-1.397-.006-.027-.025-.053.035.067Z"
      fill="#000"
    />
    <path
      d="M12.104 12.349c-.284-.027-.522-.032-.752-.073-1.419-.248-1.744-1.083-.885-2.254 1.188-1.621 3.251-2.43 5.05-1.983 1.104.275 1.41.924.818 1.89-.973 1.584-2.46 2.301-4.23 2.42Zm-.804-1.378c1.411.58 3.52-.357 3.925-1.745-1.507-.401-3.115.314-3.925 1.745Z"
      fill="#000"
    />
  </svg>
);

export default SvgFrozenMeatOutline;