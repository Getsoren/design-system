import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ti as n,Wr as r,_ as i,b as a,cr as o,dt as s,gr as c,mo as l,pr as u,ra as d,ri as f,ur as p,v as m,y as h}from"./iframe-DAS7FxON.js";var g,_=e((()=>{a(),i(),g=({open:e,anchorEl:t,onClose:r,children:i,placement:a,variant:o=`outlined`})=>m(f,{open:!!e,onClick:r,sx:{backgroundColor:`rgba(0, 0, 0, 0.2)`},children:m(n,{open:!!e,anchorEl:t,placement:a,sx:{maxWidth:`100%`},children:m(d,{role:`dialog`,"aria-modal":`false`,variant:o,tabIndex:-1,onClick:e=>e.stopPropagation(),sx:{borderRadius:1.5},children:i})})});try{g.displayName=`DialogPopper`,g.__docgenInfo={description:``,displayName:`DialogPopper`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Open state`,name:`open`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!0,tags:{},type:{name:`boolean | undefined`}},anchorEl:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Anchor element`,name:`anchorEl`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!0,tags:{},type:{name:`Element | HTMLElement | null | undefined`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Children`,name:`children`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`ReactNode`}},placement:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Popper placement`,name:`placement`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`enum`,raw:`Placement`,value:[{value:`"bottom"`},{value:`"left"`},{value:`"right"`},{value:`"top"`},{value:`"auto"`},{value:`"auto-start"`},{value:`"auto-end"`},{value:`"top-start"`},{value:`"top-end"`},{value:`"bottom-start"`},{value:`"bottom-end"`},{value:`"right-start"`},{value:`"right-end"`},{value:`"left-start"`},{value:`"left-end"`}]}},variant:{defaultValue:{value:`outlined`},declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Paper variant`,name:`variant`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"outlined" | "elevation", PaperPropsVariantOverrides>`,value:[{value:`"outlined"`},{value:`"elevation"`}]}},onClose:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Callback fired when the backdrop is clicked.`,name:`onClose`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})),v,y,b,x,S,C,w;e((()=>{a(),v=t(l(),1),_(),i(),y=({...e},{parameters:t})=>{let[n,i]=(0,v.useState)(!1),[a,l]=(0,v.useState)(),d=(0,v.useRef)(null),f=e=>{i(!0),l(e.currentTarget)},_=()=>{i(!1)};return h(s,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[m(r,{variant:`outlined`,onClick:f,ref:d,children:`Open popper dialog`}),h(g,{...e,open:n,onClose:_,anchorEl:a,children:[m(o,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),m(u,{children:m(p,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),h(c,{children:[m(r,{onClick:_,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),m(r,{onClick:_,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},b=({...e},{parameters:t})=>{let[n,i]=(0,v.useState)(!1),[a,l]=(0,v.useState)(),[d,f]=(0,v.useState)(),_=(0,v.useRef)(null),y=(e,t)=>{f(t),i(!0),l(e.currentTarget)},b=()=>{i(!1)};return h(s,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[h(s,{direction:`row`,spacing:2,children:[m(r,{variant:`outlined`,onClick:e=>y(e,`top-start`),ref:_,children:`Top start`}),m(r,{variant:`outlined`,onClick:e=>y(e,`top`),ref:_,children:`Top`}),m(r,{variant:`outlined`,onClick:e=>y(e,`top-end`),ref:_,children:`Top start`})]}),h(s,{direction:`row`,spacing:2,children:[m(r,{variant:`outlined`,onClick:e=>y(e,`left`),ref:_,children:`Left`}),m(r,{variant:`outlined`,onClick:y,ref:_,children:`Default`}),m(r,{variant:`outlined`,onClick:e=>y(e,`right`),ref:_,children:`Right`})]}),h(s,{direction:`row`,spacing:2,children:[m(r,{variant:`outlined`,onClick:e=>y(e,`bottom-start`),ref:_,children:`Bottom start`}),m(r,{variant:`outlined`,onClick:e=>y(e,`bottom`),ref:_,children:`Bottom`}),m(r,{variant:`outlined`,onClick:e=>y(e,`bottom-end`),ref:_,children:`Bottom end`})]}),h(g,{...e,open:n,onClose:b,anchorEl:a,placement:d,children:[m(o,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),m(u,{children:m(p,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),h(c,{children:[m(r,{onClick:b,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),m(r,{onClick:b,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},x=y.bind({}),x.args={},S=b.bind({}),S.args={placement:`bottom-end`},C={component:g,title:`Components/Feedback/DialogPopper`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`({
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element>();
  const anchorRef = useRef<ElementRef<"button">>(null);
  const handleClickOpen = (e: MouseEvent) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
        Open popper dialog
      </Button>
      <DialogPopper {...args} open={open} onClose={handleClose} anchorEl={anchorEl}>
        <DialogTitle id="alert-dialog-title">Lorem ipsum ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </DialogPopper>
    </Stack>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`({
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element>();
  const [placement, setPlacement] = useState<PopperProps["placement"]>();
  const anchorRef = useRef<ElementRef<"button">>(null);
  const handleClickOpen = (e: MouseEvent, newPlacement?: PopperProps["placement"]) => {
    setPlacement(newPlacement);
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "top-start")} ref={anchorRef}>
          Top start
        </Button>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "top")} ref={anchorRef}>
          Top
        </Button>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "top-end")} ref={anchorRef}>
          Top start
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "left")} ref={anchorRef}>
          Left
        </Button>
        <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
          Default
        </Button>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "right")} ref={anchorRef}>
          Right
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "bottom-start")} ref={anchorRef}>
          Bottom start
        </Button>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "bottom")} ref={anchorRef}>
          Bottom
        </Button>
        <Button variant="outlined" onClick={e => handleClickOpen(e, "bottom-end")} ref={anchorRef}>
          Bottom end
        </Button>
      </Stack>
      <DialogPopper {...args} open={open} onClose={handleClose} anchorEl={anchorEl} placement={placement}>
        <DialogTitle id="alert-dialog-title">Lorem ipsum ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </DialogPopper>
    </Stack>;
}`,...S.parameters?.docs?.source}}},w=[`Basic`,`Placement`]}))();export{x as Basic,S as Placement,w as __namedExportsOrder,C as default};