import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Bt as n,Cr as r,Gn as i,Ht as a,Wt as o,ao as s,en as c,g as l,h as u,m as d,p as f,st as p,xn as m}from"./iframe-BYniQDbP.js";var h,g=e((()=>{l(),f(),h=e=>d(a,{...e});try{h.displayName=`Select`,h.__docgenInfo={description:``,displayName:`Select`,filePath:`/home/runner/work/design-system/design-system/src/components/Inputs/Select/stories/Select.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`},{fileName:`design-system/node_modules/@mui/material/esm/internal/index.d.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`((instance: unknown) => void | (() => VoidOrUndefinedOnly)) | RefObject<unknown> | null`}}},tags:{}}}catch{}})),_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{l(),_=t(s(),1),g(),f(),v={PaperProps:{style:{maxHeight:224,width:250}}},y=[`Oliver Hansen`,`Van Henry`,`April Tucker`,`Ralph Hubbard`,`Omar Alexander`,`Carlos Abbott`,`Miriam Wagner`,`Bradley Wilkerson`,`Virginia Andrews`,`Kelly Snyder`],b=e=>{let[t,r]=(0,_.useState)(``),{variant:a}=e,o=e=>{r(e.target.value)};return u(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:[u(i,{sx:{width:150},children:[d(m,{id:`demo-simple-select-label-xsmall`,size:`xSmall`,variant:a,children:`Age (xSmall)`}),u(h,{labelId:`demo-simple-select-label-small`,value:t,label:`Age (xSmall)`,onChange:o,size:`xSmall`,...e,children:[d(n,{value:10,children:`Ten`}),d(n,{value:20,children:`Twenty`}),d(n,{value:30,children:`Thirty`})]})]}),u(i,{sx:{width:200},children:[d(m,{id:`demo-simple-select-label-small`,size:`small`,variant:a,children:`Age (small)`}),u(h,{labelId:`demo-simple-select-label-small`,value:t,label:`Age (small)`,onChange:o,size:`small`,...e,children:[d(n,{value:10,children:`Ten`}),d(n,{value:20,children:`Twenty`}),d(n,{value:30,children:`Thirty`})]})]}),u(i,{sx:{width:200},children:[d(m,{id:`demo-simple-select-label`,variant:a,children:`Age`}),u(h,{labelId:`demo-simple-select-label`,value:t,label:`Age`,onChange:o,...e,children:[d(n,{value:10,children:`Ten`}),d(n,{value:20,children:`Twenty`}),d(n,{value:30,children:`Thirty`})]})]})]})},x=e=>{let[t,r]=(0,_.useState)(`20`);return d(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:d(i,{children:u(h,{size:`small`,value:t,label:`Age`,onChange:e=>{r(e.target.value)},...e,children:[d(n,{value:10,children:`Ten`}),d(n,{value:20,children:`Twenty`}),d(n,{value:30,children:`Thirty`})]})})})},S=e=>{let[t,a]=(0,_.useState)([]);return d(p,{direction:`row`,spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:u(i,{sx:{m:1,width:300},children:[d(m,{id:`demo-multiple-checkbox-label`,children:`Tag`}),d(h,{labelId:`demo-multiple-checkbox-label`,id:`demo-multiple-checkbox`,multiple:!0,value:t,onChange:e=>{let{target:{value:t}}=e;a(typeof t==`string`?t.split(`,`):t)},input:d(o,{label:`Tag`}),renderValue:e=>e.join(`, `),MenuProps:v,...e,children:y.map(e=>u(n,{value:e,children:[d(r,{checked:t.indexOf(e)>-1}),d(c,{primary:e})]},e))})]})})},C=b.bind({}),C.args={variant:`outlined`},w=b.bind({}),w.args={variant:`filled`},T=b.bind({}),T.args={variant:`standard`},E=x.bind({}),E.args={disableUnderline:!0,variant:`standard`},D=S.bind({}),D.args={},O={component:h,title:`Components/Inputs/Select`},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => {
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