import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Di as r,Fr as i,Kr as a,Qi as o,Qt as s,S as c,Si as l,Sn as u,Xn as ee,Ya as d,aa as te,ai as ne,at as f,d as p,f as m,fn as re,ft as ie,in as ae,ln as oe,m as se,ni as ce,o as h,oa as le,on as ue,p as g,s as _,u as v,vr as de,zi as y}from"./iframe-DvB8Vy9J.js";import{n as b,t as x}from"./CloseIcon-DJehEUIy.js";import{n as fe,t as S}from"./useTranslation-rol0b1bO.js";import{n as pe,t as me}from"./ChevronIcon-CCvEzGP4.js";var C,w,he,T,E,D,ge,_e,ve,ye,be,xe,Se,Ce,O=e((()=>{se(),C=t(d(),1),pe(),b(),S(),h(),p(),te(),w={padding:0,paddingRight:1},he=260,T=e=>`linear-gradient(${e}, ${e})`,E=e=>e===`xSmall`?{fontSize:_(12),height:20}:e===`small`?{fontSize:_(13),height:24}:{fontSize:_(14),height:32},D=e=>e===`xSmall`?{fontSize:_(12),height:26}:e===`small`?{fontSize:_(13),height:32}:{fontSize:_(13),height:40},ge=e=>typeof e==`string`?e:typeof e?.label==`string`?e.label:``,_e=(e,t)=>{let n=(Array.isArray(e)?e:[e]).filter(Boolean).map(e=>ge(e));return n.length?n.length>1?{count:n.length,text:t||``}:{count:0,text:t?`${t} : ${n[0]}`:n[0]}:{count:0,text:t||``}},ve=({children:e})=>m(n,{component:`span`,sx:{alignItems:`center`,backgroundColor:`text.primary`,borderRadius:99,color:`text.contrast`,display:`inline-flex`,flexShrink:0,fontSize:_(11),fontWeight:500,height:18,justifyContent:`center`,lineHeight:1,marginLeft:.75,minWidth:18,paddingX:`5px`},children:e}),ye=(e,t)=>t?e?Array.isArray(e)?e:[e]:[]:e||null,be=e=>{let{palette:t}=o(),n=t.mode===`light`?`default`:`primary`,r=e===`chip`;return function(e){return m(a,{badgeContent:`+${e}`,color:n,sx:{"& .MuiBadge-badge":{...r&&{backgroundColor:`grey.100`,color:`text.primary`,height:16,minWidth:16},position:`relative`,transform:`none`},alignItems:`center`}})}},xe=({variant:e,children:t,disableSelectAll:n,localeText:r,disableReset:a,onChange:o,loading:c,options:u,value:d,multiple:te,...ne})=>{let{t:f}=fe(),p=Array.isArray(d)?d?.length===u?.length:!1,ie=Array.isArray(u)&&u.every(e=>typeof e==`string`),ae=!ie&&u?.filter(e=>e?.isHeader)||[];return g(y,{sx:{minWidth:250},...ne,children:[te&&!c&&(!n||!!ae?.length)&&g(v,{children:[g(re,{role:`listbox`,children:[!n&&m(ue,{disablePadding:!0,role:`option`,onMouseDown:e=>{if(e.stopPropagation(),e.preventDefault(),p){o?.(e,[],`removeOption`);return}o?.(e,u||[],`selectOption`)},children:g(oe,{disableRipple:!0,children:[m(de,{disableRipple:!0,id:`select-all-checkbox`,checked:p,sx:w}),m(s,{primary:r?.selectAll||f(`selectAll`),slotProps:{primary:{variant:`body2`}}}),!a&&m(i,{variant:`link`,size:`small`,sx:{marginX:1,textDecoration:`none`},onClick:e=>{o?.(e,[],`removeOption`)},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},children:m(l,{variant:`body2`,children:r?.reset||f(`reset`)})})]})}),!ie&&ae?.map((e,t)=>{let n=`header-options-${t}`,r=Array.isArray(d)&&d.some(t=>JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id);return m(ue,{disablePadding:!0,onMouseDown:t=>{if(t.stopPropagation(),t.preventDefault(),r){let n=Array.isArray(d)?d?.filter(t=>!(JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id)):[];o?.(t,n,`removeOption`);return}o?.(t,[...Array.isArray(d)?d:[],e],`selectOption`)},children:g(oe,{disableRipple:!0,children:[m(de,{disableRipple:!0,checked:r,sx:w}),m(s,{primary:e?.label})]})},n)})]}),m(ee,{})]}),t]})},Se=({variant:e,onChange:t,disableCheckbox:i,placeholder:a,label:o,summary:s,localeText:ee,disableReset:d,disableSelectAll:te,value:f,onFocus:p,onBlur:re,open:oe,getOptionLabel:se,onInputChange:h,inputValue:v,disableClearable:y,loading:b,resetInputValueOnSelectOption:S,renderOption:pe,renderValue:ge,width:Se,sx:Ce,size:O=`small`,disableCloseOnSelect:k=!0,multiple:A=!0,options:j=[],slotProps:M,tooltip:N,tooltipProps:P,...we},F)=>{let{t:Te}=fe(),[I,L]=(0,C.useState)(!1),[R,z]=(0,C.useState)(``),B=v||R,V=e===`chip`,H=e===`filled`,U=Array.isArray(f)?!!f.length:f!=null,W=ye(f,A),G=!!s,K=o??a,q=G&&U&&!(I&&B),J=G&&!q,Y=m(ne,{freeSolo:!1,multiple:A,disableClearable:y,value:W,options:j,loading:b,ref:F,size:O,disableCloseOnSelect:k,onChange:(e,n,r,i)=>{if(n===null){t?.(e,A?[]:null,r,i);return}t?.(e,n,r,i),k&&A||L(!1)},getLimitTagsText:be(e),inputValue:B,open:oe||I,onOpen:()=>L(!0),sx:{width:Se,...Ce},slots:{paper:xe},slotProps:{...M,paper:{disableReset:d,disableSelectAll:te,loading:b,localeText:ee,multiple:A,onChange:t,options:j,value:f,variant:e,...M?.paper}},onInputChange:(e,t,n)=>{n===`reset`&&I&&!S||n===`selectOption`&&!S||n===`removeOption`&&!S||(v||z(t),h?.(e,t,n))},onFocus:e=>{L(!0),p?.(e)},onBlur:e=>{L(!1),re?.(e)},getOptionLabel:se||(e=>{let t=typeof e==`object`&&`label`in e?e.label:e;return String(t)}),renderOption:pe||((e,t,{selected:n})=>{let r=typeof t!=`string`&&t.isHeader;if(b||r)return null;let a=typeof t==`string`?t:t?.id||t?.value||``,o=typeof t==`string`?t:t?.label,s=typeof t==`string`?void 0:t?.image,c=`${a}-${e?.key}`;return le(ue,{...e,key:c},!i&&m(de,{disableRipple:!0,checked:n,sx:w}),s&&m(ae,{sx:{height:24,marginRight:1,minWidth:`auto`,width:24},children:m(ce,{variant:`rounded`,src:s,sx:{height:24,width:24},children:s===`letter`&&typeof o==`string`&&o?.charAt(0).toUpperCase()})}),typeof o==`string`?m(l,{variant:`body2`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,title:o,children:o}):o)}),renderValue:ge||(G?e=>{if(!q)return null;let{count:t,text:r}=_e(e,K);return g(n,{component:`span`,sx:{alignItems:`center`,display:`inline-flex`,marginLeft:1,minWidth:0},children:[m(l,{component:`span`,overflow:`hidden`,sx:{fontSize:`inherit`,fontWeight:`inherit`},textOverflow:`ellipsis`,whiteSpace:`nowrap`,children:r}),t>1&&m(ve,{children:t})]})}:A?(e,t,n)=>Array.isArray(e)?e.map((e,r)=>{if(n?.focused)return null;let{key:i}=t({index:r});return m(l,{marginX:1,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:typeof e==`object`&&`label`in e&&e?.label?e.label:e.toString()},i)}):null:void 0),renderInput:e=>{let n=()=>{if(G)return J?a??K:void 0;if(!(!I&&(Array.isArray(f)&&f.length||!Array.isArray(f)&&f)))return a},i=()=>H?m(u,{position:`end`,sx:{color:`text.primary`,position:`absolute`,right:6},children:(B||U)&&!y?m(r,{"aria-label":Te(`clear`),onClick:e=>{e.preventDefault(),e.stopPropagation(),z(``),h?.(e,``,`clear`),U&&t?.(e,A?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},size:`small`,sx:{"& .MuiSvgIcon-root":{fontSize:_(16),pointerEvents:`none`},"&:hover":{backgroundColor:`action.selected`},color:`text.primary`,cursor:`pointer`,padding:`3px`,pointerEvents:`auto`},children:m(x,{})}):m(me,{fontSize:`small`,sx:{cursor:`pointer`,transform:I?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`}})}):V?g(u,{position:`end`,sx:{color:U?`text.contrast`:`text.primary`,position:`absolute`,right:5,transform:I?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`},children:[(B||U)&&!y&&m(r,{size:`small`,onClick:e=>{e.preventDefault(),e.stopPropagation(),z(``),h?.(e,``,`clear`),U&&t?.(e,A?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},sx:{".MuiTextField-root:hover &":{opacity:1},"& .MuiSvgIcon-root":{fontSize:_(16),pointerEvents:`none`},color:U?`text.contrast`:`text.primary`,cursor:`pointer`,left:`50%`,opacity:0,padding:`2px`,pointerEvents:`auto`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,transition:`opacity 0.2s ease-in-out`,zIndex:1},children:m(x,{})}),m(me,{fontSize:`small`,sx:{cursor:`pointer`,transition:`opacity 0.2s ease-in-out`,...(B||U)&&!y&&{".MuiTextField-root:hover &":{opacity:0}}}})]}):I?g(u,{position:`end`,sx:{position:`absolute`,right:8},children:[B&&!y&&m(r,{size:`small`,onClick:e=>{z(``),h?.(e,``,`clear`)},sx:{marginRight:`-3px`},children:m(x,{sx:{fontSize:_(20)}})}),(0,C.isValidElement)(e.InputProps?.endAdornment)&&typeof e.InputProps.endAdornment==`object`&&`props`in e.InputProps.endAdornment&&e.InputProps.endAdornment.props&&typeof e.InputProps.endAdornment.props==`object`&&`children`in e.InputProps.endAdornment.props&&Array.isArray(e.InputProps.endAdornment.props.children)&&e.InputProps.endAdornment.props.children[1]]}):(0,C.isValidElement)(e.InputProps?.endAdornment)?e.InputProps.endAdornment:null;return m(c,{sx:{"& .MuiInputBase-root .MuiInputBase-input":{flex:!(A&&(I||B))||I?1:0,minWidth:0},...V&&{"& .MuiInputBase-root":{backgroundColor:U?`text.primary`:`grey.100`,borderRadius:20,color:U?`text.contrast`:`text.primary`,fieldset:{borderColor:`transparent !important`},fontSize:E(O).fontSize,height:E(O).height,input:{padding:`0 !important`},minWidth:90,"p.MuiTypography-root":{fontSize:E(O).fontSize,margin:0},paddingRight:`30px !important`,paddingY:`0 !important`}},...H&&{"& .MuiInputBase-root":{"&:hover":{backgroundImage:e=>U?`${T(e.palette.action.selected)}, ${T(e.palette.action.hover)}`:T(e.palette.action.hover)},backgroundColor:`grey.100`,flexWrap:`nowrap`,...U&&{backgroundImage:e=>T(e.palette.action.selected)},borderRadius:e=>`${e.shape.borderRadius}px`,color:`text.primary`,cursor:`pointer`,fieldset:{borderColor:`transparent !important`},fontSize:D(O).fontSize,fontWeight:400,height:D(O).height,input:{"&::placeholder":{color:`text.primary`,opacity:1},cursor:`pointer`,padding:`0 !important`,...J&&{minWidth:`max-content !important`}},maxWidth:he,minWidth:90,"p.MuiTypography-root":{fontSize:D(O).fontSize,margin:0},paddingRight:`30px !important`,paddingY:`0 !important`}}},...e,slotProps:{htmlInput:{...e.inputProps,...a&&{"aria-label":a},...G&&J&&K&&{size:K.length+2}},input:{...e.InputProps,endAdornment:i()}},placeholder:n()})},...we});return N?m(ie,{title:N,...P,children:Y}):Y},Ce=(0,C.forwardRef)(Se)})),k,A=e((()=>{O(),O(),k=Ce})),j,M,N,P,we,F,Te,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ee,De;e((()=>{se(),j=t(d(),1),A(),p(),M=[{id:`1`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,label:`Van Henry`,value:`van-henry`},{id:`3`,label:`April Tucker`,value:`april-tucker`},{id:`4`,label:`April Tucker with very long label already`,value:`april-tucker`}],N=[{id:`1`,image:`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`,label:`April Tucker`,value:`april-tucker`}],P=e=>{let[t,n]=(0,j.useState)([]),[r,i]=(0,j.useState)([]),[a,o]=(0,j.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return g(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(k,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t}),m(k,{...e,size:`small`,sx:{width:300},onChange:c,value:r}),m(k,{...e,size:`medium`,sx:{width:300},onChange:l,value:a})]})},we=e=>{let[t,n]=(0,j.useState)(null),[r,i]=(0,j.useState)(null),[a,o]=(0,j.useState)(null),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return g(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(k,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t,multiple:!1}),m(k,{...e,size:`small`,sx:{width:300},onChange:c,value:r,multiple:!1}),m(k,{...e,size:`medium`,sx:{width:300},onChange:l,value:a,multiple:!1})]})},F=[{id:`1`,label:`En cours`,value:`ongoing`},{id:`2`,label:`Confirmée`,value:`confirmed`},{id:`3`,label:`Livrée`,value:`delivered`},{id:`4`,label:`Annulée`,value:`cancelled`}],Te=e=>{let[t,n]=(0,j.useState)([F[0]]),[r,i]=(0,j.useState)([M[0],M[1],M[2]]),[a,o]=(0,j.useState)([]);return g(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(k,{...e,size:`xSmall`,label:`Statut`,onChange:(e,t)=>n(t),options:F,value:t}),m(k,{...e,size:`small`,label:`Utilisateurs`,onChange:(e,t)=>i(t),options:M,value:r}),m(k,{...e,size:`medium`,label:`Chantier`,onChange:(e,t)=>o(t),options:M,value:a})]})},I=e=>{let[t,n]=(0,j.useState)([]),[r,i]=(0,j.useState)([]),[a,o]=(0,j.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return g(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(k,{...e,size:`xSmall`,onChange:s,value:t}),m(k,{...e,size:`small`,onChange:c,value:r}),m(k,{...e,size:`medium`,onChange:l,value:a})]})},L=e=>{let[t,n]=(0,j.useState)([]),r=(e,t)=>{n(t)};return g(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(k,{...e,sx:{width:300},onChange:r,value:t}),m(k,{...e,sx:{width:300},disabled:!0,value:[M[0]]})]})},R=P.bind({}),R.args={options:M},z=P.bind({}),z.args={options:N},B=P.bind({}),B.args={options:[{id:`1`,image:`avatar`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`avatar`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`avatar`,label:`April Tucker`,value:`april-tucker`}]},V=P.bind({}),V.args={options:[{id:`1`,image:`letter`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`letter`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`letter`,label:`April Tucker`,value:`april-tucker`}]},H=P.bind({}),H.args={disableSelectAll:!0,options:N},U=P.bind({}),U.args={options:[...M,{id:`my-worksite`,isHeader:!0,label:`Mes chantiers`,value:`my-worksite`}]},W=P.bind({}),W.args={disableReset:!0,options:M},G=P.bind({}),G.args={disableCheckbox:!0,options:M},K=P.bind({}),K.args={options:M,placeholder:`Search...`},q=P.bind({}),q.args={options:M,resetInputValueOnSelectOption:!0},J=P.bind({}),J.args={disableClearable:!0,options:M},Y=P.bind({}),Y.args={loading:!0},X=we.bind({}),X.args={multiple:!1,options:M},Z=I.bind({}),Z.args={options:M,placeholder:`Search`,variant:`chip`},Q=Te.bind({}),Q.args={variant:`filled`},$=L.bind({}),$.args={options:M,placeholder:`Filter`,tooltip:`A global filter is active. Clear it to filter manually here.`},Ee={component:k,title:`Components/Inputs/AutocompleteFilter`},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
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
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" label="Statut" onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setStatus(value)} options={statuses} value={status} />
      <AutocompleteFilter {...args} size="small" label="Utilisateurs" onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setUsers(value)} options={data} value={users} />
      <AutocompleteFilter {...args} size="medium" label="Chantier" onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setEmpty(value)} options={data} value={empty} />
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
}`,...$.parameters?.docs?.source}}},De=[`Basic`,`WithImage`,`WithAvatar`,`WithAvatarLetter`,`DisableSelectAll`,`WithHeaderOptions`,`WithoutReset`,`CheckboxDisabled`,`WithPlaceholder`,`ResetInputValueOnSelect`,`DisableClearable`,`Loading`,`UniqueSelection`,`ChipVariant`,`FilledVariant`,`WithTooltip`]}))();export{R as Basic,G as CheckboxDisabled,Z as ChipVariant,J as DisableClearable,H as DisableSelectAll,Q as FilledVariant,Y as Loading,q as ResetInputValueOnSelect,X as UniqueSelection,B as WithAvatar,V as WithAvatarLetter,U as WithHeaderOptions,z as WithImage,K as WithPlaceholder,$ as WithTooltip,W as WithoutReset,De as __namedExportsOrder,Ee as default};