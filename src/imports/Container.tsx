import svgPaths from "./svg-2pm7nbaulj";

function Label() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" data-name="Label">
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Net Promoter Score (NPS)</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'height':'44px', 'borderRadius':'16px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center position-relative size-full" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>60</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'8px'}} data-name="Input">
      <Label />
      <TextInput />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'16px'}} data-name="Paragraph">
      <p className="position-absolute  font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px" style={{fontFamily: "Inter, sans-serif"}}>Target NPS score for comparison</p>
    </div>
  );
}

function BenchmarkInput() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0" style={{'gap':'12px', 'borderRadius':'12px'}} data-name="BenchmarkInput">
      <Input />
      <Paragraph />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" data-name="Label">
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>PREM Score</p>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-white position-relative flex-shrink-0" style={{'height':'25px', 'borderRadius':'12px', 'width':'28.477px'}} data-name="Text">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'12px'}} />
      <p className="position-absolute  font-bold leading-[15px] left-[9px] not-italic text-[#6a7282] text-[10px] top-[5.5px] tracking-[0.1172px]" style={{fontFamily: "Inter, sans-serif"}}>%</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'height':'44px', 'borderRadius':'16px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center justify-content-between position-relative size-full" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>85</p>
          <Text />
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'8px'}} data-name="Input">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'16px'}} data-name="Paragraph">
      <p className="position-absolute  font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px" style={{fontFamily: "Inter, sans-serif"}}>Patient Reported Experience Measure target</p>
    </div>
  );
}

function BenchmarkInput1() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0" style={{'gap':'12px', 'borderRadius':'12px'}} data-name="BenchmarkInput">
      <Input1 />
      <Paragraph1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" data-name="Label">
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>PROM Score</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-white content-stretch d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'5px', 'paddingBottom':'5px', 'borderRadius':'12px'}} data-name="Text">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'12px'}} />
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>%</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'height':'44px', 'borderRadius':'16px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center justify-content-between position-relative size-full" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>80</p>
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'8px'}} data-name="Input">
      <Label2 />
      <TextInput2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'16px'}} data-name="Paragraph">
      <p className="position-absolute  font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px" style={{fontFamily: "Inter, sans-serif"}}>Patient Reported Outcome Measure target</p>
    </div>
  );
}

function BenchmarkInput2() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0" style={{'gap':'12px', 'borderRadius':'12px'}} data-name="BenchmarkInput">
      <Input2 />
      <Paragraph2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" data-name="Label">
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Response Rate</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-white position-relative flex-shrink-0" style={{'height':'25px', 'borderRadius':'12px', 'width':'28.477px'}} data-name="Text">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'12px'}} />
      <p className="position-absolute  font-bold leading-[15px] left-[9px] not-italic text-[#6a7282] text-[10px] top-[5.5px] tracking-[0.1172px]" style={{fontFamily: "Inter, sans-serif"}}>%</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'height':'44px', 'borderRadius':'16px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center justify-content-between position-relative size-full" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>45</p>
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'8px'}} data-name="Input">
      <Label3 />
      <TextInput3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'16px'}} data-name="Paragraph">
      <p className="position-absolute  font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px" style={{fontFamily: "Inter, sans-serif"}}>Target survey response rate</p>
    </div>
  );
}

function BenchmarkInput3() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0" style={{'gap':'12px', 'borderRadius':'12px'}} data-name="BenchmarkInput">
      <Input3 />
      <Paragraph3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" data-name="Label">
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Wait Time</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-white content-stretch d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'4px', 'paddingBottom':'4px', 'borderRadius':'12px'}} data-name="Text">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'12px'}} />
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>min</p>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'height':'44px', 'borderRadius':'16px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center justify-content-between position-relative size-full" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>15</p>
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'8px'}} data-name="Input">
      <Label4 />
      <TextInput4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'16px'}} data-name="Paragraph">
      <p className="position-absolute  font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px" style={{fontFamily: "Inter, sans-serif"}}>Maximum acceptable wait time in minutes</p>
    </div>
  );
}

function BenchmarkInput4() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0" style={{'gap':'12px', 'borderRadius':'12px'}} data-name="BenchmarkInput">
      <Input4 />
      <Paragraph4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" data-name="Label">
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Readmission Rate</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-white content-stretch d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'4px', 'paddingBottom':'4px', 'borderRadius':'12px'}} data-name="Text">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'12px'}} />
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>%</p>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'height':'44px', 'borderRadius':'16px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center justify-content-between position-relative size-full" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>5</p>
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'8px'}} data-name="Input">
      <Label5 />
      <TextInput5 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'16px'}} data-name="Paragraph">
      <p className="position-absolute  font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px" style={{fontFamily: "Inter, sans-serif"}}>Maximum acceptable readmission rate</p>
    </div>
  );
}

function BenchmarkInput5() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0" style={{'gap':'12px', 'borderRadius':'12px'}} data-name="BenchmarkInput">
      <Input5 />
      <Paragraph5 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" data-name="Label">
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Patient Satisfaction</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-white content-stretch d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'4px', 'paddingBottom':'4px', 'borderRadius':'12px'}} data-name="Text">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'12px'}} />
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>%</p>
    </div>
  );
}

function TextInput6() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'height':'44px', 'borderRadius':'16px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center justify-content-between position-relative size-full" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>90</p>
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'8px'}} data-name="Input">
      <Label6 />
      <TextInput6 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'16px'}} data-name="Paragraph">
      <p className="position-absolute  font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px" style={{fontFamily: "Inter, sans-serif"}}>Overall satisfaction target</p>
    </div>
  );
}

function BenchmarkInput6() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0" style={{'gap':'12px', 'borderRadius':'12px'}} data-name="BenchmarkInput">
      <Input6 />
      <Paragraph6 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch d-flex align-items-start position-relative flex-shrink-0 w-100" data-name="Label">
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>Communication Score</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-white content-stretch d-flex align-items-center justify-content-center position-relative flex-shrink-0" style={{'paddingLeft':'8px', 'paddingRight':'8px', 'paddingTop':'4px', 'paddingBottom':'4px', 'borderRadius':'12px'}} data-name="Text">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'12px'}} />
      <p className=" font-bold leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[10px] tracking-[0.5px] uppercase" style={{fontFamily: "Inter, sans-serif"}}>%</p>
    </div>
  );
}

function TextInput7() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'backgroundColor':'#f5f7f7', 'height':'44px', 'borderRadius':'16px'}} data-name="Text Input">
      <div className="d-flex flex-row align-items-center overflow-hidden size-full" style={{'borderRadius':'inherit'}}>
        <div className="content-stretch d-flex align-items-center justify-content-between position-relative size-full" style={{'paddingLeft':'16px', 'paddingRight':'16px', 'paddingTop':'12px', 'paddingBottom':'12px'}}>
          <p className=" font-medium leading-[normal] not-italic relative shrink-0 text-[#09156a] text-[14px]" style={{fontFamily: "Inter, sans-serif"}}>88</p>
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative flex-shrink-0 w-100" style={{'gap':'8px'}} data-name="Input">
      <Label7 />
      <TextInput7 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="position-relative flex-shrink-0 w-100" style={{'height':'16px'}} data-name="Paragraph">
      <p className="position-absolute  font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px" style={{fontFamily: "Inter, sans-serif"}}>Staff communication effectiveness target</p>
    </div>
  );
}

function BenchmarkInput7() {
  return (
    <div className="content-stretch d-flex flex-column align-items-start position-relative align-self-start flex-shrink-0" style={{'gap':'12px', 'borderRadius':'12px'}} data-name="BenchmarkInput">
      <Input7 />
      <Paragraph7 />
    </div>
  );
}

function Icon() {
  return (
    <div className="position-absolute" style={{'left':'25px', 'top':'14px'}} data-name="Icon">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1722c40} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 2.25V6H6" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="position-relative flex-shrink-0" style={{'height':'46px', 'borderRadius':'16px', 'width':'194.25px'}} data-name="Button">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'16px'}} />
      <div className="bg-clip-padding border-0 border-solid position-relative size-full" style={{'borderColor':'transparent'}}>
        <Icon />
        <p className="-translate-x-1/2 position-absolute  font-bold leading-[20px] left-[110.5px] not-italic text-[#6a7282] text-[14px] text-center top-[13.5px] tracking-[-0.1504px]" style={{fontFamily: "Inter, sans-serif"}}>Reset to Defaults</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="position-relative flex-shrink-0" data-name="Icon">
      <svg className="d-block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p706200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p37e41c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1a808380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="position-relative flex-shrink-0" style={{'backgroundColor':'#3649e9', 'height':'44px', 'borderRadius':'16px', 'width':'196.453px'}} data-name="Button">
      <div className="bg-clip-padding border-0 border-solid content-stretch d-flex align-items-center position-relative size-full" style={{'borderColor':'transparent', 'gap':'8px', 'paddingLeft':'24px', 'paddingRight':'24px', 'paddingTop':'10px', 'paddingBottom':'10px'}}>
        <Icon1 />
        <p className=" font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.1504px]" style={{fontFamily: "Inter, sans-serif"}}>Save Benchmarks</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="/ 2] col-[1 content-stretch d-flex align-items-center justify-content-end position-relative flex-shrink-0 span" style={{'gap':'16px', 'height':'63px'}} data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white d-grid position-relative size-full" style={{'gap':'24px', 'padding':'24px', 'borderRadius':'24px'}} data-name="Container">
      <div aria-hidden="true" className="position-absolute border border-solid top-0 bottom-0 start-0 end-0 pe-none" style={{'borderColor':'#eee', 'borderRadius':'24px'}} />
      <BenchmarkInput />
      <BenchmarkInput1 />
      <BenchmarkInput2 />
      <BenchmarkInput3 />
      <BenchmarkInput4 />
      <BenchmarkInput5 />
      <BenchmarkInput6 />
      <BenchmarkInput7 />
      <Container1 />
    </div>
  );
}