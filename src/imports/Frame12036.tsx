import imgScreenshot20260202At23842Pm1 from "figma:asset/f6172ad376ab88135302728ac4457cb6e905a532.png";
import imgScreenshot20260202At23858Pm1 from "figma:asset/209b7c5c8fe6b35510ae738f4ad6383bc1aed293.png";
import imgScreenshot20260202At23922Pm1 from "figma:asset/d9f2bfe67e1466fbef15243d214540b7ffcbdf02.png";
import imgScreenshot20260202At23932Pm1 from "figma:asset/8984362a6d3c726a7ae2fe50330d9b8d692adb12.png";

function Frame2() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className="font-["Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#09156a] text-[20px] tracking-[-0.95px]">Campaigns</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className="font-["Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#09156a] text-[20px] tracking-[-0.95px]">{`Forms `}</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative size-full" style={{'backgroundColor':'#f6f8f9', 'gap':'40px'}}>
      <Frame2 />
      <div className="position-relative flex-shrink-0 w-100" data-name="Screenshot 2026-02-02 at 2.38.42 PM 1">
        <img alt="" className="position-absolute top-0 bottom-0 start-0 end-0 max-w-none object-fit-cover pe-none size-full" src={imgScreenshot20260202At23842Pm1} />
      </div>
      <div className="position-relative flex-shrink-0 w-100" data-name="Screenshot 2026-02-02 at 2.38.58 PM 1">
        <img alt="" className="position-absolute top-0 bottom-0 start-0 end-0 max-w-none object-fit-cover pe-none size-full" src={imgScreenshot20260202At23858Pm1} />
      </div>
      <Frame1 />
      <div className="position-relative flex-shrink-0 w-100" data-name="Screenshot 2026-02-02 at 2.39.22 PM 1">
        <img alt="" className="position-absolute top-0 bottom-0 start-0 end-0 max-w-none object-fit-cover pe-none size-full" src={imgScreenshot20260202At23922Pm1} />
      </div>
      <div className="position-relative flex-shrink-0 w-100" data-name="Screenshot 2026-02-02 at 2.39.32 PM 1">
        <img alt="" className="position-absolute top-0 bottom-0 start-0 end-0 max-w-none object-fit-cover pe-none size-full" src={imgScreenshot20260202At23932Pm1} />
      </div>
    </div>
  );
}