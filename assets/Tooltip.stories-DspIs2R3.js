import{i as e}from"./preload-helper-xPQekRTU.js";import{Br as t,Fr as n,Si as r,Xi as i,Zr as a,at as o,d as s,f as c,ht as l,m as u,p as d,vt as f}from"./iframe-94AAr2Wq.js";import{n as p,t as m}from"./Tooltip-DodhjtKE.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{u(),p(),s(),h=i(({children:e,className:t,...n})=>c(m,{...n,classes:{popper:t},children:e}))({[`& .${l.tooltip}`]:{maxWidth:500}}),g=i(({children:e,className:t,...n})=>c(m,{...n,classes:{popper:t},children:e}))({[`& .${l.tooltip}`]:{maxWidth:`none`}}),_=`
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`,v=e=>c(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:c(m,{...e,title:`Hello Bro !`,children:c(t,{sx:{border:`1px dashed`,borderColor:`primary.main`,cursor:`default`,p:2},display:`flex`,alignItems:`center`,justifyContent:`center`,children:c(r,{children:`Please, hover me !`})})})}),y=e=>d(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[c(m,{...e,title:_,children:c(n,{sx:{m:1},children:`Default Width [300px]`})}),c(h,{title:_,children:c(n,{sx:{m:1},children:`Custom Width [500px]`})}),c(g,{title:_,children:c(n,{sx:{m:1},children:`No wrapping`})})]}),b=e=>d(o,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[c(m,{...e,title:`Add`,children:c(n,{children:`Grow`})}),c(m,{TransitionComponent:a,TransitionProps:{timeout:600},title:`Add`,children:c(n,{children:`Fade`})}),c(m,{TransitionComponent:f,title:`Add`,children:c(n,{children:`Zoom`})})]}),x=v.bind({}),x.args={},S=v.bind({}),S.args={arrow:!0},C=v.bind({}),C.args={placement:`top`},w=y.bind({}),w.args={},T=b.bind({}),T.args={},E=v.bind({}),E.args={followCursor:!0},D=v.bind({}),D.args={enterDelay:500},O=v.bind({}),O.args={leaveDelay:500},k={args:{arrow:!1},argTypes:{placement:{control:{type:`select`},options:[`top`,`right`,`bottom`,`left`]}},component:m,title:`Components/Data Display/Tooltip`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title={longText}>
      <Button sx={{
      m: 1
    }}>Default Width [300px]</Button>
    </Tooltip>
    <CustomWidthTooltip title={longText}>
      <Button sx={{
      m: 1
    }}>Custom Width [500px]</Button>
    </CustomWidthTooltip>
    <NoMaxWidthTooltip title={longText}>
      <Button sx={{
      m: 1
    }}>No wrapping</Button>
    </NoMaxWidthTooltip>
  </Stack>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Add">
      <Button>Grow</Button>
    </Tooltip>
    <Tooltip TransitionComponent={Fade} TransitionProps={{
    timeout: 600
  }} title="Add">
      <Button>Fade</Button>
    </Tooltip>
    <Tooltip TransitionComponent={Zoom} title="Add">
      <Button>Zoom</Button>
    </Tooltip>
  </Stack>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tooltip {...args} title="Hello Bro !">
      <Box sx={{
      border: "1px dashed",
      borderColor: "primary.main",
      cursor: "default",
      p: 2
    }} display="flex" alignItems="center" justifyContent="center">
        <Typography>Please, hover me !</Typography>
      </Box>
    </Tooltip>
  </Stack>`,...O.parameters?.docs?.source}}},A=[`Basic`,`WithArrow`,`WithPlacement`,`VariableWidth`,`Transition`,`FollowCursor`,`WithEnterDelay`,`WithLeaveDelay`]}))();export{x as Basic,E as FollowCursor,T as Transition,w as VariableWidth,S as WithArrow,D as WithEnterDelay,O as WithLeaveDelay,C as WithPlacement,A as __namedExportsOrder,k as default};