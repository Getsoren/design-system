import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,K as r,Yr as i,_ as a,_o as o,b as s,ba as c,fa as l,g as u,v as d,y as f}from"./iframe-D9hj5naP.js";var p,m,h,g=e((()=>{s(),p=t(o(),1),a(),m=({children:e,value:t,index:n,orientation:r,paddingY:a,paddingX:o,fullHeight:s,sx:c},l)=>{let u=a||3,f=o||r===`vertical`?3:0;return t===n?d(i,{ref:l,role:`tabpanel`,hidden:t!==n,id:`tabpanel-${n}`,paddingY:u,paddingX:f,height:s?`100%`:void 0,sx:c,children:e}):null},h=(0,p.forwardRef)(m)})),_,v=e((()=>{s(),a(),_=({component:e=`a`,...t})=>d(r,{component:e,onClick:e=>e.preventDefault(),...t});try{_.displayName=`LinkTab`,_.__docgenInfo={description:``,displayName:`LinkTab`,filePath:`/home/runner/work/design-system/design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,methods:[],props:{component:{defaultValue:{value:`a`},declarations:[{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`}],description:``,name:`component`,parent:{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`},required:!1,tags:{},type:{name:`ElementType`}},onClick:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`}],description:``,name:`onClick`,parent:{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`},required:!1,tags:{},type:{name:`((e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`}],description:`The label element.`,name:`label`,parent:{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`},required:!1,tags:{},type:{name:`string`}},href:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`}],description:``,name:`href`,parent:{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),y,b,x=e((()=>{y=t(o(),1),b=()=>{let[e,t]=(0,y.useState)(0);return{handleChange:(0,y.useCallback)((e,n)=>{t(n)},[]),value:e}}})),S,C=e((()=>{s(),a(),S=e=>d(n,{...e});try{S.displayName=`Tabs`,S.__docgenInfo={description:``,displayName:`Tabs`,filePath:`/home/runner/work/design-system/design-system/src/components/Navigation/Tabs/stories/Tabs.tsx`,methods:[],props:{slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/Tabs/Tabs.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`(Partial<TabsSlots> & { StartScrollButtonIcon?: ElementType<any, keyof IntrinsicElements>; EndScrollButtonIcon?: ElementType<...>; }) | undefined`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<"div", TabsRootSlotPropsOverrides, TabsOwnerState>; scroller?: SlotProps<"div", TabsScrollerSlotPropsOverrides, TabsOwnerState>; ... 5 more ...; endScrollButtonIcon?: SlotProps<...> | undefined; } | undefined`}},component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Tabs/Tabs.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{s(),w=t(o(),1),g(),v(),x(),C(),a(),T=(e,{name:t})=>{let n=t===`Disabled`,a=t===`Scrollable`,{value:o,handleChange:s}=b(),c=e=>({"aria-controls":`simple-tabpanel-${e}`,id:`simple-tab-${e}`});return d(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:f(i,{sx:{maxWidth:a?380:`auto`,width:`100%`},children:[d(i,{sx:{borderBottom:1,borderColor:`divider`},children:f(S,{...e,value:o,onChange:s,"aria-label":`basic tabs example`,children:[d(r,{label:`Item one`,...c(0)}),d(r,{label:`Item two`,...c(1)}),d(r,{label:n?`Disabled`:`Item three`,...c(2),disabled:n}),a&&f(u,{children:[d(r,{label:`Item four`}),d(r,{label:`Item five`}),d(r,{label:`Item six`}),d(r,{label:`Item seven`})]})]})}),d(h,{value:o,index:0,children:`Item one`}),d(h,{value:o,index:1,children:`Item two`}),d(h,{value:o,index:2,children:`Item three`})]})})},E=(e,{name:t})=>{let[n,a]=(0,w.useState)(`one`),o=(e,t)=>{a(t)};return d(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,children:d(i,{children:f(S,{...e,value:n,onChange:o,"aria-label":`wrapped label tabs example`,children:[d(r,{value:`one`,label:`New arrivals in the longest text of nonfiction that should appear in the next line`,wrapped:!0}),d(r,{value:`two`,label:`Item two`,disabled:t===`Disabled`}),d(r,{value:`three`,label:`Item three`})]})})})},D=e=>{let[t,n]=(0,w.useState)(0),{palette:a}=c(),o=(e,t)=>{n(t)};return d(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,children:f(i,{sx:{backgroundColor:`background.paper`,display:`flex`,flexGrow:1,height:224},children:[f(S,{...e,orientation:`vertical`,variant:`scrollable`,value:t,onChange:o,"aria-label":`Vertical tabs example`,sx:{borderColor:`${a.divider} !important`,borderRight:1},children:[d(r,{label:`Item one`}),d(r,{label:`Item two`}),d(r,{label:`Item three`}),d(r,{label:`Item four`}),d(r,{label:`Item five`}),d(r,{label:`Item six`}),d(r,{label:`Item seven`})]}),d(h,{value:t,index:0,orientation:`vertical`,children:`Item one`}),d(h,{value:t,index:1,orientation:`vertical`,children:`Item two`}),d(h,{value:t,index:2,orientation:`vertical`,children:`Item three`}),d(h,{value:t,index:3,orientation:`vertical`,children:`Item four`}),d(h,{value:t,index:4,orientation:`vertical`,children:`Item five`}),d(h,{value:t,index:5,orientation:`vertical`,children:`Item six`}),d(h,{value:t,index:6,orientation:`vertical`,children:`Item seven`})]})})},O=(e,{name:t})=>{let n=t===`Icon With Label`,[a,o]=(0,w.useState)(0),s=(e,t)=>{o(t)};return d(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,children:d(i,{children:f(S,{...e,value:a,onChange:s,"aria-label":`icon tabs example`,children:[d(r,{icon:d(l,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`PhoneIcon`,children:d(`path`,{d:`M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z`})}),"aria-label":`phone`,label:n?`RECENTS`:``}),d(r,{icon:d(l,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`FavoriteIcon`}),"aria-label":`favorite`,label:n?`FAVORITES`:``}),d(r,{icon:d(l,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`PersonPinIcon`,children:d(`path`,{d:`M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z`})}),"aria-label":`person`,label:n?`NEARBY`:``})]})})})},k=e=>{let[t,n]=(0,w.useState)(0),r=(e,t)=>{n(t)};return d(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:d(i,{sx:{width:`100%`},children:d(i,{sx:{borderBottom:1,borderColor:`divider`},children:f(S,{...e,value:t,onChange:r,"aria-label":`Nav tabs example`,children:[d(_,{label:`Page One`,href:`/drafts`}),d(_,{label:`Page Two`,href:`/trash`}),d(_,{label:`Page Three`,href:`/spam`})]})})})})},A=T.bind({}),A.args={},j=T.bind({}),j.args={indicatorColor:`secondary`,textColor:`primary`},j.argTypes={indicatorColor:{control:{type:`select`},options:[`primary`,`secondary`]},textColor:{control:{type:`select`},options:[`primary`,`secondary`]}},M=E.bind({}),M.args={},N=T.bind({}),N.args={},P=T.bind({}),P.args={variant:`fullWidth`},F=T.bind({}),F.args={centered:!0},I=T.bind({}),I.args={scrollButtons:`auto`,variant:`scrollable`},L=D.bind({}),L.args={orientation:`vertical`,variant:`scrollable`},R=O.bind({}),R.args={},z=O.bind({}),z.args={},B=k.bind({}),B.args={},V={component:S,title:`Components/Navigation/Tabs`},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const [value, setValue] = useState("one");
  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Box>
        <Tabs {...args} value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab value="one" label="New arrivals in the longest text of nonfiction that should appear in the next line" wrapped />
          <Tab value="two" label="Item two" disabled={name === "Disabled"} />
          <Tab value="three" label="Item three" />
        </Tabs>
      </Box>
    </Box>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const {
    value,
    handleChange
  } = useTabs();
  const a11yProps = (index: number) => ({
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id: \`simple-tab-\${index}\`
  });
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      maxWidth: isScrollableContext ? 380 : "auto",
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(0);
  const {
    palette
  } = useTheme();
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Box sx={{
      backgroundColor: "background.paper",
      display: "flex",
      flexGrow: 1,
      height: 224
    }}>
        <Tabs {...args} orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" sx={{
        borderColor: \`\${palette.divider} !important\`,
        borderRight: 1
      }}>
          <Tab label="Item one" />
          <Tab label="Item two" />
          <Tab label="Item three" />
          <Tab label="Item four" />
          <Tab label="Item five" />
          <Tab label="Item six" />
          <Tab label="Item seven" />
        </Tabs>
        <TabPanel value={value} index={0} orientation="vertical">
          Item one
        </TabPanel>
        <TabPanel value={value} index={1} orientation="vertical">
          Item two
        </TabPanel>
        <TabPanel value={value} index={2} orientation="vertical">
          Item three
        </TabPanel>
        <TabPanel value={value} index={3} orientation="vertical">
          Item four
        </TabPanel>
        <TabPanel value={value} index={4} orientation="vertical">
          Item five
        </TabPanel>
        <TabPanel value={value} index={5} orientation="vertical">
          Item six
        </TabPanel>
        <TabPanel value={value} index={6} orientation="vertical">
          Item seven
        </TabPanel>
      </Box>
    </Box>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isIconWithLabelContext = name === "Icon With Label";
  const [value, setValue] = useState(0);
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Box>
        <Tabs {...args} value={value} onChange={handleChange} aria-label="icon tabs example">
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIcon">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </SvgIcon>} aria-label="phone" label={isIconWithLabelContext ? "RECENTS" : ""} />
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon" />} aria-label="favorite" label={isIconWithLabelContext ? "FAVORITES" : ""} />
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonPinIcon">
                <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </SvgIcon>} aria-label="person" label={isIconWithLabelContext ? "NEARBY" : ""} />
        </Tabs>
      </Box>
    </Box>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const isIconWithLabelContext = name === "Icon With Label";
  const [value, setValue] = useState(0);
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Box>
        <Tabs {...args} value={value} onChange={handleChange} aria-label="icon tabs example">
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIcon">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </SvgIcon>} aria-label="phone" label={isIconWithLabelContext ? "RECENTS" : ""} />
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon" />} aria-label="favorite" label={isIconWithLabelContext ? "FAVORITES" : ""} />
          <Tab icon={<SvgIcon className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonPinIcon">
                <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </SvgIcon>} aria-label="person" label={isIconWithLabelContext ? "NEARBY" : ""} />
        </Tabs>
      </Box>
    </Box>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(0);
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      width: "100%"
    }}>
        <Box sx={{
        borderBottom: 1,
        borderColor: "divider"
      }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="Nav tabs example">
            <LinkTabComponent label="Page One" href="/drafts" />
            <LinkTabComponent label="Page Two" href="/trash" />
            <LinkTabComponent label="Page Three" href="/spam" />
          </Tabs>
        </Box>
      </Box>
    </Box>;
}`,...B.parameters?.docs?.source}}},H=[`Basic`,`Colored`,`WrappedLabels`,`Disabled`,`FullWidth`,`Centered`,`Scrollable`,`Verticale`,`Icon`,`IconWithLabel`,`LinkTab`]}))();export{A as Basic,F as Centered,j as Colored,N as Disabled,P as FullWidth,R as Icon,z as IconWithLabel,B as LinkTab,I as Scrollable,L as Verticale,M as WrappedLabels,H as __namedExportsOrder,V as default};