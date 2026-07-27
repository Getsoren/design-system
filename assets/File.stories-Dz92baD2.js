import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Gi as n,Qi as r,Si as i,Ya as a,at as o,d as s,f as c,m as l,p as u,u as d,yn as f}from"./iframe-CBlKtUHf.js";import{n as p,t as m}from"./Button-D-AXDLcv.js";import{n as h,t as g}from"./useTranslation-D2b9cSFJ.js";var _,v=e((()=>{l(),s(),_=({fontSize:e,sx:t,color:r=`currentColor`})=>u(n,{width:`40`,height:`40`,viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,fontSize:e,sx:t,children:[c(`g`,{clipPath:`url(#clip0_12914_201806)`,children:c(`path`,{d:`M22 10H14C12.9 10 12.01 10.9 12.01 12L12 28C12 29.1 12.89 30 13.99 30H26C27.1 30 28 29.1 28 28V16L22 10ZM26 28H14V12H21V17H26V28ZM16 23.01L17.41 24.42L19 22.84V27H21V22.84L22.59 24.43L24 23.01L20.01 19L16 23.01Z`,fill:r})}),c(`defs`,{children:c(`clipPath`,{id:`clip0_12914_201806`,children:c(`rect`,{width:`40`,height:`40`,fill:`white`})})})]});try{_.displayName=`UploadIcon`,_.__docgenInfo={description:``,displayName:`UploadIcon`,filePath:`/home/runner/work/design-system/design-system/src/components/DataDisplay/Icons/UploadIcon.tsx`,methods:[],props:{color:{defaultValue:{value:`currentColor`},declarations:[{fileName:`design-system/src/components/DataDisplay/Icons/UploadIcon.tsx`,name:`CheckIconProps`}],description:``,name:`color`,parent:{fileName:`design-system/src/components/DataDisplay/Icons/UploadIcon.tsx`,name:`CheckIconProps`},required:!1,tags:{},type:{name:`string`}},fontSize:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DataDisplay/Icons/UploadIcon.tsx`,name:`CheckIconProps`}],description:``,name:`fontSize`,parent:{fileName:`design-system/src/components/DataDisplay/Icons/UploadIcon.tsx`,name:`CheckIconProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"small" | "inherit" | "medium" | "large", SvgIconPropsSizeOverrides>`,value:[{value:`"small"`},{value:`"inherit"`},{value:`"medium"`},{value:`"large"`}]}},sx:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DataDisplay/Icons/UploadIcon.tsx`,name:`CheckIconProps`}],description:``,name:`sx`,parent:{fileName:`design-system/src/components/DataDisplay/Icons/UploadIcon.tsx`,name:`CheckIconProps`},required:!1,tags:{},type:{name:`SxProps<Theme>`}}},tags:{}}}catch{}})),y,b,x,S,C,w=e((()=>{l(),y=t(a(),1),v(),g(),s(),b=5,x=(e,t)=>{let n=t===`vertical`;return e===`small`?n?130:60:n?150:80},S=e=>{if(!e)return``;let t=e.length>1,n=[...e||[]].slice(0,5).map(({name:e})=>{let n=e.split(`.`).pop();return e.length>10&&t?`${e.substring(0,10)}(...).${n}`:e}).join(` • `);return e.length>b?`${n} + ${e.length-b}`:n},C=(0,y.forwardRef)(({accept:e,name:t,disabled:n,required:a,error:s,localeText:l,multiple:p,id:m,size:g,helperText:v,fullWidth:b,icon:C,onChange:w,label:T,pattern:E,title:D,value:O,variant:k=`vertical`},A)=>{let[j,M]=(0,y.useState)(null),{t:N}=h(),{palette:P}=r(),F=k===`vertical`,I=m||t,L=(0,y.useRef)(null),R=(0,y.useRef)(null),z=O===void 0?j:O,B=S(z);return(0,y.useImperativeHandle)(A,()=>{let e=R.current;return e.reset=()=>{M(null),R.current&&(R.current.value=``)},e}),u(f,{ref:L,htmlFor:I,onDragOver:e=>{e.preventDefault()},onDrop:e=>{if(e.preventDefault(),e.dataTransfer.files.length>0){let t=R.current,n=e.dataTransfer.files;M(n);let r=new DataTransfer;Array.from(n).forEach(e=>{r.items.add(e)}),t&&(t.files=r.files),t?.focus(),t?.blur(),w?.({...e,target:t})}},sx:{"&:hover, &:focus":{borderColor:P.primary.main},border:`1px dashed ${s?P.error.main:P.divider}`,borderRadius:1,cursor:`pointer`,height:x(g,k),maxWidth:b?`100%`:400,padding:2,position:`relative`,width:`100%`},children:[u(o,{alignItems:`center`,height:`100%`,direction:F?`column`:`row`,justifyContent:F?`center`:`flex-start`,textAlign:F?`center`:`left`,spacing:.5,color:n?`text.disabled`:`text.secondary`,children:[C||c(_,{sx:{height:40,width:40}}),B?u(d,{children:[u(i,{variant:`body2`,color:`textSecondary`,children:[z?.length,` `,l?.files||N(`files`)]}),c(i,{variant:`body2`,color:`primary`,whiteSpace:F?`normal`:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:B})]}):u(i,{variant:`subtitle1`,color:n?`text.disabled`:`primary`,children:[T||N(`clickToUpload`),` `,a&&`*`]}),v&&c(i,{color:s?`error`:`textSecondary`,variant:`body2`,children:v})]}),c(`input`,{id:I,ref:R,type:`file`,title:D,disabled:n,required:a,name:t,multiple:p,accept:e,pattern:E,onChange:e=>{w?.(e),M(e.target.files)},style:{left:`50%`,opacity:0,pointerEvents:`none`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,zIndex:-1}},O?`has-files`:`no-files`)]})});try{C.displayName=`File`,C.__docgenInfo={description:``,displayName:`File`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/File/File.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`enum`,raw:`"small" | "medium"`,value:[{value:`"small"`},{value:`"medium"`}]}},variant:{defaultValue:{value:`vertical`},declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`variant`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`ReactNode`}},helperText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`helperText`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`icon`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`ReactNode`}},error:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`error`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`boolean`}},id:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`id`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`name`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`string`}},accept:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`accept`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`string`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`required`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`boolean`}},multiple:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`multiple`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`boolean`}},fullWidth:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`fullWidth`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`disabled`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`boolean`}},pattern:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`pattern`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`title`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`value`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`File[] | FileList | null`}},localeText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`localeText`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`{ files: string; }`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`onChange`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`((e: ChangeEvent<HTMLInputElement, Element>) => void)`}}},tags:{}}}catch{}})),T,E=e((()=>{w(),w(),T=C})),D,O,k,A,j,M,N,P,F,I,L,R,z,B;e((()=>{l(),D=t(a(),1),p(),E(),s(),O=e=>{let t=(0,D.useRef)(null),n=(0,D.useRef)(null);return u(o,{spacing:2,height:`100%`,alignItems:`center`,justifyContent:`center`,component:`form`,onSubmit:e=>{e.preventDefault(),alert(`Submitted`)},children:[c(T,{size:`small`,...e,ref:t}),c(T,{size:`medium`,...e,ref:n}),u(o,{direction:`row`,spacing:1,children:[c(m,{onClick:()=>t?.current?.reset(),color:`error`,variant:`outlined`,children:`Reset`}),c(m,{onClick:()=>n?.current?.reset(),color:`error`,variant:`outlined`,children:`Reset medium`}),e?.required&&c(m,{type:`submit`,variant:`contained`,children:`Submit`})]})]})},k=e=>{let[t,n]=(0,D.useState)(null);return u(o,{spacing:2,height:`100%`,alignItems:`center`,justifyContent:`center`,children:[c(T,{...e,size:`small`,value:t,onChange:({target:e})=>n(e.files)}),c(m,{variant:`contained`,onClick:()=>n(null),disabled:!t?.length,children:`Remove files`})]})},A=O.bind({}),A.args={label:`Ajouter une photo ou un fichier`},j=O.bind({}),j.args={label:`Ajouter une photo ou un fichier`,multiple:!0},M=O.bind({}),M.args={label:`Ajouter une photo ou un fichier`,required:!0},N=O.bind({}),N.args={helperText:`SVG, PNG, JPG or GIF (max. 3MB)`,label:`Ajouter une photo ou un fichier`},P=O.bind({}),P.args={label:`Ajouter une photo ou un fichier`,variant:`horizontal`},F=O.bind({}),F.args={label:`Ajouter une photo ou un fichier`,multiple:!0,variant:`horizontal`},I=O.bind({}),I.args={error:!0,helperText:`Fichier invalide`,label:`Ajouter une photo ou un fichier`},L=O.bind({}),L.args={disabled:!0,helperText:`SVG, PNG, JPG or GIF (max. 3MB)`,label:`Ajouter une photo ou un fichier`},R=k.bind({}),R.args={label:`Controlled File Input`},z={component:T,title:`Components/Inputs/File`},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center" component="form" onSubmit={e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Submitted");
  }}>
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && <Button type="submit" variant="contained">
            Submit
          </Button>}
      </Stack>
    </Stack>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<null | FileList>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
      <File {...args} size="small" value={files} onChange={({
      target
    }) => setFiles(target.files)} />
      <Button variant="contained" onClick={() => setFiles(null)} disabled={!files?.length}>
        Remove files
      </Button>
    </Stack>;
}`,...R.parameters?.docs?.source}}},B=[`Basic`,`FileMultiple`,`Required`,`WithLabelAndHelperText`,`DirectionRow`,`DirectionRowMultiple`,`WithError`,`Disabled`,`Controlled`]}))();export{A as Basic,R as Controlled,P as DirectionRow,F as DirectionRowMultiple,L as Disabled,j as FileMultiple,M as Required,I as WithError,N as WithLabelAndHelperText,B as __namedExportsOrder,z as default};