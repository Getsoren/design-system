import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$r as n,Br as r,Vi as i,g as a,h as o,m as s,p as c,st as l,uo as u}from"./iframe-CT4WrDGS.js";var d,f=e((()=>{a(),c(),d=e=>s(n,{...e});try{d.displayName=`Backdrop`,d.__docgenInfo={description:``,displayName:`Backdrop`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Backdrop/stories/Backdrop.tsx`,methods:[],props:{slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<BackdropSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<"div", BackdropComponentsPropsOverrides, BackdropOwnerState>; transition?: SlotComponentProps<...>; } | undefined`}},component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Backdrop/Backdrop.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),p,m,h,g,_;e((()=>{a(),p=t(u(),1),f(),c(),m=e=>{let[t,n]=(0,p.useState)(!1),a=()=>{n(!1)};return o(l,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[s(r,{onClick:()=>{n(!t)},variant:`outlined`,children:`Click to show backdrop`}),s(d,{...e,sx:{color:`#fff`,zIndex:e=>e.zIndex.drawer+1},open:t,onClick:a,children:s(i,{color:`inherit`})})]})},h=m.bind({}),h.args={},g={component:d,title:`Components/Feedback/Backdrop`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button onClick={handleToggle} variant="outlined">
        Click to show backdrop
      </Button>
      <Backdrop {...args} sx={{
      color: "#fff",
      zIndex: theme => theme.zIndex.drawer + 1
    }} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Stack>;
}`,...h.parameters?.docs?.source}}},_=[`Basic`]}))();export{h as Basic,_ as __namedExportsOrder,g as default};