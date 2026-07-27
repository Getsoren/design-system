import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Ya as r,at as i,d as a,f as o,m as s}from"./iframe-CAsMb0lW.js";var c,l,u,d=e((()=>{c=t(r(),1),l={disabledPermissions:void 0,permissions:void 0,setPermissions:()=>{}},u=(0,c.createContext)(l);try{u.displayName=`PermissionContext`,u.__docgenInfo={description:``,displayName:`PermissionContext`,filePath:`/home/runner/work/design-system/design-system/src/context/Permission/PermissionContext.tsx`,methods:[],props:{},tags:{}}}catch{}})),f,p,m,h=e((()=>{f=t(r(),1),d(),p=(e,t)=>e===``||!t.length?!1:t.some(t=>e===t),m=()=>{let{permissions:e,setPermissions:t,disabledPermissions:n}=(0,f.useContext)(u),r=(0,f.useCallback)((t,r,i=`or`)=>{let a=[...r||[],...e||[]].filter(e=>!n?.includes(e));return a.length?Array.isArray(t)?i===`or`?t.some(e=>p(e,a)):t.every(e=>p(e,a)):p(t,a):!1},[n,e]);return{appendPermissions:(0,f.useCallback)(e=>{t(t=>[...t||[],e])},[t]),disabledPermissions:n,hasPermission:r,permissions:e,setPermissions:t}}})),g,_=e((()=>{h(),h(),g=m})),v,y=e((()=>{_(),v=({children:e,fallback:t,name:n,additionalPermissions:r,permissionCheckMode:i=`or`})=>{let{hasPermission:a}=g(),o=a(n,r,i);return o?e:!o&&t?t:null};try{v.displayName=`HasPermission`,v.__docgenInfo={description:``,displayName:`HasPermission`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/HasPermission/HasPermission.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Utils/HasPermission/HasPermission.tsx`,name:`HasPermissionProps`}],description:`Permissions name or array of permission names`,name:`name`,parent:{fileName:`design-system/src/components/Utils/HasPermission/HasPermission.tsx`,name:`HasPermissionProps`},required:!0,tags:{},type:{name:`string | string[]`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Utils/HasPermission/HasPermission.tsx`,name:`HasPermissionProps`}],description:`The content of the component`,name:`children`,parent:{fileName:`design-system/src/components/Utils/HasPermission/HasPermission.tsx`,name:`HasPermissionProps`},required:!1,tags:{},type:{name:`ReactNode`}},fallback:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Utils/HasPermission/HasPermission.tsx`,name:`HasPermissionProps`}],description:`A fallback react to display when permissions is not enabled for given name`,name:`fallback`,parent:{fileName:`design-system/src/components/Utils/HasPermission/HasPermission.tsx`,name:`HasPermissionProps`},required:!1,tags:{},type:{name:`ReactNode`}},additionalPermissions:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Utils/HasPermission/HasPermission.tsx`,name:`HasPermissionProps`}],description:`Additional permissions to check with combined context permissions`,name:`additionalPermissions`,parent:{fileName:`design-system/src/components/Utils/HasPermission/HasPermission.tsx`,name:`HasPermissionProps`},required:!1,tags:{},type:{name:`string[]`}},permissionCheckMode:{defaultValue:{value:`or`},declarations:[{fileName:`design-system/src/components/Utils/HasPermission/HasPermission.tsx`,name:`HasPermissionProps`}],description:`Operator to use when checking multiple permissions:
- "or": User must have at least one of the permissions (default)
- "and": User must have all permissions`,name:`permissionCheckMode`,parent:{fileName:`design-system/src/components/Utils/HasPermission/HasPermission.tsx`,name:`HasPermissionProps`},required:!1,tags:{},type:{name:`enum`,raw:`PermissionCheckMode`,value:[{value:`"or"`},{value:`"and"`}]}}},tags:{}}}catch{}})),b,x,S,C,w,T,E,D;e((()=>{s(),y(),a(),b=e=>o(i,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`,width:`100%`},children:o(v,{...e,children:o(`code`,{children:o(n,{p:2,children:`If user has permission, children is rendered`})})})}),x=b.bind({}),x.args={additionalPermissions:[`test`],name:`test`},S=b.bind({}),S.args={},C=b.bind({}),C.args={fallback:o(`code`,{children:o(n,{p:2,children:`If user has not permission, we display this fallback.`})})},w=b.bind({}),w.args={additionalPermissions:[`test`],name:[`test`,`another_feature`],permissionCheckMode:`or`},T=b.bind({}),T.args={additionalPermissions:[`test`,`another_feature`],name:[`test`,`another_feature`],permissionCheckMode:`and`},E={component:v,title:`Components/Utils/HasPermission`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <HasPermission {...args}>
      <code>
        <Box p={2}>If user has permission, children is rendered</Box>
      </code>
    </HasPermission>
  </Stack>`,...T.parameters?.docs?.source}}},D=[`IfWeHavePermission`,`IfWeHaveNotPermission`,`WithFallBack`,`OrPermissionCheckMode`,`AndPermissionCheckMode`]}))();export{T as AndPermissionCheckMode,S as IfWeHaveNotPermission,x as IfWeHavePermission,w as OrPermissionCheckMode,C as WithFallBack,D as __namedExportsOrder,E as default};