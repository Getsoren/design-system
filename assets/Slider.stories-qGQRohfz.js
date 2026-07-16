import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ga as n,Lr as r,at as i,c as a,l as o,m as s,s as c,xt as l}from"./iframe-KIu7hbaN.js";var u,d=e((()=>{s(),c(),u=e=>a(l,{...e});try{u.displayName=`Slider`,u.__docgenInfo={description:``,displayName:`Slider`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/Slider/stories/Slider.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Slider/Slider.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),f,p,m,h,g,_,v,y,b;e((()=>{s(),f=t(n(),1),d(),c(),p=e=>o(i,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[a(r,{width:250,children:a(u,{defaultValue:30,"aria-label":`Disabled slider`,...e})}),a(r,{width:250,children:a(u,{disabled:!0,defaultValue:30,"aria-label":`Disabled slider`,...e})})]}),m=e=>{let[t,n]=(0,f.useState)([20,40]);return o(i,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[a(r,{width:250,children:a(u,{defaultValue:30,"aria-label":`Disabled slider`,value:t,onChange:(e,t)=>{n(t)},...e})}),a(r,{width:250,children:a(u,{disabled:!0,defaultValue:30,"aria-label":`Disabled slider`,value:[20,40],...e})})]})},h=p.bind({}),h.args={},g=p.bind({}),g.args={size:`small`},_=p.bind({}),_.args={marks:!0,max:100,min:10,step:10,valueLabelDisplay:`auto`},v=m.bind({}),v.args={},y={component:u,title:`Components/Inputs/Slider`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Box width={250}>
      <Slider defaultValue={30} aria-label="Disabled slider" {...args} />
    </Box>
    <Box width={250}>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" {...args} />
    </Box>
  </Stack>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Box width={250}>
      <Slider defaultValue={30} aria-label="Disabled slider" {...args} />
    </Box>
    <Box width={250}>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" {...args} />
    </Box>
  </Stack>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Box width={250}>
      <Slider defaultValue={30} aria-label="Disabled slider" {...args} />
    </Box>
    <Box width={250}>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" {...args} />
    </Box>
  </Stack>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number[]>([20, 40]);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Box width={250}>
        <Slider defaultValue={30} aria-label="Disabled slider" value={value} onChange={handleChange} {...args} />
      </Box>
      <Box width={250}>
        <Slider disabled defaultValue={30} aria-label="Disabled slider" value={[20, 40]} {...args} />
      </Box>
    </Stack>;
}`,...v.parameters?.docs?.source}}},b=[`ContinuousSliders`,`Small`,`DiscreteSliders`,`RangeSliders`]}))();export{h as ContinuousSliders,_ as DiscreteSliders,v as RangeSliders,g as Small,b as __namedExportsOrder,y as default};