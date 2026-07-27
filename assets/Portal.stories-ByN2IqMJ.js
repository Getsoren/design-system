import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Fr as r,Ya as i,d as a,f as o,hi as s,m as c,p as l}from"./iframe-94AAr2Wq.js";var u,d=e((()=>{c(),a(),u=e=>o(s,{...e});try{u.displayName=`Portal`,u.__docgenInfo={description:``,displayName:`Portal`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/Portal/stories/Portal.tsx`,methods:[],props:{},tags:{}}}catch{}})),f,p,m,h,g;e((()=>{c(),f=t(i(),1),d(),a(),p=e=>{let[t,i]=(0,f.useState)(!1),a=(0,f.useRef)(null);return l(n,{alignItems:`center`,justifyContent:`center`,height:`100%`,children:[o(r,{variant:`outlined`,onClick:()=>{i(!t)},children:t?`Unmount children`:`Mount children`}),l(n,{sx:{border:`1px solid`,my:1,p:1},children:[`It looks like I will render here.`,t?o(u,{container:a.current,...e,children:o(`span`,{children:`But I actually render here!`})}):null]}),o(n,{sx:{border:`1px solid`,my:1,p:1},ref:a})]})},m=p.bind({}),m.args={},h={component:u,title:`Components/Utils/Portal`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
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