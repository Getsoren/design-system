import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Di as n,Gi as r,Gt as i,Ir as a,Qt as o,Rt as s,Wi as c,Ya as l,at as u,d,f,ft as p,jt as ee,li as te,m,o as h,p as g,s as _,tn as v,u as y,yr as b}from"./iframe-BJWYUZp-.js";import{n as x,t as S}from"./CloseIcon-iRvFxa5l.js";import{n as ne,t as C}from"./useMenu-CFHUr1Gt.js";import{n as w,t as T}from"./useTranslation-BzKJPeVS.js";import{n as E,t as re}from"./ChevronIcon-BRDxNlsq.js";var D,O=e((()=>{c(),d(),D=e=>f(r,{viewBox:`0 0 24 24`,...e,children:f(`path`,{fill:`currentColor`,d:`M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z`})});try{D.displayName=`InfoIcon`,D.__docgenInfo={description:``,displayName:`InfoIcon`,filePath:`/home/runner/work/design-system/design-system/src/components/DataDisplay/Icons/InfoIcon.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/SvgIcon/SvgIcon.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}}));function k({label:e,value:t,onChange:r,checked:c,onCheckedChange:l,options:d,variant:m,disabled:h,labelMenu:x,labelOnlyAfterSelection:C,applyOnSelect:T,hideMenuHeader:E,denseMenu:O,menuProps:k,separatorBetweenLabelAndOptionSelected:M=`:`,multiple:N=!1,size:P=`medium`}){let F=c!==void 0,[I,L]=(0,A.useState)(()=>F?c:N?t||[]:t),R=F?c:N?t?.length>0:t!=null,{anchorMenu:z,openMenu:B,isMenuOpen:V,closeMenu:H}=ne(),{t:U}=w(),W=Array.isArray(d),G=d!==void 0,K=e=>{F?l?.(e):r?.(e)},q=()=>{K(I),H()},J=()=>{if(F)L(!1),l?.(!1);else if(N){let e=[];L(e),r?.(e)}else L(void 0),r?.(void 0);H()},Y=e=>{if(F&&!G){l?.(!c);return}if(G&&W){B(e);return}if(G&&!W)if(F)l?.(!c);else{let e=t==null?d?.value:void 0;N?r?.(e===void 0?[]:[e]):r?.(e)}},X=e=>{let t;if(F)t=!0,L(t);else if(N){let n=I||[];t=n.includes(e)?n.filter(t=>t!==e):[...n,e],L(t)}else t=e,L(t);T&&(K(t),N||F||H())},Z=e=>F?c:N?I?.includes(e):I===e,Q=e=>W?`${x?`${x} ${M} `:``}${d.find(t=>t.value===e)?.label||``}`:d?.label;return(0,A.useEffect)(()=>{L(F?c:N?t||[]:t)},[F,N,c,t]),g(y,{children:[f(te,{disabled:h,size:P,label:(()=>{if(F)return e;if(C&&R){let n=t||[],r=Array.isArray(n)?n.length:1;return`${e||x}${N&&r>1?` (${r})`:``}`}if(N&&R){let n=t||[],r=n.length;if(r===1)return Q(n[0])||e;if(r>1){let e=Q(n[0]),t=r-1;return`${e||String(n[0])}... (+${t})`}}return!(N||F)&&t!=null&&W&&Q(t)||e})(),variant:m,deleteIcon:G&&W?g(j,{children:[f(re,{fontSize:`small`,sx:{transform:V?`rotate(180deg)`:`rotate(0deg)`,transition:`opacity 0.2s ease-in-out`,...R&&{".MuiChip-root:hover &":{opacity:0}}}}),R&&f(u,{alignItems:`center`,justifyContent:`center`,onClick:e=>{e.stopPropagation(),J()},sx:{".MuiChip-root:hover &":{opacity:1},color:`text.contrast`,left:`50%`,opacity:0,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,transition:`opacity 0.2s ease-in-out`},children:f(S,{sx:{fontSize:_(16)}})})]}):void 0,onClick:Y,onDelete:G&&W?()=>{}:void 0,color:R?`active`:`default`}),G&&W&&g(i,{slotProps:{paper:{sx:{minWidth:350}}},...k,anchorEl:z,open:V,onClose:H,children:[!E&&g(u,{component:`li`,direction:`row`,paddingLeft:2,marginBottom:1,children:[f(o,{children:x}),f(n,{onClick:H,children:f(S,{fontSize:`small`})})]}),d.map((e,t)=>{let r=`${e.id||e.value}-${t}`,i=Z(e.value);return g(s,{dense:O,onClick:()=>X(e.value),children:[f(v,{children:f(N||F?b:ee,{disableRipple:!0,checked:i,sx:{padding:0}})}),f(o,{slotProps:O?{primary:{variant:`body2`}}:void 0,sx:{color:`text.secondary`,flexGrow:0},children:e.label}),e.info&&f(p,{title:e.info,children:f(n,{size:`small`,sx:{color:`text.secondary`,marginLeft:.5},onClick:e=>e.stopPropagation(),children:f(D,{fontSize:`small`})})})]},r)}),!T&&g(u,{component:`li`,direction:`row`,justifyContent:`flex-end`,spacing:1,marginTop:1,children:[f(a,{size:`small`,onClick:J,children:U(`reset`)}),f(a,{variant:`contained`,size:`small`,onClick:q,children:U(`apply`)})]})]})]})}var A,j,M=e((()=>{m(),A=t(l(),1),E(),x(),O(),C(),T(),h(),d(),j=({children:e})=>f(u,{alignItems:`center`,justifyContent:`center`,sx:{marginLeft:-.5,marginRight:.5,position:`relative`},children:e});try{k.displayName=`ChipFilter`,k.__docgenInfo={description:`ChipFilter component that can function as a toggle, single selection, or multiple selection filter.`,displayName:`ChipFilter`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,methods:[],props:{checked:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`The checked state of the toggle. When provided, the component acts as a toggle.`,name:`checked`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`boolean`}},onCheckedChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Callback function triggered when the checked state changes.`,name:`onCheckedChange`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{param:`checked`},type:{name:`((checked: boolean) => void)`}},multiple:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Exclude these props for toggle mode`,name:`multiple`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`undefined`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Exclude these props for toggle mode`,name:`value`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Exclude these props for toggle mode`,name:`onChange`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`undefined`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The label of the chip filter.`,name:`label`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`ReactNode`}},labelMenu:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The label displayed in the menu for the chip filter, only with multiple options.`,name:`labelMenu`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`string`}},size:{defaultValue:{value:`medium`},declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The size of the chip filter.`,name:`size`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"small" | "medium", ChipPropsSizeOverrides>`,value:[{value:`"small"`},{value:`"medium"`},{value:`"xSmall"`}]}},variant:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The variant of the chip filter.`,name:`variant`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"filled" | "outlined", ChipPropsVariantOverrides>`,value:[{value:`"filled"`},{value:`"outlined"`},{value:`"outlined-rounded"`},{value:`"rounded"`}]}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`Indicates if the chip filter is disabled.`,name:`disabled`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`boolean`}},options:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The options available for selection in the chip filter.
If "options" is not provided, it acts as a simple toggle.`,name:`options`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`Option<boolean> | Option<boolean>[]`}},separatorBetweenLabelAndOptionSelected:{defaultValue:{value:`:`},declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`Indicates if there should be a separator between the label menu and the options selected in the menu.
Defaults to ":"`,name:`separatorBetweenLabelAndOptionSelected`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`string`}},labelOnlyAfterSelection:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`Indicates if the label should only be displayed after a selection is made.`,name:`labelOnlyAfterSelection`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`boolean`}},applyOnSelect:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`When true, changes are applied immediately without needing to click "Apply".
When false (default), changes require clicking "Apply" to be applied.`,name:`applyOnSelect`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`boolean`}},hideMenuHeader:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`Hides the menu header row (the labelMenu title and its close button).
Useful when the chip itself is the only expected way to toggle the menu.`,name:`hideMenuHeader`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`boolean`}},denseMenu:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`Compact menu rendering: dense menu items and smaller option labels,
for tight containers (e.g. a menu nested inside a popover).`,name:`denseMenu`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`boolean`}},menuProps:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`Props forwarded to the underlying MUI Menu (e.g. elevation, sx, slotProps).
Passing slotProps replaces the default paper minWidth.`,name:`menuProps`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`Partial<Omit<MenuProps, "open" | "onClose" | "anchorEl">>`}}},tags:{param:`label
value
onChange
checked
onCheckedChange
options
variant
disabled
labelMenu
labelOnlyAfterSelection
separatorBetweenLabelAndOptionSelected
multiple
size
applyOnSelect
hideMenuHeader
denseMenu
menuProps`,constructor:`function Object() { [native code] }
`}}}catch{}})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),N=t(l(),1),M(),d(),P=[{id:`1`,label:`Filter 1`,value:`filter-1`},{id:`2`,label:`Filter 2`,value:`filter-2`},{id:`3`,label:`Filter 3`,value:`filter-3`},{id:`4`,label:`Filter 4`,value:`filter-4`}],F=[{id:`1`,info:`This filter only keeps active items.`,label:`Filter with info !`,value:`filter-1`},{id:`2`,label:`Filter 2`,value:`filter-2`},{id:`3`,info:`Archived items are excluded from this filter.`,label:`Filter 3`,value:`filter-3`},{id:`4`,label:`Filter 4`,value:`filter-4`}],I=e=>{let[t,n]=(0,N.useState)(),[r,i]=(0,N.useState)();return g(u,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[f(k,{size:`small`,label:`Small`,onChange:e=>{n(e)},value:t,options:P,labelMenu:`Make your choice`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected,applyOnSelect:e?.applyOnSelect}),f(k,{size:`medium`,label:`Medium`,onChange:e=>{i(e)},value:r,options:P,labelMenu:`Make your choice`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected,applyOnSelect:e?.applyOnSelect})]})},L=e=>{let[t,n]=(0,N.useState)([]),[r,i]=(0,N.useState)([]);return g(u,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[f(k,{multiple:!0,size:`small`,label:`Small Multiple`,onChange:e=>{n(e)},value:t,options:P,labelMenu:`Select multiple options`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected}),f(k,{multiple:!0,size:`medium`,label:`Medium Multiple`,onChange:e=>{i(e)},value:r,options:P,labelMenu:`Select multiple options`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected})]})},R=e=>{let[t,n]=(0,N.useState)(),[r,i]=(0,N.useState)([]);return g(u,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[f(k,{size:`medium`,label:`Single`,onChange:n,value:t,options:F,labelMenu:`Make your choice`,disabled:e?.disabled}),f(k,{multiple:!0,size:`medium`,label:`Multiple`,onChange:i,value:r,options:F,labelMenu:`Select multiple options`,disabled:e?.disabled})]})},z=()=>{let[e,t]=(0,N.useState)([]);return f(u,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:f(k,{multiple:!0,applyOnSelect:!0,hideMenuHeader:!0,denseMenu:!0,size:`small`,variant:`outlined`,label:`Dense menu`,onChange:t,value:e,options:P,labelMenu:`Dense menu`})})},B=()=>{let[e,t]=(0,N.useState)(!1),[n,r]=(0,N.useState)(!1);return g(u,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[f(k,{size:`small`,label:`Small`,onCheckedChange:e=>{t(e)},checked:e}),f(k,{size:`medium`,label:`Medium`,onCheckedChange:e=>{r(e)},checked:n})]})},V=I.bind({}),V.args={},H=I.bind({}),H.args={disabled:!0},U=L.bind({}),U.args={},W=L.bind({}),W.args={disabled:!0},G=B.bind({}),G.args={},K=R.bind({}),K.args={},q=I.bind({}),q.args={labelOnlyAfterSelection:!0},J=L.bind({}),J.args={labelOnlyAfterSelection:!0},Y=I.bind({}),Y.args={separatorBetweenLabelAndOptionSelected:`/`},X=I.bind({}),X.args={applyOnSelect:!0},Z=z.bind({}),Z.args={},Q={component:k,title:`Components/Inputs/ChipFilter`},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
  const [valueSmallMultiple, setValueSmallMultiple] = useState<string[]>([]);
  const [valueMediumMultiple, setValueMediumMultiple] = useState<string[]>([]);
  const handleChangeSmallMultiple = (newValue: string[]) => {
    setValueSmallMultiple(newValue);
  };
  const handleChangeMediumMultiple = (newValue: string[]) => {
    setValueMediumMultiple(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter multiple size="small" label="Small Multiple" onChange={handleChangeSmallMultiple} value={valueSmallMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
      <ChipFilter multiple size="medium" label="Medium Multiple" onChange={handleChangeMediumMultiple} value={valueMediumMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
    </Stack>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
  const [valueSmallMultiple, setValueSmallMultiple] = useState<string[]>([]);
  const [valueMediumMultiple, setValueMediumMultiple] = useState<string[]>([]);
  const handleChangeSmallMultiple = (newValue: string[]) => {
    setValueSmallMultiple(newValue);
  };
  const handleChangeMediumMultiple = (newValue: string[]) => {
    setValueMediumMultiple(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter multiple size="small" label="Small Multiple" onChange={handleChangeSmallMultiple} value={valueSmallMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
      <ChipFilter multiple size="medium" label="Medium Multiple" onChange={handleChangeMediumMultiple} value={valueMediumMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
    </Stack>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [valueSmallToggle, setValueSmallToggle] = useState<boolean>(false);
  const [valueMediumToggle, setValueMediumToggle] = useState<boolean>(false);
  const handleChangeSmallToggle = (newValue: boolean) => {
    setValueSmallToggle(newValue);
  };
  const handleChangeMediumToggle = (newValue: boolean) => {
    setValueMediumToggle(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onCheckedChange={handleChangeSmallToggle} checked={valueSmallToggle} />
      <ChipFilter size="medium" label="Medium" onCheckedChange={handleChangeMediumToggle} checked={valueMediumToggle} />
    </Stack>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>();
  const [valueMultiple, setValueMultiple] = useState<string[]>([]);
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="medium" label="Single" onChange={setValue} value={value} options={optionsWithInfo} labelMenu="Make your choice" disabled={args?.disabled} />
      <ChipFilter multiple size="medium" label="Multiple" onChange={setValueMultiple} value={valueMultiple} options={optionsWithInfo} labelMenu="Select multiple options" disabled={args?.disabled} />
    </Stack>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  const [valueSmallMultiple, setValueSmallMultiple] = useState<string[]>([]);
  const [valueMediumMultiple, setValueMediumMultiple] = useState<string[]>([]);
  const handleChangeSmallMultiple = (newValue: string[]) => {
    setValueSmallMultiple(newValue);
  };
  const handleChangeMediumMultiple = (newValue: string[]) => {
    setValueMediumMultiple(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter multiple size="small" label="Small Multiple" onChange={handleChangeSmallMultiple} value={valueSmallMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
      <ChipFilter multiple size="medium" label="Medium Multiple" onChange={handleChangeMediumMultiple} value={valueMediumMultiple} options={options} labelMenu="Select multiple options" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} />
    </Stack>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>([]);
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter multiple applyOnSelect hideMenuHeader denseMenu size="small" variant="outlined" label="Dense menu" onChange={setValue} value={value} options={options} labelMenu="Dense menu" />
    </Stack>;
}`,...Z.parameters?.docs?.source}}},$=[`Basic`,`Disabled`,`Multiple`,`MultipleDisabled`,`Toggle`,`WithInfo`,`LabelOnlyAfterSelection`,`MultipleLabelOnlyAfterSelection`,`CustomSeparator`,`ApplyOnSelect`,`DenseMenu`]}))();export{X as ApplyOnSelect,V as Basic,Y as CustomSeparator,Z as DenseMenu,H as Disabled,q as LabelOnlyAfterSelection,U as Multiple,W as MultipleDisabled,J as MultipleLabelOnlyAfterSelection,G as Toggle,K as WithInfo,$ as __namedExportsOrder,Q as default};