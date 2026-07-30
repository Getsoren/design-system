import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{ia as n}from"./iframe-9cuzH673.js";import{N as r,o as i,s as a}from"./blocks-CHm4uO5E.js";import{t as o}from"./mdx-react-shim-CGLv78fF.js";function s(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Provider/PermissionProvider`}),`
`,(0,l.jsx)(t.h1,{id:`permissionprovider`,children:(0,l.jsx)(t.code,{children:`PermissionProvider`})}),`
`,(0,l.jsx)(t.p,{children:`Provider to manage permissions in your application.`}),`
`,(0,l.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import Home from "./Home";
import { PermissionProvider } from "@tracktor/design-system";

const App = () => (
    <PermissionProvider permissions={["order", "checkout"]}>
      <Home />
    </PermissionProvider>
);

export default App;
`})}),`
`,(0,l.jsxs)(t.p,{children:[`Then anywhere in your application like `,(0,l.jsx)(t.code,{children:`home.tsx`}),` you can use the hook without give permissions again.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { usePermission } from "@tracktor/design-system";

const { hasPermission } = usePermission();
const hasCheckout = hasPermission("checkout");
const hasBill = hasPermission("bill");

console.log(hasCheckout) // true
console.log(hasBill) // false
`})}),`
`,(0,l.jsx)(t.h3,{id:`props`,children:`Props`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Name`}),(0,l.jsx)(`th`,{children:`Type`}),(0,l.jsx)(`th`,{children:`Required`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`permissions`})}),(0,l.jsx)(`td`,{children:`string[]`}),(0,l.jsx)(`td`,{children:`false`}),(0,l.jsx)(`td`,{children:`Array of permissions name`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`setPermissions`})}),(0,l.jsx)(`td`,{children:`function`}),(0,l.jsx)(`td`,{children:`undefined`}),(0,l.jsx)(`td`,{children:`Permission setter function`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`disabledPermissions`})}),(0,l.jsx)(`td`,{children:`string[]`}),(0,l.jsx)(`td`,{children:`false`}),(0,l.jsx)(`td`,{children:`Array of disabledPermissions name`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`children`})}),(0,l.jsx)(`td`,{children:`string`}),(0,l.jsx)(`td`,{children:`false`}),(0,l.jsx)(`td`,{children:`Children`})]})]})]})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(n()),o(),a()}))();export{c as default};