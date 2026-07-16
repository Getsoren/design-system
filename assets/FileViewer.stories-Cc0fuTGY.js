import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ga as n,at as r,c as i,jn as a,l as o,m as s,o as c,s as l}from"./iframe-KIu7hbaN.js";import{n as u,t as d}from"./Button-v5RLuN8L.js";import{n as f,t as p}from"./FileViewer-B7TE4_cM.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{s(),m=t(n(),1),f(),u(),l(),h=`https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf`,g=`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`,_=`https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png`,v=`https://app.api.dev.tracktor.fr/files/bookings/000039906/15ce1b4d-3da4-9543-2640-f267cd668130.csv`,y=`https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg`,b=`https://commons.wikimedia.org/wiki/File:JPG_Test.jpg`,x=e=>{let{width:t,disableLightbox:n}=e;return o(r,{direction:`row`,height:`100%`,alignItems:`center`,justifyContent:`center`,spacing:5,children:[i(p,{src:g,width:t,disableLightbox:n,...e}),i(p,{src:h,width:t,disableLightbox:n,...e})]})},S=e=>{let{width:t,disableLightbox:n}=e;return i(r,{direction:`row`,height:`100%`,alignItems:`center`,justifyContent:`center`,spacing:5,children:i(p,{src:g,width:t,disableLightbox:n,...e})})},C=e=>{let{width:t,disableLightbox:n,iconOnly:s}=e;return i(r,{height:`100%`,alignItems:`center`,justifyContent:`center`,children:o(a,{container:!0,spacing:5,justifyContent:`center`,alignItems:`center`,children:[o(a,{size:12,container:!0,justifyContent:`center`,spacing:5,children:[i(a,{children:i(p,{iconOnly:s,src:v,width:t,disableLightbox:n,fileName:`Document CSV`,...e})}),i(a,{children:i(p,{iconOnly:s,src:h,width:t,disableLightbox:n,fileName:`Document PDF`,...e})}),i(a,{children:i(p,{iconOnly:s,src:_,width:t,disableLightbox:n,fileName:`Image PNG`,...e})})]}),o(a,{size:12,container:!0,justifyContent:`center`,spacing:5,children:[i(a,{children:i(p,{iconOnly:s,src:y,width:t,disableLightbox:n,fileName:`No reconize extension`,...e})}),i(a,{children:i(p,{iconOnly:s,src:b,width:t,disableLightbox:n,fileName:`Image JPG`,...e})})]})]})})},w=e=>{let[t,n]=(0,m.useState)(``),[a,s]=(0,m.useState)(!1),l=()=>{n(h),s(!a)},u=()=>{n(g),s(!a)},f=()=>{s(!1)};return o(c,{children:[o(r,{direction:`row`,height:`100%`,alignItems:`center`,justifyContent:`center`,spacing:5,children:[i(d,{variant:`contained`,onClick:l,children:`Open PDF`}),i(d,{variant:`outlined`,onClick:u,children:`Open Image`})]}),i(p,{...e,src:t,open:a,onClose:f})]})},T=x.bind({}),T.args={width:220},E=x.bind({}),E.args={disableLightbox:!0,width:220},D=w.bind({}),D.args={disableThumb:!0,width:220},O=x.bind({}),O.args={variant:`rounded`,width:220},k=S.bind({}),k.args={src:`https://placehold.co/1000`,srcThumb:`https://placehold.co/500`,variant:`rounded`,width:220},A=S.bind({}),A.args={fileName:`Document CSV`,height:115,src:v,width:174},j=S.bind({}),j.args={src:`https://a.a/a.png`},M=C.bind({}),M.args={height:115,iconOnly:!0,width:100},N={component:p,title:`Components/Data Display/FileViewer`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
      <FileViewer src={testFilePDF} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
      <FileViewer src={testFilePDF} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  const [pathFile, setPathFile] = useState<string>("");
  const [openLightBox, setOpenLightBox] = useState<boolean>(false);
  const handleOpenLightBoxPDF = () => {
    setPathFile(testFilePDF);
    setOpenLightBox(!openLightBox);
  };
  const handleOpenLightBoxImage = () => {
    setPathFile(testImage);
    setOpenLightBox(!openLightBox);
  };
  const handleCloseLightBox = () => {
    setOpenLightBox(false);
  };
  return <>
      <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
        <Button variant="contained" onClick={handleOpenLightBoxPDF}>
          Open PDF
        </Button>
        <Button variant="outlined" onClick={handleOpenLightBoxImage}>
          Open Image
        </Button>
      </Stack>
      <FileViewer {...args} src={pathFile} open={openLightBox} onClose={handleCloseLightBox} />
    </>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
      <FileViewer src={testFilePDF} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox
  } = args;
  return <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const {
    width,
    disableLightbox,
    iconOnly
  } = args;
  return <Stack height="100%" alignItems="center" justifyContent="center">
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {/* Ligne du haut avec 3 icônes */}
        <Grid size={12} container justifyContent="center" spacing={5}>
          <Grid>
            <FileViewer iconOnly={iconOnly} src={csvFile} width={width} disableLightbox={disableLightbox} fileName="Document CSV" {...args} />
          </Grid>
          <Grid>
            <FileViewer iconOnly={iconOnly} src={testFilePDF} width={width} disableLightbox={disableLightbox} fileName="Document PDF" {...args} />
          </Grid>
          <Grid>
            <FileViewer iconOnly={iconOnly} src={testFilePNG} width={width} disableLightbox={disableLightbox} fileName="Image PNG" {...args} />
          </Grid>
        </Grid>

        {/* Ligne du bas avec 2 icônes */}
        <Grid size={12} container justifyContent="center" spacing={5}>
          <Grid>
            <FileViewer iconOnly={iconOnly} src={svgFile} width={width} disableLightbox={disableLightbox} fileName="No reconize extension" {...args} />
          </Grid>
          <Grid>
            <FileViewer iconOnly={iconOnly} src={jpgFile} width={width} disableLightbox={disableLightbox} fileName="Image JPG" {...args} />
          </Grid>
        </Grid>
      </Grid>
    </Stack>;
}`,...M.parameters?.docs?.source}}},P=[`Basic`,`DisableLightbox`,`DisableThumb`,`RoundedVariant`,`Thumbnail`,`Document`,`NotFound`,`IconOnly`]}))();export{T as Basic,E as DisableLightbox,D as DisableThumb,A as Document,M as IconOnly,j as NotFound,O as RoundedVariant,k as Thumbnail,P as __namedExportsOrder,N as default};