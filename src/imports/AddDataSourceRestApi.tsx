import svgPaths from "./svg-rvrjtcxag1";

function Frame() {
  return (
    <div className="position-absolute" style={{'left':'10px', 'top':'10px'}} data-name="Frame">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3a2fa580} fill="var(--fill-0, #3649E9)" id="Vector" stroke="var(--stroke-0, #3649E9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}}>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch d-flex flex-column font-["Inter:Bold',sans-serif] font-bold gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative whitespace-pre-wrap">
      <p className="position-relative flex-shrink-0 w-100" style={{'lineHeight':'27px', 'color':'#09156a', 'fontSize':'18px'}}>Add Data Source</p>
      <p className="position-relative flex-shrink-0 text-uppercase w-100" style={{'lineHeight':'normal', 'color':'#6a7282', 'fontSize':'10px', 'letterSpacing':'0.5px'}}>Select a clinic to add the data source to.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch d-flex align-items-center min-h-px min-w-px position-relative" style={{'gap':'16px'}}>
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0 w-100" style={{'height':'20px'}} data-name="Icon">
      <div className="position-absolute inset-1/4" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p354ab980} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="position-absolute inset-1/4" data-name="Vector">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p2a4db200} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" style={{'paddingTop':'8px', 'paddingLeft':'8px', 'paddingRight':'8px', 'borderRadius':'12px'}} data-name="Button">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Container">
      <div className="content-stretch d-flex align-items-start position-relative w-100" style={{'gap':'16px', 'padding':'24px'}}>
        <Frame11 />
        <Button />
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

function TextInput() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'16px', 'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className="font-["Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">City General Hospital</p>
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" style={{'gap':'8px', 'width':'293px'}}>
      <div className="d-flex flex-column font-["Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">
        <p className="whitespace-pre-wrap" style={{'lineHeight':'normal'}}>Facility Selection</p>
      </div>
      <TextInput />
    </div>
  );
}

function Frame12() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="bg-clip-padding border-0 border-solid content-start d-flex flex-wrap align-items-start position-relative w-100" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Frame7 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white min-h-px min-w-px position-relative" style={{'borderRadius':'24px'}} data-name="Container">
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'padding':'25px'}}>
          <Frame12 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'24px'}} />
    </div>
  );
}

function FormsGrid() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" data-name="Forms Grid">
      <Container1 />
    </div>
  );
}

function Globe() {
  return (
    <div className="position-absolute" style={{'left':'9.8px', 'top':'10px'}} data-name="globe">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="globe">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M1.66667 10H18.3333" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2e900180} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}}>
      <Globe />
    </div>
  );
}

function FormCardTitle() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start fst-normal position-relative flex-shrink-0 w-100" style={{'gap':'8px', 'lineHeight':'0'}} data-name="Form Card Title">
      <div className="d-flex flex-column font-["Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.015px] w-full">
        <p className="whitespace-pre-wrap" style={{'lineHeight':'18.7px'}}>Rest API</p>
      </div>
      <div className="d-flex flex-column font-["Inter:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#6a7282] text-[12px] text-ellipsis w-full whitespace-nowrap">
        <p className="overflow-hidden" style={{'lineHeight':'normal'}}>Connect via REST API endpoints</p>
      </div>
    </div>
  );
}

function FormCardHeader() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start min-h-px min-w-px position-relative align-self-stretch" data-name="Form Card Header">
      <FormCardTitle />
    </div>
  );
}

function FormCard() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Form Card">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-start position-relative w-100" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Frame3 />
        <FormCardHeader />
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center justify-content-between position-relative w-100" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className="font-["Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">City General Hospital</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="/ 2] col-[1 content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0 span" style={{'gap':'8px'}}>
      <div className="d-flex flex-column font-["Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">
        <p className="whitespace-pre-wrap" style={{'lineHeight':'normal'}}>Data Source Name</p>
      </div>
      <TextInput1 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className="font-["Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">https://api.cgeneral.com/v1</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="/ 2] col-[1 content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0 span" style={{'gap':'8px'}}>
      <div className="d-flex flex-column font-["Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">
        <p className="whitespace-pre-wrap" style={{'lineHeight':'normal'}}>Base URL</p>
      </div>
      <TextInput2 />
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
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'gap':'16px', 'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className="font-["Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">API Key</p>
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0" style={{'gap':'8px'}}>
      <div className="d-flex flex-column font-["Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">
        <p className="whitespace-pre-wrap" style={{'lineHeight':'normal'}}>Auth Type</p>
      </div>
      <TextInput3 />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative w-100" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className="font-["Inter:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap">60</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0" style={{'gap':'8px'}}>
      <div className="d-flex flex-column font-["Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full">
        <p className="whitespace-pre-wrap" style={{'lineHeight':'normal'}}>Rate Limit (req/min)</p>
      </div>
      <TextInput4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="bg-clip-padding border-0 border-solid d-grid position-relative w-100" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Frame5 />
        <Frame6 />
        <Frame8 />
        <Frame9 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white min-h-px min-w-px position-relative" style={{'height':'358px', 'borderRadius':'24px'}} data-name="Container">
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex flex-column align-items-start position-relative size-full" style={{'gap':'24px', 'padding':'25px'}}>
          <FormCard />
          <Frame13 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'24px'}} />
    </div>
  );
}

function FormsGrid1() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" data-name="Forms Grid">
      <Container2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7'}}>
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'gap':'8px', 'padding':'24px'}}>
          <FormsGrid />
          <FormsGrid1 />
        </div>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'height':'40px', 'paddingLeft':'24px', 'paddingRight':'24px', 'borderRadius':'12px'}} data-name="Overlay">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'12px'}} />
      <div className="d-flex flex-column font-["Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] tracking-[-0.15px] whitespace-nowrap">
        <p className="" style={{'lineHeight':'normal'}}>Back</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'backgroundColor':'#3649e9', 'height':'40px', 'paddingLeft':'24px', 'paddingRight':'24px', 'borderRadius':'12px'}} data-name="Overlay">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#3649e9', 'borderRadius':'12px'}} />
      <div className="d-flex flex-column font-["Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.15px] whitespace-nowrap">
        <p className="" style={{'lineHeight':'normal'}}>Create Data Source</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch d-flex align-items-center justify-content-end position-relative flex-shrink-0 w-100" style={{'gap':'16px'}}>
      <Overlay />
      <Overlay1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Container">
      <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}}>
        <Frame4 />
      </div>
    </div>
  );
}

export default function AddDataSourceRestApi() {
  return (
    <div className="bg-white content-stretch d-flex flex-column align-items-start position-relative size-full" style={{'borderRadius':'24px'}} data-name="Add Data Source - Rest API">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'24px'}} />
      <Container />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line 3" stroke="var(--stroke-0, #EEEEEE)" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame10 />
      <Container3 />
    </div>
  );
}