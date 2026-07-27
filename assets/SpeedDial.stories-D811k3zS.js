import{i as e}from"./preload-helper-xPQekRTU.js";import{Br as t,Gi as n,d as r,f as i,gt as a,lt as o,m as s,st as c}from"./iframe-94AAr2Wq.js";var l,u=e((()=>{s(),r(),l=e=>i(a,{...e});try{l.displayName=`SpeedDial`,l.__docgenInfo={description:``,displayName:`SpeedDial`,filePath:`/home/runner/work/design-system/design-system/src/components/Navigation/SpeedDial/stories/SpeedDial.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<unknown>`}},slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<SpeedDialSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotComponentProps<"div", HTMLAttributes<HTMLDivElement>, SpeedDialOwnerState>; transition?: SlotComponentProps<...>; } | undefined`}}},tags:{}}}catch{}})),d,f,p,m,h,g,_,v;e((()=>{s(),u(),r(),d=[{icon:i(n,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`SaveIcon`,children:i(`path`,{d:`M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z`})}),name:`Save`},{icon:i(n,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`FileCopyOutlinedIcon`,children:i(`path`,{d:`M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z`})}),name:`Copy`}],f=e=>{let{openIcon:n}=e;return i(t,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,position:`relative`,children:i(l,{sx:{bottom:16,position:`absolute`,right:16},...e,ariaLabel:`SpeedDial basic example`,icon:i(c,{openIcon:n}),children:d.map(e=>i(o,{icon:e.icon,tooltipTitle:e.name},e.name))})})},p=f.bind({}),p.args={},m=f.bind({}),m.args={direction:`left`,sx:void 0},m.argTypes={direction:{control:{type:`select`},options:[`up`,`right`,`down`,`left`]}},h=f.bind({}),h.args={hidden:!1},g=f.bind({}),g.args={openIcon:d[0].icon},_={component:l,title:`Components/Navigation/SpeedDial`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const {
    openIcon
  } = args;
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%" position="relative">
      <SpeedDial sx={{
      bottom: 16,
      position: "absolute",
      right: 16
    }} {...args} ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon openIcon={openIcon} />}>
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />)}
      </SpeedDial>
    </Box>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const {
    openIcon
  } = args;
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%" position="relative">
      <SpeedDial sx={{
      bottom: 16,
      position: "absolute",
      right: 16
    }} {...args} ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon openIcon={openIcon} />}>
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />)}
      </SpeedDial>
    </Box>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const {
    openIcon
  } = args;
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%" position="relative">
      <SpeedDial sx={{
      bottom: 16,
      position: "absolute",
      right: 16
    }} {...args} ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon openIcon={openIcon} />}>
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />)}
      </SpeedDial>
    </Box>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const {
    openIcon
  } = args;
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%" position="relative">
      <SpeedDial sx={{
      bottom: 16,
      position: "absolute",
      right: 16
    }} {...args} ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon openIcon={openIcon} />}>
        {actions.map(action => <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />)}
      </SpeedDial>
    </Box>;
}`,...g.parameters?.docs?.source}}},v=[`Basic`,`Direction`,`ToggleHidden`,`CustomOpenIcon`]}))();export{p as Basic,g as CustomOpenIcon,m as Direction,h as ToggleHidden,v as __namedExportsOrder,_ as default};