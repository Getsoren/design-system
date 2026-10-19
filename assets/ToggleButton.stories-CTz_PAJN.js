import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{ao as n,g as r,h as i,m as a,p as o,pi as s,st as c,x as l,y as u}from"./iframe-BYniQDbP.js";var d,f=e((()=>{r(),o(),d=e=>a(l,{...e});try{d.displayName=`ToggleButton`,d.__docgenInfo={description:``,displayName:`ToggleButton`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/ToggleButton/stories/ToggleButton.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/ToggleButton/ToggleButton.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{r(),p=t(n(),1),f(),o(),m=e=>{let[t,n]=(0,p.useState)(`b`);return a(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:i(u,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,exclusive:!0,children:[a(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),a(d,{...e,value:`b`,color:`secondary`,children:`is`}),a(d,{...e,value:`c`,color:`error`,children:`awesome`})]})})},h=e=>{let[t,n]=(0,p.useState)(()=>[`a`,`c`]);return a(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:i(u,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,children:[a(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),a(d,{...e,value:`b`,color:`secondary`,children:`is`}),a(d,{...e,value:`c`,color:`error`,children:`awesome`})]})})},g=e=>{let[t,n]=(0,p.useState)(()=>[`a`]);return a(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:i(u,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,children:[i(d,{...e,value:`a`,color:`primary`,children:[`List `,a(s,{label:`2`,size:`small`,variant:`rounded`,color:`primary`,sx:{marginLeft:1}})]}),a(d,{...e,value:`b`,color:`secondary`,children:`is`}),a(d,{...e,value:`c`,color:`error`,children:`awesome`})]})})},_=e=>{let[t,n]=(0,p.useState)(()=>[`a`,`b`]);return a(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:i(u,{value:t,onChange:(e,t)=>{n(t)},"aria-label":`Tracktor`,orientation:`vertical`,children:[a(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),a(d,{...e,value:`b`,children:`is`}),a(d,{...e,value:`c`,color:`error`,children:`awesome`})]})})},v=e=>{let[t,n]=(0,p.useState)(()=>[`a`,`b`]),r=(e,t)=>{n(t)};return i(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[i(u,{value:t,onChange:r,"aria-label":`Tracktor`,orientation:`vertical`,size:`small`,children:[a(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),a(d,{...e,value:`b`,children:`small`}),a(d,{...e,value:`c`,color:`error`,children:`awesome`})]}),i(u,{value:t,onChange:r,"aria-label":`Tracktor`,orientation:`vertical`,size:`medium`,children:[a(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),a(d,{...e,value:`b`,children:`medium`}),a(d,{...e,value:`c`,color:`error`,children:`awesome`})]}),i(u,{value:t,onChange:r,"aria-label":`Tracktor`,orientation:`vertical`,size:`large`,children:[a(d,{...e,value:`a`,color:`primary`,children:`Tracktor`}),a(d,{...e,value:`b`,children:`large`}),a(d,{...e,value:`c`,color:`error`,children:`awesome`})]})]})},y=m.bind({}),y.args={},b=h.bind({}),b.args={},x=g.bind({}),x.args={},S=_.bind({}),S.args={},C=v.bind({}),C.args={},w={component:d,title:`Components/Inputs/ToggleButton`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
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