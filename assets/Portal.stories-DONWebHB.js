import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ga as n,Lr as r,Mr as i,c as a,di as o,l as s,m as c,s as l}from"./iframe-C3dUH62Y.js";var u,d=e((()=>{c(),l(),u=e=>a(o,{...e});try{u.displayName=`Portal`,u.__docgenInfo={description:``,displayName:`Portal`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/Portal/stories/Portal.tsx`,methods:[],props:{},tags:{}}}catch{}})),f,p,m,h,g;e((()=>{c(),f=t(n(),1),d(),l(),p=e=>{let[t,n]=(0,f.useState)(!1),o=(0,f.useRef)(null);return s(r,{alignItems:`center`,justifyContent:`center`,height:`100%`,children:[a(i,{variant:`outlined`,onClick:()=>{n(!t)},children:t?`Unmount children`:`Mount children`}),s(r,{sx:{border:`1px solid`,my:1,p:1},children:[`It looks like I will render here.`,t?a(u,{container:o.current,...e,children:a(`span`,{children:`But I actually render here!`})}):null]}),a(r,{sx:{border:`1px solid`,my:1,p:1},ref:o})]})},m=p.bind({}),m.args={},h={component:u,title:`Components/Utils/Portal`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(false);
  const container = useRef(null);
  const handleClick = () => {
    setShow(!show);
  };
  return <Box alignItems="center" justifyContent="center" height="100%">
      <Button variant="outlined" onClick={handleClick}>
        {show ? "Unmount children" : "Mount children"}
      </Button>
      <Box sx={{
      border: "1px solid",
      my: 1,
      p: 1
    }}>
        It looks like I will render here.
        {show ? <Portal container={container.current} {...args}>
            <span>But I actually render here!</span>
          </Portal> : null}
      </Box>
      <Box sx={{
      border: "1px solid",
      my: 1,
      p: 1
    }} ref={container} />
    </Box>;
}`,...m.parameters?.docs?.source}}},g=[`Basic`]}))();export{m as Basic,g as __namedExportsOrder,h as default};