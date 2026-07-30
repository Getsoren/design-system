import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ai as n,Fr as r,Jr as i,Ya as a,at as o,d as s,f as c,m as l,p as u}from"./iframe-DGVZXguO.js";var d,f=e((()=>{l(),s(),d=e=>c(i,{...e});try{d.displayName=`Backdrop`,d.__docgenInfo={description:``,displayName:`Backdrop`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Backdrop/stories/Backdrop.tsx`,methods:[],props:{slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<BackdropSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<"div", BackdropComponentsPropsOverrides, BackdropOwnerState>; transition?: SlotComponentProps<...>; } | undefined`}},component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Backdrop/Backdrop.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),p,m,h,g,_;e((()=>{l(),p=t(a(),1),f(),s(),m=e=>{let[t,i]=(0,p.useState)(!1),a=()=>{i(!1)};return u(o,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[c(r,{onClick:()=>{i(!t)},variant:`outlined`,children:`Click to show backdrop`}),c(d,{...e,sx:{color:`#fff`,zIndex:e=>e.zIndex.drawer+1},open:t,onClick:a,children:c(n,{color:`inherit`})})]})},h=m.bind({}),h.args={},g={component:d,title:`Components/Feedback/Backdrop`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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