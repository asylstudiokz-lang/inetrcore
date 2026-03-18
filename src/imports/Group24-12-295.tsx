import svgPaths from "./svg-5bk44q7aa6";
import img12 from "@/assets/49568193b92b737447ab243e47536cc0a247e271.png?url";
import { img11 } from "./svg-hmg5g";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[340.058px] left-0 top-[127.44px] w-[331.163px]">
        <div className="absolute inset-[-8.95%_-9.65%_-9.84%_-9.65%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 395.075 403.97">
            <g filter="url(#filter0_di_5_117)" id="Rectangle 11">
              <path d={svgPaths.p7c94f00} fill="var(--fill-0, #006747)" fillOpacity="0.84" shapeRendering="crispEdges" />
              <path d={svgPaths.p11347880} shapeRendering="crispEdges" stroke="var(--stroke-0, #6FE6C1)" strokeWidth="2.28257" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="403.97" id="filter0_di_5_117" width="395.075" x="-4.76837e-07" y="-7.15256e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1.52171" />
                <feGaussianBlur stdDeviation="14.8367" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.639216 0 0 0 0 0.470588 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_117" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_117" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1.52171" />
                <feGaussianBlur stdDeviation="13.9617" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.810246 0 0 0 0 0.559595 0 0 0 1 0" />
                <feBlend in2="shape" mode="normal" result="effect2_innerShadow_5_117" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute contents left-0 top-0" data-name="Mask group">
        <div className="absolute flex h-[310.65px] items-center justify-center left-[41.88px] top-[50px] w-[254.737px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-17.82deg]">
            <div className="h-[267.985px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-41.884px_-50px] mask-size-[331.163px_468.371px] relative w-[181.428px]" data-name="Слой 1 — копия 1" style={{ maskImage: `url('${img11}')` }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img12} />
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[253.953px] left-[-0.93px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.93px_-317.209px] mask-size-[331.163px_468.371px] to-[#071d10] top-[317.21px] w-[333.023px]" style={{ maskImage: `url('${img11}')` }} />
      </div>
      <div className="absolute font-['Furore:Regular',sans-serif] leading-[normal] left-[calc(50%-145.56px)] not-italic text-[24.12px] text-white top-[349.02px] uppercase w-[313px]">
        <p className="mb-0">Автор книги:</p>
        <p>Биотрансформация</p>
      </div>
      <p className="absolute font-['Montserrat:Regular',sans-serif] leading-[normal] left-[calc(50%-145.56px)] not-italic text-[17.399px] text-white top-[406px] w-[286px]">История объединения остеопатии и кардиохирургии</p>
    </div>
  );
}