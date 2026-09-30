import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$a as n,Ai as r,Di as i,Ir as a,at as o,bt as s,d as c,f as l,m as u,n as d,p as f,t as p,u as m}from"./iframe-DrtTNUhR.js";var h,g,_=e((()=>{h=t(n(),1),d(),g=()=>{let e=(0,h.useContext)(p),{isOpen:t,closeSnackbar:n,openSnackbar:r}=e;if(e===void 0)throw Error(`SnackbarProvider must be used within a useSnackBar hook`);return{closeSnackbar:n,isOpen:t,openSnackbar:r}}})),v,y=e((()=>{u(),c(),v=e=>l(s,{...e});try{v.displayName=`Snackbar`,v.__docgenInfo={description:``,displayName:`Snackbar`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Snackbar/stories/Snackbar.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<unknown>`}},slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<SnackbarSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<"div", SnackbarRootSlotPropsOverrides, SnackbarOwnerState>; content?: SlotProps<...>; clickAwayListener?: SlotComponentProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; } | undefined`}}},tags:{}}}catch{}})),b,x,S,C,w,T,E,D,O,k,A;e((()=>{u(),b=t(n(),1),_(),y(),c(),x=e=>{let[t,n]=(0,b.useState)(!0),i=(e,t)=>{t!==`clickaway`&&n(!1)};return l(o,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:l(v,{open:t,onClose:i,message:`Note archived`,action:f(m,{children:[l(a,{color:`info`,size:`small`,onClick:i,children:`UNDO`}),l(r,{size:`small`,"aria-label":`close`,color:`inherit`,onClick:i,children:`×`})]}),...e})})},S=e=>{let[t,n]=(0,b.useState)(!0),r=(e,t)=>{t!==`clickaway`&&n(!1)};return l(o,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:l(v,{open:t,onClose:r,...e,children:l(i,{onClose:r,severity:`success`,children:`This is a success message!`})})})},C=()=>{let[e,t]=(0,b.useState)({horizontal:`center`,open:!0,vertical:`top`}),{vertical:n,horizontal:r,open:i}=e,s=e=>()=>{t({open:!0,...e})};return f(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:[l(a,{variant:`outlined`,onClick:s({horizontal:`center`,vertical:`top`}),children:`Top-Center`}),l(a,{variant:`outlined`,onClick:s({horizontal:`right`,vertical:`top`}),children:`Top-Right`}),l(a,{variant:`outlined`,onClick:s({horizontal:`right`,vertical:`bottom`}),children:`Bottom-Right`}),l(a,{variant:`outlined`,onClick:s({horizontal:`center`,vertical:`bottom`}),children:`Bottom-Center`}),l(a,{variant:`outlined`,onClick:s({horizontal:`left`,vertical:`bottom`}),children:`Bottom-Left`}),l(a,{variant:`outlined`,onClick:s({horizontal:`left`,vertical:`top`}),children:`Top-Left`}),l(v,{anchorOrigin:{horizontal:r,vertical:n},open:i,onClose:()=>{t({...e,open:!1})},message:`I love snacks`},n+r)]})},w=()=>{let{openSnackbar:e}=g();return l(o,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:l(a,{onClick:()=>{e({message:`This is a success message!`,severity:`success`})},variant:`outlined`,children:`Open snackbar`})})},T=x.bind({}),T.args={},E=S.bind({}),E.args={},D=C.bind({}),D.args={},O=w.bind({}),O.args={},k={component:v,title:`Components/Feedback/Snackbar`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  const handleClose = (_: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const action = <>
      <Button color="info" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        &times;
      </IconButton>
    </>;
  return <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
    height: "100%"
  }}>
      <Snackbar open={open} onClose={handleClose} message="Note archived" action={action} {...args} />
    </Stack>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
    height: "100%"
  }}>
      <Snackbar open={open} onClose={handleClose} {...args}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [state, setState] = useState<State>({
    horizontal: "center",
    open: true,
    vertical: "top"
  });
  const {
    vertical,
    horizontal,
    open
  } = state;
  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({
      open: true,
      ...newState
    });
  };
  const handleClose = () => {
    setState({
      ...state,
      open: false
    });
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "center",
      vertical: "top"
    })}>
        Top-Center
      </Button>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "right",
      vertical: "top"
    })}>
        Top-Right
      </Button>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "right",
      vertical: "bottom"
    })}>
        Bottom-Right
      </Button>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "center",
      vertical: "bottom"
    })}>
        Bottom-Center
      </Button>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "left",
      vertical: "bottom"
    })}>
        Bottom-Left
      </Button>
      <Button variant="outlined" onClick={handleClick({
      horizontal: "left",
      vertical: "top"
    })}>
        Top-Left
      </Button>
      <Snackbar anchorOrigin={{
      horizontal,
      vertical
    }} open={open} onClose={handleClose} message="I love snacks" key={vertical + horizontal} />
    </Stack>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const {
    openSnackbar
  } = useSnackbar();
  const handleOpen = () => {
    openSnackbar({
      message: "This is a success message!",
      severity: "success"
    });
  };
  return <Stack spacing={2} alignItems="center" justifyContent="center" sx={{
    height: "100%"
  }}>
      <Button onClick={handleOpen} variant="outlined">
        Open snackbar
      </Button>
    </Stack>;
}`,...O.parameters?.docs?.source}}},A=[`Basic`,`CustomWithAlert`,`Position`,`SnackbarHook`]}))();export{T as Basic,E as CustomWithAlert,D as Position,O as SnackbarHook,A as __namedExportsOrder,k as default};