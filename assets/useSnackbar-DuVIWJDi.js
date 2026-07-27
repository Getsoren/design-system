import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{ia as n}from"./iframe-94AAr2Wq.js";import{N as r,o as i,s as a}from"./blocks-DxSfSk6M.js";import{t as o}from"./mdx-react-shim-C9cOHHUc.js";function s(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Hooks/useSnackbar`}),`
`,(0,l.jsx)(t.h1,{id:`usesnackbar`,children:(0,l.jsx)(t.code,{children:`useSnackbar`})}),`
`,(0,l.jsxs)(t.p,{children:[`Utility hook for menu `,(0,l.jsx)(t.code,{children:`Snackbar`}),` component.`]}),`
`,(0,l.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { Button, SnackbarProvider, useSnackbar } from "@tracktor/design-system";

const { openSnackbar } = useSnackbar();

const App = () => (
  <SnackbarProvider>
    <Button onClick={()=> openSnackbar({message : "Hello", severity: "info"})}>Open Snackbar</Button>
  </SnackbarProvider>
);

export default App;
`})}),`
`,(0,l.jsxs)(t.p,{children:[`By default, the snackbar is an Alert component. You can change it by passing a `,(0,l.jsx)(t.code,{children:`component`}),` props.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { Button, SnackbarProvider, useSnackbar } from "@tracktor/design-system";

const { openSnackbar } = useSnackbar();

const CustomSnackbar = () => (
  <div>Custom Snackbar</div>
);

const App = () => (
  <SnackbarProvider>
    <Button onClick={()=> openSnackbar({ component: CustomSnackbar})}>Open Snackbar</Button>
  </SnackbarProvider>
);

export default App;
`})}),`
`,(0,l.jsx)(t.h3,{id:`available-state--function`,children:`Available state & function`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Name`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`openSnackbar`})}),(0,l.jsx)(`td`,{children:`Function`}),(0,l.jsx)(`td`,{children:`Open the snackbar`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`closeSnackbar`})}),(0,l.jsx)(`td`,{children:`Function`}),(0,l.jsx)(`td`,{children:`Close the snackbar`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`isOpen`})}),(0,l.jsx)(`td`,{children:`boolean`}),(0,l.jsx)(`td`,{children:`State of current snackbar`})]})]})]})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(n()),o(),a()}))();export{c as default};