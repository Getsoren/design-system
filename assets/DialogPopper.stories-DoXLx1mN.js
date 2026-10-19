import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$i as n,$r as r,Br as i,fr as a,g as o,h as s,ir as c,lr as l,m as u,or as d,p as f,st as p,uo as m,xi as h}from"./iframe-CT4WrDGS.js";var g,_=e((()=>{o(),f(),g=({open:e,anchorEl:t,onClose:i,children:a,placement:o,variant:s=`outlined`})=>u(r,{open:!!e,onClick:i,sx:{backgroundColor:`rgba(0, 0, 0, 0.2)`},children:u(h,{open:!!e,anchorEl:t,placement:o,sx:{maxWidth:`100%`},children:u(n,{role:`dialog`,"aria-modal":`false`,variant:s,tabIndex:-1,onClick:e=>e.stopPropagation(),sx:{borderRadius:1.5},children:a})})});try{g.displayName=`DialogPopper`,g.__docgenInfo={description:``,displayName:`DialogPopper`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Open state`,name:`open`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!0,tags:{},type:{name:`boolean | undefined`}},anchorEl:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Anchor element`,name:`anchorEl`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!0,tags:{},type:{name:`HTMLElement | Element | null | undefined`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Children`,name:`children`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`ReactNode`}},placement:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Popper placement`,name:`placement`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`enum`,raw:`Placement`,value:[{value:`"left"`},{value:`"right"`},{value:`"top"`},{value:`"bottom"`},{value:`"auto"`},{value:`"auto-start"`},{value:`"auto-end"`},{value:`"top-start"`},{value:`"top-end"`},{value:`"bottom-start"`},{value:`"bottom-end"`},{value:`"right-start"`},{value:`"right-end"`},{value:`"left-start"`},{value:`"left-end"`}]}},variant:{defaultValue:{value:`outlined`},declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Paper variant`,name:`variant`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"elevation" | "outlined", PaperPropsVariantOverrides>`,value:[{value:`"elevation"`},{value:`"outlined"`}]}},onClose:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Callback fired when the backdrop is clicked.`,name:`onClose`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})),v,y,b,x,S,C,w;e((()=>{o(),v=t(m(),1),_(),f(),y=({...e},{parameters:t})=>{let[n,r]=(0,v.useState)(!1),[o,f]=(0,v.useState)(),m=(0,v.useRef)(null),h=e=>{r(!0),f(e.currentTarget)},_=()=>{r(!1)};return s(p,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[u(i,{variant:`outlined`,onClick:h,ref:m,children:`Open popper dialog`}),s(g,{...e,open:n,onClose:_,anchorEl:o,children:[u(c,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),u(l,{children:u(d,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),s(a,{children:[u(i,{onClick:_,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),u(i,{onClick:_,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},b=({...e},{parameters:t})=>{let[n,r]=(0,v.useState)(!1),[o,f]=(0,v.useState)(),[m,h]=(0,v.useState)(),_=(0,v.useRef)(null),y=(e,t)=>{h(t),r(!0),f(e.currentTarget)},b=()=>{r(!1)};return s(p,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[s(p,{direction:`row`,spacing:2,children:[u(i,{variant:`outlined`,onClick:e=>y(e,`top-start`),ref:_,children:`Top start`}),u(i,{variant:`outlined`,onClick:e=>y(e,`top`),ref:_,children:`Top`}),u(i,{variant:`outlined`,onClick:e=>y(e,`top-end`),ref:_,children:`Top start`})]}),s(p,{direction:`row`,spacing:2,children:[u(i,{variant:`outlined`,onClick:e=>y(e,`left`),ref:_,children:`Left`}),u(i,{variant:`outlined`,onClick:y,ref:_,children:`Default`}),u(i,{variant:`outlined`,onClick:e=>y(e,`right`),ref:_,children:`Right`})]}),s(p,{direction:`row`,spacing:2,children:[u(i,{variant:`outlined`,onClick:e=>y(e,`bottom-start`),ref:_,children:`Bottom start`}),u(i,{variant:`outlined`,onClick:e=>y(e,`bottom`),ref:_,children:`Bottom`}),u(i,{variant:`outlined`,onClick:e=>y(e,`bottom-end`),ref:_,children:`Bottom end`})]}),s(g,{...e,open:n,onClose:b,anchorEl:o,placement:m,children:[u(c,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),u(l,{children:u(d,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),s(a,{children:[u(i,{onClick:b,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),u(i,{onClick:b,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},x=y.bind({}),x.args={},S=b.bind({}),S.args={placement:`bottom-end`},C={component:g,title:`Components/Feedback/DialogPopper`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`({
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