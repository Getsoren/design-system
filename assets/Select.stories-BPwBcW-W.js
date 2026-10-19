import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Gt as n,Kn as r,Sn as i,Ut as a,Vt as o,_ as s,ct as c,do as l,g as u,h as d,m as f,tn as p,wr as m}from"./iframe-Dm8aw-Bq.js";var h,g=e((()=>{s(),f(),h=e=>d(a,{...e});try{h.displayName=`Select`,h.__docgenInfo={description:``,displayName:`Select`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/Select/stories/Select.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`((instance: unknown) => void | (() => VoidOrUndefinedOnly)) | RefObject<unknown> | null`}}},tags:{}}}catch{}})),_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{s(),_=t(l(),1),g(),f(),v={PaperProps:{style:{maxHeight:224,width:250}}},y=[`Oliver Hansen`,`Van Henry`,`April Tucker`,`Ralph Hubbard`,`Omar Alexander`,`Carlos Abbott`,`Miriam Wagner`,`Bradley Wilkerson`,`Virginia Andrews`,`Kelly Snyder`],b=e=>{let[t,n]=(0,_.useState)(``),{variant:a}=e,s=e=>{n(e.target.value)};return u(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[u(r,{sx:{width:150},children:[d(i,{id:`demo-simple-select-label-xsmall`,size:`xSmall`,variant:a,children:`Age (xSmall)`}),u(h,{labelId:`demo-simple-select-label-small`,value:t,label:`Age (xSmall)`,onChange:s,size:`xSmall`,...e,children:[d(o,{value:10,children:`Ten`}),d(o,{value:20,children:`Twenty`}),d(o,{value:30,children:`Thirty`})]})]}),u(r,{sx:{width:200},children:[d(i,{id:`demo-simple-select-label-small`,size:`small`,variant:a,children:`Age (small)`}),u(h,{labelId:`demo-simple-select-label-small`,value:t,label:`Age (small)`,onChange:s,size:`small`,...e,children:[d(o,{value:10,children:`Ten`}),d(o,{value:20,children:`Twenty`}),d(o,{value:30,children:`Thirty`})]})]}),u(r,{sx:{width:200},children:[d(i,{id:`demo-simple-select-label`,variant:a,children:`Age`}),u(h,{labelId:`demo-simple-select-label`,value:t,label:`Age`,onChange:s,...e,children:[d(o,{value:10,children:`Ten`}),d(o,{value:20,children:`Twenty`}),d(o,{value:30,children:`Thirty`})]})]})]})},x=e=>{let[t,n]=(0,_.useState)(`20`);return d(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:d(r,{children:u(h,{size:`small`,value:t,label:`Age`,onChange:e=>{n(e.target.value)},...e,children:[d(o,{value:10,children:`Ten`}),d(o,{value:20,children:`Twenty`}),d(o,{value:30,children:`Thirty`})]})})})},S=e=>{let[t,a]=(0,_.useState)([]);return d(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:u(r,{sx:{m:1,width:300},children:[d(i,{id:`demo-multiple-checkbox-label`,children:`Tag`}),d(h,{labelId:`demo-multiple-checkbox-label`,id:`demo-multiple-checkbox`,multiple:!0,value:t,onChange:e=>{let{target:{value:t}}=e;a(typeof t==`string`?t.split(`,`):t)},input:d(n,{label:`Tag`}),renderValue:e=>e.join(`, `),MenuProps:v,...e,children:y.map(e=>u(o,{value:e,children:[d(m,{checked:t.indexOf(e)>-1}),d(p,{primary:e})]},e))})]})})},C=b.bind({}),C.args={variant:`outlined`},w=b.bind({}),w.args={variant:`filled`},T=b.bind({}),T.args={variant:`standard`},E=x.bind({}),E.args={disableUnderline:!0,variant:`standard`},D=S.bind({}),D.args={},O={component:h,title:`Components/Inputs/Select`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
  const [age, setAge] = useState("");
  const {
    variant
  } = args;
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{
      width: 150
    }}>
        <InputLabel id="demo-simple-select-label-xsmall" size="xSmall" variant={variant}>
          Age (xSmall)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (xSmall)" onChange={handleChange} size="xSmall" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label-small" size="small" variant={variant}>
          Age (small)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (small)" onChange={handleChange} size="small" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label" variant={variant}>
          Age
        </InputLabel>
        <Select labelId="demo-simple-select-label" value={age} label="Age" onChange={handleChange} {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const [age, setAge] = useState("");
  const {
    variant
  } = args;
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{
      width: 150
    }}>
        <InputLabel id="demo-simple-select-label-xsmall" size="xSmall" variant={variant}>
          Age (xSmall)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (xSmall)" onChange={handleChange} size="xSmall" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label-small" size="small" variant={variant}>
          Age (small)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (small)" onChange={handleChange} size="small" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label" variant={variant}>
          Age
        </InputLabel>
        <Select labelId="demo-simple-select-label" value={age} label="Age" onChange={handleChange} {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const [age, setAge] = useState("");
  const {
    variant
  } = args;
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{
      width: 150
    }}>
        <InputLabel id="demo-simple-select-label-xsmall" size="xSmall" variant={variant}>
          Age (xSmall)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (xSmall)" onChange={handleChange} size="xSmall" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label-small" size="small" variant={variant}>
          Age (small)
        </InputLabel>
        <Select labelId="demo-simple-select-label-small" value={age} label="Age (small)" onChange={handleChange} size="small" {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{
      width: 200
    }}>
        <InputLabel id="demo-simple-select-label" variant={variant}>
          Age
        </InputLabel>
        <Select labelId="demo-simple-select-label" value={age} label="Age" onChange={handleChange} {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => {
  const [age, setAge] = useState("20");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl>
        <Select size="small" value={age} label="Age" onChange={handleChange} {...args}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  const [personName, setPersonName] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: {
        value
      }
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  return <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <FormControl sx={{
      m: 1,
      width: 300
    }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select labelId="demo-multiple-checkbox-label" id="demo-multiple-checkbox" multiple value={personName} onChange={handleChange} input={<OutlinedInput label="Tag" />} renderValue={selected => selected.join(", ")} MenuProps={MenuProps} {...args}>
          {names.map(name => <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>)}
        </Select>
      </FormControl>
    </Stack>;
}`,...D.parameters?.docs?.source}}},k=[`Basic`,`Filled`,`Standard`,`Text`,`Checkmarks`]}))();export{C as Basic,D as Checkmarks,w as Filled,T as Standard,E as Text,k as __namedExportsOrder,O as default};