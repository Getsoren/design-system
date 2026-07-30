import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Di as r,Fr as i,Qt as a,S as o,Si as s,Sn as c,Xn as l,Ya as u,aa as d,ai as f,at as p,d as m,f as h,fn as ee,ft as te,in as ne,ln as re,m as g,ni as ie,o as ae,oa as oe,on as se,p as _,pi as v,s as y,u as ce,vr as le,zi as ue}from"./iframe-DGVZXguO.js";import{n as de,t as fe}from"./CloseIcon-BwL08Suo.js";import{n as pe,t as b}from"./useTranslation-DtjCQAqg.js";import{n as me,t as he}from"./ChevronIcon-AxA2gMpd.js";var x,ge,_e,S,ve,ye,be,xe,C,Se,Ce,we,Te,Ee,De,w=e((()=>{g(),x=t(u(),1),me(),de(),b(),ae(),m(),d(),ge={padding:0,paddingRight:1},_e=260,S=e=>`linear-gradient(${e}, ${e})`,ve=e=>e===`xSmall`?{fontSize:y(12),height:20}:e===`small`?{fontSize:y(13),height:24}:{fontSize:y(14),height:32},ye=e=>e===`xSmall`?{fontSize:y(12),height:26}:e===`small`?{fontSize:y(13),height:32}:{fontSize:y(13),height:40},be=e=>typeof e==`string`?e:typeof e?.label==`string`?e.label:``,xe=(e,t)=>{let n=(Array.isArray(e)?e:[e]).filter(Boolean).map(e=>be(e));return n.length?n.length>1?{count:n.length,text:t||``}:{count:1,text:t?`${t} : ${n[0]}`:n[0]}:{count:0,text:t||``}},C=({children:e,compact:t,inverted:r,withMargin:i})=>h(n,{component:`span`,sx:{alignItems:`center`,backgroundColor:r?`grey.100`:`primary.main`,borderRadius:99,color:r?`text.primary`:`primary.contrastText`,display:`inline-flex`,flexShrink:0,fontSize:y(11),fontWeight:500,height:t?16:18,justifyContent:`center`,lineHeight:1,marginLeft:i?.75:0,minWidth:t?16:18,paddingX:`5px`},children:h(n,{component:`span`,sx:{position:`relative`,top:`0.5px`},children:e})}),Se=(e,t)=>t?e?Array.isArray(e)?e:[e]:[]:e||null,Ce=e=>{let t=e===`chip`;return function(e){return h(C,{compact:t,inverted:t,children:`+${e}`})}},we=({variant:e,children:t,disableSelectAll:n,localeText:r,disableReset:o,onChange:c,loading:u,options:d,value:f,multiple:p,...m})=>{let{t:te}=pe(),ne=Array.isArray(f)?f?.length===d?.length:!1,g=Array.isArray(d)&&d.every(e=>typeof e==`string`),ie=!g&&d?.filter(e=>e?.isHeader)||[];return _(ue,{sx:{minWidth:350},...m,children:[p&&!u&&(!n||!!ie?.length)&&_(ce,{children:[_(ee,{role:`listbox`,children:[!n&&h(se,{disablePadding:!0,role:`option`,onMouseDown:e=>{if(e.stopPropagation(),e.preventDefault(),ne){c?.(e,[],`removeOption`);return}c?.(e,d||[],`selectOption`)},children:_(re,{disableRipple:!0,children:[h(le,{disableRipple:!0,id:`select-all-checkbox`,checked:ne,sx:ge}),h(a,{primary:r?.selectAll||te(`selectAll`),slotProps:{primary:{variant:`body2`}}}),!o&&h(i,{variant:`link`,size:`small`,sx:{marginX:1,textDecoration:`none`},onClick:e=>{c?.(e,[],`removeOption`)},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},children:h(s,{variant:`body2`,children:r?.reset||te(`reset`)})})]})}),!g&&ie?.map((e,t)=>{let n=`header-options-${t}`,r=Array.isArray(f)&&f.some(t=>JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id);return h(se,{disablePadding:!0,onMouseDown:t=>{if(t.stopPropagation(),t.preventDefault(),r){let n=Array.isArray(f)?f?.filter(t=>!(JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id)):[];c?.(t,n,`removeOption`);return}c?.(t,[...Array.isArray(f)?f:[],e],`selectOption`)},children:_(re,{disableRipple:!0,children:[h(le,{disableRipple:!0,checked:r,sx:ge}),h(a,{primary:e?.label})]})},n)})]}),h(l,{})]}),t]})},Te=({anchorEl:e,popperRef:t,sx:n,...r})=>{let i=(0,x.useRef)(null),a=e=>{i.current=e,typeof t==`function`?t(e):t&&(t.current=e)};return(0,x.useEffect)(()=>{if(!(e instanceof HTMLElement))return;let t=new ResizeObserver(()=>{i.current?.update()});return t.observe(e),()=>t.disconnect()},[e]),h(v,{placement:`bottom-start`,...r,anchorEl:e,popperRef:a,sx:[({zIndex:e})=>({zIndex:e.modal}),...Array.isArray(n)?n:[n]]})},Ee=({variant:e,onChange:t,disableCheckbox:i,placeholder:a,label:l,localeText:u,disableReset:d,disableSelectAll:p,value:m,onFocus:ee,onBlur:re,open:g,getOptionLabel:ae,onInputChange:v,inputValue:ce,disableClearable:ue,loading:de,resetInputValueOnSelectOption:b,renderOption:me,renderValue:be,width:Ee,sx:De,slotProps:w,tooltip:T,tooltipProps:Oe,size:E=`small`,disableCloseOnSelect:D=!0,multiple:O=!0,options:k=[],...A},j)=>{let{t:ke}=pe(),[M,N]=(0,x.useState)(!1),[Ae,P]=(0,x.useState)(``),F=ce||Ae,I=e===`chip`,L=e===`filled`,R=Array.isArray(m)?!!m.length:m!=null,z=Se(m,O),B=l??a,V=!!B,H=M&&!!F,U=(!!F||R)&&!ue,W=V&&R&&!H,G=V&&!W,K=h(f,{freeSolo:!1,multiple:O,disableClearable:ue,value:z,options:k,loading:de,ref:j,size:E,disableCloseOnSelect:D,onChange:(e,n,r,i)=>{if(n===null){t?.(e,O?[]:null,r,i);return}t?.(e,n,r,i),D&&O||N(!1)},getLimitTagsText:Ce(e),inputValue:F,open:g||M,onOpen:()=>N(!0),sx:{width:Ee,...De},slots:{paper:we,popper:Te},slotProps:{...w,paper:{disableReset:d,disableSelectAll:p,loading:de,localeText:u,multiple:O,onChange:t,options:k,value:m,variant:e,...w?.paper}},onInputChange:(e,t,n)=>{n===`reset`&&M&&!b||n===`selectOption`&&!b||n===`removeOption`&&!b||(ce||P(t),v?.(e,t,n))},onFocus:e=>{N(!0),ee?.(e)},onBlur:e=>{N(!1),re?.(e)},getOptionLabel:ae||(e=>{let t=typeof e==`object`&&`label`in e?e.label:e;return String(t)}),renderOption:me||((e,t,{selected:n})=>{let r=typeof t!=`string`&&t.isHeader;if(de||r)return null;let a=typeof t==`string`?t:t?.id||t?.value||``,o=typeof t==`string`?t:t?.label,c=typeof t==`string`?void 0:t?.image,l=`${a}-${e?.key}`;return oe(se,{...e,key:l},!i&&h(le,{disableRipple:!0,checked:n,sx:ge}),c&&h(ne,{sx:{height:24,marginRight:1,minWidth:`auto`,width:24},children:h(ie,{variant:`rounded`,src:c,sx:{height:24,width:24},children:c===`letter`&&typeof o==`string`&&o?.charAt(0).toUpperCase()})}),typeof o==`string`?h(s,{variant:`body2`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,title:o,children:o}):o)}),renderValue:be||(V?e=>{if(!W)return null;let{count:t,text:r}=xe(e,B);return _(n,{component:`span`,sx:{alignItems:`center`,display:`inline-flex`,minWidth:0},children:[h(s,{component:`span`,overflow:`hidden`,sx:{fontSize:`inherit`,fontWeight:`inherit`},textOverflow:`ellipsis`,whiteSpace:`nowrap`,children:r}),t>0&&h(C,{inverted:I,withMargin:!0,children:t})]})}:O?(e,t)=>{if(!(Array.isArray(e)&&e.length)||H)return null;let r=e=>typeof e==`object`&&`label`in e&&e?.label?e.label:e.toString(),[i]=e,{key:a}=t({index:0});return _(n,{component:`span`,sx:{alignItems:`center`,display:`inline-flex`,minWidth:0},children:[h(s,{minWidth:0,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:r(i)}),h(C,{compact:I,inverted:I,withMargin:!0,children:e.length})]},a)}:void 0),renderInput:e=>{let n=()=>{if(V)return G?a??B:void 0;if(!(!M&&(Array.isArray(m)&&m.length||!Array.isArray(m)&&m)))return a},i=()=>L?h(c,{position:`end`,sx:{color:`text.primary`,position:`absolute`,right:E===`medium`?`8px`:`6px`},children:U?h(r,{"aria-label":ke(`clear`),onClick:e=>{e.preventDefault(),e.stopPropagation(),P(``),v?.(e,``,`clear`),R&&t?.(e,O?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},size:`small`,sx:{"& .MuiSvgIcon-root":{fontSize:y(16),pointerEvents:`none`},"&:hover":{backgroundColor:`action.selected`},color:`text.primary`,cursor:`pointer`,padding:`3px`,pointerEvents:`auto`},children:h(fe,{})}):h(he,{fontSize:`small`,sx:{cursor:`pointer`,transform:M?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`}})}):I?_(c,{position:`end`,sx:{color:R?`text.contrast`:`text.primary`,position:`absolute`,right:5,transform:M?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`},children:[U&&h(r,{size:`small`,onClick:e=>{e.preventDefault(),e.stopPropagation(),P(``),v?.(e,``,`clear`),R&&t?.(e,O?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},sx:{".MuiTextField-root:hover &":{opacity:1},"& .MuiSvgIcon-root":{fontSize:y(16),pointerEvents:`none`},color:R?`text.contrast`:`text.primary`,cursor:`pointer`,left:`50%`,opacity:0,padding:`2px`,pointerEvents:`auto`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,transition:`opacity 0.2s ease-in-out`,zIndex:1},children:h(fe,{})}),h(he,{fontSize:`small`,sx:{cursor:`pointer`,transition:`opacity 0.2s ease-in-out`,...U&&{".MuiTextField-root:hover &":{opacity:0}}}})]}):M?_(c,{position:`end`,sx:{position:`absolute`,right:8},children:[F&&!ue&&h(r,{size:`small`,onClick:e=>{P(``),v?.(e,``,`clear`)},sx:{marginRight:`-3px`},children:h(fe,{sx:{fontSize:y(20)}})}),(0,x.isValidElement)(e.InputProps?.endAdornment)&&typeof e.InputProps.endAdornment==`object`&&`props`in e.InputProps.endAdornment&&e.InputProps.endAdornment.props&&typeof e.InputProps.endAdornment.props==`object`&&`children`in e.InputProps.endAdornment.props&&Array.isArray(e.InputProps.endAdornment.props.children)&&e.InputProps.endAdornment.props.children[1]]}):(0,x.isValidElement)(e.InputProps?.endAdornment)?e.InputProps.endAdornment:null;return h(o,{onClick:()=>{e.disabled||N(!0)},sx:{"& .MuiInputBase-root .MuiInputBase-input":{flex:!(O&&(M||F))||M?1:0,...R&&(O||W)&&(M||I||L)&&{marginLeft:I||L?.75:`1px`},minWidth:G?`max-content`:I||L?R&&(O||W)?12:0:M?24:0},"& .MuiInputBase-root.MuiInputBase-root":{flexWrap:`nowrap`},...!I&&!L&&{"& .MuiOutlinedInput-root.MuiInputBase-sizeSmall":{"& .MuiAutocomplete-input":{paddingLeft:`5px !important`},paddingLeft:`9px !important`}},...I&&{"& .MuiInputBase-root":{backgroundColor:R?`text.primary`:`grey.100`,borderRadius:20,color:R?`text.contrast`:`text.primary`,fieldset:{borderColor:`transparent !important`},fontSize:ve(E).fontSize,height:ve(E).height,input:{padding:`0 !important`},minWidth:90,"p.MuiTypography-root":{fontSize:ve(E).fontSize,margin:0},paddingRight:`30px !important`,paddingY:`0 !important`}},...L&&{"& .MuiInputBase-root":{"&:hover":{backgroundImage:e=>R?`${S(e.palette.action.selected)}, ${S(e.palette.action.hover)}`:S(e.palette.action.hover)},backgroundColor:`grey.100`,...R&&{backgroundImage:e=>S(e.palette.action.selected)},borderRadius:e=>`${e.shape.borderRadius}px`,color:`text.primary`,cursor:`pointer`,fieldset:{borderColor:`transparent !important`},fontSize:ye(E).fontSize,fontWeight:400,height:ye(E).height,input:{"&::placeholder":{color:`text.primary`,opacity:1},cursor:M?`text`:`pointer`,padding:`0 !important`},maxWidth:_e,minWidth:90,"p.MuiTypography-root":{fontSize:ye(E).fontSize,margin:0},paddingLeft:E===`medium`?`11px !important`:`9px !important`,paddingRight:E===`medium`?`32px !important`:`30px !important`,paddingY:`0 !important`}}},...e,slotProps:{htmlInput:{...e.inputProps,...a&&{"aria-label":a},...V&&G&&B&&{size:B.length+2}},input:{...e.InputProps,endAdornment:i()}},placeholder:n()})},...A});return T?h(te,{title:T,...Oe,children:K}):K},De=(0,x.forwardRef)(Ee)})),T,Oe=e((()=>{w(),w(),T=De})),E,D,O,k,A,j,ke,M,N,Ae,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,je,Me;e((()=>{g(),E=t(u(),1),Oe(),m(),d(),D=[{id:`1`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,label:`Van Henry`,value:`van-henry`},{id:`3`,label:`April Tucker`,value:`april-tucker`},{id:`4`,label:`April Tucker with very long label already`,value:`april-tucker`}],O=[{id:`1`,image:`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`,label:`April Tucker`,value:`april-tucker`}],k=e=>{let[t,n]=(0,E.useState)([]),[r,i]=(0,E.useState)([]),[a,o]=(0,E.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return _(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[h(T,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t}),h(T,{...e,size:`small`,sx:{width:300},onChange:c,value:r}),h(T,{...e,size:`medium`,sx:{width:300},onChange:l,value:a})]})},A=[`standard`,`chip`,`filled`],j=[`xSmall`,`small`,`medium`],ke=e=>{let[t,n]=(0,E.useState)({}),r=e=>(t,r)=>{n(t=>({...t,[e]:r}))};return h(p,{spacing:4,alignItems:`center`,justifyContent:`center`,height:`100%`,children:A.map(n=>h(p,{direction:`row`,spacing:2,alignItems:`center`,children:j.map(i=>oe(T,{...e,key:i,size:i,variant:n,label:`xxxx`,sx:n===`chip`?void 0:{width:300},onChange:r(`${n}-${i}`),value:t[`${n}-${i}`]??null,multiple:!1}))},n))})},M=e=>{let[t,n]=(0,E.useState)({}),r=e=>(t,r)=>{n(t=>({...t,[e]:r}))};return h(p,{spacing:4,alignItems:`center`,justifyContent:`center`,height:`100%`,children:A.map(n=>h(p,{direction:`row`,spacing:2,alignItems:`center`,children:j.map(i=>oe(T,{...e,key:i,size:i,variant:n,sx:{width:220},onChange:r(`${n}-${i}`),value:t[`${n}-${i}`]??[]}))},n))})},N=[{id:`1`,label:`En cours`,value:`ongoing`},{id:`2`,label:`Confirmée`,value:`confirmed`},{id:`3`,label:`Livrée`,value:`delivered`},{id:`4`,label:`Annulée`,value:`cancelled`}],Ae=e=>{let[t,n]=(0,E.useState)([N[0]]),[r,i]=(0,E.useState)([D[0],D[1],D[2]]),[a,o]=(0,E.useState)([]);return _(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[h(T,{...e,size:`xSmall`,label:`Statut`,onChange:(e,t)=>n(t),options:N,value:t}),h(T,{...e,size:`small`,label:`Utilisateurs`,onChange:(e,t)=>i(t),options:D,value:r}),h(T,{...e,size:`medium`,label:`Chantier`,onChange:(e,t)=>o(t),options:D,value:a})]})},P=e=>{let[t,n]=(0,E.useState)([]),[r,i]=(0,E.useState)([]),[a,o]=(0,E.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return _(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[h(T,{...e,size:`xSmall`,onChange:s,value:t}),h(T,{...e,size:`small`,onChange:c,value:r}),h(T,{...e,size:`medium`,onChange:l,value:a})]})},F=e=>{let[t,n]=(0,E.useState)([]),r=(e,t)=>{n(t)};return _(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[h(T,{...e,sx:{width:300},onChange:r,value:t}),h(T,{...e,sx:{width:300},disabled:!0,value:[D[0]]})]})},I=k.bind({}),I.args={options:D},L=k.bind({}),L.args={options:O},R=k.bind({}),R.args={options:[{id:`1`,image:`avatar`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`avatar`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`avatar`,label:`April Tucker`,value:`april-tucker`}]},z=k.bind({}),z.args={options:[{id:`1`,image:`letter`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`letter`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`letter`,label:`April Tucker`,value:`april-tucker`}]},B=k.bind({}),B.args={disableSelectAll:!0,options:O},V=k.bind({}),V.args={options:[...D,{id:`my-worksite`,isHeader:!0,label:`Mes chantiers`,value:`my-worksite`}]},H=k.bind({}),H.args={disableReset:!0,options:D},U=k.bind({}),U.args={disableCheckbox:!0,options:D},W=k.bind({}),W.args={options:D,placeholder:`Search...`},G=k.bind({}),G.args={options:D,resetInputValueOnSelectOption:!0},K=k.bind({}),K.args={disableClearable:!0,options:D},q=k.bind({}),q.args={loading:!0},J=ke.bind({}),J.args={multiple:!1,options:D},Y=M.bind({}),Y.args={options:D,placeholder:`Filter`},X=P.bind({}),X.args={options:D,placeholder:`Search`,variant:`chip`},Z=Ae.bind({}),Z.args={variant:`filled`},Q=k.bind({}),Q.args={options:D,variant:`filled`},$=F.bind({}),$.args={options:D,placeholder:`Filter`,tooltip:`A global filter is active. Clear it to filter manually here.`},je={component:T,title:`Components/Inputs/AutocompleteFilter`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, AutocompleteFilterOption | null>>({});
  const handleChange = (key: string) => (_: SyntheticEvent, value: AutocompleteFilterOption | null) => {
    setSelectedOptions(prev => ({
      ...prev,
      [key]: value
    }));
  };
  return <Stack spacing={4} alignItems="center" justifyContent="center" height="100%">
      {allVariants.map(variant => <Stack key={variant} direction="row" spacing={2} alignItems="center">
          {allSizes.map(size => <AutocompleteFilter {...args} key={size} size={size} variant={variant} label={"xxxx"} sx={variant === "chip" ? undefined : {
        width: 300
      }} onChange={handleChange(\`\${variant}-\${size}\`)} value={selectedOptions[\`\${variant}-\${size}\`] ?? null} multiple={false} />)}
        </Stack>)}
    </Stack>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, AutocompleteFilterOption[]>>({});
  const handleChange = (key: string) => (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptions(prev => ({
      ...prev,
      [key]: value
    }));
  };
  return <Stack spacing={4} alignItems="center" justifyContent="center" height="100%">
      {allVariants.map(variant => <Stack key={variant} direction="row" spacing={2} alignItems="center">
          {allSizes.map(size => <AutocompleteFilter {...args} key={size} size={size} variant={variant} sx={{
        width: 220
      }} onChange={handleChange(\`\${variant}-\${size}\`)} value={selectedOptions[\`\${variant}-\${size}\`] ?? []} />)}
        </Stack>)}
    </Stack>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
  const [status, setStatus] = useState<AutocompleteFilterOption[]>([statuses[0]]);
  const [users, setUsers] = useState<AutocompleteFilterOption[]>([data[0], data[1], data[2]]);
  const [empty, setEmpty] = useState<AutocompleteFilterOption[]>([]);
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" label="Statut" onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setStatus(value)} options={statuses} value={status} />
      <AutocompleteFilter {...args} size="small" label="Utilisateurs" onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setUsers(value)} options={data} value={users} />
      <AutocompleteFilter {...args} size="medium" label="Chantier" onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setEmpty(value)} options={data} value={empty} />
    </Stack>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => {
  const [enabledValue, setEnabledValue] = useState<AutocompleteFilterOption[]>([]);
  const handleChangeEnabled = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setEnabledValue(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} sx={{
      width: 300
    }} onChange={handleChangeEnabled} value={enabledValue} />
      <AutocompleteFilter {...args} sx={{
      width: 300
    }} disabled value={[data[0]]} />
    </Stack>;
}`,...$.parameters?.docs?.source}}},Me=[`Basic`,`WithImage`,`WithAvatar`,`WithAvatarLetter`,`DisableSelectAll`,`WithHeaderOptions`,`WithoutReset`,`CheckboxDisabled`,`WithPlaceholder`,`ResetInputValueOnSelect`,`DisableClearable`,`Loading`,`UniqueSelection`,`FixedWidth`,`ChipVariant`,`FilledVariant`,`FilledWithoutLabel`,`WithTooltip`]}))();export{I as Basic,U as CheckboxDisabled,X as ChipVariant,K as DisableClearable,B as DisableSelectAll,Z as FilledVariant,Q as FilledWithoutLabel,Y as FixedWidth,q as Loading,G as ResetInputValueOnSelect,J as UniqueSelection,R as WithAvatar,z as WithAvatarLetter,V as WithHeaderOptions,L as WithImage,W as WithPlaceholder,$ as WithTooltip,H as WithoutReset,Me as __namedExportsOrder,je as default};