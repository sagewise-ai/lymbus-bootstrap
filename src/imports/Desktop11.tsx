import svgPaths from "./svg-6hm1zo0l4f";
import imgEllipse1 from "figma:asset/b4afd5209fa1b1e49ad566f80669447c53f85543.png";

function TextInput() {
  return (
    <div className="position-absolute content-stretch d-flex align-items-center start-0 overflow-hidden top-0" style={{'backgroundColor':'#f5f7f7', 'height':'36px', 'paddingLeft':'40px', 'paddingRight':'16px', 'paddingTop':'8px', 'paddingBottom':'8px', 'borderRadius':'10px', 'width':'448px'}} data-name="Text Input">
      <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)]" style={{fontFamily: "Inter, sans-serif"}}>Search</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Icon">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.0005 14L11.1338 11.1333" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px', 'height':'36px', 'paddingLeft':'12px', 'paddingRight':'12px', 'paddingTop':'10px', 'paddingBottom':'10px', 'width':'448px'}} data-name="Container">
      <TextInput />
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="min-h-px min-w-px position-relative" style={{'height':'16px'}} data-name="Text">
      <div className="bg-clip-padding border-0 border-solid position-relative size-full" style={{'borderColor':'transparent'}}>
        <p className="position-absolute  font-bold leading-[16px] left-0 not-italic text-[#364153] text-[12px] top-[0.5px]" style={{fontFamily: "Inter, sans-serif"}}>Main Hospital</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Icon">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'gap':'8px', 'height':'36px', 'paddingLeft':'16px', 'paddingRight':'16px', 'borderRadius':'10px', 'width':'129px'}} data-name="Container">
      <Text />
      <Icon1 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="position-relative flex-shrink-0">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-center position-relative" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="position-absolute bg-white content-stretch d-flex align-items-center justify-content-between pb-px top-0" style={{'height':'64px', 'left':'280px', 'paddingLeft':'32px', 'paddingRight':'32px', 'width':'1160px'}} data-name="DashboardHeader">
      <div aria-hidden="true" className="position-absolute border-bottom border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6'}} />
      <p className=" font-bold leading-[28px] not-italic relative shrink-0 text-[#09156a] text-[20px] tracking-[-0.5px]" style={{fontFamily: "Inter, sans-serif"}}>Dashboard</p>
      <Frame106 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Icon">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p14760580} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="position-relative flex-shrink-0" style={{'backgroundColor':'#374dea', 'borderRadius':'10px'}} data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-center justify-content-center position-relative size-full" style={{'borderColor':'transparent'}}>
        <Icon2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="position-relative flex-shrink-0" style={{'height':'28px', 'width':'92.117px'}} data-name="Text">
      <div className="bg-clip-padding border-0 border-solid position-relative size-full" style={{'borderColor':'transparent'}}>
        <p className="position-absolute  font-bold leading-[28px] left-0 not-italic text-[#09156a] text-[20px] top-[-0.5px] tracking-[-0.5px]" style={{fontFamily: "Inter, sans-serif"}}>Lymbus AI</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="HorizontalBorder">
      <div aria-hidden="true" className="position-absolute border-bottom border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'rgba(255, 255, 255, 0.1)'}} />
      <div className="d-flex flex-row align-items-center size-full">
        <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-center position-relative w-100" style={{'borderColor':'transparent', 'gap':'12px', 'paddingBottom':'25px', 'paddingTop':'24px', 'paddingLeft':'24px', 'paddingRight':'24px'}}>
          <Container2 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="min-h-px min-w-px position-relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] text-white w-full" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#374dea', 'borderRadius':'14px'}} data-name="Component 2">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'8px', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
          <Component />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="min-h-px min-w-px position-relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Lymbus AI</p>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Component 3">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'8px', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
          <Component3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="min-h-px min-w-px position-relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Root Cause</p>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Component 3">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'8px', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
          <Component5 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="min-h-px min-w-px position-relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Benchmarking</p>
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Component 3">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'8px', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
          <Component7 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p3df93000} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p176f31c0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="min-h-px min-w-px position-relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Engagement</p>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Component 3">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'8px', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
          <Component9 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p377dab00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="min-h-px min-w-px position-relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Escalation</p>
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Component 3">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'8px', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
          <Component11 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="min-h-px min-w-px position-relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Reports</p>
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Component 3">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'8px', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
          <Component13 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'4px'}}>
      <Component1 />
      <Component2 />
      <Component4 />
      <Component6 />
      <Component8 />
      <Component10 />
      <Component12 />
    </div>
  );
}

function Component15() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="min-h-px min-w-px position-relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Settings</p>
        </div>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Component 3">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'8px', 'paddingLeft':'26px', 'paddingRight':'26px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
          <Component15 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="position-relative flex-shrink-0" data-name="help-circle">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2937)" id="help-circle">
          <path d={svgPaths.p2bae4c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          <path d={svgPaths.p22540600} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
        <defs>
          <clipPath id="clip0_1_2937">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="min-h-px min-w-px position-relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>{`Help & Support`}</p>
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Component 4">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'8px', 'paddingLeft':'26px', 'paddingRight':'26px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
          <HelpCircle />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'4px'}}>
      <Component14 />
      <Component16 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-between min-h-px min-w-px position-relative w-100" data-name="List">
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="min-h-px min-w-px position-relative">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column font-[" style={{'borderColor':'transparent'}}Inter:Regular',sans-serif] font-normal items-start justify-center leading-[0] not-italic relative w-full">
        <div className="d-flex flex-column justify-content-center position-relative flex-shrink-0 w-100" style={{'color':'#151515', 'fontSize':'14px'}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Robert Fox</p>
        </div>
        <div className="d-flex flex-column justify-content-center position-relative flex-shrink-0 w-100" style={{'color':'#cecece', 'fontSize':'12px'}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>rfox@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="position-relative" data-name="arrow-down">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-down">
          <path d={svgPaths.p11c75a40} id="Vector" stroke="var(--stroke-0, #C3C3C3)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'8px'}}>
      <div className="d-flex flex-row align-items-center size-full">
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'8px', 'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'8px', 'paddingBottom':'8px'}}>
          <div className="position-relative flex-shrink-0">
            <img alt="" className="d-block max-w-none size-full" height="32" src={imgEllipse1} width="32" />
          </div>
          <Frame101 />
          <div className="d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-shrink-0 rotate-90">
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'24px'}}>
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231 1">
            <line id="Line 3" stroke="var(--stroke-0, #EEEEEE)" x2="231" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Nav() {
  return (
    <div className="min-h-px min-w-px position-relative w-100" data-name="Nav">
      <div className="overflow-auto size-full">
        <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start justify-content-between position-relative size-full" style={{'borderColor':'transparent', 'padding':'24px'}}>
          <List />
          <Frame104 />
        </div>
      </div>
    </div>
  );
}

function Aside() {
  return (
    <div className="position-absolute bg-white content-stretch d-flex flex-column align-items-start start-0 pr-px top-0" style={{'height':'900px', 'width':'280px'}} data-name="Aside">
      <div aria-hidden="true" className="position-absolute border-end border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee'}} />
      <HorizontalBorder />
      <Nav />
    </div>
  );
}

function Icon3() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0 w-100" style={{'height':'200px'}} data-name="Icon">
      <div className="position-absolute top-1/4" style={{'bottom':'-25%', 'left':'62.5%', 'right':'-12.5%'}} data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 202">
            <path d={svgPaths.p397ec00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="position-absolute left-1/2 top-0" style={{'bottom':'-50%', 'right':'-25%'}} data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 302">
            <path d={svgPaths.pffaa600} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="position-absolute top-1/2" style={{'bottom':'10%', 'left':'12.5%', 'right':'12.5%'}} data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301.473 81.7809">
            <path d={svgPaths.p135fa780} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="position-absolute content-stretch d-flex flex-column align-items-start opacity-10" style={{'height':'200px', 'left':'736px', 'top':'-10px', 'width':'400px'}} data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="position-absolute start-0 top-0" style={{'height':'40px', 'width':'80.547px'}} data-name="Heading 1">
      <p className="position-absolute  font-bold leading-[40px] left-0 not-italic text-[36px] text-white top-0" style={{fontFamily: "Inter, sans-serif"}}>88.5</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="position-relative flex-shrink-0" style={{'height':'20px', 'width':'43.836px'}} data-name="Text">
      <div className="bg-clip-padding border-0 border-solid position-relative size-full" style={{'borderColor':'transparent'}}>
        <p className="position-absolute  font-bold leading-[20px] left-0 not-italic text-[#00c853] text-[14px] top-[0.5px]" style={{fontFamily: "Inter, sans-serif"}}>+4.2%</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="position-relative" data-name="Icon">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9706 16.9706">
        <g id="Icon">
          <path d={svgPaths.p20ba5000} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.82843" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="position-absolute content-stretch d-flex align-items-center" style={{'backgroundColor':'rgba(255, 255, 255, 0.1)', 'gap':'1.515px', 'height':'28px', 'left':'96.55px', 'paddingLeft':'8px', 'borderRadius':'10px', 'top':'14px'}} data-name="Container">
      <Text2 />
      <div className="d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-shrink-0 rotate-45">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'42px'}} data-name="Container">
      <Heading />
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="position-relative flex-shrink-0" style={{'height':'126px', 'width':'300px'}} data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative size-full" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <p className=" font-medium leading-[20px] not-italic opacity-70 relative shrink-0 text-[14px] text-white" style={{fontFamily: "Inter, sans-serif"}}>Overall Patient Experience Score</p>
        <Container15 />
        <p className=" font-normal leading-[16px] not-italic opacity-70 relative shrink-0 text-[12px] text-white w-[286px] whitespace-pre-wrap" style={{fontFamily: "Inter, sans-serif"}}>Across all 12 departments, patient satisfaction has reached a 12-month high.</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Icon">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_3097)" id="Icon">
          <path d={svgPaths.p1a1d1d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15 2.25V5.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16.5 3.75H13.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3 12.75V14.25" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3.75 13.5H2.25" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_3097">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="position-relative flex-shrink-0" style={{'backgroundColor':'#04bdd1', 'borderRadius':'14px'}} data-name="Button">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-center position-relative" style={{'borderColor':'transparent', 'gap':'8px', 'paddingLeft':'20px', 'paddingRight':'20px', 'paddingTop':'10px', 'paddingBottom':'10px'}}>
        <Icon5 />
        <p className=" font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white" style={{fontFamily: "Inter, sans-serif"}}>Lymbus Insight</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Icon">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p329b1880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="position-relative flex-shrink-0" style={{'backgroundColor':'rgba(255, 255, 255, 0.1)', 'borderRadius':'14px'}} data-name="Button">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-center position-relative" style={{'borderColor':'transparent', 'gap':'8px', 'paddingLeft':'20px', 'paddingRight':'20px', 'paddingTop':'10px', 'paddingBottom':'10px'}}>
        <Icon6 />
        <p className=" font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white" style={{fontFamily: "Inter, sans-serif"}}>Respond</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="position-relative flex-shrink-0" style={{'height':'40px'}} data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex h-100 align-items-center position-relative" style={{'borderColor':'transparent', 'gap':'12px'}}>
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="position-absolute content-stretch d-flex align-items-start justify-content-between" style={{'left':'32px', 'top':'32px', 'width':'1016px'}} data-name="Container">
      <Container14 />
      <Container17 />
    </div>
  );
}

function HeroCard() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#374dea', 'height':'190px', 'borderRadius':'24px'}} data-name="HeroCard">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0 w-100" style={{'height':'18px'}} data-name="Icon">
      <div className="position-absolute" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15">
            <path d={svgPaths.p10d53400} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="position-absolute" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6625 6.75002">
            <path d={svgPaths.p564d80} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.3'}}>Net Promoter Score</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'4px'}} data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100">
      <Container19 />
    </div>
  );
}

function Component17() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Component 1">
          <path d={svgPaths.p3a7e7417} id="Vector" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 3.5H11V6.5" id="Vector_2" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0ac400] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>5.2% vs last month</p>
      </div>
    </div>
  );
}

function Container24() {
  return <div className="flex-shrink-0 w-0" style={{'height':'15px'}} data-name="Container" />;
}

function Container22() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(10, 196, 0, 0.1)', 'gap':'4px', 'paddingLeft':'6px', 'paddingRight':'6px', 'paddingTop':'2px', 'paddingBottom':'2px', 'borderRadius':'12px'}} data-name="Container">
      <Component17 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-end position-relative flex-shrink-0" style={{'gap':'16px'}}>
      <div className="d-flex flex-column  font-bold justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] tracking-[-0.6px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'32px'}}>58</p>
      </div>
      <Container22 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white min-h-px min-w-px position-relative" style={{'borderRadius':'24px'}} data-name="Container">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
      <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'gap':'16px', 'padding':'24px'}}>
        <Frame1 />
        <Frame />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0 w-100" style={{'height':'18px'}} data-name="Icon">
      <div className="position-absolute" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 3">
            <path d="M0.75 0.75V2.25" id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="position-absolute" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 3">
            <path d="M0.75 0.75V2.25" id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="position-absolute" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
            <path d={svgPaths.p378e8100} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="position-absolute top-1/2" style={{'bottom':'12.5%', 'left':'33.33%', 'right':'16.67%'}} data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 8.25">
            <path d={svgPaths.pf49de98} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="position-absolute bottom-1/2 left-3/4" style={{'right':'8.33%', 'top':'33.33%'}} data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
            <path d={svgPaths.p2c328e80} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.3'}}>PREM Score</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'4px'}} data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100">
      <Container26 />
    </div>
  );
}

function Component18() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Component 1">
          <path d={svgPaths.p3a7e7417} id="Vector" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 3.5H11V6.5" id="Vector_2" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0ac400] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>3.8% vs last month</p>
      </div>
    </div>
  );
}

function Container31() {
  return <div className="flex-shrink-0 w-0" style={{'height':'15px'}} data-name="Container" />;
}

function Container29() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(10, 196, 0, 0.1)', 'gap':'4px', 'paddingLeft':'6px', 'paddingRight':'6px', 'paddingTop':'2px', 'paddingBottom':'2px', 'borderRadius':'12px'}} data-name="Container">
      <Component18 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-end position-relative flex-shrink-0" style={{'gap':'16px'}}>
      <div className="d-flex flex-column  font-bold justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] tracking-[-0.6px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'32px'}}>92</p>
      </div>
      <Container29 />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white min-h-px min-w-px position-relative" style={{'borderRadius':'24px'}} data-name="Container">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
      <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'gap':'16px', 'padding':'24px'}}>
        <Frame3 />
        <Frame4 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0 w-100" style={{'height':'18px'}} data-name="Icon">
      <div className="position-absolute" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
            <path d={svgPaths.p362bfe80} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.3'}}>PROM Score</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'4px'}} data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100">
      <Container33 />
    </div>
  );
}

function Component19() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 2">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Component 2">
          <path d={svgPaths.p10ae5c80} id="Vector" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8.5H11V5.5" id="Vector_2" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c52020] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>1.3%vs last month</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(197, 32, 32, 0.1)', 'gap':'4px', 'paddingLeft':'6px', 'paddingRight':'6px', 'paddingTop':'2px', 'paddingBottom':'2px', 'borderRadius':'12px'}} data-name="Container">
      <Component19 />
      <Container37 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-end position-relative flex-shrink-0" style={{'gap':'16px'}}>
      <div className="d-flex flex-column  font-bold justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] tracking-[-0.6px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'32px'}}>7.5%</p>
      </div>
      <Container36 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white min-h-px min-w-px position-relative" style={{'borderRadius':'24px'}} data-name="Container">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
      <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'gap':'16px', 'padding':'24px'}}>
        <Frame5 />
        <Frame7 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.3'}}>Response Rate</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" data-name="Container">
      <Container40 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100">
      <Container39 />
    </div>
  );
}

function Component20() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Component 1">
          <path d={svgPaths.p3a7e7417} id="Vector" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 3.5H11V6.5" id="Vector_2" stroke="var(--stroke-0, #0AC400)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0ac400] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>2.3% vs last month</p>
      </div>
    </div>
  );
}

function Container43() {
  return <div className="flex-shrink-0 w-0" style={{'height':'15px'}} data-name="Container" />;
}

function Container41() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(10, 196, 0, 0.1)', 'gap':'4px', 'paddingBottom':'2px', 'paddingTop':'2.6px', 'paddingLeft':'6px', 'paddingRight':'6px', 'borderRadius':'12px'}} data-name="Container">
      <Component20 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-end position-relative flex-shrink-0" style={{'gap':'16px'}}>
      <div className="d-flex flex-column  font-bold justify-center leading-[0] not-italic relative shrink-0 text-[42px] text-black text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] tracking-[-0.6px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'32px'}}>42%</p>
      </div>
      <Container41 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white min-h-px min-w-px position-relative" style={{'borderRadius':'24px'}} data-name="Container">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
      <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'gap':'16px', 'padding':'24px'}}>
        <Frame8 />
        <Frame9 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100" style={{'gap':'24px'}}>
      <Container18 />
      <Container25 />
      <Container32 />
      <Container38 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'1.3'}}>Experience Trends</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch d-flex align-items-center min-h-px min-w-px position-relative" data-name="Container">
      <Container46 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-between position-relative flex-shrink-0 w-100">
      <Container45 />
    </div>
  );
}

function Component21() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Component 1">
          <path d={svgPaths.p39656900} fill="var(--fill-0, #166BC0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'4px', 'paddingBottom':'1.75px', 'paddingTop':'4.25px'}} data-name="Item">
      <Component21 />
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black tracking-[0.25px] uppercase whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>NPS</p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Component 1">
          <path d={svgPaths.p39656900} fill="var(--fill-0, #008F7C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'4px', 'paddingBottom':'1.75px', 'paddingTop':'4.25px'}} data-name="Item">
      <Component22 />
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black tracking-[0.25px] uppercase whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>PREM</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Component 1">
          <path d={svgPaths.p39656900} fill="var(--fill-0, #3C8CDD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'4px', 'paddingBottom':'1.75px', 'paddingTop':'4.25px'}} data-name="Item">
      <Component23 />
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black tracking-[0.25px] uppercase whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>PROM</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100" style={{'gap':'10px'}} data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" data-name="Container">
      <List1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="position-absolute" data-name="Group">
      <div className="position-absolute">
        <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 642.026 164.827">
          <g id="Group">
            <path d="M0 164.327H642.026" id="Vector" stroke="var(--stroke-0, #DAE0E7)" strokeDasharray="3 3" />
            <path d="M0 123.369H642.026" id="Vector_2" stroke="var(--stroke-0, #DAE0E7)" strokeDasharray="3 3" />
            <path d="M0 82.4135H642.026" id="Vector_3" stroke="var(--stroke-0, #DAE0E7)" strokeDasharray="3 3" />
            <path d="M0.000221471 41.4567H642.026" id="Vector_4" stroke="var(--stroke-0, #DAE0E7)" strokeDasharray="3 3" />
            <path d="M0.000243921 0.5H642.026" id="Vector_5" stroke="var(--stroke-0, #DAE0E7)" strokeDasharray="3 3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <p className="position-absolute  font-normal inset-[79.25%_93.12%_15.3%_4.85%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center" style={{fontFamily: "Inter, sans-serif"}}>Jul</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <p className="position-absolute  font-normal inset-[79.25%_73.98%_15.3%_23.26%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center" style={{fontFamily: "Inter, sans-serif"}}>Aug</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <p className="position-absolute  font-normal inset-[79.25%_55.39%_15.3%_41.85%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center" style={{fontFamily: "Inter, sans-serif"}}>Sep</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <p className="position-absolute  font-normal inset-[79.25%_36.81%_15.3%_60.72%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center" style={{fontFamily: "Inter, sans-serif"}}>Oct</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <p className="position-absolute  font-normal inset-[79.25%_17.99%_15.3%_79.25%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center" style={{fontFamily: "Inter, sans-serif"}}>Nov</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <p className="position-absolute  font-normal inset-[79.25%_0.14%_15.3%_97.09%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center" style={{fontFamily: "Inter, sans-serif"}}>Dec</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
      <Group9 />
    </div>
  );
}

function Group2() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <Group3 />
      <p className="position-absolute  font-normal inset-[88.98%_0.19%_5.11%_94.87%] leading-[normal] not-italic text-[#1359a0] text-[10.995px] text-right" style={{fontFamily: "Inter, sans-serif"}}>Month</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <p className="position-absolute  font-normal inset-[73.12%_95.27%_21.42%_3.72%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center" style={{fontFamily: "Inter, sans-serif"}}>0</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <p className="position-absolute  font-normal inset-[54.5%_95.32%_40.04%_2.79%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center" style={{fontFamily: "Inter, sans-serif"}}>25</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <p className="position-absolute  font-normal inset-[35.89%_95.32%_58.66%_2.79%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center" style={{fontFamily: "Inter, sans-serif"}}>50</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <p className="position-absolute  font-normal inset-[17.27%_95.47%_77.27%_2.79%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center" style={{fontFamily: "Inter, sans-serif"}}>75</p>
    </div>
  );
}

function Group16() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <p className="position-absolute  font-normal inset-[0.65%_95.39%_93.89%_1.99%] leading-[normal] not-italic text-[#9ca3af] text-[10px] text-center" style={{fontFamily: "Inter, sans-serif"}}>100</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
    </div>
  );
}

function Group10() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <Group11 />
      <div className="position-absolute d-flex align-items-center justify-content-center">
        <div className="-rotate-90 flex-shrink-0" style={{'height':'13px', 'width':'31px'}}>
          <p className=" font-normal leading-[normal] not-italic relative text-[#1359a0] text-[10.995px]" style={{fontFamily: "Inter, sans-serif"}}>Score</p>
        </div>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="position-absolute" data-name="Group">
      <div className="position-absolute">
        <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645.172 96.2682">
          <g id="Group">
            <path d={svgPaths.p148c8a80} fill="url(#paint0_linear_1_2981)" fillOpacity="0.6" id="Vector" />
            <path d={svgPaths.p5c86200} id="Vector_2" stroke="var(--stroke-0, #166BC0)" strokeWidth="2.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2981" x1="0.047584" x2="0.047584" y1="1.24909" y2="96.2682">
              <stop offset="0.05" stopColor="#166BC0" stopOpacity="0.25" />
              <stop offset="0.95" stopColor="#166BC0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="position-absolute" data-name="Group">
      <div className="position-absolute">
        <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645.148 140.502">
          <g id="Group">
            <path d={svgPaths.p23acb00} fill="url(#paint0_linear_1_3034)" fillOpacity="0.6" id="Vector" />
            <path d={svgPaths.p10ca3f00} id="Vector_2" stroke="var(--stroke-0, #008F7C)" strokeWidth="2.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3034" x1="0.047584" x2="0.047584" y1="1.25" y2="140.502">
              <stop offset="0.05" stopColor="#008F7C" stopOpacity="0.25" />
              <stop offset="0.95" stopColor="#008F7C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <Group20 />
    </div>
  );
}

function Group22() {
  return (
    <div className="position-absolute" data-name="Group">
      <div className="position-absolute">
        <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645.176 129.033">
          <g id="Group">
            <path d={svgPaths.p33780c00} fill="url(#paint0_linear_1_3030)" fillOpacity="0.6" id="Vector" />
            <path d={svgPaths.p104072c0} id="Vector_2" stroke="var(--stroke-0, #3C8CDD)" strokeWidth="2.5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3030" x1="0.0515376" x2="0.0515376" y1="1.24909" y2="129.033">
              <stop offset="0.05" stopColor="#3C8CDD" stopOpacity="0.25" />
              <stop offset="0.95" stopColor="#3C8CDD" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="position-absolute contents" data-name="Group">
      <Group22 />
    </div>
  );
}

function Component24() {
  return (
    <div className="min-h-px min-w-px position-relative w-100" data-name="Component 1">
      <Group />
      <Group2 />
      <Group10 />
      <Group17 />
      <Group19 />
      <Group21 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative w-100" style={{'maxHeight':'220px', 'maxWidth':'753px'}} data-name="Container">
      <Component24 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center position-relative flex-shrink-0 w-100" style={{'height':'220px'}} data-name="Container">
      <Container49 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'32px'}}>
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white content-stretch d-flex flex-column align-items-start position-relative align-self-stretch flex-shrink-0" style={{'gap':'16px', 'padding':'24px', 'borderRadius':'24px', 'width':'736px'}} data-name="Container">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="position-relative flex-shrink-0" data-name="arrow-right">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d="M4 2.5L7.5 6L4 9.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'#04bdd1', 'gap':'4px', 'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'4px', 'paddingBottom':'4px', 'borderRadius':'6px'}}>
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.5'}}>All Alerts</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function Frame105() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-center justify-content-between position-relative w-100" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="" style={{'lineHeight':'1.5'}}>Active Alerts</p>
        </div>
        <Frame13 />
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p19bc7f80} id="Vector" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6V8.66667" id="Vector_2" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(197, 32, 32, 0.1)', 'borderRadius':'14px'}} data-name="Overlay">
      <Component26 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'12px'}}>
      <Overlay />
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c52020] text-[11px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.2'}}>Emergency NPS Drop</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(197,32,32,0.6)] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'16.5px'}}>2h ago</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-between position-relative flex-shrink-0 w-100">
      <Frame15 />
      <Container52 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center position-relative flex-shrink-0 w-100" style={{'gap':'12px'}} data-name="Container">
      <Frame14 />
      <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'1.3'}}>Cardiology department NPS dropped 15 points this week.</p>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div className="bg-white position-relative flex-shrink-0 w-100" style={{'borderRadius':'16px'}} data-name="Component 16">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'16px'}} />
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
        <Container51 />
      </div>
    </div>
  );
}

function Component28() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.pa1bcac0} id="Vector" stroke="var(--stroke-0, #BA7908)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f7f3780} id="Vector_2" stroke="var(--stroke-0, #BA7908)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(186, 121, 8, 0.1)', 'borderRadius':'14px'}} data-name="Overlay">
      <Component28 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'12px'}}>
      <Overlay1 />
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ba7908] text-[11px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.2'}}>Wait Time Complaints Rising</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(186,121,8,0.6)] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'16.5px'}}>2h ago</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-between position-relative flex-shrink-0 w-100">
      <Frame18 />
      <Container54 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center position-relative flex-shrink-0 w-100" style={{'gap':'12px'}} data-name="Container">
      <Frame16 />
      <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'1.3'}}>32% increase in wait time mentions in feedback.</p>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="bg-white position-relative flex-shrink-0 w-100" style={{'borderRadius':'16px'}} data-name="Component 17">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'16px'}} />
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
        <Container53 />
      </div>
    </div>
  );
}

function Component30() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p1bb15080} id="Vector" stroke="var(--stroke-0, #166BC0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(22, 107, 192, 0.1)', 'borderRadius':'14px'}} data-name="Overlay">
      <Component30 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start overflow-hidden position-relative flex-shrink-0" data-name="Heading 4">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#166bc0] text-[12px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.2'}}>New Feedback Batch</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'12px'}}>
      <Overlay2 />
      <Heading1 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(22,107,192,0.6)] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'16.5px'}}>2h ago</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-between position-relative flex-shrink-0 w-100">
      <Frame20 />
      <Container56 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center position-relative flex-shrink-0 w-100" style={{'gap':'12px'}} data-name="Container">
      <Frame19 />
      <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'1.3'}}>147 new patient responses ready for analysis.</p>
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="bg-white position-relative flex-shrink-0 w-100" style={{'borderRadius':'16px'}} data-name="Component 18">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'16px'}} />
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
        <Container55 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start min-h-px min-w-px position-relative" style={{'gap':'16px'}} data-name="Container">
      <Frame105 />
      <Component25 />
      <Component27 />
      <Component29 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'24px'}}>
      <Container44 />
      <Container50 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start fst-normal position-relative flex-shrink-0 whitespace-nowrap" style={{'gap':'8px', 'lineHeight':'0'}}>
      <div className="d-flex flex-column  font-semibold justify-center relative shrink-0 text-[#151515] text-[16px]" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.3'}}>Breakdown by Department</p>
      </div>
      <div className="d-flex flex-column  font-normal justify-center relative shrink-0 text-[12px] text-[rgba(21,21,21,0.7)]" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.3'}}>Operational Performance Context</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100">
      <Frame22 />
    </div>
  );
}

function Filter() {
  return (
    <div className="position-relative flex-shrink-0" data-name="filter">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter">
          <path d={svgPaths.p2771e980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Download() {
  return (
    <div className="position-relative flex-shrink-0" data-name="download">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="download">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p7624a00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10V2" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px'}}>
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.5'}}>Export Table</p>
      </div>
      <Download />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'16px'}}>
      <Filter />
      <Frame23 />
    </div>
  );
}

function Container57() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Container">
      <div className="content-stretch d-flex align-items-start justify-content-between position-relative w-100" style={{'padding':'24px'}}>
        <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="" style={{'lineHeight':'1.5'}}>Department Performance</p>
        </div>
        <Frame111 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex flex-column align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Department</p>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex flex-column align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>Neurology</p>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex flex-column align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>Pediatrics</p>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex flex-column align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>Oncology</p>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex flex-column align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>Dermatology</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-sticky top-0">
      <Frame32 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame40 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame42 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame43 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-px position-relative flex-shrink-0 w-100">
        <div className="position-absolute bottom-full start-0 end-0" style={{'top':'-100%'}}>
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <Frame44 />
      <div className="h-px position-relative flex-shrink-0 w-100">
        <div className="position-absolute bottom-full start-0 end-0" style={{'top':'-100%'}}>
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Forms</p>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame33 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame46 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame47 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame48 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame49 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Requests</p>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame34 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame51 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame52 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame53 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame54 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Responses</p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame35 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame57 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame58 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame59 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame60 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Response Rate</p>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame36 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame62 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame63 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame64 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame65 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Rating</p>
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame37 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame67 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame68 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame69 />
      <div className="h-px position-relative flex-shrink-0 w-100">
        <div className="position-absolute bottom-full start-0 end-0" style={{'top':'-100%'}}>
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <Frame70 />
      <div className="h-px position-relative flex-shrink-0 w-100">
        <div className="position-absolute bottom-full start-0 end-0" style={{'top':'-100%'}}>
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Experience</p>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>86/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>54/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>86/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>86/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame38 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame72 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame73 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame74 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame75 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Complaints</p>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>3%</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(74, 109, 124, 0.1)', 'gap':'4px', 'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'2px', 'paddingBottom':'2px', 'borderRadius':'12px'}} data-name="Container">
      <Container59 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'53px'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative size-full" style={{'padding':'16px'}}>
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fb7185] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>15%</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(251, 113, 133, 0.1)', 'gap':'4px', 'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'2px', 'paddingBottom':'2px', 'borderRadius':'12px'}} data-name="Container">
      <Container61 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'53px'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative size-full" style={{'padding':'16px'}}>
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>7%</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(74, 109, 124, 0.1)', 'gap':'4px', 'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'2px', 'paddingBottom':'2px', 'borderRadius':'12px'}} data-name="Container">
      <Container63 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'53px'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative size-full" style={{'padding':'16px'}}>
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>3%</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(74, 109, 124, 0.1)', 'gap':'4px', 'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'2px', 'paddingBottom':'2px', 'borderRadius':'12px'}} data-name="Container">
      <Container65 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'53px'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative size-full" style={{'padding':'16px'}}>
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame39 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame77 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame78 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame79 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame80 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="135" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100">
      <Frame41 />
      <Frame45 />
      <Frame50 />
      <Frame55 />
      <Frame61 />
      <Frame66 />
      <Frame71 />
      <Frame76 />
    </div>
  );
}

function Container66() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'24px'}} data-name="Container">
      <div className="size-full" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'borderRadius':'24px'}}>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
      <Container57 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1080 1">
            <line id="Line 3" stroke="var(--stroke-0, #EEEEEE)" x2="1080" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame31 />
      <Container66 />
    </div>
  );
}

function Component31() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px', 'width':'720px'}}>
      <Component31 />
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p>
          <span className="" style={{'lineHeight':'1.3'}}>{`Try Lymbus AI: `}</span>
          <span className="font-["Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[1.3]">{`"Compare Cardiology performance across all locations"`}</span>
        </p>
      </div>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="position-relative flex-shrink-0" data-name="arrow-right">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d="M4 2.5L7.5 6L4 9.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0 w-100" style={{'height':'200px'}} data-name="Icon">
      <div className="position-absolute top-1/4" style={{'bottom':'-25%', 'left':'62.5%', 'right':'-12.5%'}} data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 202">
            <path d={svgPaths.p397ec00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="position-absolute left-1/2 top-0" style={{'bottom':'-50%', 'right':'-25%'}} data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 302">
            <path d={svgPaths.pffaa600} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="position-absolute top-1/2" style={{'bottom':'10%', 'left':'12.5%', 'right':'12.5%'}} data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301.473 81.7809">
            <path d={svgPaths.p135fa780} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="position-absolute content-stretch d-flex flex-column align-items-start opacity-10" style={{'height':'200px', 'left':'752px', 'top':'-88px', 'width':'400px'}} data-name="Container">
      <Icon10 />
    </div>
  );
}

function Container67() {
  return (
    <div className="position-relative flex-shrink-0" style={{'backgroundColor':'#374dea', 'borderRadius':'24px', 'width':'1080px'}} data-name="Container">
      <div className="content-stretch d-flex align-items-center justify-content-between overflow-hidden position-relative w-100" style={{'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px', 'borderRadius':'inherit'}}>
        <Frame110 />
        <ArrowRight1 />
        <Container68 />
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'24px'}}>
      <Frame21 />
      <Frame56 />
      <Container67 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start fst-normal position-relative flex-shrink-0 whitespace-nowrap" style={{'gap':'8px', 'lineHeight':'0'}}>
      <div className="d-flex flex-column  font-semibold justify-center relative shrink-0 text-[#2c3e50] text-[16px]" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.3'}}>Breakdown by Location</p>
      </div>
      <div className="d-flex flex-column  font-normal justify-center relative shrink-0 text-[12px] text-[rgba(21,21,21,0.7)]" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.3'}}>Operational Performance Context</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100">
      <Frame24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-between position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2c3e50] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Best Performing</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0ac400] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>84% Experience Score</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(16, 185, 129, 0.1)', 'paddingBottom':'2px', 'paddingTop':'2.6px', 'paddingLeft':'6px', 'paddingRight':'6px', 'borderRadius':'12px'}} data-name="Container">
      <Container71 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-end position-relative flex-shrink-0 w-100" style={{'gap':'8px'}}>
      <div className="d-flex flex-column  font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[24px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.2'}}>West Clinic</p>
      </div>
      <Container70 />
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-white min-h-px min-w-px position-relative" style={{'borderRadius':'24px'}} data-name="Container">
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'gap':'16px', 'padding':'24px'}}>
          <Frame25 />
          <Frame26 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-between position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2c3e50] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Response Fatigue</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ba7908] text-[11px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.2'}}>62% Response Rate</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(255, 179, 138, 0.1)', 'paddingBottom':'2px', 'paddingTop':'2.6px', 'paddingLeft':'6px', 'paddingRight':'6px', 'borderRadius':'12px'}} data-name="Container">
      <Container74 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-end position-relative flex-shrink-0 w-100" style={{'gap':'8px'}}>
      <div className="d-flex flex-column  font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[24px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.2'}}>North Center</p>
      </div>
      <Container73 />
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-white min-h-px min-w-px position-relative" style={{'borderRadius':'24px'}} data-name="Container">
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'gap':'16px', 'padding':'24px'}}>
          <Frame27 />
          <Frame28 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-between position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2c3e50] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>High Complaint Density</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c52020] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>15% Negative Feedback</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(251, 113, 133, 0.1)', 'paddingBottom':'2px', 'paddingTop':'2.6px', 'paddingLeft':'6px', 'paddingRight':'6px', 'borderRadius':'12px'}} data-name="Container">
      <Container77 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-end position-relative flex-shrink-0 w-100" style={{'gap':'8px'}}>
      <div className="d-flex flex-column  font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[24px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.2'}}>North Center</p>
      </div>
      <Container76 />
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-white min-h-px min-w-px position-relative" style={{'borderRadius':'24px'}} data-name="Container">
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'gap':'16px', 'padding':'24px'}}>
          <Frame29 />
          <Frame30 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'24px'}}>
      <Container69 />
      <Container72 />
      <Container75 />
    </div>
  );
}

function Filter1() {
  return (
    <div className="position-relative flex-shrink-0" data-name="filter">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter">
          <path d={svgPaths.p2771e980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Download1() {
  return (
    <div className="position-relative flex-shrink-0" data-name="download">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="download">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p7624a00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10V2" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px'}}>
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.5'}}>Export Table</p>
      </div>
      <Download1 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'16px'}}>
      <Filter1 />
      <Frame84 />
    </div>
  );
}

function Container78() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Container">
      <div className="content-stretch d-flex align-items-start justify-content-between position-relative w-100" style={{'padding':'24px'}}>
        <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="" style={{'lineHeight':'1.5'}}>Location Performance</p>
        </div>
        <Frame112 />
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex flex-column align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Location</p>
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex flex-column align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>Main Hospital</p>
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex flex-column align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>East Wing</p>
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex flex-column align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>West Wing</p>
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-column align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex flex-column align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>North Center</p>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-sticky top-0">
      <Frame87 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame88 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame89 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame90 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-px position-relative flex-shrink-0 w-100">
        <div className="position-absolute bottom-full start-0 end-0" style={{'top':'-100%'}}>
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <Frame91 />
      <div className="h-px position-relative flex-shrink-0 w-100">
        <div className="position-absolute bottom-full start-0 end-0" style={{'top':'-100%'}}>
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Requests</p>
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,800</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame93 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame94 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame95 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame96 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame97 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Responses</p>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>2,100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame99 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame100 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame107 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame113 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame114 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Response Rate</p>
        </div>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame116 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame117 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame118 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame119 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame120 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Rating</p>
        </div>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.5'}}>4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame122 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame123 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame124 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame125 />
      <div className="h-px position-relative flex-shrink-0 w-100">
        <div className="position-absolute bottom-full start-0 end-0" style={{'top':'-100%'}}>
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <Frame126 />
      <div className="h-px position-relative flex-shrink-0 w-100">
        <div className="position-absolute bottom-full start-0 end-0" style={{'top':'-100%'}}>
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 8" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'rgba(255, 255, 255, 0.2)'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative w-100" style={{'padding':'16px'}}>
          <p className=" font-bold leading-[15px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[1px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Negatives</p>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>3%</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(74, 109, 124, 0.1)', 'gap':'4px', 'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'2px', 'paddingBottom':'2px', 'borderRadius':'12px'}} data-name="Container">
      <Container80 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'53px'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative size-full" style={{'padding':'16px'}}>
          <Container79 />
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fb7185] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>15%</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(251, 113, 133, 0.1)', 'gap':'4px', 'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'2px', 'paddingBottom':'2px', 'borderRadius':'12px'}} data-name="Container">
      <Container82 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'53px'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative size-full" style={{'padding':'16px'}}>
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>7%</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(74, 109, 124, 0.1)', 'gap':'4px', 'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'2px', 'paddingBottom':'2px', 'borderRadius':'12px'}} data-name="Container">
      <Container84 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'53px'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative size-full" style={{'padding':'16px'}}>
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" data-name="Container">
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2c3e50] text-[10px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'15px'}}>3%</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'rgba(74, 109, 124, 0.1)', 'gap':'4px', 'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'2px', 'paddingBottom':'2px', 'borderRadius':'12px'}} data-name="Container">
      <Container86 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'53px'}}>
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative size-full" style={{'padding':'16px'}}>
          <Container85 />
        </div>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start justify-content-center min-h-px min-w-px position-relative">
      <Frame128 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame129 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame130 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame131 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame132 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Line 4" stroke="var(--stroke-0, #F9FAFB)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100">
      <Frame86 />
      <Frame92 />
      <Frame98 />
      <Frame115 />
      <Frame121 />
      <Frame127 />
    </div>
  );
}

function Container87() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'24px'}} data-name="Container">
      <div className="size-full" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-white content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'borderRadius':'24px'}}>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
      <Container78 />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1080 1">
            <line id="Line 3" stroke="var(--stroke-0, #EEEEEE)" x2="1080" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame85 />
      <Container87 />
    </div>
  );
}

function Component32() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 1">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #04BDD1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px', 'width':'720px'}}>
      <Component32 />
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p>
          <span className="" style={{'lineHeight':'1.3'}}>{`Try Lymbus AI: `}</span>
          <span className="font-["Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[1.3]">{`"Why does North Center have a lower response rate?"`}</span>
        </p>
      </div>
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="position-relative flex-shrink-0" data-name="arrow-right">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d="M4 2.5L7.5 6L4 9.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0 w-100" style={{'height':'200px'}} data-name="Icon">
      <div className="position-absolute top-1/4" style={{'bottom':'-25%', 'left':'62.5%', 'right':'-12.5%'}} data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 202">
            <path d={svgPaths.p397ec00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="position-absolute left-1/2 top-0" style={{'bottom':'-50%', 'right':'-25%'}} data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 302">
            <path d={svgPaths.pffaa600} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="position-absolute top-1/2" style={{'bottom':'10%', 'left':'12.5%', 'right':'12.5%'}} data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301.473 81.7809">
            <path d={svgPaths.p135fa780} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="position-absolute content-stretch d-flex flex-column align-items-start opacity-10" style={{'height':'200px', 'left':'752px', 'top':'-88px', 'width':'400px'}} data-name="Container">
      <Icon11 />
    </div>
  );
}

function Container88() {
  return (
    <div className="position-relative flex-shrink-0" style={{'backgroundColor':'#374dea', 'borderRadius':'24px', 'width':'1080px'}} data-name="Container">
      <div className="content-stretch d-flex align-items-center justify-content-between overflow-hidden position-relative w-100" style={{'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px', 'borderRadius':'inherit'}}>
        <Frame133 />
        <ArrowRight2 />
        <Container89 />
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'24px'}}>
      <Frame81 />
      <Frame82 />
      <Frame83 />
      <Container88 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="position-absolute content-stretch d-flex flex-column align-items-start" style={{'gap':'24px', 'height':'1499px', 'left':'320px', 'top':'96px', 'width':'1080px'}}>
      <HeroCard />
      <Frame2 />
      <Frame10 />
      <Frame108 />
      <Frame109 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="position-relative size-full" style={{'backgroundColor':'#f5f7f7'}} data-name="Desktop - 11">
      <DashboardHeader />
      <Aside />
      <Frame6 />
    </div>
  );
}