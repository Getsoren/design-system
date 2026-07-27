import{i as e}from"./preload-helper-xPQekRTU.js";import{Ii as t,Mi as n,Pi as r,Qi as i,Si as a,at as o,d as s,f as c,m as l,p as u}from"./iframe-BjXtUHP7.js";var d,f=e((()=>{l(),s(),d=({children:e,...n})=>c(t,{...n,children:e});try{d.displayName=`Accordion`,d.__docgenInfo={description:``,displayName:`Accordion`,filePath:`/home/runner/work/design-system/design-system/src/components/Surface/Accordion/stories/Accordion.tsx`,methods:[],props:{slots:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The components used for each slot inside.`,name:`slots`,required:!1,tags:{default:`{}`},type:{name:`Partial<AccordionSlots>`}},slotProps:{defaultValue:{value:`{}`},declarations:[{fileName:`design-system/node_modules/@mui/material/esm/utils/types.d.ts`,name:`TypeLiteral`}],description:`The props used for each slot inside.`,name:`slotProps`,required:!1,tags:{default:`{}`},type:{name:`{ root?: SlotProps<ElementType<PaperProps, keyof IntrinsicElements>, AccordionRootSlotPropsOverrides, AccordionOwnerState>; heading?: SlotProps<...>; transition?: SlotComponentProps<...> | undefined; region?: SlotProps<...> | undefined; } | undefined`}},component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Accordion/Accordion.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{l(),f(),s(),p=()=>{let{palette:e}=i();return c(`svg`,{width:`20`,height:`20`,x:`0`,y:`0`,viewBox:`0 0 128 128`,children:c(`g`,{children:c(`path`,{d:`m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z`,fill:e.text.primary})})})},m=e=>u(o,{spacing:0,alignItems:`stretch`,justifyContent:`center`,height:`100%`,children:[u(d,{...e,children:[c(n,{expandIcon:c(p,{}),"aria-controls":`panel1a-content`,id:`panel1a-header`,children:c(a,{children:`Accordion 1`})}),c(r,{children:c(a,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`})})]}),u(d,{...e,children:[c(n,{expandIcon:c(p,{}),"aria-controls":`panel2a-content`,id:`panel2a-header`,children:c(a,{children:`Accordion 2`})}),c(r,{children:c(a,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`})})]}),c(d,{disabled:!0,...e,children:c(n,{expandIcon:c(p,{}),"aria-controls":`panel3a-content`,id:`panel3a-header`,children:c(a,{children:`Disabled Accordion`})})})]}),h=e=>u(o,{spacing:0,alignItems:`stretch`,justifyContent:`center`,height:`100%`,children:[u(d,{...e,children:[c(n,{expandIcon:c(p,{}),"aria-controls":`panel1a-content`,id:`panel1a-header`,sx:{textAlign:`right`},children:c(a,{variant:`h6`,width:`100%`,align:`right`,sx:{textDecoration:`underline`},children:`Accordion 1`})}),c(r,{children:c(a,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`})})]}),u(d,{...e,children:[c(n,{expandIcon:c(p,{}),"aria-controls":`panel2a-content`,id:`panel2a-header`,children:c(a,{variant:`h6`,width:`100%`,align:`right`,sx:{textDecoration:`underline`},children:`Accordion 2`})}),c(r,{children:c(a,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`})})]}),c(d,{disabled:!0,...e,children:c(n,{expandIcon:c(p,{}),"aria-controls":`panel3a-content`,id:`panel3a-header`,children:c(a,{variant:`h6`,width:`100%`,align:`right`,sx:{textDecoration:`underline`},children:`Disabled Accordion`})})})]}),g=m.bind({}),g.args={},_=m.bind({}),_.args={variant:`outlined`},v=m.bind({}),v.args={square:!0},y=m.bind({}),y.args={elevation:0,square:!0},b=m.bind({}),b.args={disableGutters:!0},x=m.bind({}),x.args={disableGutters:!0,elevation:0,square:!0,sx:{"&:before":{display:`none`}}},S=h.bind({}),S.args={},C={component:d,title:`Components/Surface/Accordion`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography>Disabled Accordion</Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <Stack spacing={0} alignItems="stretch" justifyContent="center" height="100%">
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{
      textAlign: "right"
    }}>
        <Typography variant="h6" width="100%" align="right" sx={{
        textDecoration: "underline"
      }}>
          Accordion 1
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel2a-content" id="panel2a-header">
        <Typography variant="h6" width="100%" align="right" sx={{
        textDecoration: "underline"
      }}>
          Accordion 2
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion disabled {...args}>
      <AccordionSummary expandIcon={<ArrowIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography variant="h6" width="100%" align="right" sx={{
        textDecoration: "underline"
      }}>
          Disabled Accordion
        </Typography>
      </AccordionSummary>
    </Accordion>
  </Stack>`,...S.parameters?.docs?.source}}},w=[`Basic`,`Outlined`,`Square`,`SquareWithNoElevation`,`DisableGutters`,`WithoutDivider`,`AlignRight`]}))();export{S as AlignRight,g as Basic,b as DisableGutters,_ as Outlined,v as Square,y as SquareWithNoElevation,x as WithoutDivider,w as __namedExportsOrder,C as default};