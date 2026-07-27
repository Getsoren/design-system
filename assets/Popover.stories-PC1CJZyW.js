import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Fr as r,Si as i,Ya as a,d as o,f as s,m as c,p as l,qt as u}from"./iframe-B8ePdx6v.js";var d,f=e((()=>{c(),o(),d=({children:e,...t})=>s(u,{...t,children:e});try{d.displayName=`Popover`,d.__docgenInfo={description:``,displayName:`Popover`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/Popover/stories/Popover.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Modal/Modal.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}},slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<PopoverSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<OverridableComponent<ModalTypeMap<"div", {}>>, PopoverRootSlotPropsOverrides, PopoverOwnerState>; paper?: SlotProps<...>; transition?: SlotComponentProps<...> | undefined; backdrop?: SlotProps<...> | undefined; } | undefined`}}},tags:{}}}catch{}})),p,m,h,g,_,v;e((()=>{c(),p=t(a(),1),f(),o(),m=e=>{let[t,a]=(0,p.useState)(null),o=!!t,c=o?`simple-popover`:void 0;return l(n,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[s(r,{"aria-describedby":c,variant:`outlined`,onClick:e=>{a(e.currentTarget)},children:`Open Popover`}),s(d,{id:c,anchorEl:t,onClose:()=>{a(null)},...e,open:o,children:s(i,{sx:{p:2},children:`The content of the Popover.`})})]})},h=m.bind({}),h.args={},g=m.bind({}),g.args={anchorOrigin:{horizontal:`center`,vertical:`bottom`},transformOrigin:{horizontal:`center`,vertical:`top`}},_={component:d,title:`Components/Utils/Popover`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover id={id} anchorEl={anchorEl} onClose={handleClose} {...args} open={open}>
        <Typography sx={{
        p: 2
      }}>The content of the Popover.</Typography>
      </Popover>
    </Box>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover id={id} anchorEl={anchorEl} onClose={handleClose} {...args} open={open}>
        <Typography sx={{
        p: 2
      }}>The content of the Popover.</Typography>
      </Popover>
    </Box>;
}`,...g.parameters?.docs?.source}}},v=[`Basic`,`CustomPosition`]}))();export{h as Basic,g as CustomPosition,v as __namedExportsOrder,_ as default};