import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{ea as n}from"./iframe-Br4XveDY.js";import{N as r,o as i,s as a}from"./blocks-CfZBsk0X.js";import{t as o}from"./mdx-react-shim-VMMoChDN.js";function s(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Styles`}),`
`,(0,l.jsx)(t.h1,{id:`styles`,children:`Styles`}),`
`,(0,l.jsxs)(t.p,{children:[`Design System components use the system prop `,(0,l.jsx)(t.code,{children:`sx`}),` that allows defining system overrides as well as additional CSS styles or
use`,(0,l.jsx)(t.code,{children:`Emotion-based`}),` styling solution provided by MUI to style your components.`]}),`
`,(0,l.jsx)(t.h3,{id:`system-prop`,children:`System Prop`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { Box } from "@tracktor/design-system";

const styles = {
  box : {
    "&:hover": {
      backgroundColor: "blue",
    },
    backgroundColor: "red",
    height: 150,
    width: 150,
  }
}

<Box sx={styles.box} />
`})}),`
`,(0,l.jsx)(t.h3,{id:`global-style`,children:`Global style`}),`
`,(0,l.jsxs)(t.p,{children:[`For injecting global style you can use `,(0,l.jsx)(t.code,{children:`GlobalStyles`}),` and `,(0,l.jsx)(t.code,{children:`css`}),` from Material UI. It is an alias of `,(0,l.jsx)(t.code,{children:`Global`}),` from emotion css.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { GlobalStyles, css } from "@tracktor/design-system";

<GlobalStyles
  styles={{
    ".some-class": {
      color: "red",
      textAlign: "center",
    },
  }}
/>
`})}),`
`,(0,l.jsxs)(t.p,{children:[`Or `,(0,l.jsx)(t.code,{children:`css`}),` with `,(0,l.jsx)(t.code,{children:`GlobalStyles`})]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { GlobalStyles, css } from "@tracktor/design-system";

<GlobalStyles
  styles={css\`
    .some-class {
      color: red;
    }
  \`}
/>
`})})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(n()),o(),a()}))();export{c as default};