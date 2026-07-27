import{i as e}from"./preload-helper-xPQekRTU.js";import{at as t,d as n,f as r,m as i}from"./iframe-DvB8Vy9J.js";import{n as a,t as o}from"./CloseIcon-DJehEUIy.js";import{n as s,t as c}from"./AppBar-DKbYlzmc.js";var l,u,d,f,p,m,h,g;e((()=>{i(),a(),s(),n(),l=[{icon:r(o,{}),label:`Check`,url:`#`},{active:!0,icon:r(o,{}),label:`Close`,url:`#`}],u=e=>r(t,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`,width:`100%`},children:r(c,{actionProps:{children:`Action`},searchProps:{placeholder:`Search`},...e})}),d=e=>r(t,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`,width:`100%`},children:r(c,{Search:null,Avatar:null,Action:null,...e})}),f=u.bind({}),f.args={},p=u.bind({}),p.args={avatarProps:{menuItems:l}},m=d.bind({}),m.args={},h={component:c,title:`Components/Surface/AppBar`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <AppBar actionProps={{
    children: "Action"
  }} searchProps={{
    placeholder: "Search"
  }} {...args} />
  </Stack>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <AppBar actionProps={{
    children: "Action"
  }} searchProps={{
    placeholder: "Search"
  }} {...args} />
  </Stack>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <AppBar Search={null} Avatar={null} Action={null} {...args} />
  </Stack>`,...m.parameters?.docs?.source}}},g=[`Basic`,`WithAvatarMenu`,`Simple`]}))();export{f as Basic,m as Simple,p as WithAvatarMenu,g as __namedExportsOrder,h as default};