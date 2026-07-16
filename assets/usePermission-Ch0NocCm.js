import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{ea as n}from"./iframe-Bb2c4KcW.js";import{N as r,o as i,s as a}from"./blocks-fgraPhPa.js";import{t as o}from"./mdx-react-shim-fTW5KqOT.js";function s(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Hooks/usePermission`}),`
`,(0,l.jsx)(t.h1,{id:`usepermission`,children:(0,l.jsx)(t.code,{children:`usePermission`})}),`
`,(0,l.jsx)(t.p,{children:`Utility hook for permission management.`}),`
`,(0,l.jsx)(t.h3,{id:`basic-usage`,children:`Basic usage`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { usePermission } from "@tracktor/design-system";

const { hasPermission } = usePermission();
const hasCheckout = hasPermission("order", ["order", "checkout"]); // return true
const hasBill = hasPermission("bill", ["order", "checkout"]); // return false

console.log(hasCheckout) // true
console.log(hasBill) // false
`})}),`
`,(0,l.jsx)(t.h3,{id:`with-permission-check-mode`,children:`With permission check mode`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { usePermission } from "@tracktor/design-system";

const { hasPermission } = usePermission();

// "or" mode (default) - User needs at least one of the permissions
const hasAnyPermission = hasPermission(["order", "checkout"], ["order"], "or"); // true

// "and" mode - User needs all of permissions
const hasAllPermissions = hasPermission(["order", "checkout"], ["order"], "and"); // false
`})}),`
`,(0,l.jsx)(t.h3,{id:`provide-permissions`,children:`Provide permissions`}),`
`,(0,l.jsxs)(t.p,{children:[`Put `,(0,l.jsx)(t.code,{children:`<PermissionProvider>`}),` to provide user `,(0,l.jsx)(t.code,{children:`permissions`}),(0,l.jsx)(`br`,{}),`
In this example above static data is provided, but you can fetch user permissions.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import Home from "./Home";
import { PermissionProvider } from "@tracktor/design-system";

const App = () => (
    <PermissionProvider permissions={["order", "checkout"]}>
      <Home />
    </PermissionProvider>
);

export default App;
`})}),`
`,(0,l.jsxs)(t.p,{children:[`Then anywhere in your application like `,(0,l.jsx)(t.code,{children:`home.tsx`}),` you can use the hook without give permissions.`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { usePermission } from "@tracktor/design-system";

const { hasPermission } = usePermission();
const hasCheckout = hasPermission("checkout");
const hasBill = hasPermission("bill");

console.log(hasCheckout) // true
console.log(hasBill) // false
`})}),`
`,(0,l.jsx)(t.h3,{id:`with-haspermission-component`,children:`With HasPermission component`}),`
`,(0,l.jsx)(t.p,{children:`The HasPermission component can be used to conditionally render content based on user permissions.`}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-typescript`,children:`import { HasPermission } from "@tracktor/design-system";

// Basic usage
<HasPermission name="checkout">
  <CheckoutButton />
</HasPermission>

// With fallback
<HasPermission name="checkout" fallback={<RequestAccessButton />}>
  <CheckoutButton />
</HasPermission>

// With array of permissions using OR mode (default)
<HasPermission name={["checkout", "view_order"]} permissionCheckMode="or">
  <OrderSection />
</HasPermission>

// With array of permissions using AND mode
<HasPermission name={["checkout", "view_order"]} permissionCheckMode="and">
  <CompleteOrderSection />
</HasPermission>
`})}),`
`,(0,l.jsx)(t.h3,{id:`available-function`,children:`Available function`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Name`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`hasPermission`})}),(0,l.jsx)(`td`,{children:`Check if has permission. Accepts an optional permissionCheckMode ("or" or "and")`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`appendPermissions`})}),(0,l.jsx)(`td`,{children:`Append permission to PermissionContext`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`setPermissions`})}),(0,l.jsx)(`td`,{children:`Set permission to PermissionContext`})]})]})]}),`
`,(0,l.jsx)(t.h3,{id:`state-available`,children:`State available`}),`
`,(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Name`}),(0,l.jsx)(`th`,{children:`Description`})]})}),(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`disabledPermissions`})}),(0,l.jsx)(`td`,{children:`List of current disabled permissions (override permissions)`})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:`permissions`})}),(0,l.jsx)(`td`,{children:`List of current permissions`})]})]})]})]})}function c(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(n()),o(),a()}))();export{c as default};