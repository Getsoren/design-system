import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$n as n,Di as r,Fr as i,O as a,Qt as o,Si as s,Xn as c,Ya as l,_i as u,at as d,ca as f,d as p,f as m,fn as h,in as g,ir as _,ln as v,m as y,ni as b,on as x,p as S,qn as C,sa as w,sr as T,tr as E,ur as D}from"./iframe-BjXtUHP7.js";import{n as O,t as k}from"./DialogCloseIcon-DfAZdOMX.js";var A,j=e((()=>{y(),p(),A=e=>m(D,{...e});try{A.displayName=`Dialog`,A.__docgenInfo={description:``,displayName:`Dialog`,filePath:`/home/runner/work/design-system/design-system/src/components/Feedback/Dialog/stories/Dialog.tsx`,methods:[],props:{backgroundColor:{defaultValue:null,declarations:[{fileName:`design-system/src/config/theme.tsx`,name:`DialogProps`}],description:``,name:`backgroundColor`,parent:{fileName:`design-system/src/config/theme.tsx`,name:`DialogProps`},required:!1,tags:{},type:{name:`string`}},component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Modal/Modal.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<DialogSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, DialogRootSlotPropsOverrides, DialogOwnerState>; backdrop?: SlotProps<...>; container?: SlotProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; paper?: SlotProps<...> | undefined; } | undefined`}}},tags:{}}}catch{}})),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{y(),w(),M=t(l(),1),O(),j(),p(),N={mobile:{name:`Mobile`,styles:{height:`600px`,width:`480px`}}},P=[`username@gmail.com`,`user02@gmail.com`],F=(0,M.forwardRef)((e,t)=>m(C,{direction:`up`,ref:t,...e,children:e.children})),I=e=>{let{onClose:t,selectedValue:r,open:i}=e,a=()=>{t(r)},s=e=>{t(e)};return S(A,{onClose:a,open:i,children:[m(n,{children:`Set backup account`}),S(h,{sx:{pt:0},children:[P.map(e=>S(v,{onClick:()=>s(e),children:[m(g,{children:m(b,{sx:{backgroundColor:f[100],color:f[600]}})}),m(o,{primary:e})]},e)),S(v,{autoFocus:!0,onClick:()=>s(`addAccount`),children:[m(g,{children:m(b,{children:`+`})}),m(o,{primary:`Add account`})]})]})]})},L=({TransitionComponent:e,...t},{parameters:r})=>{let[a,o]=(0,M.useState)(!0),s=()=>{o(!0)},c=()=>{o(!1)};return S(d,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[m(i,{variant:`outlined`,onClick:s,children:`Open alert dialog`}),S(A,{...t,open:a,onClose:c,"aria-labelledby":`alert-dialog-title`,"aria-describedby":`alert-dialog-description`,TransitionComponent:e||void 0,children:[m(n,{id:`alert-dialog-title`,children:`Use Google location service?`}),m(_,{children:m(E,{id:`alert-dialog-description`,children:`Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.`})}),S(T,{children:[m(i,{onClick:c,variant:r?.variantButton,size:r?.sizeButton,children:`Disagree`}),m(i,{onClick:c,variant:r?.variantButton,size:r?.sizeButton,children:`Agree`})]})]})]})},R=()=>{let[e,t]=(0,M.useState)(!0),[n,r]=(0,M.useState)(P[1]);return S(d,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[S(s,{variant:`subtitle1`,component:`div`,children:[`Selected: `,n]}),m(`br`,{}),m(i,{variant:`outlined`,onClick:()=>{t(!0)},children:`Open simple dialog`}),m(I,{selectedValue:n,open:e,onClose:e=>{t(!1),r(e)}})]})},z=e=>{let[t,n]=(0,M.useState)(!0),l=()=>{n(!0)},f=()=>{n(!1)};return S(d,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[m(i,{variant:`outlined`,onClick:l,children:`Open full-screen dialog`}),S(A,{...e,open:t,onClose:f,TransitionComponent:F,children:[m(u,{sx:{position:`fixed`},children:S(a,{children:[m(r,{edge:`start`,color:`inherit`,onClick:f,"aria-label":`close`,children:`X`}),m(s,{sx:{flex:1,ml:2},variant:`h6`,component:`div`,children:`Sound`}),m(i,{autoFocus:!0,color:`inherit`,onClick:f,children:`save`})]})}),S(h,{children:[m(v,{children:m(o,{primary:`Phone ringtone`,secondary:`Titania`})}),m(c,{}),m(x,{children:m(o,{primary:`Default notification ringtone`,secondary:`Tethys`})})]})]})]})},B=({...e},{parameters:t})=>{let[r,a]=(0,M.useState)(!0),o=()=>{a(!0)},s=()=>{a(!1)};return S(d,{spacing:2,justifyContent:`center`,alignItems:`center`,sx:{height:`100%`},children:[m(i,{variant:`outlined`,onClick:o,children:`Open alert dialog`}),S(A,{...e,open:r,onClose:s,"aria-labelledby":`alert-dialog-title`,"aria-describedby":`alert-dialog-description`,children:[m(k,{onClick:s}),m(n,{id:`alert-dialog-title`,children:`Use Google location service?`}),m(_,{children:m(E,{id:`alert-dialog-description`,children:`Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.`})}),S(T,{children:[m(i,{onClick:s,variant:t?.variantButton,size:t?.sizeButton,children:`Disagree`}),m(i,{onClick:s,variant:t?.variantButton,size:t?.sizeButton,children:`Agree`})]})]})]})},V=L.bind({}),V.args={},H=L.bind({}),H.args={},H.parameters={viewport:{defaultViewport:`mobile`,viewports:N}},U=L.bind({}),U.args={TransitionComponent:F},W=L.bind({}),W.parameters={variantButton:`outlined`},G=L.bind({}),G.parameters={variantButton:`contained`},K=R.bind({}),K.args={},q=z.bind({}),q.args={fullScreen:!0},J=L.bind({}),J.parameters={sizeButton:`small`},Y=B.bind({}),Y.args={},X=L.bind({}),X.args={backgroundColor:`secondary`},Z={component:A,title:`Components/Feedback/Dialog`},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState(emails[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </Stack>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} TransitionComponent={TransitionSample}>
        <AppBar sx={{
        position: "fixed"
      }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              X
            </IconButton>
            <Typography sx={{
            flex: 1,
            ml: 2
          }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItem>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </Stack>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`({
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogCloseIcon onClick={handleClose} />
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`({
  TransitionComponent,
  ...args
}, {
  parameters
}) => {
  const [open, setOpen] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <Stack spacing={2} justifyContent="center" alignItems="center" sx={{
    height: "100%"
  }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" TransitionComponent={TransitionComponent || undefined}>
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>;
}`,...X.parameters?.docs?.source}}},Q=[`Basic`,`BasicMobile`,`BasicWithTransition`,`DialogActionsOutlined`,`DialogActionsContained`,`WithList`,`FullScreen`,`SmallActionsButton`,`WithDialogCloseIcon`,`BackgroundSecondary`]}))();export{X as BackgroundSecondary,V as Basic,H as BasicMobile,U as BasicWithTransition,G as DialogActionsContained,W as DialogActionsOutlined,q as FullScreen,J as SmallActionsButton,Y as WithDialogCloseIcon,K as WithList,Q as __namedExportsOrder,Z as default};