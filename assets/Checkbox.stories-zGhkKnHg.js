import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Dr as n,Gn as r,_ as i,b as a,dt as o,qn as s,v as c,y as l,yo as u}from"./iframe-YHvt-iGK.js";var d,f=e((()=>{a(),i(),d=e=>c(n,{...e});try{d.displayName=`Checkbox`,d.__docgenInfo={description:``,displayName:`Checkbox`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/Checkbox/stories/Checkbox.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/ButtonBase/ButtonBase.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<CheckboxSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<ElementType<SwitchBaseProps, keyof IntrinsicElements>, CheckboxRootSlotPropsOverrides, CheckboxOwnerState>; input?: SlotProps<...>; } | undefined`}}},tags:{}}}catch{}})),p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{a(),p=t(u(),1),f(),i(),m={inputProps:{"aria-label":`Checkbox demo`}},h=e=>l(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[c(d,{...m,defaultChecked:!0,...e}),c(d,{...m,...e}),c(d,{...m,disabled:!0,...e}),c(d,{...m,disabled:!0,checked:!0,...e})]}),g=e=>c(o,{alignItems:`center`,justifyContent:`center`,height:`100%`,children:l(r,{children:[c(s,{control:c(d,{defaultChecked:!0,...e}),label:`Label`}),c(s,{disabled:!0,control:c(d,{...e}),label:`Disabled`})]})}),_=e=>l(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[c(d,{...m,defaultChecked:!0,...e}),c(d,{...m,defaultChecked:!0,color:`secondary`,...e}),c(d,{...m,defaultChecked:!0,color:`info`,...e}),c(d,{...m,defaultChecked:!0,color:`success`,...e}),c(d,{...m,defaultChecked:!0,color:`warning`,...e}),c(d,{...m,defaultChecked:!0,color:`default`,...e}),c(d,{...m,defaultChecked:!0,color:`error`,...e})]}),v=e=>{let[t,n]=(0,p.useState)([!0,!1]);return c(o,{alignItems:`center`,justifyContent:`center`,height:`100%`,children:l(r,{children:[c(s,{label:`Parent`,control:c(d,{checked:t[0]&&t[1],indeterminate:t[0]!==t[1],onChange:e=>n([e.target.checked,e.target.checked]),...e})}),l(o,{marginLeft:3,children:[c(s,{label:`Child 1`,control:c(d,{checked:t[0],onChange:e=>n([e.target.checked,t[1]]),...e})}),c(s,{label:`Child 2`,control:c(d,{checked:t[1],onChange:e=>n([t[0],e.target.checked]),...e})})]}),c(s,{label:`Disabled`,disabled:!0,control:c(d,{indeterminate:!0,...e})})]})})},y=h.bind({}),y.args={},b=g.bind({}),b.args={},x=_.bind({}),x.args={},S=v.bind({}),S.args={},C={component:d,title:`Components/Inputs/Checkbox`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Checkbox {...label} defaultChecked {...args} />
    <Checkbox {...label} {...args} />
    <Checkbox {...label} disabled {...args} />
    <Checkbox {...label} disabled checked {...args} />
  </Stack>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <Stack alignItems="center" justifyContent="center" height="100%">
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked {...args} />} label="Label" />
      <FormControlLabel disabled control={<Checkbox {...args} />} label="Disabled" />
    </FormGroup>
  </Stack>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Checkbox {...label} defaultChecked {...args} />
    <Checkbox {...label} defaultChecked color="secondary" {...args} />
    <Checkbox {...label} defaultChecked color="info" {...args} />
    <Checkbox {...label} defaultChecked color="success" {...args} />
    <Checkbox {...label} defaultChecked color="warning" {...args} />
    <Checkbox {...label} defaultChecked color="default" {...args} />
    <Checkbox {...label} defaultChecked color="error" {...args} />
  </Stack>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState([true, false]);
  return <Stack alignItems="center" justifyContent="center" height="100%">
      <FormGroup>
        <FormControlLabel label="Parent" control={<Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={event => setChecked([event.target.checked, event.target.checked])} {...args} />} />
        <Stack marginLeft={3}>
          <FormControlLabel label="Child 1" control={<Checkbox checked={checked[0]} onChange={event => setChecked([event.target.checked, checked[1]])} {...args} />} />
          <FormControlLabel label="Child 2" control={<Checkbox checked={checked[1]} onChange={event => setChecked([checked[0], event.target.checked])} {...args} />} />
        </Stack>
        <FormControlLabel label="Disabled" disabled control={<Checkbox indeterminate {...args} />} />
      </FormGroup>
    </Stack>;
}`,...S.parameters?.docs?.source}}},w=[`Basic`,`Label`,`Color`,`Indeterminate`]}))();export{y as Basic,x as Color,S as Indeterminate,b as Label,w as __namedExportsOrder,C as default};