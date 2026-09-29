import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$a as n,Hi as r,Ir as i,Yr as a,ar as o,at as s,cr as c,d as l,er as u,f as d,m as f,nr as p,p as m,pi as h}from"./iframe-BnMlKthA.js";var g,_=e((()=>{f(),l(),g=({open:e,anchorEl:t,onClose:n,children:i,placement:o,variant:s=`outlined`})=>d(a,{open:!!e,onClick:n,sx:{backgroundColor:`rgba(0, 0, 0, 0.2)`},children:d(h,{open:!!e,anchorEl:t,placement:o,sx:{maxWidth:`100%`},children:d(r,{role:`dialog`,"aria-modal":`false`,variant:s,tabIndex:-1,onClick:e=>e.stopPropagation(),sx:{borderRadius:1.5},children:i})})});try{g.displayName=`DialogPopper`,g.__docgenInfo={description:``,displayName:`DialogPopper`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Open state`,name:`open`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!0,tags:{},type:{name:`boolean | undefined`}},anchorEl:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Anchor element`,name:`anchorEl`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!0,tags:{},type:{name:`HTMLElement | Element | null | undefined`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Children`,name:`children`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`ReactNode`}},placement:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Popper placement`,name:`placement`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`enum`,raw:`Placement`,value:[{value:`"left"`},{value:`"right"`},{value:`"top"`},{value:`"bottom"`},{value:`"auto"`},{value:`"auto-start"`},{value:`"auto-end"`},{value:`"top-start"`},{value:`"top-end"`},{value:`"bottom-start"`},{value:`"bottom-end"`},{value:`"right-start"`},{value:`"right-end"`},{value:`"left-start"`},{value:`"left-end"`}]}},variant:{defaultValue:{value:`outlined`},declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Paper variant`,name:`variant`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"outlined" | "elevation", PaperPropsVariantOverrides>`,value:[{value:`"outlined"`},{value:`"elevation"`}]}},onClose:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Callback fired when the backdrop is clicked.`,name:`onClose`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})),v,y=e((()=>{_(),v=g})),b,x,S,C,w,T,E;e((()=>{f(),b=t(n(),1),y(),_(),l(),x=({...e},{parameters:t})=>{let[n,r]=(0,b.useState)(!1),[a,l]=(0,b.useState)(),f=(0,b.useRef)(null),h=e=>{r(!0),l(e.currentTarget)},g=()=>{r(!1)};return m(s,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[d(i,{variant:`outlined`,onClick:h,ref:f,children:`Open popper dialog`}),m(v,{...e,open:n,onClose:g,anchorEl:a,children:[d(u,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),d(o,{children:d(p,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),m(c,{children:[d(i,{onClick:g,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),d(i,{onClick:g,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},S=({...e},{parameters:t})=>{let[n,r]=(0,b.useState)(!1),[a,l]=(0,b.useState)(),[f,h]=(0,b.useState)(),g=(0,b.useRef)(null),_=(e,t)=>{h(t),r(!0),l(e.currentTarget)},y=()=>{r(!1)};return m(s,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[m(s,{direction:`row`,spacing:2,children:[d(i,{variant:`outlined`,onClick:e=>_(e,`top-start`),ref:g,children:`Top start`}),d(i,{variant:`outlined`,onClick:e=>_(e,`top`),ref:g,children:`Top`}),d(i,{variant:`outlined`,onClick:e=>_(e,`top-end`),ref:g,children:`Top start`})]}),m(s,{direction:`row`,spacing:2,children:[d(i,{variant:`outlined`,onClick:e=>_(e,`left`),ref:g,children:`Left`}),d(i,{variant:`outlined`,onClick:_,ref:g,children:`Default`}),d(i,{variant:`outlined`,onClick:e=>_(e,`right`),ref:g,children:`Right`})]}),m(s,{direction:`row`,spacing:2,children:[d(i,{variant:`outlined`,onClick:e=>_(e,`bottom-start`),ref:g,children:`Bottom start`}),d(i,{variant:`outlined`,onClick:e=>_(e,`bottom`),ref:g,children:`Bottom`}),d(i,{variant:`outlined`,onClick:e=>_(e,`bottom-end`),ref:g,children:`Bottom end`})]}),m(v,{...e,open:n,onClose:y,anchorEl:a,placement:f,children:[d(u,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),d(o,{children:d(p,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),m(c,{children:[d(i,{onClick:y,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),d(i,{onClick:y,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},C=x.bind({}),C.args={},w=S.bind({}),w.args={placement:`bottom-end`},T={component:g,title:`Components/Feedback/DialogPopper`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
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