import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{ia as n}from"./iframe-DvB8Vy9J.js";import{N as r,o as i,s as a}from"./blocks-B5iDt7qz.js";import{t as o}from"./mdx-react-shim-Dp2tr-Vy.js";function s(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Provider/SnackbarProvider`}),`
`,(0,l.jsx)(t.h1,{id:`snackbarprovider`,children:(0,l.jsx)(t.code,{children:`SnackbarProvider`})}),`
`,(0,l.jsx)(t.p,{children:`Provider for the snackbar component.`}),`
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
`,(0,l.jsx)(t.h3,{id:`props`,children:`Props`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Name`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Required`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`autoHideDuration`})}),(0,l.jsx)(`td`,{children:`number`}),(0,l.jsx)(`td`,{children:`false`}),(0,l.jsx)(`td`,{children:`The duration of the snack appears`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`anchorOrigin`})}),(0,l.jsx)(`td`,{children:`SnackbarOrigin`}),(0,l.jsx)(`td`,{children:`false`}),(0,l.jsx)(`td`,{children:`Position of the snackbar`})]})]})]})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(n()),o(),a()}))();export{c as default};