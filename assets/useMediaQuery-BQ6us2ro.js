import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{ia as n}from"./iframe-CBlKtUHf.js";import{N as r,o as i,s as a}from"./blocks-Bg_upoal.js";import{t as o}from"./mdx-react-shim-D8wk8wGr.js";function s(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Hooks/useMediaQuery`}),`
`,(0,l.jsx)(t.h1,{id:`usemediaquery`,children:(0,l.jsx)(t.code,{children:`useMediaQuery`})}),`
`,(0,l.jsx)(t.p,{children:`This is a CSS media query hook. It listens for matches to a CSS media query. It allows the rendering of components based on whether the query matches or not`}),`
`,(0,l.jsx)(t.h3,{id:`basic-media-query`,children:`Basic media query`}),`
`,(0,l.jsxs)(t.p,{children:[`You should provide a media query to the first argument of the hook.
The media query string can be any valid CSS media query, e.g. `,(0,l.jsx)(t.code,{children:`(prefers-color-scheme: dark)`})]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { useMediaQuery } from "@tracktor/design-system";

export default function SimpleMediaQuery() {
  const matches = useMediaQuery("(min-width:600px)");

  return <span>{\`(min-width:600px) matches: \${matches}\`}</span>;
}
`})}),`
`,(0,l.jsx)(t.h3,{id:`using-theme-breakpoint`,children:`Using theme breakpoint`}),`
`,(0,l.jsx)(t.p,{children:`You can use theme breakpoint`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { useMediaQuery, useTheme } from "@tracktor/design-system"

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return <span>{\`theme.breakpoints.up("sm") matches: \${matches}\`}</span>;
}
`})})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(n()),o(),a()}))();export{c as default};