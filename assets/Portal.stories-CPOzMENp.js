import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Kr as n,Ti as r,Vr as i,_ as a,do as o,g as s,h as c,m as l}from"./iframe-Ck_dG9Ja.js";var u,d=e((()=>{a(),l(),u=e=>c(r,{...e});try{u.displayName=`Portal`,u.__docgenInfo={description:``,displayName:`Portal`,filePath:`/home/runner/work/design-system/design-system/src/components/Utils/Portal/stories/Portal.tsx`,methods:[],props:{},tags:{}}}catch{}})),f,p,m,h,g;e((()=>{a(),f=t(o(),1),d(),l(),p=e=>{let[t,r]=(0,f.useState)(!1),a=(0,f.useRef)(null);return s(n,{alignItems:`center`,justifyContent:`center`,height:`100%`,children:[c(i,{variant:`outlined`,onClick:()=>{r(!t)},children:t?`Unmount children`:`Mount children`}),s(n,{sx:{border:`1px solid`,my:1,p:1},children:[`It looks like I will render here.`,t?c(u,{container:a.current,...e,children:c(`span`,{children:`But I actually render here!`})}):null]}),c(n,{sx:{border:`1px solid`,my:1,p:1},ref:a})]})},m=p.bind({}),m.args={},h={component:u,title:`Components/Utils/Portal`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
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