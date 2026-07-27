import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{ia as n}from"./iframe-CBlKtUHf.js";import{N as r,o as i,s as a}from"./blocks-Bg_upoal.js";import{t as o}from"./mdx-react-shim-D8wk8wGr.js";function s(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Installation`}),`
`,(0,l.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-console`,children:`yarn add @tracktor/design-system
`})}),`
`,(0,l.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(t.h3,{id:`provide-the-theme`,children:`Provide the theme`}),`
`,(0,l.jsxs)(t.p,{children:[`Put `,(0,l.jsx)(t.code,{children:`<ThemeProvider>`}),` around your application.
Custom theme can be provided as prop `,(0,l.jsx)(t.code,{children:`theme={YOUR_CUSTOM_THEME}`})]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { Button, ThemeProvider } from "@tracktor/design-system";

const App = () => (
  <ThemeProvider>
    <Button>Text</Button>
  </ThemeProvider>
);

export default App;
`})})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(n()),o(),a()}))();export{c as default};