import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Wr as n,Yr as r,_ as i,_o as a,b as o,v as s,y as c}from"./iframe-fMdw047D.js";import{n as l,t as u}from"./Lightbox-BMcV871E.js";var d,f=e((()=>{l(),i(),d=e=>s(u,{...e});try{d.displayName=`Lightbox`,d.__docgenInfo={description:``,displayName:`Lightbox`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Lightbox/stories/Lightbox.tsx`,methods:[],props:{src:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Lightbox/Lightbox.tsx`,name:`LightboxProps`}],description:``,name:`src`,parent:{fileName:`design-system/src/components/Feedback/Lightbox/Lightbox.tsx`,name:`LightboxProps`},required:!1,tags:{},type:{name:`string`}},onClose:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Lightbox/Lightbox.tsx`,name:`LightboxProps`}],description:"Callback fired when the component requests to be closed.\nThe `reason` parameter can optionally be used to control the response to `onClose`.",name:`onClose`,parent:{fileName:`design-system/src/components/Feedback/Lightbox/Lightbox.tsx`,name:`LightboxProps`},required:!1,tags:{},type:{name:`((event: {} | MouseEvent<Element, MouseEvent>, reason?: "escapeKeyDown" | "backdropClick" | "closeButton") => void) | undefined`}},component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Modal/Modal.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),p,m,h,g,_,v,y,b;e((()=>{o(),p=t(a(),1),f(),i(),m=`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,h=e=>{let[t,n]=(0,p.useState)(!1),i=()=>n(!0),a=()=>n(!1);return c(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[s(r,{component:`img`,src:m,alt:`My image`,width:200,height:200,sx:{cursor:`pointer`,objectFit:`cover`},onClick:i}),s(d,{...e,open:t,onClose:a,src:m})]})},g=e=>{let[t,i]=(0,p.useState)(!1),a=()=>i(!0),o=()=>i(!1);return c(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[s(n,{onClick:a,variant:`contained`,children:`Open`}),s(d,{...e,open:t,onClose:o,src:m})]})},_=h.bind({}),_.args={},v=g.bind({}),v.args={children:s(r,{children:`My children`})},y={component:d,title:`Components/Feedback/Lightbox`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box component="img" src={IMG_SRC} alt="My image" width={200} height={200} sx={{
      cursor: "pointer",
      objectFit: "cover"
    }} onClick={handleOpen} />
      <Lightbox {...args} open={open} onClose={handleClose} src={IMG_SRC} />
    </Box>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button onClick={handleOpen} variant="contained">
        Open
      </Button>
      <Lightbox {...args} open={open} onClose={handleClose} src={IMG_SRC} />
    </Box>;
}`,...v.parameters?.docs?.source}}},b=[`Basic`,`WithChildren`]}))();export{_ as Basic,v as WithChildren,b as __namedExportsOrder,y as default};