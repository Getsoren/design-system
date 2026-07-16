import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$n as n,Fi as r,Ga as i,Gr as a,Mr as o,Zn as s,ar as c,at as l,c as u,l as d,li as f,m as p,nr as m,s as h}from"./iframe-KIu7hbaN.js";var g,_=e((()=>{p(),h(),g=({open:e,anchorEl:t,onClose:n,children:i,placement:o,variant:s=`outlined`})=>u(a,{open:!!e,onClick:n,sx:{backgroundColor:`rgba(0, 0, 0, 0.2)`},children:u(f,{open:!!e,anchorEl:t,placement:o,sx:{maxWidth:`100%`},children:u(r,{role:`dialog`,"aria-modal":`false`,variant:s,tabIndex:-1,onClick:e=>e.stopPropagation(),sx:{borderRadius:1.5},children:i})})});try{g.displayName=`DialogPopper`,g.__docgenInfo={description:``,displayName:`DialogPopper`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Open state`,name:`open`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!0,tags:{},type:{name:`boolean | undefined`}},anchorEl:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Anchor element`,name:`anchorEl`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!0,tags:{},type:{name:`HTMLElement | Element | null | undefined`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Children`,name:`children`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`ReactNode`}},placement:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Popper placement`,name:`placement`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`enum`,raw:`Placement`,value:[{value:`"bottom"`},{value:`"left"`},{value:`"right"`},{value:`"top"`},{value:`"auto"`},{value:`"auto-start"`},{value:`"auto-end"`},{value:`"top-start"`},{value:`"top-end"`},{value:`"bottom-start"`},{value:`"bottom-end"`},{value:`"right-start"`},{value:`"right-end"`},{value:`"left-start"`},{value:`"left-end"`}]}},variant:{defaultValue:{value:`outlined`},declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Paper variant`,name:`variant`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`enum`,raw:`OverridableStringUnion<"outlined" | "elevation", PaperPropsVariantOverrides>`,value:[{value:`"outlined"`},{value:`"elevation"`}]}},onClose:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`}],description:`Callback fired when the backdrop is clicked.`,name:`onClose`,parent:{fileName:`design-system/src/components/Feedback/Dialog/DialogPopper/DialogPopper.tsx`,name:`DialogPopperProps`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})),v,y=e((()=>{_(),v=g})),b,x,S,C,w,T,E;e((()=>{p(),b=t(i(),1),y(),_(),h(),x=({...e},{parameters:t})=>{let[r,i]=(0,b.useState)(!1),[a,f]=(0,b.useState)(),p=(0,b.useRef)(null),h=e=>{i(!0),f(e.currentTarget)},g=()=>{i(!1)};return d(l,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[u(o,{variant:`outlined`,onClick:h,ref:p,children:`Open popper dialog`}),d(v,{...e,open:r,onClose:g,anchorEl:a,children:[u(s,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),u(m,{children:u(n,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),d(c,{children:[u(o,{onClick:g,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),u(o,{onClick:g,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},S=({...e},{parameters:t})=>{let[r,i]=(0,b.useState)(!1),[a,f]=(0,b.useState)(),[p,h]=(0,b.useState)(),g=(0,b.useRef)(null),_=(e,t)=>{h(t),i(!0),f(e.currentTarget)},y=()=>{i(!1)};return d(l,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[d(l,{direction:`row`,spacing:2,children:[u(o,{variant:`outlined`,onClick:e=>_(e,`top-start`),ref:g,children:`Top start`}),u(o,{variant:`outlined`,onClick:e=>_(e,`top`),ref:g,children:`Top`}),u(o,{variant:`outlined`,onClick:e=>_(e,`top-end`),ref:g,children:`Top start`})]}),d(l,{direction:`row`,spacing:2,children:[u(o,{variant:`outlined`,onClick:e=>_(e,`left`),ref:g,children:`Left`}),u(o,{variant:`outlined`,onClick:_,ref:g,children:`Default`}),u(o,{variant:`outlined`,onClick:e=>_(e,`right`),ref:g,children:`Right`})]}),d(l,{direction:`row`,spacing:2,children:[u(o,{variant:`outlined`,onClick:e=>_(e,`bottom-start`),ref:g,children:`Bottom start`}),u(o,{variant:`outlined`,onClick:e=>_(e,`bottom`),ref:g,children:`Bottom`}),u(o,{variant:`outlined`,onClick:e=>_(e,`bottom-end`),ref:g,children:`Bottom end`})]}),d(v,{...e,open:r,onClose:y,anchorEl:a,placement:p,children:[u(s,{id:`alert-dialog-title`,children:`Lorem ipsum ?`}),u(m,{children:u(n,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit...`})}),d(c,{children:[u(o,{onClick:y,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),u(o,{onClick:y,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},C=x.bind({}),C.args={},w=S.bind({}),w.args={placement:`bottom-end`},T={component:g,title:`Components/Feedback/DialogPopper`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
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