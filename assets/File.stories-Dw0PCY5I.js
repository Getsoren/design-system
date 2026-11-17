import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Li as n,Sa as r,Tn as i,_ as a,b as o,dt as s,g as c,v as l,y as u,yo as d}from"./iframe-BuBoq6oP.js";import{n as f,t as p}from"./useTranslation-DkYA9ALE.js";import{n as m,t as h}from"./Button-CrrPE4WG.js";import{n as g,t as _}from"./UploadIcon-DZ99pkQk.js";var v,y,b,x,S,C=e((()=>{o(),v=t(d(),1),g(),p(),a(),y=5,b=(e,t)=>{let n=t===`vertical`;return e===`small`?n?130:60:n?150:80},x=e=>{if(!e)return``;let t=e.length>1,n=[...e||[]].slice(0,5).map(({name:e})=>{let n=e.split(`.`).pop();return e.length>10&&t?`${e.substring(0,10)}(...).${n}`:e}).join(` • `);return e.length>y?`${n} + ${e.length-y}`:n},S=(0,v.forwardRef)(({accept:e,name:t,disabled:a,required:o,error:d,localeText:p,multiple:m,id:h,size:g,helperText:y,fullWidth:S,icon:C,onChange:w,label:T,pattern:E,title:D,value:O,variant:k=`vertical`},A)=>{let[j,M]=(0,v.useState)(null),{t:N}=f(),{palette:P}=r(),F=k===`vertical`,I=h||t,L=(0,v.useRef)(null),R=(0,v.useRef)(null),z=O===void 0?j:O,B=x(z);return(0,v.useImperativeHandle)(A,()=>{let e=R.current;return e.reset=()=>{M(null),R.current&&(R.current.value=``)},e}),u(i,{ref:L,htmlFor:I,onDragOver:e=>{e.preventDefault()},onDrop:e=>{if(e.preventDefault(),e.dataTransfer.files.length>0){let t=R.current,n=e.dataTransfer.files;M(n);let r=new DataTransfer;Array.from(n).forEach(e=>{r.items.add(e)}),t&&(t.files=r.files),t?.focus(),t?.blur(),w?.({...e,target:t})}},sx:{"&:hover, &:focus":{borderColor:P.primary.main},border:`1px dashed ${d?P.error.main:P.divider}`,borderRadius:1,cursor:`pointer`,height:b(g,k),maxWidth:S?`100%`:400,padding:2,position:`relative`,width:`100%`},children:[u(s,{alignItems:`center`,height:`100%`,direction:F?`column`:`row`,justifyContent:F?`center`:`flex-start`,textAlign:F?`center`:`left`,spacing:.5,color:a?`text.disabled`:`text.secondary`,children:[C||l(_,{sx:{height:40,width:40}}),B?u(c,{children:[u(n,{variant:`body2`,color:`textSecondary`,children:[z?.length,` `,p?.files||N(`files`)]}),l(n,{variant:`body2`,color:`primary`,whiteSpace:F?`normal`:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:B})]}):u(n,{component:`span`,variant:`body2`,color:a?`text.disabled`:`text.primary`,children:[T||u(c,{children:[l(n,{component:`strong`,variant:`inherit`,fontWeight:600,children:N(`clickToUpload`)}),` `,N(`orDragAndDrop`)]}),o&&` *`]}),y&&l(n,{color:d?`error`:`textSecondary`,variant:`body2`,children:y})]}),l(`input`,{id:I,ref:R,type:`file`,title:D,disabled:a,required:o,name:t,multiple:m,accept:e,pattern:E,onChange:e=>{w?.(e),M(e.target.files)},style:{left:`50%`,opacity:0,pointerEvents:`none`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,zIndex:-1}},O?`has-files`:`no-files`)]})});try{S.displayName=`File`,S.__docgenInfo={description:``,displayName:`File`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/File/File.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`enum`,raw:`"small" | "medium"`,value:[{value:`"small"`},{value:`"medium"`}]}},variant:{defaultValue:{value:`vertical`},declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`variant`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`ReactNode`}},helperText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`helperText`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`icon`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`ReactNode`}},error:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`error`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`boolean`}},id:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`id`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`name`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`string`}},accept:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`accept`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`string`}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`required`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`boolean`}},multiple:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`multiple`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`boolean`}},fullWidth:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`fullWidth`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`disabled`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`boolean`}},pattern:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`pattern`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`title`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`value`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`File[] | FileList | null`}},localeText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`localeText`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`{ files: string; }`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`}],description:``,name:`onChange`,parent:{fileName:`design-system/src/components/Inputs/File/File.tsx`,name:`FileUploadProps`},required:!1,tags:{},type:{name:`((e: ChangeEvent<HTMLInputElement, Element>) => void)`}}},tags:{}}}catch{}})),w,T,E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{o(),w=t(d(),1),m(),C(),a(),T=e=>{let t=(0,w.useRef)(null),n=(0,w.useRef)(null);return u(s,{spacing:2,height:`100%`,alignItems:`center`,justifyContent:`center`,component:`form`,onSubmit:e=>{e.preventDefault(),alert(`Submitted`)},children:[l(S,{size:`small`,...e,ref:t}),l(S,{size:`medium`,...e,ref:n}),u(s,{direction:`row`,spacing:1,children:[l(h,{onClick:()=>t?.current?.reset(),color:`error`,variant:`outlined`,children:`Reset`}),l(h,{onClick:()=>n?.current?.reset(),color:`error`,variant:`outlined`,children:`Reset medium`}),e?.required&&l(h,{type:`submit`,variant:`contained`,children:`Submit`})]})]})},E=e=>{let[t,n]=(0,w.useState)(null);return u(s,{spacing:2,height:`100%`,alignItems:`center`,justifyContent:`center`,children:[l(S,{...e,size:`small`,value:t,onChange:({target:e})=>n(e.files)}),l(h,{variant:`contained`,onClick:()=>n(null),disabled:!t?.length,children:`Remove files`})]})},D=T.bind({}),D.args={label:`Ajouter une photo ou un fichier`},O=T.bind({}),O.args={label:`Ajouter une photo ou un fichier`,multiple:!0},k=T.bind({}),k.args={label:`Ajouter une photo ou un fichier`,required:!0},A=T.bind({}),A.args={helperText:`SVG, PNG, JPG or GIF (max. 3MB)`,label:`Ajouter une photo ou un fichier`},j=T.bind({}),j.args={label:`Ajouter une photo ou un fichier`,variant:`horizontal`},M=T.bind({}),M.args={label:`Ajouter une photo ou un fichier`,multiple:!0,variant:`horizontal`},N=T.bind({}),N.args={error:!0,helperText:`Fichier invalide`,label:`Ajouter une photo ou un fichier`},P=T.bind({}),P.args={disabled:!0,helperText:`SVG, PNG, JPG or GIF (max. 3MB)`,label:`Ajouter une photo ou un fichier`},F=E.bind({}),F.args={label:`Controlled File Input`},I={component:S,title:`Components/Inputs/File`},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
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
  const [files, setFiles] = useState<null | FileList>(null);
  return <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
      <File {...args} size="small" value={files} onChange={({
      target
    }) => setFiles(target.files)} />
      <Button variant="contained" onClick={() => setFiles(null)} disabled={!files?.length}>
        Remove files
      </Button>
    </Stack>;
}`,...F.parameters?.docs?.source}}},L=[`Basic`,`FileMultiple`,`Required`,`WithLabelAndHelperText`,`DirectionRow`,`DirectionRowMultiple`,`WithError`,`Disabled`,`Controlled`]}))();export{D as Basic,F as Controlled,j as DirectionRow,M as DirectionRowMultiple,P as Disabled,O as FileMultiple,k as Required,N as WithError,A as WithLabelAndHelperText,L as __namedExportsOrder,I as default};