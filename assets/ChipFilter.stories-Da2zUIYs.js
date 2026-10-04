import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$a as n,Ai as r,Gt as i,Ir as a,Qt as o,Rt as s,at as c,d as l,f as u,ft as d,jt as f,li as ee,m as p,o as m,p as h,s as g,tn as _,u as v,yr as y}from"./iframe-Bka9vE-F.js";import{n as b,t as x}from"./CloseIcon-CV3YGLxA.js";import{n as te,t as S}from"./useMenu-BcOvGJOc.js";import{n as ne,t as C}from"./useTranslation-DY7GC0hW.js";import{n as w,t as T}from"./ChevronIcon-CBdxWwxt.js";import{n as E,t as D}from"./InfoIcon-BEshFFX2.js";function O({label:e,value:t,onChange:n,checked:l,onCheckedChange:p,options:m,variant:b,disabled:S,labelMenu:C,labelOnlyAfterSelection:w,applyOnSelect:E,hideMenuHeader:O,denseMenu:j,menuProps:M,separatorBetweenLabelAndOptionSelected:N=`:`,multiple:P=!1,size:F=`medium`}){let I=l!==void 0,[L,R]=(0,k.useState)(()=>I?l:P?t||[]:t),z=I?l:P?t?.length>0:t!=null,{anchorMenu:B,openMenu:V,isMenuOpen:H,closeMenu:U}=te(),{t:W}=ne(),G=Array.isArray(m),K=m!==void 0,q=e=>{I?p?.(e):n?.(e)},J=()=>{q(L),U()},Y=()=>{if(I)R(!1),p?.(!1);else if(P){let e=[];R(e),n?.(e)}else R(void 0),n?.(void 0);U()},X=e=>{if(I&&!K){p?.(!l);return}if(K&&G){V(e);return}if(K&&!G)if(I)p?.(!l);else{let e=t==null?m?.value:void 0;P?n?.(e===void 0?[]:[e]):n?.(e)}},Z=e=>{let t;if(I)t=!0,R(t);else if(P){let n=L||[];t=n.includes(e)?n.filter(t=>t!==e):[...n,e],R(t)}else t=e,R(t);E&&(q(t),P||I||U())},Q=e=>I?l:P?L?.includes(e):L===e,$=e=>G?`${C?`${C} ${N} `:``}${m.find(t=>t.value===e)?.label||``}`:m?.label;return(0,k.useEffect)(()=>{R(I?l:P?t||[]:t)},[I,P,l,t]),h(v,{children:[u(ee,{disabled:S,size:F,label:(()=>{if(I)return e;if(w&&z){let n=t||[],r=Array.isArray(n)?n.length:1;return`${e||C}${P&&r>1?` (${r})`:``}`}if(P&&z){let n=t||[],r=n.length;if(r===1)return $(n[0])||e;if(r>1){let e=$(n[0]),t=r-1;return`${e||String(n[0])}... (+${t})`}}return!(P||I)&&t!=null&&G&&$(t)||e})(),variant:b,deleteIcon:K&&G?h(A,{children:[u(T,{fontSize:`small`,sx:{transform:H?`rotate(180deg)`:`rotate(0deg)`,transition:`opacity 0.2s ease-in-out`,...z&&{".MuiChip-root:hover &":{opacity:0}}}}),z&&u(c,{alignItems:`center`,justifyContent:`center`,onClick:e=>{e.stopPropagation(),Y()},sx:{".MuiChip-root:hover &":{opacity:1},color:`text.contrast`,left:`50%`,opacity:0,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,transition:`opacity 0.2s ease-in-out`},children:u(x,{sx:{fontSize:g(16)}})})]}):void 0,onClick:X,onDelete:K&&G?()=>{}:void 0,color:z?`active`:`default`}),K&&G&&h(i,{slotProps:{paper:{sx:{minWidth:350}}},...M,anchorEl:B,open:H,onClose:U,children:[!O&&h(c,{component:`li`,direction:`row`,paddingLeft:2,marginBottom:1,children:[u(o,{children:C}),u(r,{onClick:U,children:u(x,{fontSize:`small`})})]}),m.map((e,t)=>{let n=`${e.id||e.value}-${t}`,i=Q(e.value);return h(s,{dense:j,onClick:()=>Z(e.value),children:[u(_,{children:u(P||I?y:f,{disableRipple:!0,checked:i,sx:{padding:0}})}),u(o,{slotProps:j?{primary:{variant:`body2`}}:void 0,sx:{color:`text.secondary`,flexGrow:0},children:e.label}),e.info&&u(d,{title:e.info,children:u(r,{size:`small`,sx:{color:`text.secondary`,marginLeft:.5},onClick:e=>e.stopPropagation(),children:u(D,{fontSize:`small`})})})]},n)}),!E&&h(c,{component:`li`,direction:`row`,justifyContent:`flex-end`,spacing:1,marginTop:1,children:[u(a,{size:`small`,onClick:Y,children:W(`reset`)}),u(a,{variant:`contained`,size:`small`,onClick:J,children:W(`apply`)})]})]})]})}var k,A,j=e((()=>{p(),k=t(n(),1),w(),b(),E(),S(),C(),m(),l(),A=({children:e})=>u(c,{alignItems:`center`,justifyContent:`center`,sx:{marginLeft:-.5,marginRight:.5,position:`relative`},children:e});try{O.displayName=`ChipFilter`,O.__docgenInfo={description:`ChipFilter component that can function as a toggle, single selection, or multiple selection filter.`,displayName:`ChipFilter`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,methods:[],props:{checked:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`The checked state of the toggle. When provided, the component acts as a toggle.`,name:`checked`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`boolean`}},onCheckedChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Callback function triggered when the checked state changes.`,name:`onCheckedChange`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{param:`checked`},type:{name:`((checked: boolean) => void)`}},multiple:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Exclude these props for toggle mode`,name:`multiple`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`undefined`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Exclude these props for toggle mode`,name:`value`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`undefined`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`}],description:`Exclude these props for toggle mode`,name:`onChange`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterToggleProps`},required:!1,tags:{},type:{name:`undefined`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The label of the chip filter.`,name:`label`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`ReactNode`}},labelMenu:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The label displayed in the menu for the chip filter, only with multiple options.`,name:`labelMenu`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`string`}},size:{defaultValue:{value:`medium`},declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The size of the chip filter.`,name:`size`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"small" | "medium", ChipPropsSizeOverrides>`,value:[{value:`"small"`},{value:`"medium"`},{value:`"large"`},{value:`"xSmall"`}]}},variant:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The variant of the chip filter.`,name:`variant`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"filled" | "outlined", ChipPropsVariantOverrides>`,value:[{value:`"filled"`},{value:`"outlined"`},{value:`"outlined-rounded"`},{value:`"rounded"`}]}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`Indicates if the chip filter is disabled.`,name:`disabled`,parent:{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`},required:!1,tags:{},type:{name:`boolean`}},options:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Inputs/ChipFilter/ChipFilter.tsx`,name:`ChipFilterBaseProps`}],description:`The options available for selection in the chip filter.
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
`}}}catch{}})),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{p(),M=t(n(),1),j(),l(),N=[{id:`1`,label:`Filter 1`,value:`filter-1`},{id:`2`,label:`Filter 2`,value:`filter-2`},{id:`3`,label:`Filter 3`,value:`filter-3`},{id:`4`,label:`Filter 4`,value:`filter-4`}],P=[{id:`1`,info:`This filter only keeps active items.`,label:`Filter with info !`,value:`filter-1`},{id:`2`,label:`Filter 2`,value:`filter-2`},{id:`3`,info:`Archived items are excluded from this filter.`,label:`Filter 3`,value:`filter-3`},{id:`4`,label:`Filter 4`,value:`filter-4`}],F=e=>{let[t,n]=(0,M.useState)(),[r,i]=(0,M.useState)(),[a,o]=(0,M.useState)();return h(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[u(O,{size:`small`,label:`Small`,onChange:e=>{n(e)},value:t,options:N,labelMenu:`Make your choice`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected,applyOnSelect:e?.applyOnSelect}),u(O,{size:`medium`,label:`Medium`,onChange:e=>{i(e)},value:r,options:N,labelMenu:`Make your choice`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected,applyOnSelect:e?.applyOnSelect}),u(O,{size:`large`,label:`Large`,onChange:e=>{o(e)},value:a,options:N,labelMenu:`Make your choice`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected,applyOnSelect:e?.applyOnSelect})]})},I=e=>{let[t,n]=(0,M.useState)([]),[r,i]=(0,M.useState)([]);return h(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[u(O,{multiple:!0,size:`small`,label:`Small Multiple`,onChange:e=>{n(e)},value:t,options:N,labelMenu:`Select multiple options`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected}),u(O,{multiple:!0,size:`medium`,label:`Medium Multiple`,onChange:e=>{i(e)},value:r,options:N,labelMenu:`Select multiple options`,disabled:e?.disabled,labelOnlyAfterSelection:e?.labelOnlyAfterSelection,separatorBetweenLabelAndOptionSelected:e?.separatorBetweenLabelAndOptionSelected})]})},L=e=>{let[t,n]=(0,M.useState)(),[r,i]=(0,M.useState)([]);return h(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[u(O,{size:`medium`,label:`Single`,onChange:n,value:t,options:P,labelMenu:`Make your choice`,disabled:e?.disabled}),u(O,{multiple:!0,size:`medium`,label:`Multiple`,onChange:i,value:r,options:P,labelMenu:`Select multiple options`,disabled:e?.disabled})]})},R=()=>{let[e,t]=(0,M.useState)([]);return u(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:u(O,{multiple:!0,applyOnSelect:!0,hideMenuHeader:!0,denseMenu:!0,size:`small`,variant:`outlined`,label:`Dense menu`,onChange:t,value:e,options:N,labelMenu:`Dense menu`})})},z=()=>{let[e,t]=(0,M.useState)(!1),[n,r]=(0,M.useState)(!1),[i,a]=(0,M.useState)(!1);return h(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[u(O,{size:`small`,label:`Small`,onCheckedChange:e=>{t(e)},checked:e}),u(O,{size:`medium`,label:`Medium`,onCheckedChange:e=>{r(e)},checked:n}),u(O,{size:`large`,label:`Large`,onCheckedChange:e=>{a(e)},checked:i})]})},B=F.bind({}),B.args={},V=F.bind({}),V.args={disabled:!0},H=I.bind({}),H.args={},U=I.bind({}),U.args={disabled:!0},W=z.bind({}),W.args={},G=L.bind({}),G.args={},K=F.bind({}),K.args={labelOnlyAfterSelection:!0},q=I.bind({}),q.args={labelOnlyAfterSelection:!0},J=F.bind({}),J.args={separatorBetweenLabelAndOptionSelected:`/`},Y=F.bind({}),Y.args={applyOnSelect:!0},X=R.bind({}),X.args={},Z={component:O,title:`Components/Inputs/ChipFilter`},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const [valueLarge, setValueLarge] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  const handleChangeLarge = (newValue?: string) => {
    setValueLarge(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="large" label="Large" onChange={handleChangeLarge} value={valueLarge} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const [valueLarge, setValueLarge] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  const handleChangeLarge = (newValue?: string) => {
    setValueLarge(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="large" label="Large" onChange={handleChangeLarge} value={valueLarge} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [valueSmallToggle, setValueSmallToggle] = useState<boolean>(false);
  const [valueMediumToggle, setValueMediumToggle] = useState<boolean>(false);
  const [valueLargeToggle, setValueLargeToggle] = useState<boolean>(false);
  const handleChangeSmallToggle = (newValue: boolean) => {
    setValueSmallToggle(newValue);
  };
  const handleChangeMediumToggle = (newValue: boolean) => {
    setValueMediumToggle(newValue);
  };
  const handleChangeLargeToggle = (newValue: boolean) => {
    setValueLargeToggle(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onCheckedChange={handleChangeSmallToggle} checked={valueSmallToggle} />
      <ChipFilter size="medium" label="Medium" onCheckedChange={handleChangeMediumToggle} checked={valueMediumToggle} />
      <ChipFilter size="large" label="Large" onCheckedChange={handleChangeLargeToggle} checked={valueLargeToggle} />
    </Stack>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>();
  const [valueMultiple, setValueMultiple] = useState<string[]>([]);
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="medium" label="Single" onChange={setValue} value={value} options={optionsWithInfo} labelMenu="Make your choice" disabled={args?.disabled} />
      <ChipFilter multiple size="medium" label="Multiple" onChange={setValueMultiple} value={valueMultiple} options={optionsWithInfo} labelMenu="Select multiple options" disabled={args?.disabled} />
    </Stack>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const [valueLarge, setValueLarge] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  const handleChangeLarge = (newValue?: string) => {
    setValueLarge(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="large" label="Large" onChange={handleChangeLarge} value={valueLarge} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const [valueLarge, setValueLarge] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  const handleChangeLarge = (newValue?: string) => {
    setValueLarge(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="large" label="Large" onChange={handleChangeLarge} value={valueLarge} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();
  const [valueLarge, setValueLarge] = useState<string>();
  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };
  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };
  const handleChangeLarge = (newValue?: string) => {
    setValueLarge(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onChange={handleChangeSmall} value={valueSmall} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="medium" label="Medium" onChange={handleChangeMedium} value={valueMedium} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
      <ChipFilter size="large" label="Large" onChange={handleChangeLarge} value={valueLarge} options={options} labelMenu="Make your choice" disabled={args?.disabled} labelOnlyAfterSelection={args?.labelOnlyAfterSelection} separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected} applyOnSelect={args?.applyOnSelect} />
    </Stack>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>([]);
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter multiple applyOnSelect hideMenuHeader denseMenu size="small" variant="outlined" label="Dense menu" onChange={setValue} value={value} options={options} labelMenu="Dense menu" />
    </Stack>;
}`,...X.parameters?.docs?.source}}},Q=[`Basic`,`Disabled`,`Multiple`,`MultipleDisabled`,`Toggle`,`WithInfo`,`LabelOnlyAfterSelection`,`MultipleLabelOnlyAfterSelection`,`CustomSeparator`,`ApplyOnSelect`,`DenseMenu`]}))();export{Y as ApplyOnSelect,B as Basic,J as CustomSeparator,X as DenseMenu,V as Disabled,K as LabelOnlyAfterSelection,H as Multiple,U as MultipleDisabled,q as MultipleLabelOnlyAfterSelection,W as Toggle,G as WithInfo,Q as __namedExportsOrder,Z as default};