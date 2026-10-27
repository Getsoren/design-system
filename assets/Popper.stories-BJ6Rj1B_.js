import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ti as n,Wr as r,Yr as i,_ as a,_o as o,ai as s,b as c,v as l,y as u}from"./iframe-D9hj5naP.js";var d,f=e((()=>{c(),a(),d=e=>l(n,{...e});try{d.displayName=`Popper`,d.__docgenInfo={description:``,displayName:`Popper`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/Popper/stories/Popper.tsx`,methods:[],props:{},tags:{}}}catch{}})),p,m,h,g,_,v,y;e((()=>{c(),p=t(o(),1),f(),a(),m=e=>{let[t,n]=(0,p.useState)(null),a=!!t;return u(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[l(r,{variant:`outlined`,onClick:e=>{n(t?null:e.currentTarget)},children:`Toggle Popper`}),l(d,{id:a?`simple-popper`:void 0,anchorEl:t,...e,open:a,children:l(i,{sx:{bgcolor:`background.paper`,border:1,p:1},children:`The content of the Popper.`})})]})},h=e=>{let[t,n]=(0,p.useState)(!1),[a,o]=(0,p.useState)(null);return u(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[l(r,{variant:`outlined`,onClick:e=>{o(e.currentTarget),n(e=>!e)},children:`Toggle fade transition Popper`}),l(d,{id:t&&a?`transition-popper`:void 0,anchorEl:a,transition:!0,...e,open:t,children:({TransitionProps:e})=>l(s,{...e,timeout:1e3,children:l(i,{sx:{bgcolor:`background.paper`,border:1,p:1},children:`The content of the Popper.`})})})]})},g=m.bind({}),g.args={},_=h.bind({}),_.args={},v={component:d,title:`Components/Utils/Popper`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
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