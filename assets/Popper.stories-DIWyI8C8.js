import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ga as n,Lr as r,Mr as i,c as a,l as o,li as s,m as c,qr as l,s as u}from"./iframe-Bb2c4KcW.js";var d,f=e((()=>{c(),u(),d=e=>a(s,{...e});try{d.displayName=`Popper`,d.__docgenInfo={description:``,displayName:`Popper`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/Popper/stories/Popper.tsx`,methods:[],props:{},tags:{}}}catch{}})),p,m,h,g,_,v,y;e((()=>{c(),p=t(n(),1),f(),u(),m=e=>{let[t,n]=(0,p.useState)(null),s=!!t;return o(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[a(i,{variant:`outlined`,onClick:e=>{n(t?null:e.currentTarget)},children:`Toggle Popper`}),a(d,{id:s?`simple-popper`:void 0,anchorEl:t,...e,open:s,children:a(r,{sx:{bgcolor:`background.paper`,border:1,p:1},children:`The content of the Popper.`})})]})},h=e=>{let[t,n]=(0,p.useState)(!1),[s,c]=(0,p.useState)(null);return o(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[a(i,{variant:`outlined`,onClick:e=>{c(e.currentTarget),n(e=>!e)},children:`Toggle fade transition Popper`}),a(d,{id:t&&s?`transition-popper`:void 0,anchorEl:s,transition:!0,...e,open:t,children:({TransitionProps:e})=>a(l,{...e,timeout:1e3,children:a(r,{sx:{bgcolor:`background.paper`,border:1,p:1},children:`The content of the Popper.`})})})]})},g=m.bind({}),g.args={},_=h.bind({}),_.args={},v={component:d,title:`Components/Utils/Popper`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button variant="outlined" onClick={handleClick}>
        Toggle Popper
      </Button>
      <Popper id={id} anchorEl={anchorEl} {...args} open={open}>
        <Box sx={{
        bgcolor: "background.paper",
        border: 1,
        p: 1
      }}>The content of the Popper.</Box>
      </Popper>
    </Box>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(previousOpen => !previousOpen);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button variant="outlined" onClick={handleClick}>
        Toggle fade transition Popper
      </Button>
      <Popper id={id} anchorEl={anchorEl} transition {...args} open={open}>
        {({
        TransitionProps
      }) => <Fade {...TransitionProps} timeout={1000}>
            <Box sx={{
          bgcolor: "background.paper",
          border: 1,
          p: 1
        }}>The content of the Popper.</Box>
          </Fade>}
      </Popper>
    </Box>;
}`,..._.parameters?.docs?.source}}},y=[`Basic`,`Transition`]}))();export{g as Basic,_ as Transition,y as __namedExportsOrder,v as default};