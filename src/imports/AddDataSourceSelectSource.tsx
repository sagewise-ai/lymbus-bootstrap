import svgPaths from "./svg-hqq8ajqs43";

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
    <div className="content-stretch d-flex flex-column  font-bold gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative whitespace-pre-wrap" style={{fontFamily: "Inter, sans-serif"}}>
      <p className="position-relative flex-shrink-0 w-100" style={{'lineHeight':'27px', 'color':'#09156a', 'fontSize':'18px'}}>Add Data Source</p>
      <p className="position-relative flex-shrink-0 text-uppercase w-100" style={{'lineHeight':'normal', 'color':'#6a7282', 'fontSize':'10px', 'letterSpacing':'0.5px'}}>Select a clinic to add the data source to.</p>
    </div>
  );
}

function Frame10() {
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
        <Frame10 />
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
          <p className=" font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#09156a] text-[14px] tracking-[-0.15px] whitespace-pre-wrap" style={{fontFamily: "Inter, sans-serif"}}>City General Hospital</p>
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0" style={{'gap':'8px', 'width':'293px'}}>
      <div className="d-flex flex-column  font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'normal'}}>Facility Selection</p>
      </div>
      <TextInput />
    </div>
  );
}

function Frame11() {
  return (
    <div className="position-relative flex-shrink-0 w-100">
      <div className="bg-clip-padding border-0 border-solid content-start d-flex flex-wrap align-items-start position-relative w-100" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Frame8 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white min-h-px min-w-px position-relative" style={{'borderRadius':'24px'}} data-name="Container">
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'padding':'25px'}}>
          <Frame11 />
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

function HardDrive() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 position-absolute left-1/2 top-1/2" data-name="hard-drive">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="hard-drive">
          <path d="M18.3333 10H1.66667" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p25edbe70} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M5 13.3333H5.00833" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M8.33333 13.3333H8.34167" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}}>
      <HardDrive />
    </div>
  );
}

function FormCardTitle() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start min-h-px min-w-px fst-normal position-relative" style={{'gap':'8px', 'lineHeight':'0'}} data-name="Form Card Title">
      <div className="d-flex flex-column  font-bold justify-center relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.015px] w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'18.7px'}}>EMR System</p>
      </div>
      <div className="d-flex flex-column  font-medium justify-center overflow-hidden relative shrink-0 text-[#6a7282] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="overflow-hidden" style={{'lineHeight':'normal'}}>Electronic Medical Records</p>
      </div>
    </div>
  );
}

function FormCard() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Form Card">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-start position-relative w-100" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Frame3 />
        <FormCardTitle />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white position-relative align-self-start flex-shrink-0" style={{'borderRadius':'24px'}} data-name="Container">
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent', 'padding':'25px'}}>
          <FormCard />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'24px'}} />
    </div>
  );
}

function Database() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 position-absolute top-1/2" style={{'left':'calc(50%+0.4px)'}} data-name="database">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="database">
          <path d={svgPaths.p2e7662c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p2a9b1a40} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p294b9f80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}}>
      <Database />
    </div>
  );
}

function FormCardTitle1() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start fst-normal position-relative flex-shrink-0 w-100" style={{'gap':'8px', 'lineHeight':'0'}} data-name="Form Card Title">
      <div className="d-flex flex-column  font-bold justify-center relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.015px] w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'18.7px'}}>Database</p>
      </div>
      <div className="d-flex flex-column  font-medium justify-center overflow-hidden relative shrink-0 text-[#6a7282] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="overflow-hidden" style={{'lineHeight':'normal'}}>Direct database connection</p>
      </div>
    </div>
  );
}

function FormCardHeader() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start min-h-px min-w-px position-relative align-self-stretch" data-name="Form Card Header">
      <FormCardTitle1 />
    </div>
  );
}

function FormCard1() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Form Card">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-start position-relative w-100" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Frame4 />
        <FormCardHeader />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white position-relative align-self-start flex-shrink-0" style={{'borderRadius':'24px'}} data-name="Container">
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent', 'padding':'25px'}}>
          <FormCard1 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'24px'}} />
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

function Frame5() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}}>
      <Globe />
    </div>
  );
}

function FormCardTitle2() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start fst-normal position-relative flex-shrink-0 w-100" style={{'gap':'8px', 'lineHeight':'0'}} data-name="Form Card Title">
      <div className="d-flex flex-column  font-bold justify-center relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.015px] w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'18.7px'}}>Rest API</p>
      </div>
      <div className="d-flex flex-column  font-medium justify-center overflow-hidden relative shrink-0 text-[#6a7282] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="overflow-hidden" style={{'lineHeight':'normal'}}>Connect via REST API endpoints</p>
      </div>
    </div>
  );
}

function FormCardHeader1() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start min-h-px min-w-px position-relative align-self-stretch" data-name="Form Card Header">
      <FormCardTitle2 />
    </div>
  );
}

function FormCard2() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Form Card">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-start position-relative w-100" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Frame5 />
        <FormCardHeader1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white position-relative align-self-start flex-shrink-0" style={{'borderRadius':'24px'}} data-name="Container">
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent', 'padding':'25px'}}>
          <FormCard2 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'24px'}} />
    </div>
  );
}

function FileText() {
  return (
    <div className="position-absolute" style={{'left':'10.2px', 'top':'10px'}} data-name="file-text">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file-text">
          <path d={svgPaths.p3d578880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p24539800} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M8.33333 7.5H7.5H6.66667" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}}>
      <FileText />
    </div>
  );
}

function FormCardTitle3() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start fst-normal position-relative flex-shrink-0 w-100" style={{'gap':'8px', 'lineHeight':'0'}} data-name="Form Card Title">
      <div className="d-flex flex-column  font-bold justify-center relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.015px] w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'18.7px'}}>Excel File</p>
      </div>
      <div className="d-flex flex-column  font-medium justify-center overflow-hidden relative shrink-0 text-[#6a7282] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="overflow-hidden" style={{'lineHeight':'normal'}}>Import data from spreadsheets</p>
      </div>
    </div>
  );
}

function FormCardHeader2() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start min-h-px min-w-px position-relative align-self-stretch" data-name="Form Card Header">
      <FormCardTitle3 />
    </div>
  );
}

function FormCard3() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Form Card">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-start position-relative w-100" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Frame6 />
        <FormCardHeader2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white position-relative align-self-start flex-shrink-0" style={{'borderRadius':'24px'}} data-name="Container">
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent', 'padding':'25px'}}>
          <FormCard3 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'24px'}} />
    </div>
  );
}

function FileText1() {
  return (
    <div className="position-absolute" style={{'left':'9.6px', 'top':'10px'}} data-name="file-text">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="file-text">
          <path d={svgPaths.p3d578880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d={svgPaths.p24539800} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M8.33333 7.5H7.5H6.66667" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="overflow-hidden position-relative flex-shrink-0" style={{'backgroundColor':'#f5f7f7', 'borderRadius':'12px'}}>
      <FileText1 />
    </div>
  );
}

function FormCardTitle4() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start fst-normal position-relative flex-shrink-0 w-100" style={{'gap':'8px', 'lineHeight':'0'}} data-name="Form Card Title">
      <div className="d-flex flex-column  font-bold justify-center relative shrink-0 text-[#09156a] text-[14px] tracking-[-0.015px] w-full" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="whitespace-pre-wrap" style={{'lineHeight':'18.7px'}}>Google Sheets</p>
      </div>
      <div className="d-flex flex-column  font-medium justify-center overflow-hidden relative shrink-0 text-[#6a7282] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{fontFamily: "Inter, sans-serif"}}>
        <p className="overflow-hidden" style={{'lineHeight':'normal'}}>Sync data from Google Sheets</p>
      </div>
    </div>
  );
}

function FormCardHeader3() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start min-h-px min-w-px position-relative align-self-stretch" data-name="Form Card Header">
      <FormCardTitle4 />
    </div>
  );
}

function FormCard4() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Form Card">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-start position-relative w-100" style={{'borderColor':'transparent', 'gap':'16px'}}>
        <Frame7 />
        <FormCardHeader3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white position-relative align-self-start flex-shrink-0" style={{'borderRadius':'24px'}} data-name="Container">
      <div className="overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="bg-clip-padding border-0 border-solid content-stretch d-flex flex-column align-items-start position-relative w-100" style={{'borderColor':'transparent', 'padding':'25px'}}>
          <FormCard4 />
        </div>
      </div>
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'24px'}} />
    </div>
  );
}

function FormsGrid1() {
  return (
    <div className="bg-white position-relative flex-shrink-0 w-100" style={{'borderRadius':'24px'}} data-name="Forms Grid">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'24px'}} />
      <div className="d-grid position-relative w-100" style={{'gap':'16px', 'padding':'25px'}}>
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Frame9() {
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

function Container7() {
  return (
    <div className="position-relative flex-shrink-0 w-100" data-name="Container">
      <div className="content-stretch d-flex flex-column align-items-start w-100" style={{'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'16px', 'paddingBottom':'16px'}} />
    </div>
  );
}

export default function AddDataSourceSelectSource() {
  return (
    <div className="bg-white content-stretch d-flex flex-column align-items-start position-relative size-full" style={{'borderRadius':'24px'}} data-name="Add Data Source - Select Source">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'24px'}} />
      <Container />
      <div className="h-0 position-relative flex-shrink-0 w-100">
        <div className="position-absolute">
          <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 1">
            <line id="Line 3" stroke="var(--stroke-0, #EEEEEE)" x2="700" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame9 />
      <Container7 />
    </div>
  );
}