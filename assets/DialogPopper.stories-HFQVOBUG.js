import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ir as n,Ya as r,Yr as i,ar as a,at as o,cr as s,d as c,er as l,f as u,m as d,nr as f,p,pi as m,zi as h}from"./iframe-BJWYUZp-.js";var g,_=e((()=>{d(),c(),g=({open:e,anchorEl:t,onClose:n,children:r,placement:a,variant:o=`outlined`})=>u(i,{open:!!e,onClick:n,sx:{backgroundColor:`rgba(0, 0, 0, 0.2)`},children:u(m,{open:!!e,anchorEl:t,placement:a,sx:{maxWidth:`100%`},children:u(h,{role:`dialog`,"aria-modal":`false`,variant:o,tabIndex:-1,onClick:e=>e.stopPropagation(),sx:{borderRadius:1.5},children:r})})});try{g.displayName=`DialogPopper`,g.__docgenInfo={description:``,displayName:`DialogPopper`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Open state`,name:`open`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!0,tags:{},type:{name:`boolean | undefined`}},anchorEl:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Anchor element`,name:`anchorEl`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!0,tags:{},type:{name:`HTMLElement | Element | null | undefined`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Children`,name:`children`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`ReactNode`}},placement:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Popper placement`,name:`placement`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`enum`,raw:`Placement`,value:[{value:`"left"`},{value:`"right"`},{value:`"top"`},{value:`"bottom"`},{value:`"auto"`},{value:`"auto-start"`},{value:`"auto-end"`},{value:`"top-start"`},{value:`"top-end"`},{value:`"bottom-start"`},{value:`"bottom-end"`},{value:`"right-start"`},{value:`"right-end"`},{value:`"left-start"`},{value:`"left-end"`}]}},variant:{defaultValue:{value:`outlined`},declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Paper variant`,name:`variant`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"outlined" | "elevation", PaperPropsVariantOverrides>`,value:[{value:`"outlined"`},{value:`"elevation"`}]}},onClose:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Callback fired when the backdrop is clicked.`,name:`onClose`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})),v,y=e((()=>{_(),v=g})),b,x,S,C,w,T,E;e((()=>{d(),b=t(r(),1),y(),_(),c(),x=({...e},{parameters:t})=>{let[r,i]=(0,b.useState)(!1),[c,d]=(0,b.useState)(),m=(0,b.useRef)(null),h=e=>{i(!0),d(e.currentTarget)},g=()=>{i(!1)};return p(o,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[u(n,{variant:`outlined`,onClick:h,ref:m,children:`Open popper dialog`}),p(v,{...e,open:r,onClose:g,anchorEl:c,children:[u(l,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),u(a,{children:u(f,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),p(s,{children:[u(n,{onClick:g,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),u(n,{onClick:g,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},S=({...e},{parameters:t})=>{let[r,i]=(0,b.useState)(!1),[c,d]=(0,b.useState)(),[m,h]=(0,b.useState)(),g=(0,b.useRef)(null),_=(e,t)=>{h(t),i(!0),d(e.currentTarget)},y=()=>{i(!1)};return p(o,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[p(o,{direction:`row`,spacing:2,children:[u(n,{variant:`outlined`,onClick:e=>_(e,`top-start`),ref:g,children:`Top start`}),u(n,{variant:`outlined`,onClick:e=>_(e,`top`),ref:g,children:`Top`}),u(n,{variant:`outlined`,onClick:e=>_(e,`top-end`),ref:g,children:`Top start`})]}),p(o,{direction:`row`,spacing:2,children:[u(n,{variant:`outlined`,onClick:e=>_(e,`left`),ref:g,children:`Left`}),u(n,{variant:`outlined`,onClick:_,ref:g,children:`Default`}),u(n,{variant:`outlined`,onClick:e=>_(e,`right`),ref:g,children:`Right`})]}),p(o,{direction:`row`,spacing:2,children:[u(n,{variant:`outlined`,onClick:e=>_(e,`bottom-start`),ref:g,children:`Bottom start`}),u(n,{variant:`outlined`,onClick:e=>_(e,`bottom`),ref:g,children:`Bottom`}),u(n,{variant:`outlined`,onClick:e=>_(e,`bottom-end`),ref:g,children:`Bottom end`})]}),p(v,{...e,open:r,onClose:y,anchorEl:c,placement:m,children:[u(l,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),u(a,{children:u(f,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),p(s,{children:[u(n,{onClick:y,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),u(n,{onClick:y,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},C=x.bind({}),C.args={},w=S.bind({}),w.args={placement:`bottom-end`},T={component:g,title:`Components/Feedback/DialogPopper`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`({
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
}`,...w.parameters?.docs?.source}}},E=[`Basic`,`Placement`]}))();export{C as Basic,w as Placement,E as __namedExportsOrder,T as default};