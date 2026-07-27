import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{ia as n}from"./iframe-CBlKtUHf.js";import{N as r,o as i,s as a}from"./blocks-Bg_upoal.js";import{t as o}from"./mdx-react-shim-D8wk8wGr.js";function s(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Hooks/useTabs`}),`
`,(0,l.jsx)(t.h1,{id:`usetabs`,children:(0,l.jsx)(t.code,{children:`useTabs`})}),`
`,(0,l.jsx)(t.p,{children:`Utility hook for handle tabs`}),`
`,(0,l.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { Box, Tab, Tabs, TabPanel, useTabs } from "@tracktor/design-system";

const { value, handleChange } = useTabs();

const App = () => (
  <Box sx={{ width: '100%' }}>
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One"  />
        <Tab label="Item Two"  />
        <Tab label="Item Three"  />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      Item One
    </TabPanel>
    <TabPanel value={value} index={1}>
      Item Two
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item Three
    </TabPanel>
  </Box>
);

export default App;
`})}),`
`,(0,l.jsx)(t.h3,{id:`available-state--function`,children:`Available state & function`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Name`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`value`})}),(0,l.jsx)(`td`,{children:`number`}),(0,l.jsx)(`td`,{children:`Value of the current active tab`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`handleChange`})}),(0,l.jsx)(`td`,{children:`Function`}),(0,l.jsx)(`td`,{children:`Handle tab change`})]})]})]})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(n()),o(),a()}))();export{c as default};