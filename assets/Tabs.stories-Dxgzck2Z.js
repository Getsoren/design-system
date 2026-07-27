import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{B as n,Br as r,Gi as i,Qi as a,Ya as o,d as s,f as c,m as l,p as u,u as d,w as f}from"./iframe-B8ePdx6v.js";var p,m,h,g=e((()=>{l(),p=t(o(),1),s(),m=({children:e,value:t,index:n,orientation:i,paddingY:a,paddingX:o,fullHeight:s,sx:l},u)=>{let d=a||3,f=o||i===`vertical`?3:0;return t===n?c(r,{ref:u,role:`tabpanel`,hidden:t!==n,id:`tabpanel-${n}`,paddingY:d,paddingX:f,height:s?`100%`:void 0,sx:l,children:e}):null},h=(0,p.forwardRef)(m)})),_,v=e((()=>{g(),_=h})),y,b=e((()=>{l(),s(),y=({component:e=`a`,...t})=>c(n,{component:e,onClick:e=>e.preventDefault(),...t});try{y.displayName=`LinkTab`,y.__docgenInfo={description:``,displayName:`LinkTab`,filePath:`/home/runner/work/design-system/design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,methods:[],props:{component:{defaultValue:{value:`a`},declarations:[{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`}],description:``,name:`component`,parent:{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`},required:!1,tags:{},type:{name:`ElementType`}},onClick:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`}],description:``,name:`onClick`,parent:{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`},required:!1,tags:{},type:{name:`((e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`}],description:`The label element.`,name:`label`,parent:{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`},required:!1,tags:{},type:{name:`string`}},href:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`}],description:``,name:`href`,parent:{fileName:`design-system/src/components/Navigation/Tabs/LinkTab/LinkTab.tsx`,name:`LinkTabProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),x,S,C=e((()=>{x=t(o(),1),S=()=>{let[e,t]=(0,x.useState)(0);return{handleChange:(0,x.useCallback)((e,n)=>{t(n)},[]),value:e}}})),w,T=e((()=>{C(),C(),w=S})),E,D=e((()=>{l(),s(),E=e=>c(f,{...e});try{E.displayName=`Tabs`,E.__docgenInfo={description:``,displayName:`Tabs`,filePath:`/home/runner/work/design-system/design-system/src/components/Navigation/Tabs/stories/Tabs.tsx`,methods:[],props:{slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/Tabs/Tabs.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`(Partial<TabsSlots> & { StartScrollButtonIcon?: ElementType<any, keyof IntrinsicElements>; EndScrollButtonIcon?: ElementType<...>; }) | undefined`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<"div", TabsRootSlotPropsOverrides, TabsOwnerState>; scroller?: SlotProps<"div", TabsScrollerSlotPropsOverrides, TabsOwnerState>; ... 5 more ...; endScrollButtonIcon?: SlotProps<...> | undefined; } | undefined`}},component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Tabs/Tabs.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{l(),O=t(o(),1),v(),b(),T(),D(),s(),k=(e,{name:t})=>{let i=t===`Disabled`,a=t===`Scrollable`,{value:o,handleChange:s}=w(),l=e=>({"aria-controls":`simple-tabpanel-${e}`,id:`simple-tab-${e}`});return c(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:u(r,{sx:{maxWidth:a?380:`auto`,width:`100%`},children:[c(r,{sx:{borderBottom:1,borderColor:`divider`},children:u(E,{...e,value:o,onChange:s,"aria-label":`basic tabs example`,children:[c(n,{label:`Item one`,...l(0)}),c(n,{label:`Item two`,...l(1)}),c(n,{label:i?`Disabled`:`Item three`,...l(2),disabled:i}),a&&u(d,{children:[c(n,{label:`Item four`}),c(n,{label:`Item five`}),c(n,{label:`Item six`}),c(n,{label:`Item seven`})]})]})}),c(_,{value:o,index:0,children:`Item one`}),c(_,{value:o,index:1,children:`Item two`}),c(_,{value:o,index:2,children:`Item three`})]})})},A=(e,{name:t})=>{let[i,a]=(0,O.useState)(`one`),o=(e,t)=>{a(t)};return c(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,children:c(r,{children:u(E,{...e,value:i,onChange:o,"aria-label":`wrapped label tabs example`,children:[c(n,{value:`one`,label:`New arrivals in the longest text of nonfiction that should appear in the next line`,wrapped:!0}),c(n,{value:`two`,label:`Item two`,disabled:t===`Disabled`}),c(n,{value:`three`,label:`Item three`})]})})})},j=e=>{let[t,i]=(0,O.useState)(0),{palette:o}=a(),s=(e,t)=>{i(t)};return c(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,children:u(r,{sx:{backgroundColor:`background.paper`,display:`flex`,flexGrow:1,height:224},children:[u(E,{...e,orientation:`vertical`,variant:`scrollable`,value:t,onChange:s,"aria-label":`Vertical tabs example`,sx:{borderColor:`${o.divider} !important`,borderRight:1},children:[c(n,{label:`Item one`}),c(n,{label:`Item two`}),c(n,{label:`Item three`}),c(n,{label:`Item four`}),c(n,{label:`Item five`}),c(n,{label:`Item six`}),c(n,{label:`Item seven`})]}),c(_,{value:t,index:0,orientation:`vertical`,children:`Item one`}),c(_,{value:t,index:1,orientation:`vertical`,children:`Item two`}),c(_,{value:t,index:2,orientation:`vertical`,children:`Item three`}),c(_,{value:t,index:3,orientation:`vertical`,children:`Item four`}),c(_,{value:t,index:4,orientation:`vertical`,children:`Item five`}),c(_,{value:t,index:5,orientation:`vertical`,children:`Item six`}),c(_,{value:t,index:6,orientation:`vertical`,children:`Item seven`})]})})},M=(e,{name:t})=>{let a=t===`Icon With Label`,[o,s]=(0,O.useState)(0),l=(e,t)=>{s(t)};return c(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,children:c(r,{children:u(E,{...e,value:o,onChange:l,"aria-label":`icon tabs example`,children:[c(n,{icon:c(i,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`PhoneIcon`,children:c(`path`,{d:`M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z`})}),"aria-label":`phone`,label:a?`RECENTS`:``}),c(n,{icon:c(i,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`FavoriteIcon`}),"aria-label":`favorite`,label:a?`FAVORITES`:``}),c(n,{icon:c(i,{className:`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv`,focusable:`false`,"aria-hidden":`true`,viewBox:`0 0 24 24`,"data-testid":`PersonPinIcon`,children:c(`path`,{d:`M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z`})}),"aria-label":`person`,label:a?`NEARBY`:``})]})})})},N=e=>{let[t,n]=(0,O.useState)(0),i=(e,t)=>{n(t)};return c(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:c(r,{sx:{width:`100%`},children:c(r,{sx:{borderBottom:1,borderColor:`divider`},children:u(E,{...e,value:t,onChange:i,"aria-label":`Nav tabs example`,children:[c(y,{label:`Page One`,href:`/drafts`}),c(y,{label:`Page Two`,href:`/trash`}),c(y,{label:`Page Three`,href:`/spam`})]})})})})},P=k.bind({}),P.args={},F=k.bind({}),F.args={indicatorColor:`secondary`,textColor:`primary`},F.argTypes={indicatorColor:{control:{type:`select`},options:[`primary`,`secondary`]},textColor:{control:{type:`select`},options:[`primary`,`secondary`]}},I=A.bind({}),I.args={},L=k.bind({}),L.args={},R=k.bind({}),R.args={variant:`fullWidth`},z=k.bind({}),z.args={centered:!0},B=k.bind({}),B.args={scrollButtons:`auto`,variant:`scrollable`},V=j.bind({}),V.args={orientation:`vertical`,variant:`scrollable`},H=M.bind({}),H.args={},U=M.bind({}),U.args={},W=N.bind({}),W.args={},G={component:E,title:`Components/Navigation/Tabs`},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args, {
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`(args, {
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`(args, {
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`(args, {
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`(args, {
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`(args, {
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`(args, {
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
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
}`,...W.parameters?.docs?.source}}},K=[`Basic`,`Colored`,`WrappedLabels`,`Disabled`,`FullWidth`,`Centered`,`Scrollable`,`Verticale`,`Icon`,`IconWithLabel`,`LinkTab`]}))();export{P as Basic,z as Centered,F as Colored,L as Disabled,R as FullWidth,H as Icon,U as IconWithLabel,W as LinkTab,B as Scrollable,V as Verticale,I as WrappedLabels,K as __namedExportsOrder,G as default};