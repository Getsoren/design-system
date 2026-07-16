import{i as e}from"./preload-helper-xPQekRTU.js";import{Jn as t,Lr as n,ai as r,at as i,c as a,jn as o,l as s,m as c,s as l,vi as u}from"./iframe-C3dUH62Y.js";var d,f=e((()=>{c(),l(),d=e=>a(t,{...e});try{d.displayName=`Divider`,d.__docgenInfo={description:``,displayName:`Divider`,filePath:`/home/runner/work/design-system/design-system/src/components/DataDisplay/Divider/stories/Divider.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Divider/Divider.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),p,m,h,g,_,v,y,b,x;e((()=>{c(),f(),l(),p=a(u,{variant:`body2`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium.`}),m=e=>a(i,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:a(n,{width:`100%`,children:a(d,{...e})})}),h=e=>a(n,{display:`flex`,justifyContent:`center`,children:s(n,{maxWidth:500,sx:{border:`solid 1px`,borderColor:`divider`,borderRadius:2,p:2},children:[p,a(d,{...e,children:`CENTER`}),p,a(d,{textAlign:`left`,...e,children:`LEFT`}),p,a(d,{textAlign:`right`,...e,children:`RIGHT`}),p,a(d,{...e,children:a(r,{label:`CHIP`})}),p]})}),g=e=>a(n,{display:`flex`,justifyContent:`center`,alignItems:`center`,height:`100%`,children:a(n,{maxWidth:500,sx:{border:`solid 1px`,borderColor:`divider`,borderRadius:2,p:2},children:s(o,{container:!0,children:[a(o,{size:`grow`,children:p}),a(d,{orientation:`vertical`,flexItem:!0,...e,children:`VERTICAL`}),a(o,{size:`grow`,children:p})]})})}),_=m.bind({}),_.args={},v=h.bind({}),v.args={},y=g.bind({}),y.args={},b={component:d,title:`Components/Data Display/Divider`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
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