import React from "react";
import svgPaths from "@/imports/svg-20xmpkwyde";

function Icon() {
  return (
    <div className="size-full overflow-d-none position-position-relative d-flex-flex-shrink-0" data-name="Icon">
      <div className="position-position-absolute" data-name="Vector">
        <div className="position-position-absolute">
          <svg className="d-d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.336 117.336">
            <path d={svgPaths.p2b431700} id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
      <div className="position-position-absolute" data-name="Vector">
        <div className="position-position-absolute">
          <svg className="d-d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 32">
            <path d="M5.33333 5.33333V26.6667" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
      <div className="position-position-absolute left-3/4" style={{'bottom':'79.17%', 'right':'8.33%', 'top':'20.83%'}} data-name="Vector">
        <div className="position-position-absolute">
          <svg className="d-d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 10.6667">
            <path d="M26.6667 5.33333H5.33333" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
      <div className="position-position-absolute" data-name="Vector">
        <div className="position-position-absolute">
          <svg className="d-d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 21.3333">
            <path d="M5.33333 5.33333V16" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
      <div className="position-position-absolute bottom-1/4 top-3/4" style={{'left':'12.5%', 'right':'79.17%'}} data-name="Vector">
        <div className="position-position-absolute">
          <svg className="d-d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 10.6667">
            <path d="M16 5.33333H5.33333" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DecorativeIcon() {
  return (
    <div className="position-position-absolute opacity-10 lg:right-[-1px] top-0 lg:size-[192px] lg:style={{padding: "32px"}} pe-none" style={{'right':'-24px', 'padding':'24px'}} data-name="Container">
      <Icon />
    </div>
  );
}

function LymbusBadge() {
  return (
    <div className="px-3 d-d-flex align-align-items-center gap-2 rounded-circle d-flex-flex-shrink-0 w-fit" style={{'backgroundColor':'#4f39f6', 'height':'24px'}} data-name="Container">
      <div className="" data-name="Icon">
        <svg className="d-d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g clipPath="url(#clip0_81_326)" id="Icon">
            <path d={svgPaths.p1af8b080} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M11.6667 1.75V4.08333" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M12.8333 2.91667H10.5" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M2.33333 9.91667V11.0833" id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M2.91667 10.5H1.75" id="Vector_5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
          <defs>
            <clipPath id="clip0_81_326">
              <rect fill="white" height="14" width="14" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="fw-bold leading-none text-white" style={{'fontSize':'12px'}}>Lymbus Insight</p>
    </div>
  );
}

export function InsightFirstCard() {
  return (
    <div 
      className="border position-position-relative w-100 lg:style={{height: "200px"}} overflow-d-none d-d-flex align-align-items-center" style={{'borderColor':'#e0e7ff', 'borderRadius':'24px', 'minHeight':'160px'}} 
      data-name="InsightFirstCard" 
      style={{ backgroundImage: "linear-gradient(166.414deg, rgb(238, 242, 255) 0%, rgb(255, 255, 255) 100%)" }}
    >
      <DecorativeIcon />
      
      <div className="position-position-relative z-10 p-4 lg:p-8 d-d-flex d-flex-column gap-3 lg:gap-4 w-100">
        <LymbusBadge />
        
        <h3 className="fw-bold lg:style={{color: "22px"}} leading-snug lg:leading-tight tracking-tight" style={{'color':'#0f172b', 'fontSize':'18px', 'maxWidth':'800px'}}>
          Patient satisfaction is at its highest point in a year, driven by recent improvements in the West Wing.
        </h3>
        
        <div className="d-d-flex d-flex-column sm:d-flex-row align-align-items-start sm:align-items-center gap-4 lg:gap-8">
          <div className="d-d-flex gap-8">
            <div className="d-d-flex d-flex-column gap-0.5">
              <p className="fw-bold text-uppercase tracking-wider" style={{'color':'#90a1b9', 'fontSize':'10px'}}>Current Score</p>
              <p className="fw-bold lg:style={{color: "24px"}} leading-none" style={{'color':'#0f172b', 'fontSize':'20px'}}>88.5</p>
            </div>
            
            <div className="d-d-flex d-flex-column gap-0.5">
              <p className="fw-bold text-uppercase tracking-wider" style={{'color':'#90a1b9', 'fontSize':'10px'}}>YoY Trend</p>
              <p className="fw-bold lg:style={{color: "24px"}} leading-none" style={{'color':'#096', 'fontSize':'20px'}}>+4.2%</p>
            </div>
          </div>
          
          <button className="d-d-flex align-align-items-center gap-1.5 px-px hover:opacity-80 transition-opacity cursor-pointer group mt-1 sm:mt-0">
            <p className="fw-bold text-center" style={{'color':'#4f39f6', 'fontSize':'14px'}}>See what changed</p>
            <div className="group-hover:translate-x-0.5 transition-transform">
              <svg className="d-d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Icon">
                  <path d="M3.33333 8H12.6667" id="Vector" stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 3.33333L12.6667 8L8 12.6667" id="Vector_2" stroke="#4F39F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
