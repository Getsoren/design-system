import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Hn as n,Wn as r,_ as i,ct as a,do as o,g as s,h as c,m as l,wr as u}from"./iframe-CCxLHf2k.js";var d,f=e((()=>{i(),l(),d=e=>c(u,{...e});try{d.displayName=`Checkbox`,d.__docgenInfo={description:``,displayName:`Checkbox`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/Checkbox/stories/Checkbox.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/ButtonBase/ButtonBase.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<CheckboxSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<ElementType<SwitchBaseProps, keyof IntrinsicElements>, CheckboxRootSlotPropsOverrides, CheckboxOwnerState>; input?: SlotProps<...>; } | undefined`}}},tags:{}}}catch{}})),p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{i(),p=t(o(),1),f(),l(),m={inputProps:{"aria-label":`Checkbox demo`}},h=e=>s(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[c(d,{...m,defaultChecked:!0,...e}),c(d,{...m,...e}),c(d,{...m,disabled:!0,...e}),c(d,{...m,disabled:!0,checked:!0,...e})]}),g=e=>c(a,{alignItems:`center`,justifyContent:`center`,height:`100%`,children:s(n,{children:[c(r,{control:c(d,{defaultChecked:!0,...e}),label:`Label`}),c(r,{disabled:!0,control:c(d,{...e}),label:`Disabled`})]})}),_=e=>s(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[c(d,{...m,defaultChecked:!0,...e}),c(d,{...m,defaultChecked:!0,color:`secondary`,...e}),c(d,{...m,defaultChecked:!0,color:`info`,...e}),c(d,{...m,defaultChecked:!0,color:`success`,...e}),c(d,{...m,defaultChecked:!0,color:`warning`,...e}),c(d,{...m,defaultChecked:!0,color:`default`,...e}),c(d,{...m,defaultChecked:!0,color:`error`,...e})]}),v=e=>{let[t,i]=(0,p.useState)([!0,!1]);return c(a,{alignItems:`center`,justifyContent:`center`,height:`100%`,children:s(n,{children:[c(r,{label:`Parent`,control:c(d,{checked:t[0]&&t[1],indeterminate:t[0]!==t[1],onChange:e=>i([e.target.checked,e.target.checked]),...e})}),s(a,{marginLeft:3,children:[c(r,{label:`Child 1`,control:c(d,{checked:t[0],onChange:e=>i([e.target.checked,t[1]]),...e})}),c(r,{label:`Child 2`,control:c(d,{checked:t[1],onChange:e=>i([t[0],e.target.checked]),...e})})]}),c(r,{label:`Disabled`,disabled:!0,control:c(d,{indeterminate:!0,...e})})]})})},y=h.bind({}),y.args={},b=g.bind({}),b.args={},x=_.bind({}),x.args={},S=v.bind({}),S.args={},C={component:d,title:`Components/Inputs/Checkbox`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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