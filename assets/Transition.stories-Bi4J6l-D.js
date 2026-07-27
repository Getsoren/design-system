import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{An as n,Br as r,H as i,Rn as a,Vi as o,Ya as s,Zr as c,d as l,f as u,m as d,p as f,qn as p,vt as m,zi as h}from"./iframe-BjXtUHP7.js";var g,_,v,y,b,x,S,C,w,T,E;e((()=>{d(),g=t(s(),1),l(),_=u(h,{sx:{m:1},elevation:4,children:u(r,{component:`svg`,sx:{height:100,width:100},children:u(r,{component:`polygon`,sx:{fill:e=>e.palette.common.white,stroke:e=>e.palette.divider,strokeWidth:1},points:`0,100 50,00, 100,100`})})}),v=e=>{switch(e){case`Fade`:return c;case`Collapse`:return o;case`Grow`:return n;case`Slide`:return p;case`Zoom`:return m;default:return c}},y=(e,{name:t})=>{let n=v(t),[o,s]=(0,g.useState)(!1);return u(r,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:f(r,{sx:{height:300},children:[u(r,{textAlign:`center`,children:u(a,{control:u(i,{checked:o,onChange:()=>{s(e=>!e)}}),label:`Show`})}),f(r,{sx:{"& > :not(style)":{display:`flex`,height:120,justifyContent:`space-around`,width:250}},children:[f(`div`,{children:[u(n,{in:o,...e,children:_}),u(n,{in:o,...e,children:_})]}),f(`div`,{children:[u(r,{sx:{width:`50%`},children:u(n,{orientation:`horizontal`,in:o,...e,children:_})}),u(r,{sx:{width:`50%`},children:u(n,{orientation:`horizontal`,in:o,...e,children:_})})]})]})]})})},b=y.bind({}),b.args={},x=y.bind({}),x.args={},S=y.bind({}),S.args={},C=y.bind({}),C.args={},w=y.bind({}),w.args={},T={component:y,title:`Components/Utils/Transition`},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args, {
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