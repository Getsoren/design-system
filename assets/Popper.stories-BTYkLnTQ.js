import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Gr as r,_i as i,ao as a,g as o,h as s,m as c,p as l,ti as u}from"./iframe-DHWRZeUv.js";var d,f=e((()=>{o(),l(),d=e=>c(i,{...e});try{d.displayName=`Popper`,d.__docgenInfo={description:``,displayName:`Popper`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/Popper/stories/Popper.tsx`,methods:[],props:{},tags:{}}}catch{}})),p,m,h,g,_,v,y;e((()=>{o(),p=t(a(),1),f(),l(),m=e=>{let[t,i]=(0,p.useState)(null),a=!!t;return s(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[c(n,{variant:`outlined`,onClick:e=>{i(t?null:e.currentTarget)},children:`Toggle Popper`}),c(d,{id:a?`simple-popper`:void 0,anchorEl:t,...e,open:a,children:c(r,{sx:{bgcolor:`background.paper`,border:1,p:1},children:`The content of the Popper.`})})]})},h=e=>{let[t,i]=(0,p.useState)(!1),[a,o]=(0,p.useState)(null);return s(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[c(n,{variant:`outlined`,onClick:e=>{o(e.currentTarget),i(e=>!e)},children:`Toggle fade transition Popper`}),c(d,{id:t&&a?`transition-popper`:void 0,anchorEl:a,transition:!0,...e,open:t,children:({TransitionProps:e})=>c(u,{...e,timeout:1e3,children:c(r,{sx:{bgcolor:`background.paper`,border:1,p:1},children:`The content of the Popper.`})})})]})},g=m.bind({}),g.args={},_=h.bind({}),_.args={},v={component:d,title:`Components/Utils/Popper`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
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