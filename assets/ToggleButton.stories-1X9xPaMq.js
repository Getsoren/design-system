import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ga as n,_ as r,ai as i,at as a,c as o,l as s,m as c,s as l,y as u}from"./iframe-Bb2c4KcW.js";var d,f=e((()=>{c(),l(),d=e=>o(u,{...e});try{d.displayName=`ToggleButton`,d.__docgenInfo={description:``,displayName:`ToggleButton`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/ToggleButton/stories/ToggleButton.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/ToggleButton/ToggleButton.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{c(),p=t(n(),1),f(),l(),m=e=>{let[t,n]=(0,p.useState)(`b`);return o(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:s(r,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,exclusive:!0,children:[o(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),o(d,{...e,value:`b`,color:`secondary`,children:`is`}),o(d,{...e,value:`c`,color:`error`,children:`awesome`})]})})},h=e=>{let[t,n]=(0,p.useState)(()=>[`a`,`c`]);return o(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:s(r,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,children:[o(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),o(d,{...e,value:`b`,color:`secondary`,children:`is`}),o(d,{...e,value:`c`,color:`error`,children:`awesome`})]})})},g=e=>{let[t,n]=(0,p.useState)(()=>[`a`]);return o(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:s(r,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,children:[s(d,{...e,value:`a`,color:`primary`,children:[`List `,o(i,{label:`2`,size:`small`,variant:`rounded`,color:`primary`,sx:{marginLeft:1}})]}),o(d,{...e,value:`b`,color:`secondary`,children:`is`}),o(d,{...e,value:`c`,color:`error`,children:`awesome`})]})})},_=e=>{let[t,n]=(0,p.useState)(()=>[`a`,`b`]);return o(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:s(r,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,orientation:`vertical`,children:[o(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),o(d,{...e,value:`b`,children:`is`}),o(d,{...e,value:`c`,color:`error`,children:`awesome`})]})})},v=e=>{let[t,n]=(0,p.useState)(()=>[`a`,`b`]),i=(e,t)=>{n(t)};return s(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[s(r,{value:t,onChange:i,"aria-label":`Tracktor`,orientation:`vertical`,size:`small`,children:[o(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),o(d,{...e,value:`b`,children:`small`}),o(d,{...e,value:`c`,color:`error`,children:`awesome`})]}),s(r,{value:t,onChange:i,"aria-label":`Tracktor`,orientation:`vertical`,size:`medium`,children:[o(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),o(d,{...e,value:`b`,children:`medium`}),o(d,{...e,value:`c`,color:`error`,children:`awesome`})]}),s(r,{value:t,onChange:i,"aria-label":`Tracktor`,orientation:`vertical`,size:`large`,children:[o(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),o(d,{...e,value:`b`,children:`large`}),o(d,{...e,value:`c`,color:`error`,children:`awesome`})]})]})},y=m.bind({}),y.args={},b=h.bind({}),b.args={},x=g.bind({}),x.args={},S=_.bind({}),S.args={},C=v.bind({}),C.args={},w={component:d,title:`Components/Inputs/ToggleButton`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | null>("b");
  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string | null) => {
    setValue(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor" exclusive>
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b" color="secondary">
          is
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[] | null>(() => ["a", "c"]);
  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string[] | null) => {
    setValue(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor">
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b" color="secondary">
          is
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[] | null>(() => ["a"]);
  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string[] | null) => {
    setValue(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor">
        <ToggleButton {...args} value="a" color="primary">
          List <Chip label="2" size="small" variant="rounded" color="primary" sx={{
          marginLeft: 1
        }} />
        </ToggleButton>
        <ToggleButton {...args} value="b" color="secondary">
          is
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[] | null>(() => ["a", "b"]);
  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string[] | null) => {
    setValue(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor" orientation="vertical">
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b">
          is
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string[] | null>(() => ["a", "b"]);
  const handleAlignment = (_: MouseEvent<HTMLElement>, newValue: string[] | null) => {
    setValue(newValue);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor" orientation="vertical" size="small">
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b">
          small
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor" orientation="vertical" size="medium">
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b">
          medium
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup value={value} onChange={handleAlignment} aria-label="Tracktor" orientation="vertical" size="large">
        <ToggleButton {...args} value="a" color="primary">
          Tracktor
        </ToggleButton>
        <ToggleButton {...args} value="b">
          large
        </ToggleButton>
        <ToggleButton {...args} value="c" color="error">
          awesome
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>;
}`,...C.parameters?.docs?.source}}},T=[`ExclusiveSelection`,`MultipleSelection`,`WithChip`,`Vertical`,`Sizes`]}))();export{y as ExclusiveSelection,b as MultipleSelection,C as Sizes,S as Vertical,x as WithChip,T as __namedExportsOrder,w as default};