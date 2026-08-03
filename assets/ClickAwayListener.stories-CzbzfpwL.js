import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ir as n,Vr as r,Ya as i,_r as a,at as o,d as s,f as c,m as l,p as u}from"./iframe-BJWYUZp-.js";var d,f=e((()=>{l(),s(),d=e=>c(a,{...e});try{d.displayName=`ClickAwayListener`,d.__docgenInfo={description:``,displayName:`ClickAwayListener`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/ClickAwayListener/stories/ClickAwayListener.tsx`,methods:[],props:{},tags:{}}}catch{}})),p,m,h,g,_;e((()=>{l(),p=t(i(),1),f(),s(),m=e=>{let[t,i]=(0,p.useState)(!1),a=()=>{i(e=>!e)},s=()=>{i(!1)},l={bgcolor:`background.paper`,left:0,p:2,position:`absolute`,right:0,top:`100%`,zIndex:1};return c(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`,width:`100%`},children:c(d,{...e,onClickAway:s,children:u(r,{sx:{position:`relative`},children:[c(n,{type:`button`,variant:`outlined`,onClick:a,children:`Open menu dropdown`}),t?c(r,{sx:l,children:`Click me, I will stay visible until you click outside.`}):null]})})})},h=m.bind({}),h.args={},g={argTypes:{children:{description:`The wrapped element.`},disableReactTree:{description:`If true, the React tree is ignored and only the DOM tree is considered. This prop changes how portaled elements are handled.`},mouseEvent:{description:`The mouse event to listen to. You can disable the listener by providing false.`},onClickAway:{description:`Callback fired when a “click away” event is detected.`},touchEvent:{description:`The touch event to listen to. You can disable the listener by providing false.`}},component:d,title:`Components/Utils/ClickAwayListener`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
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