import{i as e}from"./preload-helper-xPQekRTU.js";import{Fn as t,Gr as n,Ni as r,_i as i,g as a,h as o,m as s,p as c,st as l,tr as u}from"./iframe-CT4WrDGS.js";var d,f=e((()=>{a(),c(),d=e=>s(u,{...e});try{d.displayName=`Divider`,d.__docgenInfo={description:``,displayName:`Divider`,filePath:`/home/runner/work/design-system/design-system/src/components/DataDisplay/Divider/stories/Divider.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Divider/Divider.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),p,m,h,g,_,v,y,b,x;e((()=>{a(),f(),c(),p=s(r,{variant:`body2`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium.`}),m=e=>s(l,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:s(n,{width:`100%`,children:s(d,{...e})})}),h=e=>s(n,{display:`flex`,justifyContent:`center`,children:o(n,{maxWidth:500,sx:{border:`solid 1px`,borderColor:`divider`,borderRadius:2,p:2},children:[p,s(d,{...e,children:`CENTER`}),p,s(d,{textAlign:`left`,...e,children:`LEFT`}),p,s(d,{textAlign:`right`,...e,children:`RIGHT`}),p,s(d,{...e,children:s(i,{label:`CHIP`})}),p]})}),g=e=>s(n,{display:`flex`,justifyContent:`center`,alignItems:`center`,height:`100%`,children:s(n,{maxWidth:500,sx:{border:`solid 1px`,borderColor:`divider`,borderRadius:2,p:2},children:o(t,{container:!0,children:[s(t,{size:`grow`,children:p}),s(d,{orientation:`vertical`,flexItem:!0,...e,children:`VERTICAL`}),s(t,{size:`grow`,children:p})]})})}),_=m.bind({}),_.args={},v=h.bind({}),v.args={},y=g.bind({}),y.args={},b={component:d,title:`Components/Data Display/Divider`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Box width="100%">
      <Divider {...args} />
    </Box>
  </Stack>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Box display="flex" justifyContent="center">
    <Box maxWidth={500} sx={{
    border: "solid 1px",
    borderColor: "divider",
    borderRadius: 2,
    p: 2
  }}>
      {content}
      <Divider {...args}>CENTER</Divider>
      {content}
      <Divider textAlign="left" {...args}>
        LEFT
      </Divider>
      {content}
      <Divider textAlign="right" {...args}>
        RIGHT
      </Divider>
      {content}
      <Divider {...args}>
        <Chip label="CHIP" />
      </Divider>
      {content}
    </Box>
  </Box>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <Box display="flex" justifyContent="center" alignItems="center" height="100%">
    <Box maxWidth={500} sx={{
    border: "solid 1px",
    borderColor: "divider",
    borderRadius: 2,
    p: 2
  }}>
      <Grid container>
        <Grid size="grow">{content}</Grid>
        <Divider orientation="vertical" flexItem {...args}>
          VERTICAL
        </Divider>
        <Grid size="grow">{content}</Grid>
      </Grid>
    </Box>
  </Box>`,...y.parameters?.docs?.source}}},x=[`Basic`,`WithText`,`Vertical`]}))();export{_ as Basic,y as Vertical,v as WithText,x as __namedExportsOrder,b as default};