import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ir as n,Si as r,Vr as i,Ya as a,Zr as o,d as s,f as c,m as l,p as u,pr as d}from"./iframe-BJWYUZp-.js";var f,p=e((()=>{l(),s(),f=({children:e,...t})=>c(d,{...t,children:e});try{f.displayName=`Modal`,f.__docgenInfo={description:``,displayName:`Modal`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/Modal/stories/Modal.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Modal/Modal.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),m,h,g,_,v,y,b,x,S;e((()=>{l(),m=t(a(),1),p(),s(),h={bgcolor:`background.paper`,border:`1px solid`,borderColor:`divider`,boxShadow:24,left:`50%`,p:4,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,width:400},g=e=>{let[t,a]=(0,m.useState)(!1),o=()=>a(!0),s=()=>a(!1);return u(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[c(n,{onClick:o,variant:`outlined`,children:`Open modal`}),c(f,{...e,open:t,onClose:s,"aria-labelledby":`modal-modal-title`,"aria-describedby":`modal-modal-description`,children:u(i,{sx:h,children:[c(r,{id:`modal-modal-title`,variant:`h6`,component:`h2`,children:`Modal Title`}),c(r,{id:`modal-modal-description`,sx:{mt:2},children:`Duis mollis, est non commodo luctus, nisi erat porttitor ligula.`})]})})]})},_=e=>{let[t,a]=(0,m.useState)(!1),s=()=>a(!0),l=()=>a(!1);return u(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[c(n,{onClick:s,variant:`outlined`,children:`Open fade transition modal`}),c(f,{...e,"aria-labelledby":`transition-modal-title`,"aria-describedby":`transition-modal-description`,open:t,onClose:l,closeAfterTransition:!0,children:c(o,{in:t,timeout:1e3,children:u(i,{sx:h,children:[c(r,{id:`transition-modal-title`,variant:`h6`,component:`h2`,children:`Text in a modal`}),c(r,{id:`transition-modal-description`,sx:{mt:2},children:`Duis mollis, est non commodo luctus, nisi erat porttitor ligula.`})]})})})]})},v=g.bind({}),v.args={},y=g.bind({}),y.args={keepMounted:!0},b=_.bind({}),b.args={},x={component:f,title:`Components/Utils/Modal`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => {
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