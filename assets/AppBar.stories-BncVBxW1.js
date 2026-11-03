import{i as e}from"./preload-helper-xPQekRTU.js";import{Kt as t,Li as n,Wt as r,Yn as i,_ as a,b as o,dt as s,sn as c,v as l,y as u}from"./iframe-YHvt-iGK.js";import{n as d,t as f}from"./CloseIcon-C9VYDuNH.js";import{n as p,t as m}from"./AppBar-PbdGDcpN.js";var h,g,_,v,y,b,x,S,C,w;e((()=>{o(),d(),p(),a(),h=[{icon:l(f,{}),label:`Check`,url:`#`},{active:!0,icon:l(f,{}),label:`Close`,url:`#`}],g=e=>l(s,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`,width:`100%`},children:l(m,{actionProps:{children:`Action`},searchProps:{placeholder:`Search`},...e})}),_=e=>l(s,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,sx:{height:`100%`,width:`100%`},children:l(m,{Search:null,Avatar:null,Action:null,...e})}),v=g.bind({}),v.args={},y=g.bind({}),y.args={avatarProps:{menuItems:h}},b=_.bind({}),b.args={},x=()=>u(r,{children:[l(c,{children:l(f,{})}),u(s,{direction:`row`,alignItems:`center`,justifyContent:`space-between`,flex:1,spacing:3,children:[l(n,{children:`Language`}),l(i,{sx:{width:`100%`},children:u(t,{variant:`outlined`,size:`small`,defaultValue:`fr`,inputProps:{"data-testid":`story-language-select`},children:[l(r,{value:`fr`,children:`Français`}),l(r,{value:`en`,children:`English`})]})})]})]}),S=g.bind({}),S.args={avatarProps:{menuItems:[...h,l(x,{},`select`)]}},C={component:m,title:`Components/Surface/AppBar`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <AppBar actionProps={{
    children: "Action"
  }} searchProps={{
    placeholder: "Search"
  }} {...args} />
  </Stack>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <AppBar actionProps={{
    children: "Action"
  }} searchProps={{
    placeholder: "Search"
  }} {...args} />
  </Stack>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <AppBar Search={null} Avatar={null} Action={null} {...args} />
  </Stack>`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{
  height: "100%",
  width: "100%"
}}>
    <AppBar actionProps={{
    children: "Action"
  }} searchProps={{
    placeholder: "Search"
  }} {...args} />
  </Stack>`,...S.parameters?.docs?.source}}},w=[`Basic`,`WithAvatarMenu`,`Simple`,`WithSelectInAvatarMenu`]}))();export{v as Basic,b as Simple,y as WithAvatarMenu,S as WithSelectInAvatarMenu,w as __namedExportsOrder,C as default};