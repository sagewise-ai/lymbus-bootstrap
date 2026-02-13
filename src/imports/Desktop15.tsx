import svgPaths from "./svg-mkm0clfdvi";

function ArrowRight() {
  return (
    <div className="position-relative" data-name="arrow-right">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d="M4 2.5L7.5 6L4 9.5" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px'}}>
      <div className="d-flex align-items-center justify-content-center position-relative flex-shrink-0">
        <div className="flex-shrink-0 rotate-180">
          <ArrowRight />
        </div>
      </div>
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="" style={{'lineHeight':'1.5'}}>Back to forms</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="position-relative flex-shrink-0">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-center position-relative" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Frame5 />
        <div className="d-flex align-items-center justify-content-center position-relative flex-shrink-0 w-0" style={{'height':'39px'}} style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-shrink-0 rotate-90">
            <div className="h-0 position-relative" style={{'width':'39px'}}>
              <div className="position-absolute">
                <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 1">
                  <line id="Line 10" stroke="var(--stroke-0, #F3F4F6)" x2="39" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className=" font-bold leading-[28px] not-italic relative shrink-0 text-[#09156a] text-[20px] tracking-[-0.5px]" style={{fontFamily: "Inter, sans-serif"}}>Form Builder</p>
      </div>
    </div>
  );
}

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
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.0005 14L11.1338 11.1333" id="Vector_2" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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
        <p className="position-absolute  font-bold leading-[16px] left-0 not-italic text-[#6c708c] text-[12px] top-[0.5px]" style={{fontFamily: "Inter, sans-serif"}}>Main Hospital</p>
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

function SearchAndLocation() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Search and Location">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-center position-relative" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="position-absolute bg-white content-stretch d-flex align-items-center justify-content-between start-0 pb-px top-0" style={{'height':'64px', 'paddingLeft':'32px', 'paddingRight':'32px', 'width':'1440px'}} data-name="DashboardHeader">
      <div aria-hidden="true" className="position-absolute border-bottom border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6'}} />
      <Frame6 />
      <SearchAndLocation />
    </div>
  );
}

function Component() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 2">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 2">
          <path d={svgPaths.p31104300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b3f8200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 9.16667H13.3333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 13.3333H13.3333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 9.16667H6.675" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 13.3333H6.675" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] text-white w-full" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Details</p>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch d-flex align-items-center overflow-hidden position-relative flex-shrink-0" style={{'backgroundColor':'#374dea', 'gap':'8px', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px', 'borderRadius':'24px'}} data-name="Component 5">
      <Component />
      <Container2 />
    </div>
  );
}

function Component1() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 2">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 2">
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c708c] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Configure</p>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch d-flex align-items-center overflow-hidden position-relative flex-shrink-0" style={{'gap':'8px', 'padding':'16px', 'borderRadius':'12px'}} data-name="Component 6">
      <Component1 />
      <Container3 />
    </div>
  );
}

function Component5() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Component 2">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 2">
          <path d={svgPaths.p3df93000} id="Vector" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p176f31c0} id="Vector_2" stroke="var(--stroke-0, #6C708C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative" style={{'borderColor':'transparent'}}>
        <div className="d-flex flex-column  font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c708c] text-[14px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
          <p className="" style={{'lineHeight':'1.5'}}>{`Preview & Share`}</p>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch d-flex align-items-center overflow-hidden position-relative flex-shrink-0" style={{'gap':'8px', 'padding':'16px', 'borderRadius':'12px'}} data-name="Component 4">
      <Component5 />
      <Container4 />
    </div>
  );
}

function FormsHeader() {
  return (
    <div className="bg-white content-stretch d-flex align-items-start position-relative flex-shrink-0" style={{'gap':'16px', 'padding':'6px', 'borderRadius':'24px'}} data-name="Forms Header">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
      <Component3 />
      <Component4 />
      <Component2 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch d-flex align-items-center overflow-hidden position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px', 'borderRadius':'10px', 'width':'448px'}} data-name="Text Input">
      <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>Untitled form</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" style={{'gap':'8px'}}>
      <div className="d-flex flex-column  font-medium justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#151515] text-[14px] text-ellipsis w-[min-content] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="overflow-hidden" style={{'lineHeight':'1.2'}}>Form Name</p>
      </div>
      <TextInput1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white position-relative flex-shrink-0 w-100" style={{'borderRadius':'24px'}}>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
      <div className="content-stretch d-flex align-items-start position-relative w-100" style={{'padding':'24px'}}>
        <Frame25 />
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="min-h-px min-w-px position-relative" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'10px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#151515] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>How would you rate your overall experience at our facility?</p>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="position-relative flex-shrink-0" data-name="image">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p11d16a80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pe801500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 15L16 10L5 21" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'padding':'8px', 'borderRadius':'10px'}}>
      <Image />
    </div>
  );
}

function Icon2() {
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

function TextInput3() {
  return (
    <div className="content-stretch d-flex align-items-center overflow-hidden position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'gap':'16px', 'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px', 'borderRadius':'10px', 'width':'160px'}} data-name="Text Input">
      <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#151515] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>Rating Scale</p>
      <Icon2 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100" style={{'gap':'24px'}}>
      <TextInput2 />
      <Frame7 />
      <TextInput3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="position-relative flex-shrink-0" style={{'height':'32px', 'width':'192px'}}>
      <div className="position-absolute">
        <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193 33">
          <g id="Frame 1480">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
            <path d={svgPaths.pa766600} fill="var(--fill-0, #F5F7F7)" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
            <path d={svgPaths.p282a1200} fill="var(--fill-0, #F5F7F7)" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
            <path d={svgPaths.p21d84100} fill="var(--fill-0, #F5F7F7)" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
            <path d={svgPaths.p104ac00} fill="var(--fill-0, #F5F7F7)" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100">
      <Frame9 />
    </div>
  );
}

function Copy() {
  return (
    <div className="position-relative flex-shrink-0" data-name="copy">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_62_1873)" id="copy">
          <path d={svgPaths.p2c8fa380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pad2d080} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_62_1873">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px'}}>
      <Copy />
      <p className=" font-normal leading-[1.2] not-italic relative shrink-0 text-[#6a7282] text-[16px]" style={{fontFamily: "Inter, sans-serif"}}>Duplicate</p>
    </div>
  );
}

function Trash() {
  return (
    <div className="position-relative flex-shrink-0" data-name="trash-2">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash-2">
          <path d="M2 4H3.33333H14" id="Vector" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p362ec700} id="Vector_2" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.66699 7.33301V11.333" id="Vector_3" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.33301 7.33301V11.333" id="Vector_4" stroke="var(--stroke-0, #C52020)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px'}}>
      <Trash />
      <p className=" font-normal leading-[1.2] not-italic relative shrink-0 text-[#c52020] text-[16px]" style={{fontFamily: "Inter, sans-serif"}}>Delete</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0" style={{'gap':'16px'}}>
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Toggle() {
  return (
    <div className="position-relative flex-shrink-0" style={{'height':'16px', 'width':'24px'}} data-name="Toggle">
      <div className="-translate-x-1/2 -translate-y-1/2 position-absolute left-1/2" style={{'backgroundColor':'#374dea', 'height':'12px', 'borderRadius':'32px', 'top':'calc(50%-0.5px)', 'width':'24px'}} />
      <div className="-translate-x-1/2 -translate-y-1/2 position-absolute bg-white" style={{'left':'calc(50%+6px)', 'borderRadius':'18px', 'top':'calc(50%-0.5px)'}} />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px'}}>
      <p className=" font-normal leading-[1.2] not-italic relative shrink-0 text-[#6a7282] text-[16px]" style={{fontFamily: "Inter, sans-serif"}}>Required</p>
      <Toggle />
    </div>
  );
}

function Frame15() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center justify-content-end size-full">
        <div className="content-stretch d-flex align-items-center justify-content-end position-relative w-100" style={{'gap':'24px', 'paddingLeft':'30px'}}>
          <Frame14 />
          <div className="d-flex align-items-center justify-content-center position-relative flex-shrink-0 w-0" style={{'height':'16px'}} style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
            <div className="flex-shrink-0 rotate-90">
              <div className="h-0 position-relative" style={{'width':'16px'}}>
                <div className="position-absolute">
                  <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                    <line id="Line 43" stroke="var(--stroke-0, #E5E5E5)" x2="16" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Frame11 />
          <div className="d-flex align-items-center justify-content-center position-relative flex-shrink-0 w-0" style={{'height':'16px'}} style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
            <div className="flex-shrink-0 rotate-90">
              <div className="h-0 position-relative" style={{'width':'16px'}}>
                <div className="position-absolute">
                  <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                    <line id="Line 43" stroke="var(--stroke-0, #E5E5E5)" x2="16" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white position-relative flex-shrink-0 w-100" style={{'borderRadius':'12px'}}>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#374dea', 'borderRadius':'12px'}} />
      <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'gap':'24px', 'padding':'24px'}}>
        <Frame29 />
        <Frame10 />
        <div className="h-0 position-relative flex-shrink-0 w-100">
          <div className="position-absolute">
            <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1032 1">
              <line id="Line 41" stroke="var(--stroke-0, #F3F4F6)" x2="1032" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame15 />
      </div>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="min-h-px min-w-px position-relative" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'10px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>Untitled question</p>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="position-relative flex-shrink-0" data-name="image">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p11d16a80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pe801500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 15L16 10L5 21" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'padding':'8px', 'borderRadius':'10px'}}>
      <Image1 />
    </div>
  );
}

function Icon3() {
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

function TextInput5() {
  return (
    <div className="content-stretch d-flex align-items-center overflow-hidden position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'gap':'16px', 'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px', 'borderRadius':'10px'}} data-name="Text Input">
      <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>Question Type</p>
      <Icon3 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white position-relative flex-shrink-0 w-100" style={{'borderRadius':'12px'}}>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'12px'}} />
      <div className="content-stretch d-flex align-items-start position-relative w-100" style={{'gap':'24px', 'padding':'16px'}}>
        <TextInput4 />
        <Frame8 />
        <TextInput5 />
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="position-relative flex-shrink-0" data-name="plus">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus">
          <path d="M8 3.33333V12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.33333 8H12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch d-flex flex-column align-items-center justify-content-center position-relative flex-shrink-0" style={{'backgroundColor':'#374dea', 'padding':'8px', 'borderRadius':'32px', 'width':'32px'}}>
      <Plus />
    </div>
  );
}

function Frame27() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="d-flex flex-row align-items-center size-full">
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'24px', 'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'8px', 'paddingBottom':'8px'}}>
          <div className="h-0 min-h-px min-w-px position-relative">
            <div className="position-absolute">
              <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 484 1">
                <line id="Line 44" stroke="var(--stroke-0, #6A7282)" strokeDasharray="6 6" strokeLinecap="round" x1="0.5" x2="483.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame4 />
          <div className="h-0 min-h-px min-w-px position-relative">
            <div className="position-absolute">
              <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 484 1">
                <line id="Line 44" stroke="var(--stroke-0, #6A7282)" strokeDasharray="6 6" strokeLinecap="round" x1="0.5" x2="483.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="position-relative" style={{'height':'11px', 'width':'18px'}}>
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
        <g id="Group 30">
          <circle cx="2" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 1" r="2" />
          <circle cx="9" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 2" r="2" />
          <circle cx="16" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 3" r="2" />
          <circle cx="2" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 4" r="2" />
          <circle cx="9" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 5" r="2" />
          <circle cx="16" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 6" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Copy1() {
  return (
    <div className="position-relative flex-shrink-0" data-name="copy">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_62_1873)" id="copy">
          <path d={svgPaths.p2c8fa380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pad2d080} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_62_1873">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px'}}>
      <Copy1 />
    </div>
  );
}

function Trash1() {
  return (
    <div className="position-relative flex-shrink-0" data-name="trash-2">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash-2">
          <path d="M2 4H3.33333H14" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p362ec700} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.66699 7.33301V11.333" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.33301 7.33301V11.333" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px'}}>
      <Trash1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0" style={{'gap':'12px'}}>
      <p className="font-["Inter:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#6a7282] text-[14px]">Likert Scale</p>
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <div className="d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'height':'18px', 'width':'11px'}} style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-shrink-0">
          <Group />
        </div>
      </div>
      <p className=" font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px] whitespace-pre-wrap" style={{fontFamily: "Inter, sans-serif"}}>Staff were courteous and respectful</p>
      <Frame21 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white position-relative flex-shrink-0 w-100" style={{'borderRadius':'12px'}}>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'12px'}} />
      <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'gap':'24px', 'padding':'16px'}}>
        <Frame />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="position-relative" style={{'height':'11px', 'width':'18px'}}>
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 11">
        <g id="Group 30">
          <circle cx="2" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 1" r="2" />
          <circle cx="9" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 2" r="2" />
          <circle cx="16" cy="2" fill="var(--fill-0, #D8D8D8)" id="Ellipse 3" r="2" />
          <circle cx="2" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 4" r="2" />
          <circle cx="9" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 5" r="2" />
          <circle cx="16" cy="9" fill="var(--fill-0, #D8D8D8)" id="Ellipse 6" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Copy2() {
  return (
    <div className="position-relative flex-shrink-0" data-name="copy">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_62_1873)" id="copy">
          <path d={svgPaths.p2c8fa380} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pad2d080} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_62_1873">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px'}}>
      <Copy2 />
    </div>
  );
}

function Trash2() {
  return (
    <div className="position-relative flex-shrink-0" data-name="trash-2">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash-2">
          <path d="M2 4H3.33333H14" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p362ec700} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.66699 7.33301V11.333" id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.33301 7.33301V11.333" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0" style={{'gap':'8px'}}>
      <Trash2 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0" style={{'gap':'12px'}}>
      <Frame18 />
      <Frame20 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <div className="d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'height':'18px', 'width':'11px'}} style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-shrink-0">
          <Group1 />
        </div>
      </div>
      <p className=" font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px] whitespace-pre-wrap" style={{fontFamily: "Inter, sans-serif"}}>Was your privacy respected during the visit?</p>
      <p className="font-["Inter:Italic',sans-serif] font-normal italic leading-[normal] relative shrink-0 text-[#6a7282] text-[14px]">Single Choice</p>
      <Frame26 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white position-relative flex-shrink-0 w-100" style={{'height':'56px', 'borderRadius':'12px'}}>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'12px'}} />
      <div className="content-stretch d-flex flex-column align-items-start position-relative size-full" style={{'gap':'24px', 'padding':'16px'}}>
        <Frame16 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <Frame1 />
      <Frame28 />
      <Frame27 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="position-absolute content-stretch d-flex flex-column align-items-start" style={{'gap':'32px', 'left':'32px', 'top':'96px', 'width':'1080px'}}>
      <FormsHeader />
      <Frame24 />
      <Frame23 />
    </div>
  );
}

function Icon4() {
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

function TextInput6() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'16px', 'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap" style={{fontFamily: "Inter, sans-serif"}}>5</p>
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'8px'}}>
      <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Range</p>
      </div>
      <TextInput6 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch d-flex  font-medium gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] text-shadow-[0px_0.5px_1px_rgba(0,0,0,0.05)] w-full" style={{fontFamily: "Inter, sans-serif"}}>
      <div className="d-flex flex-column justify-content-center position-relative flex-shrink-0" style={{'width':'32px'}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'1.5'}}>Icon</p>
      </div>
      <div className="d-flex flex-column justify-content-center position-relative flex-shrink-0 whitespace-nowrap">
        <p className="" style={{'lineHeight':'1.5'}}>Value</p>
      </div>
    </div>
  );
}

function TextInput7() {
  return (
    <div className="min-h-px min-w-px position-relative" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'10px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap" style={{fontFamily: "Inter, sans-serif"}}>5</p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <div className="position-relative flex-shrink-0" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput7 />
    </div>
  );
}

function TextInput8() {
  return (
    <div className="min-h-px min-w-px position-relative" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'10px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap" style={{fontFamily: "Inter, sans-serif"}}>5</p>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <div className="position-relative flex-shrink-0" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput8 />
    </div>
  );
}

function TextInput9() {
  return (
    <div className="min-h-px min-w-px position-relative" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'10px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap" style={{fontFamily: "Inter, sans-serif"}}>5</p>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <div className="position-relative flex-shrink-0" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput9 />
    </div>
  );
}

function TextInput10() {
  return (
    <div className="min-h-px min-w-px position-relative" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'10px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap" style={{fontFamily: "Inter, sans-serif"}}>5</p>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <div className="position-relative flex-shrink-0" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput10 />
    </div>
  );
}

function TextInput11() {
  return (
    <div className="min-h-px min-w-px position-relative" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'10px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#151515] text-[14px] whitespace-pre-wrap" style={{fontFamily: "Inter, sans-serif"}}>5</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch d-flex align-items-center position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <div className="position-relative flex-shrink-0" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
            <path d={svgPaths.p1bcb2000} fill="var(--fill-0, #F5F7F7)" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <TextInput11 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'borderRadius':'12px'}}>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'12px'}} />
      <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'gap':'8px', 'padding':'16px'}}>
        <Frame35 />
        <Frame34 />
        <Frame37 />
        <Frame38 />
        <Frame39 />
        <Frame41 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <div className="d-flex flex-column  font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[16px] w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'1.3'}}>Rating Properties</p>
      </div>
      <Frame36 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="min-h-px min-w-px position-relative" style={{'height':'32px', 'borderRadius':'8px'}} data-name="Overlay">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'8px'}} />
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative size-full" style={{'paddingLeft':'8px', 'paddingRight':'8px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.2'}}>Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="min-h-px min-w-px position-relative" style={{'backgroundColor':'#374dea', 'height':'32px', 'borderRadius':'8px'}} data-name="Overlay">
      <div className="d-flex flex-row align-items-center justify-content-center size-full">
        <div className="content-stretch d-flex align-items-center justify-content-center position-relative size-full" style={{'paddingLeft':'8px', 'paddingRight':'8px'}}>
          <div className="d-flex flex-column  font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
            <p className="" style={{'lineHeight':'1.2'}}>Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-center position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <Overlay />
      <Overlay1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="position-absolute bg-white content-stretch d-flex flex-column align-items-start justify-content-between" style={{'height':'772px', 'left':'1152px', 'padding':'24px', 'borderRadius':'24px', 'top':'96px', 'width':'248px'}}>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#f3f4f6', 'borderRadius':'24px'}} />
      <Frame40 />
      <Frame31 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="position-relative size-full" style={{'backgroundColor':'#f5f7f7'}} data-name="Desktop - 15">
      <DashboardHeader />
      <Frame22 />
      <Frame30 />
    </div>
  );
}