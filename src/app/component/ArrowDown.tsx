export default function ArrowDown({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g filter="url(#filter0_d_2_1809)">
        <path
          d="M44 6.66682C62.4095 6.66682 77.3333 21.5907 77.3333 40.0002C77.3333 58.4097 62.4095 73.3335 44 73.3335C25.5905 73.3335 10.6666 58.4097 10.6666 40.0002C10.6666 21.5907 25.5905 6.66682 44 6.66682Z"
          fill="white"
        />
      </g>
      <path
        d="M55.7667 33.2998C55.1334 33.2998 54.5 33.5331 54 34.0331L44 44.0331L34 34.0331C33.0334 33.0664 31.4334 33.0664 30.4667 34.0331C29.5 34.9998 29.5 36.5998 30.4667 37.5664L42.2334 49.3331C43.2 50.2998 44.8 50.2998 45.7667 49.3331L57.5334 37.5664C58.5 36.5998 58.5 34.9998 57.5334 34.0331C57.0334 33.5331 56.4 33.2998 55.7667 33.2998Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_d_2_1809"
          x="0.666626"
          y="0.666992"
          width="86.6666"
          height="86.6665"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_1809"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_1809"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
