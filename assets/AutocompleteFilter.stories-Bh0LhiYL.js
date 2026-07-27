import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Di as r,Fr as i,Kr as a,Qi as o,Qt as s,S as c,Si as l,Sn as u,Xn as ee,Ya as d,aa as f,ai as te,at as p,d as m,f as h,fn as ne,ft as re,in as ie,ln as ae,m as g,ni as oe,o as se,oa as ce,on as le,p as _,s as v,u as y,vr as b,zi as x}from"./iframe-BjXtUHP7.js";import{n as S,t as ue}from"./CloseIcon-DRGVkv8a.js";import{n as de,t as fe}from"./useTranslation-CdnOu_Pp.js";import{n as pe,t as me}from"./ChevronIcon-DBmVOuf5.js";var C,w,he,T,E,ge,_e,ve,ye,be,xe,D,O,k=e((()=>{g(),C=t(d(),1),pe(),S(),fe(),se(),m(),f(),w={padding:0,paddingRight:1},he=260,T=e=>`linear-gradient(${e}, ${e})`,E=e=>e===`xSmall`?{fontSize:v(12),height:26}:e===`small`?{fontSize:v(13),height:32}:{fontSize:v(13),height:40},ge=e=>typeof e==`string`?e:typeof e?.label==`string`?e.label:``,_e=(e,t)=>{let n=(Array.isArray(e)?e:[e]).filter(Boolean).map(e=>ge(e));return n.length?n.length>1?{count:n.length,text:t||``}:{count:0,text:t?`${t} : ${n[0]}`:n[0]}:{count:0,text:t||``}},ve=({children:e})=>h(n,{component:`span`,sx:{alignItems:`center`,backgroundColor:`text.primary`,borderRadius:99,color:`text.contrast`,display:`inline-flex`,flexShrink:0,fontSize:v(11),fontWeight:500,height:18,justifyContent:`center`,lineHeight:1,marginLeft:.75,minWidth:18,paddingX:`5px`},children:e}),ye=(e,t)=>t?e?Array.isArray(e)?e:[e]:[]:e||null,be=e=>{let{palette:t}=o(),n=t.mode===`light`?`default`:`primary`,r=e===`chip`;return function(e){return h(a,{badgeContent:`+${e}`,color:n,sx:{"& .MuiBadge-badge":{...r&&{backgroundColor:`grey.100`,color:`text.primary`},position:`relative`,transform:`none`},alignItems:`center`}})}},xe=({variant:e,children:t,disableSelectAll:n,localeText:r,disableReset:a,onChange:o,loading:c,options:u,value:d,multiple:f,...te})=>{let{t:p}=de(),m=Array.isArray(d)?d?.length===u?.length:!1,re=Array.isArray(u)&&u.every(e=>typeof e==`string`),ie=!re&&u?.filter(e=>e?.isHeader)||[];return _(x,{sx:{minWidth:250},...te,children:[f&&!c&&(!n||!!ie?.length)&&_(y,{children:[_(ne,{role:`listbox`,children:[!n&&h(le,{disablePadding:!0,role:`option`,onMouseDown:e=>{if(e.stopPropagation(),e.preventDefault(),m){o?.(e,[],`removeOption`);return}o?.(e,u||[],`selectOption`)},children:_(ae,{disableRipple:!0,children:[h(b,{disableRipple:!0,id:`select-all-checkbox`,checked:m,sx:w}),h(s,{primary:r?.selectAll||p(`selectAll`),slotProps:{primary:{variant:`body2`}}}),!a&&h(i,{variant:`link`,size:`small`,sx:{marginX:1,textDecoration:`none`},onClick:e=>{o?.(e,[],`removeOption`)},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},children:h(l,{variant:`body2`,children:r?.reset||p(`reset`)})})]})}),!re&&ie?.map((e,t)=>{let n=`header-options-${t}`,r=Array.isArray(d)&&d.some(t=>JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id);return h(le,{disablePadding:!0,onMouseDown:t=>{if(t.stopPropagation(),t.preventDefault(),r){let n=Array.isArray(d)?d?.filter(t=>!(JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id)):[];o?.(t,n,`removeOption`);return}o?.(t,[...Array.isArray(d)?d:[],e],`selectOption`)},children:_(ae,{disableRipple:!0,children:[h(b,{disableRipple:!0,checked:r,sx:w}),h(s,{primary:e?.label})]})},n)})]}),h(ee,{})]}),t]})},D=({variant:e,onChange:t,disableCheckbox:i,placeholder:a,label:o,localeText:s,disableReset:ee,disableSelectAll:d,value:f,onFocus:p,onBlur:m,open:ne,getOptionLabel:ae,onInputChange:g,inputValue:se,disableClearable:y,loading:x,resetInputValueOnSelectOption:S,renderOption:fe,renderValue:pe,width:ge,sx:D,size:O=`small`,disableCloseOnSelect:k=!0,multiple:A=!0,options:Se=[],slotProps:j,tooltip:M,tooltipProps:N,...P},Ce)=>{let{t:F}=de(),[I,L]=(0,C.useState)(!1),[we,R]=(0,C.useState)(``),z=se||we,B=e===`chip`,V=Array.isArray(f)?!!f.length:f!=null,H=ye(f,A),U=o??a,W=V&&!(I&&z),G=!W,K=h(te,{freeSolo:!1,multiple:A,disableClearable:y,value:H,options:Se,loading:x,ref:Ce,size:O,disableCloseOnSelect:k,onChange:(e,n,r,i)=>{if(n===null){t?.(e,A?[]:null,r,i);return}t?.(e,n,r,i),k&&A||L(!1)},getLimitTagsText:be(e),inputValue:z,open:ne||I,onOpen:()=>L(!0),sx:{width:ge,...D},slots:{paper:xe},slotProps:{...j,paper:{disableReset:ee,disableSelectAll:d,loading:x,localeText:s,multiple:A,onChange:t,options:Se,value:f,variant:e,...j?.paper}},onInputChange:(e,t,n)=>{n===`reset`&&I&&!S||n===`selectOption`&&!S||n===`removeOption`&&!S||(se||R(t),g?.(e,t,n))},onFocus:e=>{L(!0),p?.(e)},onBlur:e=>{L(!1),m?.(e)},getOptionLabel:ae||(e=>{let t=typeof e==`object`&&`label`in e?e.label:e;return String(t)}),renderOption:fe||((e,t,{selected:n})=>{let r=typeof t!=`string`&&t.isHeader;if(x||r)return null;let a=typeof t==`string`?t:t?.id||t?.value||``,o=typeof t==`string`?t:t?.label,s=typeof t==`string`?void 0:t?.image,c=`${a}-${e?.key}`;return ce(le,{...e,key:c},!i&&h(b,{disableRipple:!0,checked:n,sx:w}),s&&h(ie,{sx:{height:24,marginRight:1,minWidth:`auto`,width:24},children:h(oe,{variant:`rounded`,src:s,sx:{height:24,width:24},children:s===`letter`&&typeof o==`string`&&o?.charAt(0).toUpperCase()})}),typeof o==`string`?h(l,{variant:`body2`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,title:o,children:o}):o)}),renderValue:pe||(B?e=>{if(!W)return null;let{count:t,text:r}=_e(e,U);return _(n,{component:`span`,sx:{alignItems:`center`,display:`inline-flex`,marginLeft:1,minWidth:0},children:[h(l,{component:`span`,overflow:`hidden`,sx:{fontSize:`inherit`,fontWeight:`inherit`},textOverflow:`ellipsis`,whiteSpace:`nowrap`,children:r}),t>1&&h(ve,{children:t})]})}:A?(e,t,n)=>Array.isArray(e)?e.map((e,r)=>{if(n?.focused)return null;let{key:i}=t({index:r});return h(l,{marginX:1,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:typeof e==`object`&&`label`in e&&e?.label?e.label:e.toString()},i)}):null:void 0),renderInput:e=>{let n=()=>{if(B)return G?a??U:void 0;if(!(!I&&(Array.isArray(f)&&f.length||!Array.isArray(f)&&f)))return a},i=()=>B?h(u,{position:`end`,sx:{color:`text.primary`,position:`absolute`,right:6},children:(z||V)&&!y?h(r,{"aria-label":F(`clear`),onClick:e=>{e.preventDefault(),e.stopPropagation(),R(``),g?.(e,``,`clear`),V&&t?.(e,A?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},size:`small`,sx:{"& .MuiSvgIcon-root":{fontSize:v(16),pointerEvents:`none`},"&:hover":{backgroundColor:`action.selected`},color:`text.primary`,cursor:`pointer`,padding:`3px`,pointerEvents:`auto`},children:h(ue,{})}):h(me,{fontSize:`small`,sx:{cursor:`pointer`,transform:I?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`}})}):I?_(u,{position:`end`,sx:{position:`absolute`,right:8},children:[z&&!y&&h(r,{size:`small`,onClick:e=>{R(``),g?.(e,``,`clear`)},sx:{marginRight:`-3px`},children:h(ue,{sx:{fontSize:v(20)}})}),(0,C.isValidElement)(e.InputProps?.endAdornment)&&typeof e.InputProps.endAdornment==`object`&&`props`in e.InputProps.endAdornment&&e.InputProps.endAdornment.props&&typeof e.InputProps.endAdornment.props==`object`&&`children`in e.InputProps.endAdornment.props&&Array.isArray(e.InputProps.endAdornment.props.children)&&e.InputProps.endAdornment.props.children[1]]}):(0,C.isValidElement)(e.InputProps?.endAdornment)?e.InputProps.endAdornment:null;return h(c,{sx:{"& .MuiInputBase-root .MuiInputBase-input":{flex:!(A&&(I||z))||I?1:0,minWidth:0},...B&&{"& .MuiInputBase-root":{"&:hover":{backgroundImage:e=>V?`${T(e.palette.action.selected)}, ${T(e.palette.action.hover)}`:T(e.palette.action.hover)},backgroundColor:`grey.100`,flexWrap:`nowrap`,...V&&{backgroundImage:e=>T(e.palette.action.selected)},borderRadius:e=>`${e.shape.borderRadius}px`,color:`text.primary`,cursor:`pointer`,fieldset:{borderColor:`transparent !important`},fontSize:E(O).fontSize,fontWeight:400,height:E(O).height,input:{"&::placeholder":{color:`text.primary`,opacity:1},cursor:`pointer`,padding:`0 !important`,...G&&{minWidth:`max-content !important`}},maxWidth:he,minWidth:90,"p.MuiTypography-root":{fontSize:E(O).fontSize,margin:0},paddingRight:`30px !important`,paddingY:`0 !important`}}},...e,slotProps:{htmlInput:{...e.inputProps,...a&&{"aria-label":a},...B&&G&&U&&{size:U.length+2}},input:{...e.InputProps,endAdornment:i()}},placeholder:n()})},...P});return M?h(re,{title:M,...N,children:K}):K},O=(0,C.forwardRef)(D)})),A,Se=e((()=>{k(),k(),A=O})),j,M,N,P,Ce,F,I,L,we,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Te,Ee;e((()=>{g(),j=t(d(),1),Se(),m(),M=[{id:`1`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,label:`Van Henry`,value:`van-henry`},{id:`3`,label:`April Tucker`,value:`april-tucker`},{id:`4`,label:`April Tucker with very long label already`,value:`april-tucker`}],N=[{id:`1`,image:`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`,label:`April Tucker`,value:`april-tucker`}],P=e=>{let[t,n]=(0,j.useState)([]),[r,i]=(0,j.useState)([]),[a,o]=(0,j.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return _(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[h(A,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t}),h(A,{...e,size:`small`,sx:{width:300},onChange:c,value:r}),h(A,{...e,size:`medium`,sx:{width:300},onChange:l,value:a})]})},Ce=e=>{let[t,n]=(0,j.useState)(null),[r,i]=(0,j.useState)(null),[a,o]=(0,j.useState)(null),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return _(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[h(A,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t,multiple:!1}),h(A,{...e,size:`small`,sx:{width:300},onChange:c,value:r,multiple:!1}),h(A,{...e,size:`medium`,sx:{width:300},onChange:l,value:a,multiple:!1})]})},F=[{id:`1`,label:`En cours`,value:`ongoing`},{id:`2`,label:`Confirmée`,value:`confirmed`},{id:`3`,label:`Livrée`,value:`delivered`},{id:`4`,label:`Annulée`,value:`cancelled`}],I=e=>{let[t,n]=(0,j.useState)([F[0]]),[r,i]=(0,j.useState)([M[0],M[1],M[2]]),[a,o]=(0,j.useState)([]);return _(p,{direction:`row`,spacing:1.5,alignItems:`center`,height:`100%`,flexWrap:`wrap`,useFlexGap:!0,children:[h(A,{...e,label:`Statut`,onChange:(e,t)=>n(t),options:F,value:t}),h(A,{...e,label:`Utilisateurs`,onChange:(e,t)=>i(t),options:M,value:r}),h(A,{...e,label:`Chantier`,onChange:(e,t)=>o(t),options:M,value:a})]})},L=e=>{let[t,n]=(0,j.useState)([]),[r,i]=(0,j.useState)([]),[a,o]=(0,j.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return _(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[h(A,{...e,size:`xSmall`,onChange:s,value:t}),h(A,{...e,size:`small`,onChange:c,value:r}),h(A,{...e,size:`medium`,onChange:l,value:a})]})},we=e=>{let[t,n]=(0,j.useState)([]),r=(e,t)=>{n(t)};return _(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[h(A,{...e,sx:{width:300},onChange:r,value:t}),h(A,{...e,sx:{width:300},disabled:!0,value:[M[0]]})]})},R=P.bind({}),R.args={options:M},z=P.bind({}),z.args={options:N},B=P.bind({}),B.args={options:[{id:`1`,image:`avatar`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`avatar`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`avatar`,label:`April Tucker`,value:`april-tucker`}]},V=P.bind({}),V.args={options:[{id:`1`,image:`letter`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`letter`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`letter`,label:`April Tucker`,value:`april-tucker`}]},H=P.bind({}),H.args={disableSelectAll:!0,options:N},U=P.bind({}),U.args={options:[...M,{id:`my-worksite`,isHeader:!0,label:`Mes chantiers`,value:`my-worksite`}]},W=P.bind({}),W.args={disableReset:!0,options:M},G=P.bind({}),G.args={disableCheckbox:!0,options:M},K=P.bind({}),K.args={options:M,placeholder:`Search...`},q=P.bind({}),q.args={options:M,resetInputValueOnSelectOption:!0},J=P.bind({}),J.args={disableClearable:!0,options:M},Y=P.bind({}),Y.args={loading:!0},X=Ce.bind({}),X.args={multiple:!1,options:M},Z=L.bind({}),Z.args={label:`Utilisateurs`,options:M,variant:`chip`},Q=I.bind({}),Q.args={size:`medium`,variant:`chip`},$=we.bind({}),$.args={options:M,placeholder:`Filter`,tooltip:`A global filter is active. Clear it to filter manually here.`},Te={component:A,title:`Components/Inputs/AutocompleteFilter`},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption | null>(null);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption | null>(null);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption | null>(null);
  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption | null) => {
    setSelectedOptionsXSmall(value);
  };
  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption | null) => {
    setSelectedOptionsSmall(value);
  };
  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption | null) => {
    setSelectedOptionsMedium(value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{
      width: 300
    }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} multiple={false} />
      <AutocompleteFilter {...args} size="small" sx={{
      width: 300
    }} onChange={handleChangeSmall} value={selectedOptionsSmall} multiple={false} />
      <AutocompleteFilter {...args} size="medium" sx={{
      width: 300
    }} onChange={handleChangeMedium} value={selectedOptionsMedium} multiple={false} />
    </Stack>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => {
  const [status, setStatus] = useState<AutocompleteFilterOption[]>([statuses[0]]);
  const [users, setUsers] = useState<AutocompleteFilterOption[]>([data[0], data[1], data[2]]);
  const [empty, setEmpty] = useState<AutocompleteFilterOption[]>([]);
  return <Stack direction="row" spacing={1.5} alignItems="center" height="100%" flexWrap="wrap" useFlexGap>
      <AutocompleteFilter {...args} label="Statut" onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setStatus(value)} options={statuses} value={status} />
      <AutocompleteFilter {...args} label="Utilisateurs" onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setUsers(value)} options={data} value={users} />
      <AutocompleteFilter {...args} label="Chantier" onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setEmpty(value)} options={data} value={empty} />
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
}`,...$.parameters?.docs?.source}}},Ee=[`Basic`,`WithImage`,`WithAvatar`,`WithAvatarLetter`,`DisableSelectAll`,`WithHeaderOptions`,`WithoutReset`,`CheckboxDisabled`,`WithPlaceholder`,`ResetInputValueOnSelect`,`DisableClearable`,`Loading`,`UniqueSelection`,`ChipVariant`,`ChipVariantFilterBar`,`WithTooltip`]}))();export{R as Basic,G as CheckboxDisabled,Z as ChipVariant,Q as ChipVariantFilterBar,J as DisableClearable,H as DisableSelectAll,Y as Loading,q as ResetInputValueOnSelect,X as UniqueSelection,B as WithAvatar,V as WithAvatarLetter,U as WithHeaderOptions,z as WithImage,K as WithPlaceholder,$ as WithTooltip,W as WithoutReset,Ee as __namedExportsOrder,Te as default};