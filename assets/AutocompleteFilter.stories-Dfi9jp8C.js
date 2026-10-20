import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Dr as n,Hi as r,Li as i,O as a,On as o,Ta as s,Ti as c,Wr as l,Yr as u,_ as d,ar as ee,b as te,dt as f,fn as ne,g as p,hn as re,in as ie,mo as m,o as ae,pi as oe,ra as h,s as g,ui as se,un as ce,v as _,vn as le,vt as ue,wa as v,y}from"./iframe-DAS7FxON.js";import{n as de,t as fe}from"./CloseIcon-BwGvUEuu.js";import{n as pe,t as b}from"./useTranslation-CT84rcPR.js";import{n as me,t as he}from"./ChevronIcon-DAH0NZ5K.js";var x,S,ge,C,w,T,_e,ve,E,ye,be,xe,Se,Ce,D,we=e((()=>{te(),x=t(m(),1),me(),de(),b(),ae(),d(),v(),S={padding:0,paddingRight:1},ge=260,C=e=>`linear-gradient(${e}, ${e})`,w=e=>e===`xSmall`?{fontSize:g(12),height:20}:e===`small`?{fontSize:g(13),height:24}:{fontSize:g(14),height:32},T=e=>e===`xSmall`?{fontSize:g(12),height:26}:e===`small`?{fontSize:g(13),height:32}:{fontSize:g(13),height:40},_e=e=>typeof e==`string`?e:typeof e?.label==`string`?e.label:``,ve=(e,t)=>{let n=(Array.isArray(e)?e:[e]).filter(Boolean).map(e=>_e(e));return n.length?n.length>1?{count:n.length,text:t||``}:{count:1,text:t?`${t} : ${n[0]}`:n[0]}:{count:0,text:t||``}},E=({children:e,compact:t,inverted:n,withMargin:r})=>_(u,{component:`span`,sx:{alignItems:`center`,backgroundColor:n?`grey.100`:`primary.main`,borderRadius:99,color:n?`text.primary`:`primary.contrastText`,display:`inline-flex`,flexShrink:0,fontSize:g(11),fontWeight:500,height:t?16:18,justifyContent:`center`,lineHeight:1,marginLeft:r?.75:0,minWidth:t?16:18,paddingX:`5px`},children:_(u,{component:`span`,sx:{position:`relative`,top:`0.5px`},children:e})}),ye=(e,t)=>t?e?Array.isArray(e)?e:[e]:[]:e||null,be=e=>{let t=e===`chip`;return function(e){return _(E,{compact:t,inverted:t,children:`+${e}`})}},xe=({variant:e,children:t,disableSelectAll:r,localeText:a,disableReset:o,onChange:s,loading:c,options:u,value:d,multiple:te,...f})=>{let{t:m}=pe(),ae=Array.isArray(d)?d?.length===u?.length:!1,oe=Array.isArray(u)&&u.every(e=>typeof e==`string`),g=!oe&&u?.filter(e=>e?.isHeader)||[];return y(h,{sx:{minWidth:350},...f,children:[te&&!c&&(!r||!!g?.length)&&y(p,{children:[y(le,{role:`listbox`,children:[!r&&_(ne,{disablePadding:!0,role:`option`,onMouseDown:e=>{if(e.stopPropagation(),e.preventDefault(),ae){s?.(e,[],`removeOption`);return}s?.(e,u||[],`selectOption`)},children:y(re,{disableRipple:!0,children:[_(n,{disableRipple:!0,id:`select-all-checkbox`,checked:ae,sx:S}),_(ie,{primary:a?.selectAll||m(`selectAll`),slotProps:{primary:{variant:`body2`}}}),!o&&_(l,{variant:`link`,size:`small`,sx:{marginX:1,textDecoration:`none`},onClick:e=>{s?.(e,[],`removeOption`)},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},children:_(i,{variant:`body2`,children:a?.reset||m(`reset`)})})]})}),!oe&&g?.map((e,t)=>{let r=`header-options-${t}`,i=Array.isArray(d)&&d.some(t=>JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id);return _(ne,{disablePadding:!0,onMouseDown:t=>{if(t.stopPropagation(),t.preventDefault(),i){let n=Array.isArray(d)?d?.filter(t=>!(JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id)):[];s?.(t,n,`removeOption`);return}s?.(t,[...Array.isArray(d)?d:[],e],`selectOption`)},children:y(re,{disableRipple:!0,children:[_(n,{disableRipple:!0,checked:i,sx:S}),_(ie,{primary:e?.label})]})},r)})]}),_(ee,{})]}),t]})},Se=({anchorEl:e,popperRef:t,sx:n,...r})=>{let i=(0,x.useRef)(null),a=e=>{i.current=e,typeof t==`function`?t(e):t&&(t.current=e)};return(0,x.useEffect)(()=>{if(!(e instanceof HTMLElement))return;let t=new ResizeObserver(()=>{i.current?.update()});return t.observe(e),()=>t.disconnect()},[e]),_(c,{placement:`bottom-start`,...r,anchorEl:e,popperRef:a,sx:[({zIndex:e})=>({zIndex:e.modal}),...Array.isArray(n)?n:[n]]})},Ce=({variant:e,onChange:t,disableCheckbox:c,placeholder:l,label:d,localeText:ee,disableReset:te,disableSelectAll:f,value:p,onFocus:re,onBlur:ie,open:m,getOptionLabel:ae,onInputChange:h,inputValue:le,disableClearable:v,loading:de,resetInputValueOnSelectOption:b,renderOption:me,renderValue:_e,width:Ce,sx:D,slotProps:we,tooltip:O,tooltipProps:k,size:A=`small`,disableCloseOnSelect:j=!0,multiple:M=!0,options:N=[],...Te},Ee)=>{let{t:De}=pe(),[P,F]=(0,x.useState)(!1),[Oe,I]=(0,x.useState)(``),L=le||Oe,R=e===`chip`,z=e===`filled`,B=Array.isArray(p)?!!p.length:p!=null,V=ye(p,M),H=d??l,U=!!H,W=P&&!!L,G=(!!L||B)&&!v,K=U&&B&&!W,q=U&&!K,J=B&&(M||K)&&!P,Y=_(oe,{freeSolo:!1,multiple:M,disableClearable:v,value:V,options:N,loading:de,ref:Ee,size:A,disableCloseOnSelect:j,onChange:(e,n,r,i)=>{if(n===null){t?.(e,M?[]:null,r,i);return}t?.(e,n,r,i),j&&M||F(!1)},getLimitTagsText:be(e),inputValue:L,open:m||P,onOpen:()=>F(!0),sx:{width:Ce,...D},slots:{paper:xe,popper:Se},slotProps:{...we,paper:{disableReset:te,disableSelectAll:f,loading:de,localeText:ee,multiple:M,onChange:t,options:N,value:p,variant:e,...we?.paper}},onInputChange:(e,t,n)=>{n===`reset`&&P&&!b||n===`selectOption`&&!b||n===`removeOption`&&!b||(le||I(t),h?.(e,t,n))},onFocus:e=>{F(!0),re?.(e)},onBlur:e=>{F(!1),ie?.(e)},getOptionLabel:ae||(e=>{let t=typeof e==`object`&&`label`in e?e.label:e;return String(t)}),renderOption:me||((e,t,{selected:r})=>{let a=typeof t!=`string`&&t.isHeader;if(de||a)return null;let o=typeof t==`string`?t:t?.id||t?.value||``,l=typeof t==`string`?t:t?.label,u=typeof t==`string`?void 0:t?.image,d=`${o}-${e?.key}`;return s(ne,{...e,key:d},!c&&_(n,{disableRipple:!0,checked:r,sx:S}),u&&_(ce,{sx:{height:24,marginRight:1,minWidth:`auto`,width:24},children:_(se,{variant:`rounded`,src:u,sx:{height:24,width:24},children:u===`letter`&&typeof l==`string`&&l?.charAt(0).toUpperCase()})}),typeof l==`string`?_(i,{variant:`body2`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,title:l,children:l}):l)}),renderValue:_e||(U?e=>{if(!K)return null;let{count:t,text:n}=ve(e,H);return y(u,{component:`span`,sx:{alignItems:`center`,display:`inline-flex`,minWidth:0},children:[_(i,{component:`span`,overflow:`hidden`,sx:{fontSize:`inherit`,fontWeight:`inherit`},textOverflow:`ellipsis`,whiteSpace:`nowrap`,children:n}),t>0&&_(E,{inverted:R,withMargin:!0,children:t})]})}:M?(e,t)=>{if(!(Array.isArray(e)&&e.length)||W)return null;let n=e=>typeof e==`object`&&`label`in e&&e?.label?e.label:e.toString(),[r]=e,{key:a}=t({index:0});return y(u,{component:`span`,sx:{alignItems:`center`,display:`inline-flex`,minWidth:0},children:[_(i,{minWidth:0,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:n(r)}),_(E,{compact:R,inverted:R,withMargin:!0,children:e.length})]},a)}:void 0),renderInput:e=>{let n=()=>{if(U)return q?l??H:void 0;if(!(!P&&(Array.isArray(p)&&p.length||!Array.isArray(p)&&p)))return l},i=()=>z?_(o,{position:`end`,sx:{color:`text.primary`,position:`absolute`,right:A===`medium`?`8px`:`6px`},children:G?_(r,{"aria-label":De(`clear`),onClick:e=>{e.preventDefault(),e.stopPropagation(),I(``),h?.(e,``,`clear`),B&&t?.(e,M?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},size:`small`,sx:{"& .MuiSvgIcon-root":{fontSize:g(16),pointerEvents:`none`},"&:hover":{backgroundColor:`action.selected`},color:`text.primary`,cursor:`pointer`,padding:`3px`,pointerEvents:`auto`},children:_(fe,{})}):_(he,{fontSize:`small`,sx:{cursor:`pointer`,transform:P?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`}})}):R?y(o,{position:`end`,sx:{color:B?`text.contrast`:`text.primary`,position:`absolute`,right:5,transform:P?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`},children:[G&&_(r,{size:`small`,onClick:e=>{e.preventDefault(),e.stopPropagation(),I(``),h?.(e,``,`clear`),B&&t?.(e,M?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},sx:{".MuiTextField-root:hover &":{opacity:1},"& .MuiSvgIcon-root":{fontSize:g(16),pointerEvents:`none`},color:B?`text.contrast`:`text.primary`,cursor:`pointer`,left:`50%`,opacity:0,padding:`2px`,pointerEvents:`auto`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,transition:`opacity 0.2s ease-in-out`,zIndex:1},children:_(fe,{})}),_(he,{fontSize:`small`,sx:{cursor:`pointer`,transition:`opacity 0.2s ease-in-out`,...G&&{".MuiTextField-root:hover &":{opacity:0}}}})]}):P?y(o,{position:`end`,sx:{position:`absolute`,right:8},children:[L&&!v&&_(r,{size:`small`,onClick:e=>{I(``),h?.(e,``,`clear`)},sx:{marginRight:`-3px`},children:_(fe,{sx:{fontSize:g(20)}})}),(0,x.isValidElement)(e.InputProps?.endAdornment)&&typeof e.InputProps.endAdornment==`object`&&`props`in e.InputProps.endAdornment&&e.InputProps.endAdornment.props&&typeof e.InputProps.endAdornment.props==`object`&&`children`in e.InputProps.endAdornment.props&&Array.isArray(e.InputProps.endAdornment.props.children)&&e.InputProps.endAdornment.props.children[1]]}):(0,x.isValidElement)(e.InputProps?.endAdornment)?e.InputProps.endAdornment:null;return _(a,{onClick:()=>{e.disabled||F(!0)},sx:{"& .MuiInputBase-root .MuiInputBase-input.MuiInputBase-input":{...J?{flex:`0 0 0px`,minWidth:0,paddingLeft:`0 !important`,paddingRight:`0 !important`}:{flex:!(M&&(P||L))||P?1:0,...B&&(M||K)&&{marginLeft:R||z?.75:`1px`},minWidth:q?0:R||z?B&&(M||K)?12:0:P?24:0}},"& .MuiInputBase-root.MuiInputBase-root":{flexWrap:`nowrap`},...!(R||z)&&{"& .MuiOutlinedInput-root.MuiInputBase-sizeSmall":{...!J&&{"& .MuiAutocomplete-input":{paddingLeft:`5px !important`}},paddingLeft:`9px !important`},...!P&&G&&!e.disabled&&{"& .MuiInputBase-root.MuiInputBase-root":{paddingRight:`39px !important`,transition:`padding-right 0.2s ease-in-out`},"&:hover .MuiInputBase-root, & .MuiInputBase-root.Mui-focused":{paddingRight:`65px !important`}}},...R&&{"& .MuiInputBase-root":{backgroundColor:B?`text.primary`:`grey.100`,borderRadius:20,color:B?`text.contrast`:`text.primary`,fieldset:{borderColor:`transparent !important`},fontSize:w(A).fontSize,height:w(A).height,input:{padding:`0 !important`},minWidth:90,"p.MuiTypography-root":{fontSize:w(A).fontSize,margin:0},paddingRight:`30px !important`,paddingY:`0 !important`}},...z&&{"& .MuiInputBase-root":{"&:hover":{backgroundImage:e=>B?`${C(e.palette.action.selected)}, ${C(e.palette.action.hover)}`:C(e.palette.action.hover)},backgroundColor:`grey.100`,...B&&{backgroundImage:e=>C(e.palette.action.selected)},borderRadius:e=>`${e.shape.borderRadius}px`,color:`text.primary`,cursor:`pointer`,fieldset:{borderColor:`transparent !important`},fontSize:T(A).fontSize,fontWeight:400,height:T(A).height,input:{"&::placeholder":{color:`text.primary`,opacity:1},cursor:P?`text`:`pointer`,padding:`0 !important`},maxWidth:ge,minWidth:90,"p.MuiTypography-root":{fontSize:T(A).fontSize,margin:0},paddingLeft:A===`medium`?`11px !important`:`9px !important`,paddingRight:A===`medium`?`32px !important`:`30px !important`,paddingY:`0 !important`}}},...e,slotProps:{htmlInput:{...e.inputProps,...l&&{"aria-label":l},...U&&q&&H&&{size:H.length+2}},input:{...e.InputProps,endAdornment:i()}},placeholder:n()})},...Te});return O?_(ue,{title:O,...k,children:Y}):Y},D=(0,x.forwardRef)(Ce)})),O,k,A,j,M,N,Te,Ee,De,P,F,Oe,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ke,Ae;e((()=>{te(),O=t(m(),1),we(),d(),v(),k=[{id:`1`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,label:`Van Henry`,value:`van-henry`},{id:`3`,label:`April Tucker`,value:`april-tucker`},{id:`4`,label:`April Tucker with very long label already`,value:`april-tucker`}],A=[{id:`1`,image:`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`,label:`April Tucker`,value:`april-tucker`}],j=e=>{let[t,n]=(0,O.useState)([]),[r,i]=(0,O.useState)([]),[a,o]=(0,O.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return y(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[_(D,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t}),_(D,{...e,size:`small`,sx:{width:300},onChange:c,value:r}),_(D,{...e,size:`medium`,sx:{width:300},onChange:l,value:a})]})},M=[`standard`,`chip`,`filled`],N=[`xSmall`,`small`,`medium`],Te=e=>{let[t,n]=(0,O.useState)({}),r=e=>(t,r)=>{n(t=>({...t,[e]:r}))};return _(f,{spacing:4,alignItems:`center`,justifyContent:`center`,height:`100%`,children:M.map(n=>_(f,{direction:`row`,spacing:2,alignItems:`center`,children:N.map(i=>s(D,{...e,key:i,size:i,variant:n,label:`xxxx`,sx:n===`chip`?void 0:{width:300},onChange:r(`${n}-${i}`),value:t[`${n}-${i}`]??null,multiple:!1}))},n))})},Ee=e=>{let[t,n]=(0,O.useState)({}),r=e=>(t,r)=>{n(t=>({...t,[e]:r}))};return _(f,{spacing:4,alignItems:`center`,justifyContent:`center`,height:`100%`,children:M.map(n=>_(f,{direction:`row`,spacing:2,alignItems:`center`,children:N.map(i=>s(D,{...e,key:i,size:i,variant:n,sx:{width:150},onChange:r(`${n}-${i}`),value:t[`${n}-${i}`]??[]}))},n))})},De=[{id:`1`,label:`En cours`,value:`ongoing`},{id:`2`,label:`Confirmée`,value:`confirmed`},{id:`3`,label:`Livrée`,value:`delivered`},{id:`4`,label:`Annulée`,value:`cancelled`}],P=e=>{let[t,n]=(0,O.useState)([De[0]]),[r,i]=(0,O.useState)([k[0],k[1],k[2]]),[a,o]=(0,O.useState)([]);return y(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[_(D,{...e,size:`xSmall`,label:`Statut`,onChange:(e,t)=>n(t),options:De,value:t}),_(D,{...e,size:`small`,label:`Utilisateurs`,onChange:(e,t)=>i(t),options:k,value:r}),_(D,{...e,size:`medium`,label:`Chantier`,onChange:(e,t)=>o(t),options:k,value:a})]})},F=e=>{let[t,n]=(0,O.useState)([]),[r,i]=(0,O.useState)([]),[a,o]=(0,O.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return y(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[_(D,{...e,size:`xSmall`,onChange:s,value:t}),_(D,{...e,size:`small`,onChange:c,value:r}),_(D,{...e,size:`medium`,onChange:l,value:a})]})},Oe=e=>{let[t,n]=(0,O.useState)([]),r=(e,t)=>{n(t)};return y(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[_(D,{...e,sx:{width:300},onChange:r,value:t}),_(D,{...e,sx:{width:300},disabled:!0,value:[k[0]]})]})},I=j.bind({}),I.args={options:k},L=j.bind({}),L.args={options:A},R=j.bind({}),R.args={options:[{id:`1`,image:`avatar`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`avatar`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`avatar`,label:`April Tucker`,value:`april-tucker`}]},z=j.bind({}),z.args={options:[{id:`1`,image:`letter`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`letter`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`letter`,label:`April Tucker`,value:`april-tucker`}]},B=j.bind({}),B.args={disableSelectAll:!0,options:A},V=j.bind({}),V.args={options:[...k,{id:`my-worksite`,isHeader:!0,label:`Mes chantiers`,value:`my-worksite`}]},H=j.bind({}),H.args={disableReset:!0,options:k},U=j.bind({}),U.args={disableCheckbox:!0,options:k},W=j.bind({}),W.args={options:k,placeholder:`Search...`},G=j.bind({}),G.args={options:k,resetInputValueOnSelectOption:!0},K=j.bind({}),K.args={disableClearable:!0,options:k},q=j.bind({}),q.args={loading:!0},J=Te.bind({}),J.args={multiple:!1,options:k},Y=Ee.bind({}),Y.args={options:k,placeholder:`Filter`},X=F.bind({}),X.args={options:k,placeholder:`Search`,variant:`chip`},Z=P.bind({}),Z.args={variant:`filled`},Q=j.bind({}),Q.args={options:k,variant:`filled`},$=Oe.bind({}),$.args={options:k,placeholder:`Filter`,tooltip:`A global filter is active. Clear it to filter manually here.`},ke={component:D,title:`Components/Inputs/AutocompleteFilter`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
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
        width: 150
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
}`,...$.parameters?.docs?.source}}},Ae=[`Basic`,`WithImage`,`WithAvatar`,`WithAvatarLetter`,`DisableSelectAll`,`WithHeaderOptions`,`WithoutReset`,`CheckboxDisabled`,`WithPlaceholder`,`ResetInputValueOnSelect`,`DisableClearable`,`Loading`,`UniqueSelection`,`FixedWidth`,`ChipVariant`,`FilledVariant`,`FilledWithoutLabel`,`WithTooltip`]}))();export{I as Basic,U as CheckboxDisabled,X as ChipVariant,K as DisableClearable,B as DisableSelectAll,Z as FilledVariant,Q as FilledWithoutLabel,Y as FixedWidth,q as Loading,G as ResetInputValueOnSelect,J as UniqueSelection,R as WithAvatar,z as WithAvatarLetter,V as WithHeaderOptions,L as WithImage,W as WithPlaceholder,$ as WithTooltip,H as WithoutReset,Ae as __namedExportsOrder,ke as default};