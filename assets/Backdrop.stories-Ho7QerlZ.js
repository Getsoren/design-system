import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Gi as n,Wr as r,_ as i,_o as a,b as o,dt as s,ri as c,v as l,y as u}from"./iframe-fMdw047D.js";var d,f=e((()=>{o(),i(),d=e=>l(c,{...e});try{d.displayName=`Backdrop`,d.__docgenInfo={description:``,displayName:`Backdrop`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Backdrop/stories/Backdrop.tsx`,methods:[],props:{slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<BackdropSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<"div", BackdropComponentsPropsOverrides, BackdropOwnerState>; transition?: SlotComponentProps<...>; } | undefined`}},component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Backdrop/Backdrop.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),p,m,h,g,_;e((()=>{o(),p=t(a(),1),f(),i(),m=e=>{let[t,i]=(0,p.useState)(!1),a=()=>{i(!1)};return u(s,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[l(r,{onClick:()=>{i(!t)},variant:`outlined`,children:`Click to show backdrop`}),l(d,{...e,sx:{color:`#fff`,zIndex:e=>e.zIndex.drawer+1},open:t,onClick:a,children:l(n,{color:`inherit`})})]})},h=m.bind({}),h.args={},g={component:d,title:`Components/Feedback/Backdrop`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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