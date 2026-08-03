import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Bt as n,Ht as r,Qt as i,Rt as a,Vn as o,Ya as s,at as c,d as l,f as u,m as d,p as f,yn as p,yr as m}from"./iframe-BJWYUZp-.js";var h,g=e((()=>{d(),l(),h=e=>u(n,{...e});try{h.displayName=`Select`,h.__docgenInfo={description:``,displayName:`Select`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/Select/stories/Select.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`((instance: unknown) => void | (() => VoidOrUndefinedOnly)) | RefObject<unknown> | null`}}},tags:{}}}catch{}})),_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{d(),_=t(s(),1),g(),l(),v={PaperProps:{style:{maxHeight:224,width:250}}},y=[`Oliver Hansen`,`Van Henry`,`April Tucker`,`Ralph Hubbard`,`Omar Alexander`,`Carlos Abbott`,`Miriam Wagner`,`Bradley Wilkerson`,`Virginia Andrews`,`Kelly Snyder`],b=e=>{let[t,n]=(0,_.useState)(``),{variant:r}=e,i=e=>{n(e.target.value)};return f(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[f(o,{sx:{width:150},children:[u(p,{id:`demo-simple-select-label-xsmall`,size:`xSmall`,variant:r,children:`Age (xSmall)`}),f(h,{labelId:`demo-simple-select-label-small`,value:t,label:`Age (xSmall)`,onChange:i,size:`xSmall`,...e,children:[u(a,{value:10,children:`Ten`}),u(a,{value:20,children:`Twenty`}),u(a,{value:30,children:`Thirty`})]})]}),f(o,{sx:{width:200},children:[u(p,{id:`demo-simple-select-label-small`,size:`small`,variant:r,children:`Age (small)`}),f(h,{labelId:`demo-simple-select-label-small`,value:t,label:`Age (small)`,onChange:i,size:`small`,...e,children:[u(a,{value:10,children:`Ten`}),u(a,{value:20,children:`Twenty`}),u(a,{value:30,children:`Thirty`})]})]}),f(o,{sx:{width:200},children:[u(p,{id:`demo-simple-select-label`,variant:r,children:`Age`}),f(h,{labelId:`demo-simple-select-label`,value:t,label:`Age`,onChange:i,...e,children:[u(a,{value:10,children:`Ten`}),u(a,{value:20,children:`Twenty`}),u(a,{value:30,children:`Thirty`})]})]})]})},x=e=>{let[t,n]=(0,_.useState)(`20`);return u(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:u(o,{children:f(h,{size:`small`,value:t,label:`Age`,onChange:e=>{n(e.target.value)},...e,children:[u(a,{value:10,children:`Ten`}),u(a,{value:20,children:`Twenty`}),u(a,{value:30,children:`Thirty`})]})})})},S=e=>{let[t,n]=(0,_.useState)([]);return u(c,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:f(o,{sx:{m:1,width:300},children:[u(p,{id:`demo-multiple-checkbox-label`,children:`Tag`}),u(h,{labelId:`demo-multiple-checkbox-label`,id:`demo-multiple-checkbox`,multiple:!0,value:t,onChange:e=>{let{target:{value:t}}=e;n(typeof t==`string`?t.split(`,`):t)},input:u(r,{label:`Tag`}),renderValue:e=>e.join(`, `),MenuProps:v,...e,children:y.map(e=>f(a,{value:e,children:[u(m,{checked:t.indexOf(e)>-1}),u(i,{primary:e})]},e))})]})})},C=b.bind({}),C.args={variant:`outlined`},w=b.bind({}),w.args={variant:`filled`},T=b.bind({}),T.args={variant:`standard`},E=x.bind({}),E.args={disableUnderline:!0,variant:`standard`},D=S.bind({}),D.args={},O={component:h,title:`Components/Inputs/Select`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
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