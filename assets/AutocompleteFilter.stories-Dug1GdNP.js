import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Aa as n,Dr as r,Hi as i,Li as a,O as o,On as s,Ti as c,Wr as l,Yr as u,_ as d,ar as ee,b as f,dt as p,fn as te,g as m,hn as ne,in as re,ka as h,o as g,pi as ie,ra as _,s as v,ui as ae,un as oe,v as y,vn as se,vt as ce,y as b,yo as x}from"./iframe-YHvt-iGK.js";import{n as le,t as ue}from"./CloseIcon-C9VYDuNH.js";import{n as de,t as fe}from"./useTranslation-B1J5M8Qd.js";import{n as pe,t as me}from"./ChevronIcon-CjoJ62y_.js";var S,C,he,w,T,ge,_e,ve,ye,be,xe,Se,Ce,we,E,Te=e((()=>{f(),S=t(x(),1),pe(),le(),fe(),g(),d(),h(),C={padding:0,paddingRight:1},he=260,w=e=>`linear-gradient(${e}, ${e})`,T=e=>e===`xSmall`?{fontSize:v(12),height:20}:e===`small`?{fontSize:v(13),height:24}:{fontSize:v(14),height:32},ge=e=>e===`xSmall`?{fontSize:v(12),height:26}:e===`small`?{fontSize:v(13),height:32}:{fontSize:v(13),height:40},_e=e=>typeof e==`string`?e:typeof e?.label==`string`?e.label:``,ve=(e,t)=>{let n=(Array.isArray(e)?e:[e]).filter(Boolean).map(e=>_e(e));return n.length?n.length>1?{count:n.length,text:t||``}:{count:1,text:t?`${t} : ${n[0]}`:n[0]}:{count:0,text:t||``}},ye=({children:e,compact:t,inverted:n,withMargin:r})=>y(u,{component:`span`,sx:{alignItems:`center`,backgroundColor:n?`grey.100`:`primary.main`,borderRadius:99,color:n?`text.primary`:`primary.contrastText`,display:`inline-flex`,flexShrink:0,fontSize:v(11),fontWeight:500,height:t?16:18,justifyContent:`center`,lineHeight:1,marginLeft:r?.75:0,minWidth:t?16:18,paddingX:`5px`},children:y(u,{component:`span`,sx:{position:`relative`,top:`0.5px`},children:e})}),be=(e,t)=>t?e?Array.isArray(e)?e:[e]:[]:e||null,xe=e=>{let t=e===`chip`;return function(e){return y(ye,{compact:t,inverted:t,children:`+${e}`})}},Se=({variant:e,children:t,disableSelectAll:n,localeText:i,disableReset:o,onChange:s,loading:c,options:u,value:d,multiple:f,...p})=>{let{t:h}=de(),g=Array.isArray(d)?d?.length===u?.length:!1,ie=Array.isArray(u)&&u.every(e=>typeof e==`string`),v=!ie&&u?.filter(e=>e?.isHeader)||[];return b(_,{sx:{minWidth:350},...p,children:[f&&!c&&(!n||!!v?.length)&&b(m,{children:[b(se,{role:`listbox`,children:[!n&&y(te,{disablePadding:!0,role:`option`,onMouseDown:e=>{if(e.stopPropagation(),e.preventDefault(),g){s?.(e,[],`removeOption`);return}s?.(e,u||[],`selectOption`)},children:b(ne,{disableRipple:!0,children:[y(r,{disableRipple:!0,id:`select-all-checkbox`,checked:g,sx:C}),y(re,{primary:i?.selectAll||h(`selectAll`),slotProps:{primary:{variant:`body2`}}}),!o&&y(l,{variant:`link`,size:`small`,sx:{marginX:1,textDecoration:`none`},onClick:e=>{s?.(e,[],`removeOption`)},onMouseDown:e=>{e.stopPropagation(),e.preventDefault()},children:y(a,{variant:`body2`,children:i?.reset||h(`reset`)})})]})}),!ie&&v?.map((e,t)=>{let n=`header-options-${t}`,i=Array.isArray(d)&&d.some(t=>JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id);return y(te,{disablePadding:!0,onMouseDown:t=>{if(t.stopPropagation(),t.preventDefault(),i){let n=Array.isArray(d)?d?.filter(t=>!(JSON.stringify(t)===JSON.stringify(e)||t&&typeof t==`object`&&`id`in t&&t?.id===e?.id)):[];s?.(t,n,`removeOption`);return}s?.(t,[...Array.isArray(d)?d:[],e],`selectOption`)},children:b(ne,{disableRipple:!0,children:[y(r,{disableRipple:!0,checked:i,sx:C}),y(re,{primary:e?.label})]})},n)})]}),y(ee,{})]}),t]})},Ce=({anchorEl:e,popperRef:t,sx:n,...r})=>{let i=(0,S.useRef)(null),a=e=>{i.current=e,typeof t==`function`?t(e):t&&(t.current=e)};return(0,S.useEffect)(()=>{if(!(e instanceof HTMLElement))return;let t=new ResizeObserver(()=>{i.current?.update()});return t.observe(e),()=>t.disconnect()},[e]),y(c,{placement:`bottom-start`,...r,anchorEl:e,popperRef:a,sx:[({zIndex:e})=>({zIndex:e.modal}),...Array.isArray(n)?n:[n]]})},we=({variant:e,onChange:t,disableCheckbox:c,placeholder:l,label:d,localeText:ee,disableReset:f,disableSelectAll:p,value:m,onFocus:ne,onBlur:re,open:h,getOptionLabel:g,onInputChange:_,inputValue:se,disableClearable:x,loading:le,resetInputValueOnSelectOption:fe,renderOption:pe,renderValue:_e,width:we,sx:E,slotProps:Te,tooltip:D,tooltipProps:O,size:k=`small`,disableCloseOnSelect:A=!0,multiple:j=!0,options:M=[],...Ee},De)=>{let{t:N}=de(),[P,F]=(0,S.useState)(!1),[Oe,I]=(0,S.useState)(``),L=se||Oe,R=e===`chip`,z=e===`filled`,B=Array.isArray(m)?!!m.length:m!=null,V=be(m,j),H=d??l,U=!!H,W=P&&!!L,G=(!!L||B)&&!x,K=U&&B&&!W,q=U&&!K,J=B&&(j||K)&&!P,Y=y(ie,{freeSolo:!1,multiple:j,disableClearable:x,value:V,options:M,loading:le,ref:De,size:k,disableCloseOnSelect:A,onChange:(e,n,r,i)=>{if(n===null){t?.(e,j?[]:null,r,i);return}t?.(e,n,r,i),A&&j||F(!1)},getLimitTagsText:xe(e),inputValue:L,open:h||P,onOpen:()=>F(!0),sx:{width:we,...E},slots:{paper:Se,popper:Ce},slotProps:{...Te,paper:{disableReset:f,disableSelectAll:p,loading:le,localeText:ee,multiple:j,onChange:t,options:M,value:m,variant:e,...Te?.paper}},onInputChange:(e,t,n)=>{n===`reset`&&P&&!fe||n===`selectOption`&&!fe||n===`removeOption`&&!fe||(se||I(t),_?.(e,t,n))},onFocus:e=>{F(!0),ne?.(e)},onBlur:e=>{F(!1),re?.(e)},getOptionLabel:g||(e=>{let t=typeof e==`object`&&`label`in e?e.label:e;return String(t)}),renderOption:pe||((e,t,{selected:i})=>{let o=typeof t!=`string`&&t.isHeader;if(le||o)return null;let s=typeof t==`string`?t:t?.id||t?.value||``,l=typeof t==`string`?t:t?.label,u=typeof t==`string`?void 0:t?.image,d=`${s}-${e?.key}`;return n(te,{...e,key:d},!c&&y(r,{disableRipple:!0,checked:i,sx:C}),u&&y(oe,{sx:{height:24,marginRight:1,minWidth:`auto`,width:24},children:y(ae,{variant:`rounded`,src:u,sx:{height:24,width:24},children:u===`letter`&&typeof l==`string`&&l?.charAt(0).toUpperCase()})}),typeof l==`string`?y(a,{variant:`body2`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,title:l,children:l}):l)}),renderValue:_e||(U?e=>{if(!K)return null;let{count:t,text:n}=ve(e,H);return b(u,{component:`span`,sx:{alignItems:`center`,display:`inline-flex`,minWidth:0},children:[y(a,{component:`span`,overflow:`hidden`,sx:{fontSize:`inherit`,fontWeight:`inherit`},textOverflow:`ellipsis`,whiteSpace:`nowrap`,children:n}),t>0&&y(ye,{inverted:R,withMargin:!0,children:t})]})}:j?(e,t)=>{if(!(Array.isArray(e)&&e.length)||W)return null;let n=e=>typeof e==`object`&&`label`in e&&e?.label?e.label:e.toString(),[r]=e,{key:i}=t({index:0});return b(u,{component:`span`,sx:{alignItems:`center`,display:`inline-flex`,minWidth:0},children:[y(a,{minWidth:0,whiteSpace:`nowrap`,textOverflow:`ellipsis`,overflow:`hidden`,children:n(r)}),y(ye,{compact:R,inverted:R,withMargin:!0,children:e.length})]},i)}:void 0),renderInput:e=>{let n=()=>{if(U)return q?l??H:void 0;if(!(!P&&(Array.isArray(m)&&m.length||!Array.isArray(m)&&m)))return l},r=()=>z?y(s,{position:`end`,sx:{color:`text.primary`,position:`absolute`,right:k===`medium`?`8px`:`6px`},children:G?y(i,{"aria-label":N(`clear`),onClick:e=>{e.preventDefault(),e.stopPropagation(),I(``),_?.(e,``,`clear`),B&&t?.(e,j?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},size:`small`,sx:{"& .MuiSvgIcon-root":{fontSize:v(16),pointerEvents:`none`},"&:hover":{backgroundColor:`action.selected`},color:`text.primary`,cursor:`pointer`,padding:`3px`,pointerEvents:`auto`},children:y(ue,{})}):y(me,{fontSize:`small`,sx:{cursor:`pointer`,transform:P?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`}})}):R?b(s,{position:`end`,sx:{color:B?`text.contrast`:`text.primary`,position:`absolute`,right:5,transform:P?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.2s ease-in-out`},children:[G&&y(i,{size:`small`,onClick:e=>{e.preventDefault(),e.stopPropagation(),I(``),_?.(e,``,`clear`),B&&t?.(e,j?[]:null,`clear`)},onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},sx:{".MuiTextField-root:hover &":{opacity:1},"& .MuiSvgIcon-root":{fontSize:v(16),pointerEvents:`none`},color:B?`text.contrast`:`text.primary`,cursor:`pointer`,left:`50%`,opacity:0,padding:`2px`,pointerEvents:`auto`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,transition:`opacity 0.2s ease-in-out`,zIndex:1},children:y(ue,{})}),y(me,{fontSize:`small`,sx:{cursor:`pointer`,transition:`opacity 0.2s ease-in-out`,...G&&{".MuiTextField-root:hover &":{opacity:0}}}})]}):P?b(s,{position:`end`,sx:{position:`absolute`,right:8},children:[L&&!x&&y(i,{size:`small`,onClick:e=>{I(``),_?.(e,``,`clear`)},sx:{marginRight:`-3px`},children:y(ue,{sx:{fontSize:v(20)}})}),(0,S.isValidElement)(e.InputProps?.endAdornment)&&typeof e.InputProps.endAdornment==`object`&&`props`in e.InputProps.endAdornment&&e.InputProps.endAdornment.props&&typeof e.InputProps.endAdornment.props==`object`&&`children`in e.InputProps.endAdornment.props&&Array.isArray(e.InputProps.endAdornment.props.children)&&e.InputProps.endAdornment.props.children[1]]}):(0,S.isValidElement)(e.InputProps?.endAdornment)?e.InputProps.endAdornment:null;return y(o,{onClick:()=>{e.disabled||F(!0)},sx:{"& .MuiInputBase-root .MuiInputBase-input.MuiInputBase-input":{...J?{flex:`0 0 0px`,minWidth:0,paddingLeft:`0 !important`,paddingRight:`0 !important`}:{flex:!(j&&(P||L))||P?1:0,...B&&(j||K)&&{marginLeft:R||z?.75:`1px`},minWidth:q?0:R||z?B&&(j||K)?12:0:P?24:0}},"& .MuiInputBase-root.MuiInputBase-root":{flexWrap:`nowrap`},...!(R||z)&&{"& .MuiOutlinedInput-root.MuiInputBase-sizeSmall":{...!J&&{"& .MuiAutocomplete-input":{paddingLeft:`5px !important`}},paddingLeft:`9px !important`},...!P&&G&&!e.disabled&&{"& .MuiInputBase-root.MuiInputBase-root":{paddingRight:`39px !important`,transition:`padding-right 0.2s ease-in-out`},"&:hover .MuiInputBase-root, & .MuiInputBase-root.Mui-focused":{paddingRight:`65px !important`}}},...R&&{"& .MuiInputBase-root":{backgroundColor:B?`text.primary`:`grey.100`,borderRadius:20,color:B?`text.contrast`:`text.primary`,fieldset:{borderColor:`transparent !important`},fontSize:T(k).fontSize,height:T(k).height,input:{padding:`0 !important`},minWidth:90,"p.MuiTypography-root":{fontSize:T(k).fontSize,margin:0},paddingRight:`30px !important`,paddingY:`0 !important`}},...z&&{"& .MuiInputBase-root":{"&:hover":{backgroundImage:e=>B?`${w(e.palette.action.selected)}, ${w(e.palette.action.hover)}`:w(e.palette.action.hover)},backgroundColor:`grey.100`,...B&&{backgroundImage:e=>w(e.palette.action.selected)},borderRadius:e=>`${e.shape.borderRadius}px`,color:`text.primary`,cursor:`pointer`,fieldset:{borderColor:`transparent !important`},fontSize:ge(k).fontSize,fontWeight:400,height:ge(k).height,input:{"&::placeholder":{color:`text.primary`,opacity:1},cursor:P?`text`:`pointer`,padding:`0 !important`},maxWidth:he,minWidth:90,"p.MuiTypography-root":{fontSize:ge(k).fontSize,margin:0},paddingLeft:k===`medium`?`11px !important`:`9px !important`,paddingRight:k===`medium`?`32px !important`:`30px !important`,paddingY:`0 !important`}}},...e,slotProps:{htmlInput:{...e.inputProps,...l&&{"aria-label":l},...U&&q&&H&&{size:H.length+2}},input:{...e.InputProps,endAdornment:r()}},placeholder:n()})},...Ee});return D?y(ce,{title:D,...O,children:Y}):Y},E=(0,S.forwardRef)(we)})),D,O,k,A,j,M,Ee,De,N,P,F,Oe,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ke,Ae;e((()=>{f(),D=t(x(),1),Te(),d(),h(),O=[{id:`1`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,label:`Van Henry`,value:`van-henry`},{id:`3`,label:`April Tucker`,value:`april-tucker`},{id:`4`,label:`April Tucker with very long label already`,value:`april-tucker`}],k=[{id:`1`,image:`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`https://images.unsplash.com/photo-1519710164239-da123dc03ef4`,label:`April Tucker`,value:`april-tucker`}],A=e=>{let[t,n]=(0,D.useState)([]),[r,i]=(0,D.useState)([]),[a,o]=(0,D.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return b(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[y(E,{...e,size:`xSmall`,sx:{width:300},onChange:s,value:t}),y(E,{...e,size:`small`,sx:{width:300},onChange:c,value:r}),y(E,{...e,size:`medium`,sx:{width:300},onChange:l,value:a})]})},j=[`standard`,`chip`,`filled`],M=[`xSmall`,`small`,`medium`],Ee=e=>{let[t,r]=(0,D.useState)({}),i=e=>(t,n)=>{r(t=>({...t,[e]:n}))};return y(p,{spacing:4,alignItems:`center`,justifyContent:`center`,height:`100%`,children:j.map(r=>y(p,{direction:`row`,spacing:2,alignItems:`center`,children:M.map(a=>n(E,{...e,key:a,size:a,variant:r,label:`xxxx`,sx:r===`chip`?void 0:{width:300},onChange:i(`${r}-${a}`),value:t[`${r}-${a}`]??null,multiple:!1}))},r))})},De=e=>{let[t,r]=(0,D.useState)({}),i=e=>(t,n)=>{r(t=>({...t,[e]:n}))};return y(p,{spacing:4,alignItems:`center`,justifyContent:`center`,height:`100%`,children:j.map(r=>y(p,{direction:`row`,spacing:2,alignItems:`center`,children:M.map(a=>n(E,{...e,key:a,size:a,variant:r,sx:{width:150},onChange:i(`${r}-${a}`),value:t[`${r}-${a}`]??[]}))},r))})},N=[{id:`1`,label:`En cours`,value:`ongoing`},{id:`2`,label:`Confirmée`,value:`confirmed`},{id:`3`,label:`Livrée`,value:`delivered`},{id:`4`,label:`Annulée`,value:`cancelled`}],P=e=>{let[t,n]=(0,D.useState)([N[0]]),[r,i]=(0,D.useState)([O[0],O[1],O[2]]),[a,o]=(0,D.useState)([]);return b(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[y(E,{...e,size:`xSmall`,label:`Statut`,onChange:(e,t)=>n(t),options:N,value:t}),y(E,{...e,size:`small`,label:`Utilisateurs`,onChange:(e,t)=>i(t),options:O,value:r}),y(E,{...e,size:`medium`,label:`Chantier`,onChange:(e,t)=>o(t),options:O,value:a})]})},F=e=>{let[t,n]=(0,D.useState)([]),[r,i]=(0,D.useState)([]),[a,o]=(0,D.useState)([]),s=(e,t)=>{n(t)},c=(e,t)=>{i(t)},l=(e,t)=>{o(t)};return b(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[y(E,{...e,size:`xSmall`,onChange:s,value:t}),y(E,{...e,size:`small`,onChange:c,value:r}),y(E,{...e,size:`medium`,onChange:l,value:a})]})},Oe=e=>{let[t,n]=(0,D.useState)([]),r=(e,t)=>{n(t)};return b(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[y(E,{...e,sx:{width:300},onChange:r,value:t}),y(E,{...e,sx:{width:300},disabled:!0,value:[O[0]]})]})},I=A.bind({}),I.args={options:O},L=A.bind({}),L.args={options:k},R=A.bind({}),R.args={options:[{id:`1`,image:`avatar`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`avatar`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`avatar`,label:`April Tucker`,value:`april-tucker`}]},z=A.bind({}),z.args={options:[{id:`1`,image:`letter`,label:`Oliver Hansen`,value:`oliver-hansen`},{id:`2`,image:`letter`,label:`Van Henry`,value:`van-henry`},{id:`3`,image:`letter`,label:`April Tucker`,value:`april-tucker`}]},B=A.bind({}),B.args={disableSelectAll:!0,options:k},V=A.bind({}),V.args={options:[...O,{id:`my-worksite`,isHeader:!0,label:`Mes chantiers`,value:`my-worksite`}]},H=A.bind({}),H.args={disableReset:!0,options:O},U=A.bind({}),U.args={disableCheckbox:!0,options:O},W=A.bind({}),W.args={options:O,placeholder:`Search...`},G=A.bind({}),G.args={options:O,resetInputValueOnSelectOption:!0},K=A.bind({}),K.args={disableClearable:!0,options:O},q=A.bind({}),q.args={loading:!0},J=Ee.bind({}),J.args={multiple:!1,options:O},Y=De.bind({}),Y.args={options:O,placeholder:`Filter`},X=F.bind({}),X.args={options:O,placeholder:`Search`,variant:`chip`},Z=P.bind({}),Z.args={variant:`filled`},Q=A.bind({}),Q.args={options:O,variant:`filled`},$=Oe.bind({}),$.args={options:O,placeholder:`Filter`,tooltip:`A global filter is active. Clear it to filter manually here.`},ke={component:E,title:`Components/Inputs/AutocompleteFilter`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => {
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