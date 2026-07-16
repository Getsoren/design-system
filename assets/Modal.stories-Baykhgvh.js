import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ga as n,Lr as r,Mr as i,c as a,l as o,m as s,qr as c,s as l,ur as u,vi as d}from"./iframe-KIu7hbaN.js";var f,p=e((()=>{s(),l(),f=({children:e,...t})=>a(u,{...t,children:e});try{f.displayName=`Modal`,f.__docgenInfo={description:``,displayName:`Modal`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/Modal/stories/Modal.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Modal/Modal.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),m,h,g,_,v,y,b,x,S;e((()=>{s(),m=t(n(),1),p(),l(),h={bgcolor:`background.paper`,border:`1px solid`,borderColor:`divider`,boxShadow:24,left:`50%`,p:4,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,width:400},g=e=>{let[t,n]=(0,m.useState)(!1),s=()=>n(!0),c=()=>n(!1);return o(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[a(i,{onClick:s,variant:`outlined`,children:`Open modal`}),a(f,{...e,open:t,onClose:c,"aria-labelledby":`modal-modal-title`,"aria-describedby":`modal-modal-description`,children:o(r,{sx:h,children:[a(d,{id:`modal-modal-title`,variant:`h6`,component:`h2`,children:`Modal Title`}),a(d,{id:`modal-modal-description`,sx:{mt:2},children:`Duis mollis, est non commodo luctus, nisi erat porttitor ligula.`})]})})]})},_=e=>{let[t,n]=(0,m.useState)(!1),s=()=>n(!0),l=()=>n(!1);return o(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[a(i,{onClick:s,variant:`outlined`,children:`Open fade transition modal`}),a(f,{...e,"aria-labelledby":`transition-modal-title`,"aria-describedby":`transition-modal-description`,open:t,onClose:l,closeAfterTransition:!0,children:a(c,{in:t,timeout:1e3,children:o(r,{sx:h,children:[a(d,{id:`transition-modal-title`,variant:`h6`,component:`h2`,children:`Text in a modal`}),a(d,{id:`transition-modal-description`,sx:{mt:2},children:`Duis mollis, est non commodo luctus, nisi erat porttitor ligula.`})]})})})]})},v=g.bind({}),v.args={},y=g.bind({}),y.args={keepMounted:!0},b=_.bind({}),b.args={},x={component:f,title:`Components/Utils/Modal`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button onClick={handleOpen} variant="outlined">
        Open modal
      </Button>
      <Modal {...args} open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={ModalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal Title
          </Typography>
          <Typography id="modal-modal-description" sx={{
          mt: 2
        }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button onClick={handleOpen} variant="outlined">
        Open modal
      </Button>
      <Modal {...args} open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={ModalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal Title
          </Typography>
          <Typography id="modal-modal-description" sx={{
          mt: 2
        }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button onClick={handleOpen} variant="outlined">
        Open fade transition modal
      </Button>
      <Modal {...args} aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open} timeout={1000}>
          <Box sx={ModalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{
            mt: 2
          }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>;
}`,...b.parameters?.docs?.source}}},S=[`Basic`,`KeepMounted`,`Transition`]}))();export{v as Basic,y as KeepMounted,b as Transition,S as __namedExportsOrder,x as default};