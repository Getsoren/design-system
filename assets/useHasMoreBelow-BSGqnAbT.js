import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Oa as n}from"./iframe-BuBoq6oP.js";import{N as r,o as i,s as a}from"./blocks-CKgAm6GR.js";import{t as o}from"./mdx-react-shim-B_m6vBmD.js";function s(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Hooks/useHasMoreBelow`}),`
`,(0,l.jsx)(t.h1,{id:`usehasmorebelow`,children:(0,l.jsx)(t.code,{children:`useHasMoreBelow`})}),`
`,(0,l.jsx)(t.p,{children:`Tells whether more content lies below the fold of a vertically scrollable container. It is measured
when the container mounts, then again whenever the container or its content resizes and on every
scroll. Hang a fade or a "see more" arrow on it.`}),`
`,(0,l.jsxs)(t.p,{children:[`The hook reads the container once it is mounted: when the container is replaced (another step,
another document), mount the component that calls the hook with a `,(0,l.jsx)(t.code,{children:`key`}),`.`]}),`
`,(0,l.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { Box, useHasMoreBelow } from "@getsoren/design-system";
import { useRef } from "react";

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasMoreBelow = useHasMoreBelow(containerRef);

  return (
    <Box sx={{ position: "relative" }}>
      <Box ref={containerRef} sx={{ maxHeight: 320, overflowY: "auto" }}>
        {/* tall content */}
      </Box>
      {hasMoreBelow && <Box aria-hidden sx={{ bottom: 0, height: 56, left: 0, pointerEvents: "none", position: "absolute", right: 0 }} />}
    </Box>
  );
};
`})})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(n()),o(),a()}))();export{c as default};