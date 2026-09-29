import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{ca as n}from"./iframe-BnMlKthA.js";import{N as r,o as i,s as a}from"./blocks-8zvquUWw.js";import{t as o}from"./mdx-react-shim-D5E6NsbL.js";function s(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Hooks/useScrollFadeMask`}),`
`,(0,l.jsx)(t.h1,{id:`usescrollfademask`,children:(0,l.jsx)(t.code,{children:`useScrollFadeMask`})}),`
`,(0,l.jsx)(t.p,{children:`Fades the edges of a horizontally scrollable container to hint at hidden content. Only the edges
that still overflow are faded: right while there is more to reveal, left once scrolled. The fade is
a pure CSS mask, so it works over any background.`}),`
`,(0,l.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { Stack, useScrollFadeMask } from "@getsoren/design-system";

const App = () => {
  const { maskImage, onScroll, ref } = useScrollFadeMask();

  return (
    <Stack
      direction="row"
      ref={ref}
      onScroll={onScroll}
      sx={{ maskImage, overflowX: "auto", scrollbarWidth: "none", WebkitMaskImage: maskImage }}
    >
      {/* wide content */}
    </Stack>
  );
};

export default App;
`})}),`
`,(0,l.jsx)(t.h3,{id:`available-state--function`,children:`Available state & function`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Name`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`ref`})}),(0,l.jsx)(`td`,{children:`RefCallback`}),(0,l.jsx)(`td`,{children:`Attach to the scroll container. Also observes resizes of the container and its first child, so the mask is right on first paint even when the container mounts late`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`onScroll`})}),(0,l.jsx)(`td`,{children:`Function`}),(0,l.jsx)(`td`,{children:`Spread on the scroll container to keep the fades in sync while scrolling`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`maskImage`})}),(0,l.jsx)(`td`,{children:`string`}),(0,l.jsxs)(`td`,{children:[`CSS mask to apply as both `,(0,l.jsx)(`code`,{children:`maskImage`}),` and `,(0,l.jsx)(`code`,{children:`WebkitMaskImage`})]})]})]})]})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(n()),o(),a()}))();export{c as default};