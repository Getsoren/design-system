import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Di as r,Fr as i,Kr as a,Qt as o,S as s,Si as c,Sn as l,Xn as ee,Ya as u,aa as d,ai as te,at as f,d as p,f as m,fn as ne,ft as re,in as ie,ln as ae,m as h,ni as oe,o as g,oa as se,on as ce,p as _,pi as le,s as v,u as ue,vr as de,zi as fe}from"./iframe-CQeo0Y1z.js";import{n as pe,t as me}from"./CloseIcon-T9fnnl5-.js";import{n as he,t as y}from"./useTranslation-DDwDqdM2.js";import{n as ge,t as _e}from"./ChevronIcon-vHgBEr7-.js";var b,x,ve,S,C,w,ye,be,xe,Se,Ce,we,Te,Ee,De,T=e((()=>{h(),b=t(u(),1),ge(),pe(),y(),g(),p(),d(),x={padding:0,paddingRight:1},ve=260,S=e=>`linear-gradient(${e}, ${e})`,C=e=>e===`xSmall`?{fontSize:v(12),height:20}:e===`small`?{fontSize:v(13),height:24}:{fontSize:v(14),height:32},w=e=>e===`xSmall`?{fontSize:v(12),height:26}:e===`small`?{fontSize:v(13),height:32}:{fontSize:v(13),height:40},ye=e=>typeof e==`string`?e:typeof e?.label==`string`?e.label:``,be=(e,t)=>{let n=(Array.isArray(e)?e:[e]).filter(Boolean).map(e=>ye(e));return n.length?n.length>1?{count:n.length,text:t||``}:{count:0,text:t?`${t} : ${n[0]}`:n[0]}:{count:0,text:t||``}},xe=({children:e,inverted:t})=>m(n,{component:`span`,sx:{alignItems:`center`,backgroundColor:t?`grey.100`:`primary.main`,borderRadius:99,color:t?`text.primary`:`primary.contrastText`,display:`inline-flex`,flexShrink:0,fontSize:v(11),fontWeight:500,height:18,justifyContent:`center`,lineHeight:1,marginLeft:.75,minWidth:18,paddingX:`5px`},children:e}),Se=(e,t)=>t?e?Array.isArray(e)?e:[e]:[]:e||null,Ce=e=>{let t=e===`chip`;return function(e){return m(a,{badgeContent:`+${e}`,sx:{"& .MuiBadge-badge":{...t?{backgroundColor:`grey.100`,color:`text.primary`,height:16,minWidth:16}:{backgroundColor:`primary.main`,color:`primary.contrastText`},position:`relative`,transform:`none`},alignItems:`center`}})}},we=({variant:e,children:t,disableSelectAll:n,localeText:r,disableReset:a,onChange:s,loading:l,options:u,value:d,multiple:te,...f})=>{let{t:p}=he(),re=Array.isArray(d)?d?.length===u?.length:!1,ie=Array.isArray(u)&&u.every(e=>typeof e==`string`),h=!ie&&u?.filter(e=>e?.isHeader)||[];return _(fe,{sx:{minWidth:350},...f,children:[te&&!l&&(!n||!!h?.length)&&_(ue,{children:[_(ne,{role:`listbox`,children:[!n&&m(ce,{disablePadding:!0,role:`option`,onMouseDown:e=>{if(e.stopPropagation(),e.preventDefault(),re){s?.(e,[],`removeOption`);return}s?.(e,u||[],`selectOption`)},children:_(ae,{disableRipple:!0,children:[m(de,{disableRipple:!0,id:`select-all-checkbox`,checked:re,sx:x}),m(o,{primary:r?.selectAll||p(`selectAll`),slotProps:{primary:{variant:`body2`}}}),!a&&m(i,{variant:`link`,size:`small`,sx:{marginX:1,textDecoration:`none`},onClick:e=>{s?.(e,[],`removeOption`)},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},children:m(c,{variant:`body2`,children:r?.reset||p(`reset`)})})]})}),!ie&&h?.map((e,t)=>{let n=`header-options-${t}`,r=Array.isArray(d)&&d.some(t=>JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id);return m(ce,{disablePadding:!0,onMouseDown:t=>{if(t.stopPropagation(),t.preventDefault(),r){let n=Array.isArray(d)?d?.filter(t=>!(JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id)):[];s?.(t,n,`removeOption`);return}s?.(t,[...Array.isArray(d)?d:[],e],`selectOption`)},children:_(ae,{disableRipple:!0,children:[m(de,{disableRipple:!0,checked:r,sx:x}),m(o,{primary:e?.label})]})},n)})]}),m(ee,{})]}),t]})},Te=({anchorEl:e,popperRef:t,sx:n,...r})=>{let i=(0,b.useRef)(null),a=e=>{i.current=e,typeof t==`function`?t(e):t&&(t.current=e)};return(0,b.useEffect)(()=>{if(!(e instanceof HTMLElement))return;let t=new ResizeObserver(()=>{i.current?.update()});return t.observe(e),()=>t.disconnect()},[e]),m(le,{placement:`bottom-start`,...r,anchorEl:e,popperRef:a,sx:[({zIndex:e})=>({zIndex:e.modal}),...Array.isArray(n)?n:[n]]})},Ee=({variant:e,onChange:t,disableCheckbox:i,placeholder:a,label:o,localeText:ee,disableReset:u,disableSelectAll:d,value:f,onFocus:p,onBlur:ne,open:ae,getOptionLabel:h,onInputChange:g,inputValue:le,disableClearable:fe,loading:pe,resetInputValueOnSelectOption:y,renderOption:ge,renderValue:ye,width:Ee,sx:De,slotProps:T,tooltip:E,tooltipProps:Oe,size:D=`small`,disableCloseOnSelect:O=!0,multiple:k=!0,options:A=[],...j},ke)=>{let{t:Ae}=he(),[M,N]=(0,b.useState)(!1),[je,P]=(0,b.useState)(``),F=le||je,I=e===`chip`,L=e===`filled`,R=Array.isArray(f)?!!f.length:f!=null,z=Se(f,k),B=o??a,V=!!B,H=M&&!!F,U=(!!F||R)&&!fe,W=V&&R&&!H,G=V&&!W,K=m(te,{freeSolo:!1,multiple:k,disableClearable:fe,value:z,options:A,loading:pe,ref:ke,size:D,disableCloseOnSelect:O,onChange:(e,n,r,i)=>{if(n===null){t?.(e,k?[]:null,r,i);return}t?.(e,n,r,i),O&&k||N(!1)},getLimitTagsText:Ce(e),inputValue:F,open:ae||M,onOpen:()=>N(!0),sx:{width:Ee,...De},slots:{paper:we,popper:Te},slotProps:{...T,paper:{disableReset:u,disableSelectAll:d,loading:pe,localeText:ee,multiple:k,onChange:t,options:A,value:f,variant:e,...T?.paper}},onInputChange:(e,t,n)=>{n===`reset`&&M&&!y||n===`selectOption`&&!y||n===`removeOption`&&!y||(le||P(t),g?.(e,t,n))},onFocus:e=>{N(!0),p?.(e)},onBlur:e=>{N(!1),ne?.(e)},getOptionLabel:h||(e=>{let t=typeof e==`object`&&`label`in e?e.label:e;return String(t)}),renderOption:ge||((e,t,{selected:n})=>{let r=typeof t!=`string`&&t.isHeader;if(pe||r)return null;let a=typeof t==`string`?t:t?.id||t?.value||``,o=typeof t==`string`?t:t?.label,s=typeof t==`string`?void 0:t?.image,l=`${a}-${e?.key}`;return se(ce,{...e,key:l},!i&&m(de,{disableRipple:!0,checked:n,sx:x}),s&&m(ie,{sx:{height:24,marginRight:1,minWidth:`auto`,width:24},children:m(oe,{variant:`rounded`,src:s,sx:{height:24,width:24},children:s===`letter`&&typeof o==`string`&&o?.charAt(0).toUpperCase()})}),typeof o==`string`?m(c,{variant:`body2`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,title:o,children:o}):o)}),renderValue:ye||(V?e=>{if(!W)return null;let{count:t,text:r}=be(e,B);return _(n,{component:`span`,sx:{alignItems:`center`,display:`inline-flex`,minWidth:0},children:[m(c,{component:`span`,overflow:`hidden`,sx:{fontSize:`inherit`,fontWeight:`inherit`},textOverflow:`ellipsis`,whiteSpace:`nowrap`,children:r}),t>1&&m(xe,{inverted:I,children:t})]})}:k?(t,r,i)=>{if(!(Array.isArray(t)&&t.length)||H)return null;let a=e=>typeof e==`object`&&`label`in e&&e?.label?e.label:e.toString();if(i?.focused){let[i,...o]=t,{key:s}=r({index:0});return _(ue,{children:[m(c,{minWidth:0,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:a(i)},s),o.length>0&&m(n,{component:`span`,sx:{flexShrink:0,margin:`3px`,marginLeft:`11px`},children:Ce(e)(o.length)})]})}return t.map((e,t)=>{let{key:n}=r({index:t});return m(c,{marginRight:1,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:a(e)},n)})}:void 0),renderInput:e=>{let n=()=>{if(V)return G?a??B:void 0;if(!(!M&&(Array.isArray(f)&&f.length||!Array.isArray(f)&&f)))return a},i=()=>L?m(l,{position:`end`,sx:{color:`text.primary`,position:`absolute`,right:D===`medium`?`8px`:`6px`},children:U?m(r,{"aria-label":Ae(`clear`),onClick:e=>{e.preventDefault(),e.stopPropagation(),P(``),g?.(e,``,`clear`),R&&t?.(e,k?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},size:`small`,sx:{"& .MuiSvgIcon-root":{fontSize:v(16),pointerEvents:`none`},"&:hover":{backgroundColor:`action.selected`},color:`text.primary`,cursor:`pointer`,padding:`3px`,pointerEvents:`auto`},children:m(me,{})}):m(_e,{fontSize:`small`,sx:{cursor:`pointer`,transform:M?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`}})}):I?_(l,{position:`end`,sx:{color:R?`text.contrast`:`text.primary`,position:`absolute`,right:5,transform:M?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`},children:[U&&m(r,{size:`small`,onClick:e=>{e.preventDefault(),e.stopPropagation(),P(``),g?.(e,``,`clear`),R&&t?.(e,k?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},sx:{".MuiTextField-root:hover &":{opacity:1},"& .MuiSvgIcon-root":{fontSize:v(16),pointerEvents:`none`},color:R?`text.contrast`:`text.primary`,cursor:`pointer`,left:`50%`,opacity:0,padding:`2px`,pointerEvents:`auto`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,transition:`opacity 0.2s ease-in-out`,zIndex:1},children:m(me,{})}),m(_e,{fontSize:`small`,sx:{cursor:`pointer`,transition:`opacity 0.2s ease-in-out`,...U&&{".MuiTextField-root:hover &":{opacity:0}}}})]}):M?_(l,{position:`end`,sx:{position:`absolute`,right:8},children:[F&&!fe&&m(r,{size:`small`,onClick:e=>{P(``),g?.(e,``,`clear`)},sx:{marginRight:`-3px`},children:m(me,{sx:{fontSize:v(20)}})}),(0,b.isValidElement)(e.InputProps?.endAdornment)&&typeof e.InputProps.endAdornment==`object`&&`props`in e.InputProps.endAdornment&&e.InputProps.endAdornment.props&&typeof e.InputProps.endAdornment.props==`object`&&`children`in e.InputProps.endAdornment.props&&Array.isArray(e.InputProps.endAdornment.props.children)&&e.InputProps.endAdornment.props.children[1]]}):(0,b.isValidElement)(e.InputProps?.endAdornment)?e.InputProps.endAdornment:null;return m(s,{onClick:()=>{e.disabled||N(!0)},sx:{"& .MuiInputBase-root .MuiInputBase-input":{flex:!(k&&(M||F))||M?1:0,...R&&(k||W)&&(M||I||L)&&{marginLeft:I||L?.75:`1px`},minWidth:G?`max-content`:I||L?R&&(k||W)?12:0:M?24:0},"& .MuiInputBase-root.MuiInputBase-root":{flexWrap:`nowrap`},...!I&&!L&&{"& .MuiOutlinedInput-root.MuiInputBase-sizeSmall":{"& .MuiAutocomplete-input":{paddingLeft:`5px !important`},paddingLeft:`9px !important`}},...I&&{"& .MuiInputBase-root":{backgroundColor:R?`text.primary`:`grey.100`,borderRadius:20,color:R?`text.contrast`:`text.primary`,fieldset:{borderColor:`transparent !important`},fontSize:C(D).fontSize,height:C(D).height,input:{padding:`0 !important`},minWidth:90,"p.MuiTypography-root":{fontSize:C(D).fontSize,margin:0},paddingRight:`30px !important`,paddingY:`0 !important`}},...L&&{"& .MuiInputBase-root":{"&:hover":{backgroundImage:e=>R?`${S(e.palette.action.selected)}, ${S(e.palette.action.hover)}`:S(e.palette.action.hover)},backgroundColor:`grey.100`,...R&&{backgroundImage:e=>S(e.palette.action.selected)},borderRadius:e=>`${e.shape.borderRadius}px`,color:`text.primary`,cursor:`pointer`,fieldset:{borderColor:`transparent !important`},fontSize:w(D).fontSize,fontWeight:400,height:w(D).height,input:{"&::placeholder":{color:`text.primary`,opacity:1},cursor:M?`text`:`pointer`,padding:`0 !important`},maxWidth:ve,minWidth:90,"p.MuiTypography-root":{fontSize:w(D).fontSize,margin:0},paddingLeft:D===`medium`?`11px !important`:`9px !important`,paddingRight:D===`medium`?`32px !important`:`30px !important`,paddingY:`0 !important`}}},...e,slotProps:{htmlInput:{...e.inputProps,...a&&{"aria-label":a},...V&&G&&B&&{size:B.length+2}},input:{...e.InputProps,endAdornment:i()}},placeholder:n()})},...j});return E?m(re,{title:E,...Oe,children:K}):K},De=(0,b.forwardRef)(Ee)})),E,Oe=e((()=>{T(),T(),E=De})),D,O,k,A,j,ke,Ae,M,N,je,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Me,Ne;e((()=>{h(),D=t(u(),1),Oe(),p(),d(),O=[{id:`1`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,label:`Van Henry`,value:`van-henry`},{id:`3`,label:`April Tucker`,value:`april-tucker`},{id:`4`,label:`April Tucker with very long label already`,value:`april-tucker`}],k=[{id:`1`,image:`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`,label:`April Tucker`,value:`april-tucker`}],A=e=>{let[t,n]=(0,D.useState)([]),[r,i]=(0,D.useState)([]),[a,o]=(0,D.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return _(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(E,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t}),m(E,{...e,size:`small`,sx:{width:300},onChange:c,value:r}),m(E,{...e,size:`medium`,sx:{width:300},onChange:l,value:a})]})},j=[`standard`,`chip`,`filled`],ke=[`xSmall`,`small`,`medium`],Ae=e=>{let[t,n]=(0,D.useState)({}),r=e=>(t,r)=>{n(t=>({...t,[e]:r}))};return m(f,{spacing:4,alignItems:`center`,justifyContent:`center`,height:`100%`,children:j.map(n=>m(f,{direction:`row`,spacing:2,alignItems:`center`,children:ke.map(i=>se(E,{...e,key:i,size:i,variant:n,label:`xxxx`,sx:n===`chip`?void 0:{width:300},onChange:r(`${n}-${i}`),value:t[`${n}-${i}`]??null,multiple:!1}))},n))})},M=e=>{let[t,n]=(0,D.useState)({}),r=e=>(t,r)=>{n(t=>({...t,[e]:r}))};return m(f,{spacing:4,alignItems:`center`,justifyContent:`center`,height:`100%`,children:j.map(n=>m(f,{direction:`row`,spacing:2,alignItems:`center`,children:ke.map(i=>se(E,{...e,key:i,size:i,variant:n,sx:{width:220},onChange:r(`${n}-${i}`),value:t[`${n}-${i}`]??[]}))},n))})},N=[{id:`1`,label:`En cours`,value:`ongoing`},{id:`2`,label:`Confirmée`,value:`confirmed`},{id:`3`,label:`Livrée`,value:`delivered`},{id:`4`,label:`Annulée`,value:`cancelled`}],je=e=>{let[t,n]=(0,D.useState)([N[0]]),[r,i]=(0,D.useState)([O[0],O[1],O[2]]),[a,o]=(0,D.useState)([]);return _(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(E,{...e,size:`xSmall`,label:`Statut`,onChange:(e,t)=>n(t),options:N,value:t}),m(E,{...e,size:`small`,label:`Utilisateurs`,onChange:(e,t)=>i(t),options:O,value:r}),m(E,{...e,size:`medium`,label:`Chantier`,onChange:(e,t)=>o(t),options:O,value:a})]})},P=e=>{let[t,n]=(0,D.useState)([]),[r,i]=(0,D.useState)([]),[a,o]=(0,D.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return _(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(E,{...e,size:`xSmall`,onChange:s,value:t}),m(E,{...e,size:`small`,onChange:c,value:r}),m(E,{...e,size:`medium`,onChange:l,value:a})]})},F=e=>{let[t,n]=(0,D.useState)([]),r=(e,t)=>{n(t)};return _(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(E,{...e,sx:{width:300},onChange:r,value:t}),m(E,{...e,sx:{width:300},disabled:!0,value:[O[0]]})]})},I=A.bind({}),I.args={options:O},L=A.bind({}),L.args={options:k},R=A.bind({}),R.args={options:[{id:`1`,image:`avatar`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`avatar`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`avatar`,label:`April Tucker`,value:`april-tucker`}]},z=A.bind({}),z.args={options:[{id:`1`,image:`letter`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`letter`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`letter`,label:`April Tucker`,value:`april-tucker`}]},B=A.bind({}),B.args={disableSelectAll:!0,options:k},V=A.bind({}),V.args={options:[...O,{id:`my-worksite`,isHeader:!0,label:`Mes chantiers`,value:`my-worksite`}]},H=A.bind({}),H.args={disableReset:!0,options:O},U=A.bind({}),U.args={disableCheckbox:!0,options:O},W=A.bind({}),W.args={options:O,placeholder:`Search...`},G=A.bind({}),G.args={options:O,resetInputValueOnSelectOption:!0},K=A.bind({}),K.args={disableClearable:!0,options:O},q=A.bind({}),q.args={loading:!0},J=Ae.bind({}),J.args={multiple:!1,options:O},Y=M.bind({}),Y.args={options:O,placeholder:`Filter`},X=P.bind({}),X.args={options:O,placeholder:`Search`,variant:`chip`},Z=je.bind({}),Z.args={variant:`filled`},Q=A.bind({}),Q.args={options:O,variant:`filled`},$=F.bind({}),$.args={options:O,placeholder:`Filter`,tooltip:`A global filter is active. Clear it to filter manually here.`},Me={component:E,title:`Components/Inputs/AutocompleteFilter`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}},Ne=[`Basic`,`WithImage`,`WithAvatar`,`WithAvatarLetter`,`DisableSelectAll`,`WithHeaderOptions`,`WithoutReset`,`CheckboxDisabled`,`WithPlaceholder`,`ResetInputValueOnSelect`,`DisableClearable`,`Loading`,`UniqueSelection`,`FixedWidth`,`ChipVariant`,`FilledVariant`,`FilledWithoutLabel`,`WithTooltip`]}))();export{I as Basic,U as CheckboxDisabled,X as ChipVariant,K as DisableClearable,B as DisableSelectAll,Z as FilledVariant,Q as FilledWithoutLabel,Y as FixedWidth,q as Loading,G as ResetInputValueOnSelect,J as UniqueSelection,R as WithAvatar,z as WithAvatarLetter,V as WithHeaderOptions,L as WithImage,W as WithPlaceholder,$ as WithTooltip,H as WithoutReset,Ne as __namedExportsOrder,Me as default};