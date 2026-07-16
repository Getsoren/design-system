import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ga as n,S as r,at as i,c as a,l as o,m as s,s as c}from"./iframe-Bb2c4KcW.js";var l,u=e((()=>{l=(e,t,n,r,i=0)=>{if(!e)return null;let a=window.getComputedStyle(e),o=`${a.fontWeight} ${a.fontSize} ${a.fontFamily}`,s=document.createElement(`canvas`).getContext(`2d`);if(!s)return null;s.font=o;let c=t?.toString()||n?.toString()||r?.toString()||` `,l=s.measureText(c).width,u=parseFloat(a.paddingLeft),d=parseFloat(a.paddingRight);return l+u+d+i}})),d,f,p=e((()=>{s(),d=t(n(),1),u(),c(),f=(0,d.forwardRef)(({sx:e,maxWidth:t,minWidth:n,...i},o)=>{let s=(0,d.useRef)(null),[c,u]=(0,d.useState)(null),f=(0,d.useRef)(void 0),{size:p}=i,m=p===`tiny`,h=m?27:50,g=i?.slotProps?.input,_=!!g?.startAdornment||!!i?.InputProps?.startAdornment,v=!!g?.endAdornment||!!i?.InputProps?.endAdornment,y=(_?h:0)+(v?h:0),b=(0,d.useCallback)(()=>{let e=l(s.current,i.value,i.defaultValue,i.placeholder,y);e!==null&&u(Math.min(Math.max(e,n??0),t??1/0))},[i.value,i.defaultValue,i.placeholder,t,n,y]),x=e=>{i.onFocus?.(e);let t=s.current;if(!t)return;let n=t.value.length;requestAnimationFrame(()=>{t.setSelectionRange(n,n)})};return(0,d.useEffect)(()=>{if(!s.current)return;let e=i.value?.toString();e!==f.current&&(b(),f.current=e)},[b,i.value?.toString]),a(r,{ref:o,inputRef:s,...i,onFocus:x,sx:{"& .MuiInputBase-input.MuiOutlinedInput-input:not(.MuiInputBase-inputMultiline)":{...v&&{paddingRight:0},..._&&{paddingLeft:1}},"& .MuiOutlinedInput-root":{paddingLeft:m&&_?`5px`:void 0,paddingRight:m&&v?`5px`:void 0,width:c?`${c}px`:`auto`},...e}})});try{f.displayName=`TextFieldAutosize`,f.__docgenInfo={description:`TextField with auto-sizing width based on content
Automatically adjusts width to fit the input value, placeholder, or default value`,displayName:`TextFieldAutosize`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/TextFieldAutosize/TextFieldAutosize.tsx`,methods:[],props:{slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<TextFieldSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<ElementType<FormControlProps, keyof IntrinsicElements>, TextFieldRootSlotPropsOverrides, BaseTextFieldProps>; ... 4 more ...; select?: SlotProps<...>; } | { ...; } | { ...; } | undefined`}},component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/FormControl/FormControl.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/FormControl/FormControl.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/FormControl/FormControl.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}},maxWidth:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/TextFieldAutosize/TextFieldAutosize.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/components/Inputs/TextFieldAutosize/TextFieldAutosize.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/components/Inputs/TextFieldAutosize/TextFieldAutosize.tsx`,name:`TypeLiteral`}],description:``,name:`maxWidth`,required:!1,tags:{},type:{name:`number`}},minWidth:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/TextFieldAutosize/TextFieldAutosize.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/components/Inputs/TextFieldAutosize/TextFieldAutosize.tsx`,name:`TypeLiteral`},{fileName:`design-system/src/components/Inputs/TextFieldAutosize/TextFieldAutosize.tsx`,name:`TypeLiteral`}],description:``,name:`minWidth`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})),m,h,g,_,v,y,b,x,S,C,w;e((()=>{s(),m=t(n(),1),p(),c(),h=e=>{let[t,n]=(0,m.useState)(`Tiny text rendered`),[r,s]=(0,m.useState)(`xSmall text rendered`),[c,l]=(0,m.useState)(`Small field value rendered`),[u,d]=(0,m.useState)(`Medium sized input rendered`);return o(i,{direction:`column`,spacing:3,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[a(f,{label:`Tiny`,size:`tiny`,value:t,onChange:e=>n(e.target.value),...e}),a(f,{label:`xSmall`,size:`xSmall`,value:r,onChange:e=>s(e.target.value),...e}),a(f,{label:`Small`,size:`small`,value:c,onChange:e=>l(e.target.value),...e}),a(f,{label:`Medium`,size:`medium`,value:u,onChange:e=>d(e.target.value),...e})]})},g=h.bind({}),g.args={variant:`outlined`},_=h.bind({}),_.args={InputProps:{endAdornment:a(`span`,{style:{backgroundColor:`blue`},children:`USD`})},variant:`outlined`},v=h.bind({}),v.args={InputProps:{startAdornment:a(`span`,{style:{backgroundColor:`blue`},children:`USD`})},variant:`outlined`},y=h.bind({}),y.args={InputProps:{endAdornment:a(`span`,{style:{backgroundColor:`blue`},children:`.00`}),startAdornment:a(`span`,{style:{backgroundColor:`red`},children:`USD`})},variant:`outlined`},b=h.bind({}),b.args={maxWidth:150,variant:`outlined`},x=h.bind({}),x.args={minWidth:300,variant:`outlined`},S=h.bind({}),S.args={maxWidth:400,minWidth:200,variant:`outlined`},C={component:f,title:`Components/Inputs/TextFieldAutosize`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const [tiny, setTiny] = useState("Tiny text rendered");
  const [xSmall, setXSmall] = useState("xSmall text rendered");
  const [small, setSmall] = useState("Small field value rendered");
  const [medium, setMedium] = useState("Medium sized input rendered");
  return <Stack direction="column" spacing={3} alignItems="center" justifyContent="center" height="100%">
      <TextFieldAutosize label="Tiny" size="tiny" value={tiny} onChange={e => setTiny(e.target.value)} {...args} />
      <TextFieldAutosize label="xSmall" size="xSmall" value={xSmall} onChange={e => setXSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Small" size="small" value={small} onChange={e => setSmall(e.target.value)} {...args} />
      <TextFieldAutosize label="Medium" size="medium" value={medium} onChange={e => setMedium(e.target.value)} {...args} />
    </Stack>;
}`,...S.parameters?.docs?.source}}},w=[`Autosize`,`AutosizeEndAdornment`,`AutosizeStartAdornment`,`AutosizeBothAdornments`,`AutosizeWithMaxWidth`,`AutosizeWithMinWidth`,`AutosizeWithMinAndMaxWidth`]}))();export{g as Autosize,y as AutosizeBothAdornments,_ as AutosizeEndAdornment,v as AutosizeStartAdornment,b as AutosizeWithMaxWidth,S as AutosizeWithMinAndMaxWidth,x as AutosizeWithMinWidth,w as __namedExportsOrder,C as default};