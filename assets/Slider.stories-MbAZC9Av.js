import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{St as n,Vr as r,Ya as i,at as a,d as o,f as s,m as c,p as l}from"./iframe-BJWYUZp-.js";var u,d=e((()=>{c(),o(),u=e=>s(n,{...e});try{u.displayName=`Slider`,u.__docgenInfo={description:``,displayName:`Slider`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/Slider/stories/Slider.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Slider/Slider.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),f,p,m,h,g,_,v,y,b;e((()=>{c(),f=t(i(),1),d(),o(),p=e=>l(a,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[s(r,{width:250,children:s(u,{defaultValue:30,"aria-label":`Disabled slider`,...e})}),s(r,{width:250,children:s(u,{disabled:!0,defaultValue:30,"aria-label":`Disabled slider`,...e})})]}),m=e=>{let[t,n]=(0,f.useState)([20,40]);return l(a,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[s(r,{width:250,children:s(u,{defaultValue:30,"aria-label":`Disabled slider`,value:t,onChange:(e,t)=>{n(t)},...e})}),s(r,{width:250,children:s(u,{disabled:!0,defaultValue:30,"aria-label":`Disabled slider`,value:[20,40],...e})})]})},h=p.bind({}),h.args={},g=p.bind({}),g.args={size:`small`},_=p.bind({}),_.args={marks:!0,max:100,min:10,step:10,valueLabelDisplay:`auto`},v=m.bind({}),v.args={},y={component:u,title:`Components/Inputs/Slider`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
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