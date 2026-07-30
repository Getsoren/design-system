import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Fr as r,Gi as i,Gn as a,Qt as o,Xn as s,Ya as c,at as l,d as u,f as d,fn as f,ln as p,m,on as h,p as g,tn as _}from"./iframe-DGVZXguO.js";var v,y=e((()=>{m(),u(),v=e=>d(a,{...e});try{v.displayName=`Drawer`,v.__docgenInfo={description:``,displayName:`Drawer`,filePath:`/home/runner/work/design-system/design-system/src/components/Navigation/Drawer/stories/Drawer.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Modal/Modal.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<DrawerSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<ElementType<ModalProps, keyof IntrinsicElements>, DrawerRootSlotPropsOverrides, DrawerOwnerState>; backdrop?: SlotProps<...>; docked?: SlotProps<...> | undefined; paper?: SlotProps<...> | undefined; transition?: SlotProps<...> | undefined; } | undefined`}}},tags:{}}}catch{}})),b,x,S,C,w;e((()=>{m(),b=t(c(),1),y(),u(),x=e=>{let[t,a]=(0,b.useState)({bottom:!1,left:!1,right:!1,top:!1}),c=d(i,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`FavoriteIcon`,children:d(`path`,{d:`m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`})}),u=(e,n)=>r=>{r.type===`keydown`&&(r.key===`Tab`||r.key===`Shift`)||a({...t,[e]:n})},m=e=>g(n,{sx:{width:e===`top`||e===`bottom`?`auto`:250},role:`presentation`,onClick:u(e,!1),onKeyDown:u(e,!1),children:[d(f,{children:[`Inbox`,`Starred`,`Send email`,`Drafts`].map(e=>d(h,{disablePadding:!0,children:g(p,{children:[d(_,{children:c}),d(o,{primary:e})]})},e))}),d(s,{}),d(f,{children:[`All mail`,`Trash`,`Spam`].map(e=>d(h,{disablePadding:!0,children:g(p,{children:[d(_,{children:c}),d(o,{primary:e})]})},e))})]});return d(l,{direction:`row`,spacing:1,display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[`left`,`right`,`top`,`bottom`].map(n=>g(b.Fragment,{children:[d(r,{onClick:u(n,!0),variant:`outlined`,children:n}),d(v,{anchor:n,open:t[n],onClose:u(n,!1),...e,children:m(n)})]},n))})},S=x.bind({}),S.args={},C={component:v,title:`Components/Navigation/Drawer`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => {
  const [state, setState] = useState({
    bottom: false,
    left: false,
    right: false,
    top: false
  });
  const Icon = <SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon">
      <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </SvgIcon>;
  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (event.type === "keydown" && ((event as KeyboardEvent).key === "Tab" || (event as KeyboardEvent).key === "Shift")) {
      return;
    }
    setState({
      ...state,
      [anchor]: open
    });
  };
  const list = (anchor: Anchor) => <Box sx={{
    width: anchor === "top" || anchor === "bottom" ? "auto" : 250
  }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map(text => <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>)}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map(text => <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>)}
      </List>
    </Box>;
  return <Stack direction="row" spacing={1} display="flex" alignItems="center" justifyContent="center" height="100%">
      {(["left", "right", "top", "bottom"] as const).map(anchor => <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant="outlined">
            {anchor}
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} {...args}>
            {list(anchor)}
          </Drawer>
        </Fragment>)}
    </Stack>;
}`,...S.parameters?.docs?.source}}},w=[`Basic`]}))();export{S as Basic,w as __namedExportsOrder,C as default};