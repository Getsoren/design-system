import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Tr as n,Wr as r,Yr as i,_ as a,_o as o,b as s,dt as c,v as l,y as u}from"./iframe-fMdw047D.js";var d,f=e((()=>{s(),a(),d=e=>l(n,{...e});try{d.displayName=`ClickAwayListener`,d.__docgenInfo={description:``,displayName:`ClickAwayListener`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/ClickAwayListener/stories/ClickAwayListener.tsx`,methods:[],props:{},tags:{}}}catch{}})),p,m,h,g,_;e((()=>{s(),p=t(o(),1),f(),a(),m=e=>{let[t,n]=(0,p.useState)(!1),a=()=>{n(e=>!e)},o=()=>{n(!1)},s={bgcolor:`background.paper`,left:0,p:2,position:`absolute`,right:0,top:`100%`,zIndex:1};return l(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`,width:`100%`},children:l(d,{...e,onClickAway:o,children:u(i,{sx:{position:`relative`},children:[l(r,{type:`button`,variant:`outlined`,onClick:a,children:`Open menu dropdown`}),t?l(i,{sx:s,children:`Click me, I will stay visible until you click outside.`}):null]})})})},h=m.bind({}),h.args={},g={argTypes:{children:{description:`The wrapped element.`},disableReactTree:{description:`If true, the React tree is ignored and only the DOM tree is considered. This prop changes how portaled elements are handled.`},mouseEvent:{description:`The mouse event to listen to. You can disable the listener by providing false.`},onClickAway:{description:`Callback fired when a “click away” event is detected.`},touchEvent:{description:`The touch event to listen to. You can disable the listener by providing false.`}},component:d,title:`Components/Utils/ClickAwayListener`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(prev => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  const styles: SxProps = {
    bgcolor: "background.paper",
    left: 0,
    p: 2,
    position: "absolute",
    right: 0,
    top: "100%",
    zIndex: 1
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
    height: "100%",
    width: "100%"
  }}>
      <ClickAwayListener {...args} onClickAway={handleClickAway}>
        <Box sx={{
        position: "relative"
      }}>
          <Button type="button" variant="outlined" onClick={handleClick}>
            Open menu dropdown
          </Button>
          {open ? <Box sx={styles}>Click me, I will stay visible until you click outside.</Box> : null}
        </Box>
      </ClickAwayListener>
    </Stack>;
}`,...h.parameters?.docs?.source}}},_=[`Basic`]}))();export{h as Basic,_ as __namedExportsOrder,g as default};