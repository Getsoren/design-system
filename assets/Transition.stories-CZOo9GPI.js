import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$n as n,G as r,Kr as i,Pn as a,Wn as o,_ as s,do as c,ea as l,g as u,h as d,m as f,na as p,ni as m,xt as h}from"./iframe-Ck_dG9Ja.js";var g,_,v,y,b,x,S,C,w,T,E;e((()=>{s(),g=t(c(),1),f(),_=d(l,{sx:{m:1},elevation:4,children:d(i,{component:`svg`,sx:{height:100,width:100},children:d(i,{component:`polygon`,sx:{fill:e=>e.palette.common.white,stroke:e=>e.palette.divider,strokeWidth:1},points:`0,100 50,00, 100,100`})})}),v=e=>{switch(e){case`Fade`:return m;case`Collapse`:return p;case`Grow`:return a;case`Slide`:return n;case`Zoom`:return h;default:return m}},y=(e,{name:t})=>{let n=v(t),[a,s]=(0,g.useState)(!1);return d(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:u(i,{sx:{height:300},children:[d(i,{textAlign:`center`,children:d(o,{control:d(r,{checked:a,onChange:()=>{s(e=>!e)}}),label:`Show`})}),u(i,{sx:{"& > :not(style)":{display:`flex`,height:120,justifyContent:`space-around`,width:250}},children:[u(`div`,{children:[d(n,{in:a,...e,children:_}),d(n,{in:a,...e,children:_})]}),u(`div`,{children:[d(i,{sx:{width:`50%`},children:d(n,{orientation:`horizontal`,in:a,...e,children:_})}),d(i,{sx:{width:`50%`},children:d(n,{orientation:`horizontal`,in:a,...e,children:_})})]})]})]})})},b=y.bind({}),b.args={},x=y.bind({}),x.args={},S=y.bind({}),S.args={},C=y.bind({}),C.args={},w=y.bind({}),w.args={},T={component:y,title:`Components/Utils/Transition`},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const Transition = getTransitionComponent(name);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      height: 300
    }}>
        <Box textAlign="center">
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        </Box>
        <Box sx={{
        "& > :not(style)": {
          display: "flex",
          height: 120,
          justifyContent: "space-around",
          width: 250
        }
      }}>
          <div>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
          </div>
          <div>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const Transition = getTransitionComponent(name);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      height: 300
    }}>
        <Box textAlign="center">
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        </Box>
        <Box sx={{
        "& > :not(style)": {
          display: "flex",
          height: 120,
          justifyContent: "space-around",
          width: 250
        }
      }}>
          <div>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
          </div>
          <div>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const Transition = getTransitionComponent(name);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      height: 300
    }}>
        <Box textAlign="center">
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        </Box>
        <Box sx={{
        "& > :not(style)": {
          display: "flex",
          height: 120,
          justifyContent: "space-around",
          width: 250
        }
      }}>
          <div>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
          </div>
          <div>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const Transition = getTransitionComponent(name);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      height: 300
    }}>
        <Box textAlign="center">
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        </Box>
        <Box sx={{
        "& > :not(style)": {
          display: "flex",
          height: 120,
          justifyContent: "space-around",
          width: 250
        }
      }}>
          <div>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
          </div>
          <div>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(args, {
  name
}) => {
  const Transition = getTransitionComponent(name);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev => !prev);
  };
  return <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{
      height: 300
    }}>
        <Box textAlign="center">
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        </Box>
        <Box sx={{
        "& > :not(style)": {
          display: "flex",
          height: 120,
          justifyContent: "space-around",
          width: 250
        }
      }}>
          <div>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
            <Transition in={checked} {...args}>
              {icon}
            </Transition>
          </div>
          <div>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
            <Box sx={{
            width: "50%"
          }}>
              <Transition orientation="horizontal" in={checked} {...args}>
                {icon}
              </Transition>
            </Box>
          </div>
        </Box>
      </Box>
    </Box>;
}`,...w.parameters?.docs?.source}}},E=[`Fade`,`Collapse`,`Grow`,`Slide`,`Zoom`]}))();export{x as Collapse,b as Fade,S as Grow,C as Slide,w as Zoom,E as __namedExportsOrder,T as default};