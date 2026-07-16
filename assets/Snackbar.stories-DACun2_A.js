import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ci as n,Ga as r,Mr as i,at as a,bi as o,c as s,l as c,m as l,n as u,o as d,s as f,t as p,yt as m}from"./iframe-Bb2c4KcW.js";var h,g,_=e((()=>{h=t(r(),1),u(),g=()=>{let e=(0,h.useContext)(p),{isOpen:t,closeSnackbar:n,openSnackbar:r}=e;if(e===void 0)throw Error(`SnackbarProvider must be used within a useSnackBar hook`);return{closeSnackbar:n,isOpen:t,openSnackbar:r}}})),v,y=e((()=>{_(),_(),v=g})),b,x=e((()=>{l(),f(),b=e=>s(m,{...e});try{b.displayName=`Snackbar`,b.__docgenInfo={description:``,displayName:`Snackbar`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Snackbar/stories/Snackbar.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<unknown>`}},slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<SnackbarSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<"div", SnackbarRootSlotPropsOverrides, SnackbarOwnerState>; content?: SlotProps<...>; clickAwayListener?: SlotComponentProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; } | undefined`}}},tags:{}}}catch{}})),S,C,w,T,E,D,O,k,A,j,M;e((()=>{l(),S=t(r(),1),y(),x(),f(),C=e=>{let[t,r]=(0,S.useState)(!0),o=(e,t)=>{t!==`clickaway`&&r(!1)};return s(a,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:s(b,{open:t,onClose:o,message:`Note archived`,action:c(d,{children:[s(i,{color:`info`,size:`small`,onClick:o,children:`UNDO`}),s(n,{size:`small`,"aria-label":`close`,color:`inherit`,onClick:o,children:`×`})]}),...e})})},w=e=>{let[t,n]=(0,S.useState)(!0),r=(e,t)=>{t!==`clickaway`&&n(!1)};return s(a,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:s(b,{open:t,onClose:r,...e,children:s(o,{onClose:r,severity:`success`,children:`This is a success message!`})})})},T=()=>{let[e,t]=(0,S.useState)({horizontal:`center`,open:!0,vertical:`top`}),{vertical:n,horizontal:r,open:o}=e,l=e=>()=>{t({open:!0,...e})};return c(a,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:[s(i,{variant:`outlined`,onClick:l({horizontal:`center`,vertical:`top`}),children:`Top-Center`}),s(i,{variant:`outlined`,onClick:l({horizontal:`right`,vertical:`top`}),children:`Top-Right`}),s(i,{variant:`outlined`,onClick:l({horizontal:`right`,vertical:`bottom`}),children:`Bottom-Right`}),s(i,{variant:`outlined`,onClick:l({horizontal:`center`,vertical:`bottom`}),children:`Bottom-Center`}),s(i,{variant:`outlined`,onClick:l({horizontal:`left`,vertical:`bottom`}),children:`Bottom-Left`}),s(i,{variant:`outlined`,onClick:l({horizontal:`left`,vertical:`top`}),children:`Top-Left`}),s(b,{anchorOrigin:{horizontal:r,vertical:n},open:o,onClose:()=>{t({...e,open:!1})},message:`I love snacks`},n+r)]})},E=()=>{let{openSnackbar:e}=v();return s(a,{spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`},children:s(i,{onClick:()=>{e({message:`This is a success message!`,severity:`success`})},variant:`outlined`,children:`Open snackbar`})})},D=C.bind({}),D.args={},O=w.bind({}),O.args={},k=T.bind({}),k.args={},A=E.bind({}),A.args={},j={component:b,title:`Components/Feedback/Snackbar`},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}},M=[`Basic`,`CustomWithAlert`,`Position`,`SnackbarHook`]}))();export{D as Basic,O as CustomWithAlert,k as Position,A as SnackbarHook,M as __namedExportsOrder,j as default};