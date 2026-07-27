import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Di as r,Fr as i,Kr as a,Qt as o,S as s,Si as c,Sn as l,Xn as ee,Ya as u,aa as d,ai as te,at as f,d as p,f as m,fn as ne,ft as re,in as ie,ln as ae,m as h,ni as oe,o as se,oa as ce,on as le,p as g,s as _,u as v,vr as ue,zi as y}from"./iframe-94AAr2Wq.js";import{n as b,t as x}from"./CloseIcon-DD80bMTZ.js";import{n as de,t as S}from"./useTranslation-CsXu7Zke.js";import{n as C,t as fe}from"./ChevronIcon-Bq-uFcE8.js";var w,T,pe,E,D,O,me,he,ge,_e,ve,ye,be,xe,k=e((()=>{h(),w=t(u(),1),C(),b(),S(),se(),p(),d(),T={padding:0,paddingRight:1},pe=260,E=e=>`linear-gradient(${e}, ${e})`,D=e=>e===`xSmall`?{fontSize:_(12),height:20}:e===`small`?{fontSize:_(13),height:24}:{fontSize:_(14),height:32},O=e=>e===`xSmall`?{fontSize:_(12),height:26}:e===`small`?{fontSize:_(13),height:32}:{fontSize:_(13),height:40},me=e=>typeof e==`string`?e:typeof e?.label==`string`?e.label:``,he=(e,t)=>{let n=(Array.isArray(e)?e:[e]).filter(Boolean).map(e=>me(e));return n.length?n.length>1?{count:n.length,text:t||``}:{count:0,text:t?`${t} : ${n[0]}`:n[0]}:{count:0,text:t||``}},ge=({children:e})=>m(n,{component:`span`,sx:{alignItems:`center`,backgroundColor:`text.primary`,borderRadius:99,color:`text.contrast`,display:`inline-flex`,flexShrink:0,fontSize:_(11),fontWeight:500,height:18,justifyContent:`center`,lineHeight:1,marginLeft:.75,minWidth:18,paddingX:`5px`},children:e}),_e=(e,t)=>t?e?Array.isArray(e)?e:[e]:[]:e||null,ve=e=>{let t=e===`chip`;return function(e){return m(a,{badgeContent:`+${e}`,sx:{"& .MuiBadge-badge":{...t?{backgroundColor:`grey.100`,color:`text.primary`,height:16,minWidth:16}:{backgroundColor:`text.primary`,color:`text.contrast`},position:`relative`,transform:`none`},alignItems:`center`}})}},ye=({variant:e,children:t,disableSelectAll:n,localeText:r,disableReset:a,onChange:s,loading:l,options:u,value:d,multiple:te,...f})=>{let{t:p}=de(),re=Array.isArray(d)?d?.length===u?.length:!1,ie=Array.isArray(u)&&u.every(e=>typeof e==`string`),h=!ie&&u?.filter(e=>e?.isHeader)||[];return g(y,{sx:{minWidth:250},...f,children:[te&&!l&&(!n||!!h?.length)&&g(v,{children:[g(ne,{role:`listbox`,children:[!n&&m(le,{disablePadding:!0,role:`option`,onMouseDown:e=>{if(e.stopPropagation(),e.preventDefault(),re){s?.(e,[],`removeOption`);return}s?.(e,u||[],`selectOption`)},children:g(ae,{disableRipple:!0,children:[m(ue,{disableRipple:!0,id:`select-all-checkbox`,checked:re,sx:T}),m(o,{primary:r?.selectAll||p(`selectAll`),slotProps:{primary:{variant:`body2`}}}),!a&&m(i,{variant:`link`,size:`small`,sx:{marginX:1,textDecoration:`none`},onClick:e=>{s?.(e,[],`removeOption`)},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},children:m(c,{variant:`body2`,children:r?.reset||p(`reset`)})})]})}),!ie&&h?.map((e,t)=>{let n=`header-options-${t}`,r=Array.isArray(d)&&d.some(t=>JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id);return m(le,{disablePadding:!0,onMouseDown:t=>{if(t.stopPropagation(),t.preventDefault(),r){let n=Array.isArray(d)?d?.filter(t=>!(JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id)):[];s?.(t,n,`removeOption`);return}s?.(t,[...Array.isArray(d)?d:[],e],`selectOption`)},children:g(ae,{disableRipple:!0,children:[m(ue,{disableRipple:!0,checked:r,sx:T}),m(o,{primary:e?.label})]})},n)})]}),m(ee,{})]}),t]})},be=({variant:e,onChange:t,disableCheckbox:i,placeholder:a,label:o,summary:ee,localeText:u,disableReset:d,disableSelectAll:f,value:p,onFocus:ne,onBlur:ae,open:h,getOptionLabel:se,onInputChange:v,inputValue:y,disableClearable:b,loading:S,resetInputValueOnSelectOption:C,renderOption:me,renderValue:be,width:xe,sx:k,size:A=`small`,disableCloseOnSelect:j=!0,multiple:M=!0,options:N=[],slotProps:P,tooltip:F,tooltipProps:Se,...I},Ce)=>{let{t:we}=de(),[L,R]=(0,w.useState)(!1),[z,B]=(0,w.useState)(``),V=y||z,H=e===`chip`,U=e===`filled`,W=Array.isArray(p)?!!p.length:p!=null,G=_e(p,M),K=!!ee,q=o??a,J=K&&W&&!(L&&V),Y=K&&!J,X=m(te,{freeSolo:!1,multiple:M,disableClearable:b,value:G,options:N,loading:S,ref:Ce,size:A,disableCloseOnSelect:j,onChange:(e,n,r,i)=>{if(n===null){t?.(e,M?[]:null,r,i);return}t?.(e,n,r,i),j&&M||R(!1)},getLimitTagsText:ve(e),inputValue:V,open:h||L,onOpen:()=>R(!0),sx:{width:xe,...k},slots:{paper:ye},slotProps:{...P,paper:{disableReset:d,disableSelectAll:f,loading:S,localeText:u,multiple:M,onChange:t,options:N,value:p,variant:e,...P?.paper}},onInputChange:(e,t,n)=>{n===`reset`&&L&&!C||n===`selectOption`&&!C||n===`removeOption`&&!C||(y||B(t),v?.(e,t,n))},onFocus:e=>{R(!0),ne?.(e)},onBlur:e=>{R(!1),ae?.(e)},getOptionLabel:se||(e=>{let t=typeof e==`object`&&`label`in e?e.label:e;return String(t)}),renderOption:me||((e,t,{selected:n})=>{let r=typeof t!=`string`&&t.isHeader;if(S||r)return null;let a=typeof t==`string`?t:t?.id||t?.value||``,o=typeof t==`string`?t:t?.label,s=typeof t==`string`?void 0:t?.image,l=`${a}-${e?.key}`;return ce(le,{...e,key:l},!i&&m(ue,{disableRipple:!0,checked:n,sx:T}),s&&m(ie,{sx:{height:24,marginRight:1,minWidth:`auto`,width:24},children:m(oe,{variant:`rounded`,src:s,sx:{height:24,width:24},children:s===`letter`&&typeof o==`string`&&o?.charAt(0).toUpperCase()})}),typeof o==`string`?m(c,{variant:`body2`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,title:o,children:o}):o)}),renderValue:be||(K?e=>{if(!J)return null;let{count:t,text:r}=he(e,q);return g(n,{component:`span`,sx:{alignItems:`center`,display:`inline-flex`,marginLeft:1,minWidth:0},children:[m(c,{component:`span`,overflow:`hidden`,sx:{fontSize:`inherit`,fontWeight:`inherit`},textOverflow:`ellipsis`,whiteSpace:`nowrap`,children:r}),t>1&&m(ge,{children:t})]})}:M?(e,t,n)=>Array.isArray(e)?e.map((e,r)=>{if(n?.focused)return null;let{key:i}=t({index:r});return m(c,{marginX:1,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:typeof e==`object`&&`label`in e&&e?.label?e.label:e.toString()},i)}):null:void 0),renderInput:e=>{let n=()=>{if(K)return Y?a??q:void 0;if(!(!L&&(Array.isArray(p)&&p.length||!Array.isArray(p)&&p)))return a},i=()=>U?m(l,{position:`end`,sx:{color:`text.primary`,position:`absolute`,right:6},children:(V||W)&&!b?m(r,{"aria-label":we(`clear`),onClick:e=>{e.preventDefault(),e.stopPropagation(),B(``),v?.(e,``,`clear`),W&&t?.(e,M?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},size:`small`,sx:{"& .MuiSvgIcon-root":{fontSize:_(16),pointerEvents:`none`},"&:hover":{backgroundColor:`action.selected`},color:`text.primary`,cursor:`pointer`,padding:`3px`,pointerEvents:`auto`},children:m(x,{})}):m(fe,{fontSize:`small`,sx:{cursor:`pointer`,transform:L?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`}})}):H?g(l,{position:`end`,sx:{color:W?`text.contrast`:`text.primary`,position:`absolute`,right:5,transform:L?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`},children:[(V||W)&&!b&&m(r,{size:`small`,onClick:e=>{e.preventDefault(),e.stopPropagation(),B(``),v?.(e,``,`clear`),W&&t?.(e,M?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},sx:{".MuiTextField-root:hover &":{opacity:1},"& .MuiSvgIcon-root":{fontSize:_(16),pointerEvents:`none`},color:W?`text.contrast`:`text.primary`,cursor:`pointer`,left:`50%`,opacity:0,padding:`2px`,pointerEvents:`auto`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,transition:`opacity 0.2s ease-in-out`,zIndex:1},children:m(x,{})}),m(fe,{fontSize:`small`,sx:{cursor:`pointer`,transition:`opacity 0.2s ease-in-out`,...(V||W)&&!b&&{".MuiTextField-root:hover &":{opacity:0}}}})]}):L?g(l,{position:`end`,sx:{position:`absolute`,right:8},children:[V&&!b&&m(r,{size:`small`,onClick:e=>{B(``),v?.(e,``,`clear`)},sx:{marginRight:`-3px`},children:m(x,{sx:{fontSize:_(20)}})}),(0,w.isValidElement)(e.InputProps?.endAdornment)&&typeof e.InputProps.endAdornment==`object`&&`props`in e.InputProps.endAdornment&&e.InputProps.endAdornment.props&&typeof e.InputProps.endAdornment.props==`object`&&`children`in e.InputProps.endAdornment.props&&Array.isArray(e.InputProps.endAdornment.props.children)&&e.InputProps.endAdornment.props.children[1]]}):(0,w.isValidElement)(e.InputProps?.endAdornment)?e.InputProps.endAdornment:null;return m(s,{sx:{"& .MuiInputBase-root .MuiInputBase-input":{flex:!(M&&(L||V))||L?1:0,minWidth:0},...H&&{"& .MuiInputBase-root":{backgroundColor:W?`text.primary`:`grey.100`,borderRadius:20,color:W?`text.contrast`:`text.primary`,fieldset:{borderColor:`transparent !important`},fontSize:D(A).fontSize,height:D(A).height,input:{padding:`0 !important`},minWidth:90,"p.MuiTypography-root":{fontSize:D(A).fontSize,margin:0},paddingRight:`30px !important`,paddingY:`0 !important`}},...U&&{"& .MuiInputBase-root":{"&:hover":{backgroundImage:e=>W?`${E(e.palette.action.selected)}, ${E(e.palette.action.hover)}`:E(e.palette.action.hover)},backgroundColor:`grey.100`,flexWrap:`nowrap`,...W&&{backgroundImage:e=>E(e.palette.action.selected)},borderRadius:e=>`${e.shape.borderRadius}px`,color:`text.primary`,cursor:`pointer`,fieldset:{borderColor:`transparent !important`},fontSize:O(A).fontSize,fontWeight:400,height:O(A).height,input:{"&::placeholder":{color:`text.primary`,opacity:1},cursor:`pointer`,padding:`0 !important`,...Y&&{minWidth:`max-content !important`}},maxWidth:pe,minWidth:90,"p.MuiTypography-root":{fontSize:O(A).fontSize,margin:0},paddingLeft:`9px !important`,paddingRight:`30px !important`,paddingY:`0 !important`}}},...e,slotProps:{htmlInput:{...e.inputProps,...a&&{"aria-label":a},...K&&Y&&q&&{size:q.length+2}},input:{...e.InputProps,endAdornment:i()}},placeholder:n()})},...I});return F?m(re,{title:F,...Se,children:X}):X},xe=(0,w.forwardRef)(be)})),A,j=e((()=>{k(),k(),A=xe})),M,N,P,F,Se,I,Ce,we,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Te,Ee;e((()=>{h(),M=t(u(),1),j(),p(),N=[{id:`1`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,label:`Van Henry`,value:`van-henry`},{id:`3`,label:`April Tucker`,value:`april-tucker`},{id:`4`,label:`April Tucker with very long label already`,value:`april-tucker`}],P=[{id:`1`,image:`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`,label:`April Tucker`,value:`april-tucker`}],F=e=>{let[t,n]=(0,M.useState)([]),[r,i]=(0,M.useState)([]),[a,o]=(0,M.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return g(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(A,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t}),m(A,{...e,size:`small`,sx:{width:300},onChange:c,value:r}),m(A,{...e,size:`medium`,sx:{width:300},onChange:l,value:a})]})},Se=e=>{let[t,n]=(0,M.useState)(null),[r,i]=(0,M.useState)(null),[a,o]=(0,M.useState)(null),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return g(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(A,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t,multiple:!1}),m(A,{...e,size:`small`,sx:{width:300},onChange:c,value:r,multiple:!1}),m(A,{...e,size:`medium`,sx:{width:300},onChange:l,value:a,multiple:!1})]})},I=[{id:`1`,label:`En cours`,value:`ongoing`},{id:`2`,label:`Confirmée`,value:`confirmed`},{id:`3`,label:`Livrée`,value:`delivered`},{id:`4`,label:`Annulée`,value:`cancelled`}],Ce=e=>{let[t,n]=(0,M.useState)([I[0]]),[r,i]=(0,M.useState)([N[0],N[1],N[2]]),[a,o]=(0,M.useState)([]);return g(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(A,{...e,size:`xSmall`,label:`Statut`,onChange:(e,t)=>n(t),options:I,value:t}),m(A,{...e,size:`small`,label:`Utilisateurs`,onChange:(e,t)=>i(t),options:N,value:r}),m(A,{...e,size:`medium`,label:`Chantier`,onChange:(e,t)=>o(t),options:N,value:a})]})},we=e=>{let[t,n]=(0,M.useState)([]),[r,i]=(0,M.useState)([]),[a,o]=(0,M.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return g(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(A,{...e,size:`xSmall`,onChange:s,value:t}),m(A,{...e,size:`small`,onChange:c,value:r}),m(A,{...e,size:`medium`,onChange:l,value:a})]})},L=e=>{let[t,n]=(0,M.useState)([]),r=(e,t)=>{n(t)};return g(f,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[m(A,{...e,sx:{width:300},onChange:r,value:t}),m(A,{...e,sx:{width:300},disabled:!0,value:[N[0]]})]})},R=F.bind({}),R.args={options:N},z=F.bind({}),z.args={options:P},B=F.bind({}),B.args={options:[{id:`1`,image:`avatar`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`avatar`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`avatar`,label:`April Tucker`,value:`april-tucker`}]},V=F.bind({}),V.args={options:[{id:`1`,image:`letter`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`letter`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`letter`,label:`April Tucker`,value:`april-tucker`}]},H=F.bind({}),H.args={disableSelectAll:!0,options:P},U=F.bind({}),U.args={options:[...N,{id:`my-worksite`,isHeader:!0,label:`Mes chantiers`,value:`my-worksite`}]},W=F.bind({}),W.args={disableReset:!0,options:N},G=F.bind({}),G.args={disableCheckbox:!0,options:N},K=F.bind({}),K.args={options:N,placeholder:`Search...`},q=F.bind({}),q.args={options:N,resetInputValueOnSelectOption:!0},J=F.bind({}),J.args={disableClearable:!0,options:N},Y=F.bind({}),Y.args={loading:!0},X=Se.bind({}),X.args={multiple:!1,options:N},Z=we.bind({}),Z.args={options:N,placeholder:`Search`,variant:`chip`},Q=Ce.bind({}),Q.args={variant:`filled`},$=L.bind({}),$.args={options:N,placeholder:`Filter`,tooltip:`A global filter is active. Clear it to filter manually here.`},Te={component:A,title:`Components/Inputs/AutocompleteFilter`},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}},Ee=[`Basic`,`WithImage`,`WithAvatar`,`WithAvatarLetter`,`DisableSelectAll`,`WithHeaderOptions`,`WithoutReset`,`CheckboxDisabled`,`WithPlaceholder`,`ResetInputValueOnSelect`,`DisableClearable`,`Loading`,`UniqueSelection`,`ChipVariant`,`FilledVariant`,`WithTooltip`]}))();export{R as Basic,G as CheckboxDisabled,Z as ChipVariant,J as DisableClearable,H as DisableSelectAll,Q as FilledVariant,Y as Loading,q as ResetInputValueOnSelect,X as UniqueSelection,B as WithAvatar,V as WithAvatarLetter,U as WithHeaderOptions,z as WithImage,K as WithPlaceholder,$ as WithTooltip,W as WithoutReset,Ee as __namedExportsOrder,Te as default};