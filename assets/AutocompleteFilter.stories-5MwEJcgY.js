import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Di as r,Fr as i,Kr as a,Qt as o,S as s,Si as c,Sn as l,Xn as ee,Ya as u,aa as d,ai as te,at as f,d as p,f as m,fn as ne,ft as re,in as ie,ln as ae,m as h,ni as oe,o as g,oa as se,on as ce,p as _,s as v,u as le,vr as y,zi as b}from"./iframe-CBlKtUHf.js";import{n as x,t as ue}from"./CloseIcon-BuQXy5Vp.js";import{n as de,t as S}from"./useTranslation-D2b9cSFJ.js";import{n as C,t as fe}from"./ChevronIcon-CgQEFFIJ.js";var w,T,pe,E,D,O,me,he,ge,_e,ve,ye,be,xe,Se=e((()=>{h(),w=t(u(),1),C(),x(),S(),g(),p(),d(),T={padding:0,paddingRight:1},pe=260,E=e=>`linear-gradient(${e}, ${e})`,D=e=>e===`xSmall`?{fontSize:v(12),height:20}:e===`small`?{fontSize:v(13),height:24}:{fontSize:v(14),height:32},O=e=>e===`xSmall`?{fontSize:v(12),height:26}:e===`small`?{fontSize:v(13),height:32}:{fontSize:v(13),height:40},me=e=>typeof e==`string`?e:typeof e?.label==`string`?e.label:``,he=(e,t)=>{let n=(Array.isArray(e)?e:[e]).filter(Boolean).map(e=>me(e));return n.length?n.length>1?{count:n.length,text:t||``}:{count:0,text:t?`${t} : ${n[0]}`:n[0]}:{count:0,text:t||``}},ge=({children:e,inverted:t})=>m(n,{component:`span`,sx:{alignItems:`center`,backgroundColor:t?`grey.100`:`primary.main`,borderRadius:99,color:t?`text.primary`:`primary.contrastText`,display:`inline-flex`,flexShrink:0,fontSize:v(11),fontWeight:500,height:18,justifyContent:`center`,lineHeight:1,marginLeft:.75,minWidth:18,paddingX:`5px`},children:e}),_e=(e,t)=>t?e?Array.isArray(e)?e:[e]:[]:e||null,ve=e=>{let t=e===`chip`;return function(e){return m(a,{badgeContent:`+${e}`,sx:{"& .MuiBadge-badge":{...t?{backgroundColor:`grey.100`,color:`text.primary`,height:16,minWidth:16}:{backgroundColor:`primary.main`,color:`primary.contrastText`},position:`relative`,transform:`none`},alignItems:`center`}})}},ye=({variant:e,children:t,disableSelectAll:n,localeText:r,disableReset:a,onChange:s,loading:l,options:u,value:d,multiple:te,...f})=>{let{t:p}=de(),re=Array.isArray(d)?d?.length===u?.length:!1,ie=Array.isArray(u)&&u.every(e=>typeof e==`string`),h=!ie&&u?.filter(e=>e?.isHeader)||[];return _(b,{sx:{minWidth:250},...f,children:[te&&!l&&(!n||!!h?.length)&&_(le,{children:[_(ne,{role:`listbox`,children:[!n&&m(ce,{disablePadding:!0,role:`option`,onMouseDown:e=>{if(e.stopPropagation(),e.preventDefault(),re){s?.(e,[],`removeOption`);return}s?.(e,u||[],`selectOption`)},children:_(ae,{disableRipple:!0,children:[m(y,{disableRipple:!0,id:`select-all-checkbox`,checked:re,sx:T}),m(o,{primary:r?.selectAll||p(`selectAll`),slotProps:{primary:{variant:`body2`}}}),!a&&m(i,{variant:`link`,size:`small`,sx:{marginX:1,textDecoration:`none`},onClick:e=>{s?.(e,[],`removeOption`)},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},children:m(c,{variant:`body2`,children:r?.reset||p(`reset`)})})]})}),!ie&&h?.map((e,t)=>{let n=`header-options-${t}`,r=Array.isArray(d)&&d.some(t=>JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id);return m(ce,{disablePadding:!0,onMouseDown:t=>{if(t.stopPropagation(),t.preventDefault(),r){let n=Array.isArray(d)?d?.filter(t=>!(JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id)):[];s?.(t,n,`removeOption`);return}s?.(t,[...Array.isArray(d)?d:[],e],`selectOption`)},children:_(ae,{disableRipple:!0,children:[m(y,{disableRipple:!0,checked:r,sx:T}),m(o,{primary:e?.label})]})},n)})]}),m(ee,{})]}),t]})},be=({variant:e,onChange:t,disableCheckbox:i,placeholder:a,label:o,localeText:ee,disableReset:u,disableSelectAll:d,value:f,onFocus:p,onBlur:ne,open:ae,getOptionLabel:h,onInputChange:g,inputValue:b,disableClearable:x,loading:S,resetInputValueOnSelectOption:C,renderOption:me,renderValue:be,width:xe,sx:Se,slotProps:k,tooltip:Ce,tooltipProps:A,size:j=`small`,disableCloseOnSelect:M=!0,multiple:N=!0,options:P=[],...F},we)=>{let{t:Te}=de(),[I,L]=(0,w.useState)(!1),[R,z]=(0,w.useState)(``),B=b||R,V=e===`chip`,H=e===`filled`,U=Array.isArray(f)?!!f.length:f!=null,W=_e(f,N),G=o??a,K=!!G,q=I&&!!B,J=(!!B||U)&&!x,Y=K&&U&&!q,X=K&&!Y,Z=m(te,{freeSolo:!1,multiple:N,disableClearable:x,value:W,options:P,loading:S,ref:we,size:j,disableCloseOnSelect:M,onChange:(e,n,r,i)=>{if(n===null){t?.(e,N?[]:null,r,i);return}t?.(e,n,r,i),M&&N||L(!1)},getLimitTagsText:ve(e),inputValue:B,open:ae||I,onOpen:()=>L(!0),sx:{width:xe,...Se},slots:{paper:ye},slotProps:{...k,paper:{disableReset:u,disableSelectAll:d,loading:S,localeText:ee,multiple:N,onChange:t,options:P,value:f,variant:e,...k?.paper}},onInputChange:(e,t,n)=>{n===`reset`&&I&&!C||n===`selectOption`&&!C||n===`removeOption`&&!C||(b||z(t),g?.(e,t,n))},onFocus:e=>{L(!0),p?.(e)},onBlur:e=>{L(!1),ne?.(e)},getOptionLabel:h||(e=>{let t=typeof e==`object`&&`label`in e?e.label:e;return String(t)}),renderOption:me||((e,t,{selected:n})=>{let r=typeof t!=`string`&&t.isHeader;if(S||r)return null;let a=typeof t==`string`?t:t?.id||t?.value||``,o=typeof t==`string`?t:t?.label,s=typeof t==`string`?void 0:t?.image,l=`${a}-${e?.key}`;return se(ce,{...e,key:l},!i&&m(y,{disableRipple:!0,checked:n,sx:T}),s&&m(ie,{sx:{height:24,marginRight:1,minWidth:`auto`,width:24},children:m(oe,{variant:`rounded`,src:s,sx:{height:24,width:24},children:s===`letter`&&typeof o==`string`&&o?.charAt(0).toUpperCase()})}),typeof o==`string`?m(c,{variant:`body2`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,title:o,children:o}):o)}),renderValue:be||(K?e=>{if(!Y)return null;let{count:t,text:r}=he(e,G);return _(n,{component:`span`,sx:{alignItems:`center`,display:`inline-flex`,minWidth:0},children:[m(c,{component:`span`,overflow:`hidden`,sx:{fontSize:`inherit`,fontWeight:`inherit`},textOverflow:`ellipsis`,whiteSpace:`nowrap`,children:r}),t>1&&m(ge,{inverted:V,children:t})]})}:N?(t,n,r)=>{if(!Array.isArray(t)||!t.length||q)return null;let i=e=>typeof e==`object`&&`label`in e&&e?.label?e.label:e.toString();if(r?.focused){let[r,...a]=t,{key:o}=n({index:0});return _(le,{children:[m(c,{marginRight:1,minWidth:0,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:i(r)},o),a.length>0&&ve(e)(a.length)]})}return t.map((e,t)=>{let{key:r}=n({index:t});return m(c,{marginRight:1,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:i(e)},r)})}:void 0),renderInput:e=>{let n=()=>{if(K)return X?a??G:void 0;if(!(!I&&(Array.isArray(f)&&f.length||!Array.isArray(f)&&f)))return a},i=()=>H?m(l,{position:`end`,sx:{color:`text.primary`,position:`absolute`,right:j===`medium`?`8px`:`6px`},children:J?m(r,{"aria-label":Te(`clear`),onClick:e=>{e.preventDefault(),e.stopPropagation(),z(``),g?.(e,``,`clear`),U&&t?.(e,N?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},size:`small`,sx:{"& .MuiSvgIcon-root":{fontSize:v(16),pointerEvents:`none`},"&:hover":{backgroundColor:`action.selected`},color:`text.primary`,cursor:`pointer`,padding:`3px`,pointerEvents:`auto`},children:m(ue,{})}):m(fe,{fontSize:`small`,sx:{cursor:`pointer`,transform:I?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`}})}):V?_(l,{position:`end`,sx:{color:U?`text.contrast`:`text.primary`,position:`absolute`,right:5,transform:I?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`},children:[J&&m(r,{size:`small`,onClick:e=>{e.preventDefault(),e.stopPropagation(),z(``),g?.(e,``,`clear`),U&&t?.(e,N?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},sx:{".MuiTextField-root:hover &":{opacity:1},"& .MuiSvgIcon-root":{fontSize:v(16),pointerEvents:`none`},color:U?`text.contrast`:`text.primary`,cursor:`pointer`,left:`50%`,opacity:0,padding:`2px`,pointerEvents:`auto`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,transition:`opacity 0.2s ease-in-out`,zIndex:1},children:m(ue,{})}),m(fe,{fontSize:`small`,sx:{cursor:`pointer`,transition:`opacity 0.2s ease-in-out`,...J&&{".MuiTextField-root:hover &":{opacity:0}}}})]}):I?_(l,{position:`end`,sx:{position:`absolute`,right:8},children:[B&&!x&&m(r,{size:`small`,onClick:e=>{z(``),g?.(e,``,`clear`)},sx:{marginRight:`-3px`},children:m(ue,{sx:{fontSize:v(20)}})}),(0,w.isValidElement)(e.InputProps?.endAdornment)&&typeof e.InputProps.endAdornment==`object`&&`props`in e.InputProps.endAdornment&&e.InputProps.endAdornment.props&&typeof e.InputProps.endAdornment.props==`object`&&`children`in e.InputProps.endAdornment.props&&Array.isArray(e.InputProps.endAdornment.props.children)&&e.InputProps.endAdornment.props.children[1]]}):(0,w.isValidElement)(e.InputProps?.endAdornment)?e.InputProps.endAdornment:null;return m(s,{sx:{"& .MuiInputBase-root .MuiInputBase-input":{flex:!(N&&(I||B))||I?1:0,...I&&U&&{marginLeft:.75},minWidth:X?`max-content`:I?24:0},...!(V||H)&&{"& .MuiInputBase-root":{flexWrap:`nowrap`}},...V&&{"& .MuiInputBase-root":{backgroundColor:U?`text.primary`:`grey.100`,borderRadius:20,color:U?`text.contrast`:`text.primary`,fieldset:{borderColor:`transparent !important`},flexWrap:`nowrap`,fontSize:D(j).fontSize,height:D(j).height,input:{padding:`0 !important`},minWidth:90,"p.MuiTypography-root":{fontSize:D(j).fontSize,margin:0},paddingRight:`30px !important`,paddingY:`0 !important`}},...H&&{"& .MuiInputBase-root":{"&:hover":{backgroundImage:e=>U?`${E(e.palette.action.selected)}, ${E(e.palette.action.hover)}`:E(e.palette.action.hover)},backgroundColor:`grey.100`,flexWrap:`nowrap`,...U&&{backgroundImage:e=>E(e.palette.action.selected)},borderRadius:e=>`${e.shape.borderRadius}px`,color:`text.primary`,cursor:`pointer`,fieldset:{borderColor:`transparent !important`},fontSize:O(j).fontSize,fontWeight:400,height:O(j).height,input:{"&::placeholder":{color:`text.primary`,opacity:1},cursor:I?`text`:`pointer`,padding:`0 !important`},maxWidth:pe,minWidth:90,"p.MuiTypography-root":{fontSize:O(j).fontSize,margin:0},paddingLeft:j===`medium`?`11px !important`:`9px !important`,paddingRight:j===`medium`?`32px !important`:`30px !important`,paddingY:`0 !important`}}},...e,slotProps:{htmlInput:{...e.inputProps,...a&&{"aria-label":a},...K&&X&&G&&{size:G.length+2}},input:{...e.InputProps,endAdornment:i()}},placeholder:n()})},...F});return Ce?m(re,{title:Ce,...A,children:Z}):Z},xe=(0,w.forwardRef)(be)})),k,Ce=e((()=>{Se(),Se(),k=xe})),A,j,M,N,P,F,we,Te,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ee,De;e((()=>{h(),A=t(u(),1),Ce(),p(),j=[{id:`1`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,label:`Van Henry`,value:`van-henry`},{id:`3`,label:`April Tucker`,value:`april-tucker`},{id:`4`,label:`April Tucker with very long label already`,value:`april-tucker`}],M=[{id:`1`,image:`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`,label:`April Tucker`,value:`april-tucker`}],N=e=>{let[t,n]=(0,A.useState)([]),[r,i]=(0,A.useState)([]),[a,o]=(0,A.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return _(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(k,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t}),m(k,{...e,size:`small`,sx:{width:300},onChange:c,value:r}),m(k,{...e,size:`medium`,sx:{width:300},onChange:l,value:a})]})},P=e=>{let[t,n]=(0,A.useState)(null),[r,i]=(0,A.useState)(null),[a,o]=(0,A.useState)(null),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return _(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(k,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t,multiple:!1}),m(k,{...e,size:`small`,sx:{width:300},onChange:c,value:r,multiple:!1}),m(k,{...e,size:`medium`,sx:{width:300},onChange:l,value:a,multiple:!1})]})},F=[{id:`1`,label:`En cours`,value:`ongoing`},{id:`2`,label:`Confirmée`,value:`confirmed`},{id:`3`,label:`Livrée`,value:`delivered`},{id:`4`,label:`Annulée`,value:`cancelled`}],we=e=>{let[t,n]=(0,A.useState)([F[0]]),[r,i]=(0,A.useState)([j[0],j[1],j[2]]),[a,o]=(0,A.useState)([]);return _(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(k,{...e,size:`xSmall`,label:`Statut`,onChange:(e,t)=>n(t),options:F,value:t}),m(k,{...e,size:`small`,label:`Utilisateurs`,onChange:(e,t)=>i(t),options:j,value:r}),m(k,{...e,size:`medium`,label:`Chantier`,onChange:(e,t)=>o(t),options:j,value:a})]})},Te=e=>{let[t,n]=(0,A.useState)([]),[r,i]=(0,A.useState)([]),[a,o]=(0,A.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return _(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(k,{...e,size:`xSmall`,onChange:s,value:t}),m(k,{...e,size:`small`,onChange:c,value:r}),m(k,{...e,size:`medium`,onChange:l,value:a})]})},I=e=>{let[t,n]=(0,A.useState)([]),r=(e,t)=>{n(t)};return _(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(k,{...e,sx:{width:300},onChange:r,value:t}),m(k,{...e,sx:{width:300},disabled:!0,value:[j[0]]})]})},L=N.bind({}),L.args={options:j},R=N.bind({}),R.args={options:M},z=N.bind({}),z.args={options:[{id:`1`,image:`avatar`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`avatar`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`avatar`,label:`April Tucker`,value:`april-tucker`}]},B=N.bind({}),B.args={options:[{id:`1`,image:`letter`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`letter`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`letter`,label:`April Tucker`,value:`april-tucker`}]},V=N.bind({}),V.args={disableSelectAll:!0,options:M},H=N.bind({}),H.args={options:[...j,{id:`my-worksite`,isHeader:!0,label:`Mes chantiers`,value:`my-worksite`}]},U=N.bind({}),U.args={disableReset:!0,options:j},W=N.bind({}),W.args={disableCheckbox:!0,options:j},G=N.bind({}),G.args={options:j,placeholder:`Search...`},K=N.bind({}),K.args={options:j,resetInputValueOnSelectOption:!0},q=N.bind({}),q.args={disableClearable:!0,options:j},J=N.bind({}),J.args={loading:!0},Y=P.bind({}),Y.args={multiple:!1,options:j},X=Te.bind({}),X.args={options:j,placeholder:`Search`,variant:`chip`},Z=we.bind({}),Z.args={variant:`filled`},Q=N.bind({}),Q.args={options:j,variant:`filled`},$=I.bind({}),$.args={options:j,placeholder:`Filter`,tooltip:`A global filter is active. Clear it to filter manually here.`},Ee={component:k,title:`Components/Inputs/AutocompleteFilter`},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}},De=[`Basic`,`WithImage`,`WithAvatar`,`WithAvatarLetter`,`DisableSelectAll`,`WithHeaderOptions`,`WithoutReset`,`CheckboxDisabled`,`WithPlaceholder`,`ResetInputValueOnSelect`,`DisableClearable`,`Loading`,`UniqueSelection`,`ChipVariant`,`FilledVariant`,`FilledWithoutLabel`,`WithTooltip`]}))();export{L as Basic,W as CheckboxDisabled,X as ChipVariant,q as DisableClearable,V as DisableSelectAll,Z as FilledVariant,Q as FilledWithoutLabel,J as Loading,K as ResetInputValueOnSelect,Y as UniqueSelection,z as WithAvatar,B as WithAvatarLetter,H as WithHeaderOptions,R as WithImage,G as WithPlaceholder,$ as WithTooltip,U as WithoutReset,De as __namedExportsOrder,Ee as default};