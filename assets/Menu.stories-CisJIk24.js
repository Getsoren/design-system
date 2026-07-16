import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ga as n,Lt as r,Mr as i,Vi as a,Wt as o,Zt as s,an as c,at as l,c as u,dn as d,en as f,l as p,m,s as h,vi as g}from"./iframe-C3dUH62Y.js";var _,v=e((()=>{m(),h(),_=e=>u(o,{...e});try{_.displayName=`Menu`,_.__docgenInfo={description:``,displayName:`Menu`,filePath:`/home/runner/work/design-system/design-system/src/components/Navigation/Menu/stories/Menu.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Modal/Modal.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<MenuSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, MenuRootSlotPropsOverrides, MenuOwnerState>; paper?: SlotProps<...>; list?: SlotProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; backdrop?: SlotProps<...> | undefined; } | undefined`}}},tags:{}}}catch{}})),y,b,x,S,C,w,T,E,D;e((()=>{m(),y=t(n(),1),v(),h(),b=[`Show some love to MUI`,`Show all notification content`,`Hide sensitive notification content`,`Hide all notification content`],x=(e,{parameters:t})=>{let n=(0,y.useRef)(null),[o,m]=(0,y.useState)(null),[h,v]=(0,y.useState)(1),x=!!o,S=e=>{m(e.currentTarget)},C=()=>{m(null)},w=(e,t)=>{v(t),m(null)};return(0,y.useEffect)(()=>{m(n.current)},[]),t.template===`selected`?p(l,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[u(d,{component:`nav`,"aria-label":`Device settings`,sx:{backgroundColor:`background.paper`},children:u(c,{id:`lock-button`,"aria-haspopup":`listbox`,"aria-controls":`lock-menu`,"aria-label":`when device is locked`,"aria-expanded":x?`true`:void 0,onClick:S,ref:n,children:u(s,{primary:`When device is locked`,secondary:b[h]})})}),u(_,{...e,id:`lock-menu`,anchorEl:o,open:x,transitionDuration:0,onClose:C,MenuListProps:{"aria-labelledby":`lock-button`,role:`listbox`},children:b.map((e,t)=>p(r,{disabled:t===0,selected:t===h,onClick:e=>w(e,t),children:[e,` aa`]},e))})]}):t.template===`icon`?p(l,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[u(i,{id:`basic-button`,"aria-controls":x?`basic-menu`:void 0,"aria-haspopup":`true`,"aria-expanded":x?`true`:void 0,onClick:S,ref:n,children:`Dashboard`}),p(_,{...e,id:`basic-menu`,anchorEl:o,open:x,onClose:C,transitionDuration:0,MenuListProps:{"aria-labelledby":`basic-button`},children:[p(r,{onClick:C,children:[u(f,{children:u(a,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`ContentCutIcon`,children:u(`path`,{d:`M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z`})})}),`Cut`]}),p(r,{onClick:C,children:[u(f,{children:u(a,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`ContentCopyIcon`,children:u(`path`,{d:`M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z`})})}),`Copy`]}),p(r,{onClick:C,children:[u(f,{children:u(a,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`ContentPasteIcon`,children:u(`path`,{d:`M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z`})})}),u(g,{variant:`h5`,children:`Paste with custom typography (h5)`})]})]})]}):p(l,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[u(i,{id:`basic-button`,"aria-controls":x?`basic-menu`:void 0,"aria-haspopup":`true`,"aria-expanded":x?`true`:void 0,onClick:S,ref:n,children:`Dashboard`}),p(_,{...e,id:`basic-menu`,anchorEl:o,open:x,onClose:C,transitionDuration:0,MenuListProps:{"aria-labelledby":`basic-button`},children:[u(r,{onClick:C,children:`Profile`}),u(r,{onClick:C,children:`My account`}),u(r,{onClick:C,children:`Logout`})]})]})},S=x.bind({}),S.args={},C=x.bind({}),C.args={anchorOrigin:{horizontal:`left`,vertical:`top`}},w=x.bind({}),w.args={},w.parameters={template:`icon`},T=x.bind({}),T.args={},T.parameters={template:`selected`},E={component:_,title:`Components/Navigation/Menu`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args, {
  parameters
}) => {
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (_: MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  useEffect(() => {
    setAnchorEl(buttonRef.current);
  }, []);
  if (parameters.template === "selected") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <List component="nav" aria-label="Device settings" sx={{
        backgroundColor: "background.paper"
      }}>
          <ListItem id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="when device is locked" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
            <ListItemText primary="When device is locked" secondary={OPTIONS[selectedIndex]} />
          </ListItem>
        </List>
        <Menu {...args} id="lock-menu" anchorEl={anchorEl} open={open} transitionDuration={0} onClose={handleClose} MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox"
      }}>
          {OPTIONS.map((option, index) => <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index)}>
              {option} aa
            </MenuItem>)}
        </Menu>
      </Stack>;
  }
  if (parameters.template === "icon") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
          Dashboard
        </Button>
        <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
        "aria-labelledby": "basic-button"
      }}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCutIcon">
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
              </SvgIcon>
            </ListItemIcon>
            Cut
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </SvgIcon>
            </ListItemIcon>
            Copy
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentPasteIcon">
                <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
              </SvgIcon>
            </ListItemIcon>
            <Typography variant="h5">Paste with custom typography (h5)</Typography>
          </MenuItem>
        </Menu>
      </Stack>;
  }
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
        Dashboard
      </Button>
      <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
      "aria-labelledby": "basic-button"
    }}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(args, {
  parameters
}) => {
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (_: MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  useEffect(() => {
    setAnchorEl(buttonRef.current);
  }, []);
  if (parameters.template === "selected") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <List component="nav" aria-label="Device settings" sx={{
        backgroundColor: "background.paper"
      }}>
          <ListItem id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="when device is locked" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
            <ListItemText primary="When device is locked" secondary={OPTIONS[selectedIndex]} />
          </ListItem>
        </List>
        <Menu {...args} id="lock-menu" anchorEl={anchorEl} open={open} transitionDuration={0} onClose={handleClose} MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox"
      }}>
          {OPTIONS.map((option, index) => <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index)}>
              {option} aa
            </MenuItem>)}
        </Menu>
      </Stack>;
  }
  if (parameters.template === "icon") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
          Dashboard
        </Button>
        <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
        "aria-labelledby": "basic-button"
      }}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCutIcon">
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
              </SvgIcon>
            </ListItemIcon>
            Cut
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </SvgIcon>
            </ListItemIcon>
            Copy
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentPasteIcon">
                <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
              </SvgIcon>
            </ListItemIcon>
            <Typography variant="h5">Paste with custom typography (h5)</Typography>
          </MenuItem>
        </Menu>
      </Stack>;
  }
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
        Dashboard
      </Button>
      <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
      "aria-labelledby": "basic-button"
    }}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(args, {
  parameters
}) => {
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (_: MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  useEffect(() => {
    setAnchorEl(buttonRef.current);
  }, []);
  if (parameters.template === "selected") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <List component="nav" aria-label="Device settings" sx={{
        backgroundColor: "background.paper"
      }}>
          <ListItem id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="when device is locked" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
            <ListItemText primary="When device is locked" secondary={OPTIONS[selectedIndex]} />
          </ListItem>
        </List>
        <Menu {...args} id="lock-menu" anchorEl={anchorEl} open={open} transitionDuration={0} onClose={handleClose} MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox"
      }}>
          {OPTIONS.map((option, index) => <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index)}>
              {option} aa
            </MenuItem>)}
        </Menu>
      </Stack>;
  }
  if (parameters.template === "icon") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
          Dashboard
        </Button>
        <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
        "aria-labelledby": "basic-button"
      }}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCutIcon">
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
              </SvgIcon>
            </ListItemIcon>
            Cut
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </SvgIcon>
            </ListItemIcon>
            Copy
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentPasteIcon">
                <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
              </SvgIcon>
            </ListItemIcon>
            <Typography variant="h5">Paste with custom typography (h5)</Typography>
          </MenuItem>
        </Menu>
      </Stack>;
  }
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
        Dashboard
      </Button>
      <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
      "aria-labelledby": "basic-button"
    }}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(args, {
  parameters
}) => {
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (_: MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  useEffect(() => {
    setAnchorEl(buttonRef.current);
  }, []);
  if (parameters.template === "selected") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <List component="nav" aria-label="Device settings" sx={{
        backgroundColor: "background.paper"
      }}>
          <ListItem id="lock-button" aria-haspopup="listbox" aria-controls="lock-menu" aria-label="when device is locked" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
            <ListItemText primary="When device is locked" secondary={OPTIONS[selectedIndex]} />
          </ListItem>
        </List>
        <Menu {...args} id="lock-menu" anchorEl={anchorEl} open={open} transitionDuration={0} onClose={handleClose} MenuListProps={{
        "aria-labelledby": "lock-button",
        role: "listbox"
      }}>
          {OPTIONS.map((option, index) => <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index)}>
              {option} aa
            </MenuItem>)}
        </Menu>
      </Stack>;
  }
  if (parameters.template === "icon") {
    return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
          Dashboard
        </Button>
        <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
        "aria-labelledby": "basic-button"
      }}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCutIcon">
                <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
              </SvgIcon>
            </ListItemIcon>
            Cut
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </SvgIcon>
            </ListItemIcon>
            Copy
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentPasteIcon">
                <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z" />
              </SvgIcon>
            </ListItemIcon>
            <Typography variant="h5">Paste with custom typography (h5)</Typography>
          </MenuItem>
        </Menu>
      </Stack>;
  }
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} ref={buttonRef}>
        Dashboard
      </Button>
      <Menu {...args} id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} transitionDuration={0} MenuListProps={{
      "aria-labelledby": "basic-button"
    }}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Stack>;
}`,...T.parameters?.docs?.source}}},D=[`Basic`,`Positioned`,`WithIcon`,`Selected`]}))();export{S as Basic,C as Positioned,T as Selected,w as WithIcon,D as __namedExportsOrder,E as default};