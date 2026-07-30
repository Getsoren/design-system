import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{ia as n}from"./iframe-DGVZXguO.js";import{N as r,o as i,s as a}from"./blocks-druPisay.js";import{t as o}from"./mdx-react-shim-B39742J3.js";function s(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Hooks/useMenu`}),`
`,(0,l.jsx)(t.h1,{id:`usemenu`,children:(0,l.jsx)(t.code,{children:`useMenu`})}),`
`,(0,l.jsx)(t.p,{children:`Utility hook for handle menu`}),`
`,(0,l.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { Button, Menu, MenuItem, useMenu } from "@tracktor/design-system";

const { isMenuOpen, anchorMenu, closeMenu, openMenu } = useMenu();

const App = () => (
  <>
    <Button onClick={openMenu}>Open menu</Button>
    <Menu
      open={isMenuOpen}
      onClose={closeMenu}
      anchorEl={anchorMenu}
    >
      <MenuItem>...</MenuItem>
    </Menu>
  </>
);

export default App;
`})}),`
`,(0,l.jsx)(t.h3,{id:`available-state--function`,children:`Available state & function`}),`
`,(0,l.jsx)(t.h3,{id:`available-state--function-1`,children:`Available state & function`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Name`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`closeMenu`})}),(0,l.jsx)(`td`,{children:`Function`}),(0,l.jsx)(`td`,{children:`Handles closing the menu`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`openMenu`})}),(0,l.jsx)(`td`,{children:`Function`}),(0,l.jsx)(`td`,{children:`Handles opening the menu`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`anchorMenu`})}),(0,l.jsx)(`td`,{children:`HTMLElement`}),(0,l.jsx)(`td`,{children:`Anchor element for the menu`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`isMenuOpen`})}),(0,l.jsx)(`td`,{children:`boolean`}),(0,l.jsx)(`td`,{children:`Indicates if the menu is open`})]})]})]})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(n()),o(),a()}))();export{c as default};