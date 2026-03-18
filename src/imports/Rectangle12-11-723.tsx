import svgPaths from "./svg-mk4u15jv9g";

export default function Rectangle() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-6.84%_-9.65%_-7.53%_-9.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 395.075 508.563">
          <g filter="url(#filter0_di_11_669)" id="Rectangle 12">
            <path d={svgPaths.pd4d89f8} fill="var(--fill-0, #006747)" fillOpacity="0.84" shapeRendering="crispEdges" />
            <path d={svgPaths.p9853800} shapeRendering="crispEdges" stroke="var(--stroke-0, #6FE6C1)" strokeWidth="2.28257" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="508.563" id="filter0_di_11_669" width="395.075" x="-4.76837e-07" y="-7.15256e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.52171" />
              <feGaussianBlur stdDeviation="14.8367" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.639216 0 0 0 0 0.470588 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_11_669" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_11_669" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.52171" />
              <feGaussianBlur stdDeviation="13.9617" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.810246 0 0 0 0 0.559595 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect2_innerShadow_11_669" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}