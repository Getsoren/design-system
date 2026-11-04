import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{J as n,Ln as r,Yr as i,_ as a,aa as o,ai as s,b as c,nr as l,qn as u,ra as d,v as f,wt as p,y as m,yo as h}from"./iframe-sULezfsv.js";var g,_,v,y,b,x,S,C,w,T,E;e((()=>{c(),g=t(h(),1),a(),_=f(d,{sx:{m:1},elevation:4,children:f(i,{component:`svg`,sx:{height:100,width:100},children:f(i,{component:`polygon`,sx:{fill:e=>e.palette.common.white,stroke:e=>e.palette.divider,strokeWidth:1},points:`0,100 50,00, 100,100`})})}),v=e=>{switch(e){case`Fade`:return s;case`Collapse`:return o;case`Grow`:return r;case`Slide`:return l;case`Zoom`:return p;default:return s}},y=(e,{name:t})=>{let r=v(t),[a,o]=(0,g.useState)(!1);return f(i,{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,children:m(i,{sx:{height:300},children:[f(i,{textAlign:`center`,children:f(u,{control:f(n,{checked:a,onChange:()=>{o(e=>!e)}}),label:`Show`})}),m(i,{sx:{"& > :not(style)":{display:`flex`,height:120,justifyContent:`space-around`,width:250}},children:[m(`div`,{children:[f(r,{in:a,...e,children:_}),f(r,{in:a,...e,children:_})]}),m(`div`,{children:[f(i,{sx:{width:`50%`},children:f(r,{orientation:`horizontal`,in:a,...e,children:_})}),f(i,{sx:{width:`50%`},children:f(r,{orientation:`horizontal`,in:a,...e,children:_})})]})]})]})})},b=y.bind({}),b.args={},x=y.bind({}),x.args={},S=y.bind({}),S.args={},C=y.bind({}),C.args={},w=y.bind({}),w.args={},T={component:y,title:`Components/Utils/Transition`},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args, {
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