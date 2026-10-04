import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$a as n,A as r,E as i,Hi as a,I as o,Ir as s,M as c,P as l,R as u,Ti as d,Vr as f,Wi as p,at as m,d as h,f as g,m as _,p as v,u as y}from"./iframe-Bka9vE-F.js";var b,x=e((()=>{_(),h(),b=e=>g(u,{...e});try{b.displayName=`Table`,b.__docgenInfo={description:``,displayName:`Table`,filePath:`/home/runner/work/design-system/design-system/src/components/DataDisplay/Table/stories/Table.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Table/Table.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{_(),S=t(n(),1),x(),h(),C=(e,t,n,r,i,a)=>({calories:t,carbs:r,fat:n,history:[{amount:3,customerId:`11091700`,date:`2020-01-05`},{amount:1,customerId:`Anonymous`,date:`2020-01-02`}],name:e,price:a,protein:i}),w=[C(`Frozen yoghurt`,159,6,24,4,3.99),C(`Ice cream sandwich`,237,9,37,4.3,4.99),C(`Eclair`,262,16,24,6,3.79),C(`Cupcake`,305,3.7,67,4.3,2.5),C(`Gingerbread`,356,16,49,3.9,1.5)],T=e=>{let{row:t}=e,[n,a]=(0,S.useState)(!1);return v(y,{children:[v(i,{sx:{"& > *":{borderBottom:`unset`}},children:[g(l,{children:g(s,{"aria-label":`expand row`,size:`small`,onClick:()=>a(!n),children:n?`-`:`+`})}),g(l,{component:`th`,scope:`row`,children:t.name}),g(l,{align:`right`,children:t.calories}),g(l,{align:`right`,children:t.fat}),g(l,{align:`right`,children:t.carbs}),g(l,{align:`right`,children:t.protein})]}),g(i,{children:g(l,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:g(p,{in:n,timeout:`auto`,unmountOnExit:!0,children:v(f,{sx:{margin:1},children:[g(d,{variant:`h6`,gutterBottom:!0,component:`div`,children:`History`}),v(b,{size:`small`,"aria-label":`purchases`,children:[g(r,{children:v(i,{children:[g(l,{children:`Date`}),g(l,{children:`Customer`}),g(l,{align:`right`,children:`Amount`}),g(l,{align:`right`,children:`Total price ($)`})]})}),g(o,{children:t.history.map(e=>v(i,{children:[g(l,{component:`th`,scope:`row`,children:e.date}),g(l,{children:e.customerId}),g(l,{align:`right`,children:e.amount}),g(l,{align:`right`,children:Math.round(e.amount*t.price*100)/100})]},e.date))})]})]})})})})]})},E=e=>{let{stickyHeader:t}=e;return g(m,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:g(c,{sx:{maxHeight:t?250:`auto`},children:v(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[g(r,{children:v(i,{children:[g(l,{children:`Dessert (100g serving)`}),g(l,{align:`right`,children:`Calories`}),g(l,{align:`right`,children:`Fat\xA0(g)`}),g(l,{align:`right`,children:`Carbs\xA0(g)`}),g(l,{align:`right`,children:`Protein\xA0(g)`})]})}),g(o,{children:w.map(e=>v(i,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[g(l,{component:`th`,scope:`row`,children:e.name}),g(l,{align:`right`,children:e.calories}),g(l,{align:`right`,children:e.fat}),g(l,{align:`right`,children:e.carbs}),g(l,{align:`right`,children:e.protein})]},e.name))})]})})})},D=e=>{let{stickyHeader:t}=e;return g(m,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:g(c,{component:a,sx:{maxHeight:t?250:`auto`},children:v(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[v(r,{children:[v(i,{children:[g(l,{align:`center`,colSpan:2,children:`Name`}),g(l,{align:`center`,colSpan:3,children:`Details`})]}),v(i,{children:[g(l,{children:`Dessert (100g serving)`}),g(l,{align:`right`,children:`Calories`}),g(l,{align:`right`,children:`Fat\xA0(g)`}),g(l,{align:`right`,children:`Carbs\xA0(g)`}),g(l,{align:`right`,children:`Protein\xA0(g)`})]})]}),g(o,{children:w.map(e=>v(i,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[g(l,{component:`th`,scope:`row`,children:e.name}),g(l,{align:`right`,children:e.calories}),g(l,{align:`right`,children:e.fat}),g(l,{align:`right`,children:e.carbs}),g(l,{align:`right`,children:e.protein})]},e.name))})]})})})},O=e=>g(m,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:g(c,{component:a,children:v(b,{"aria-label":`collapsible table`,...e,children:[g(r,{children:v(i,{children:[g(l,{}),g(l,{children:`Dessert (100g serving)`}),g(l,{align:`right`,children:`Calories`}),g(l,{align:`right`,children:`Fat\xA0(g)`}),g(l,{align:`right`,children:`Carbs\xA0(g)`}),g(l,{align:`right`,children:`Protein\xA0(g)`})]})}),g(o,{children:w.map(e=>g(T,{row:e},e.name))})]})})}),k=E.bind({}),k.args={},A=E.bind({}),A.args={size:`small`},j=E.bind({}),j.args={stickyHeader:!0},M=D.bind({}),M.args={},N=O.bind({}),N.args={},P={component:b,title:`Components/Data Display/Table`},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
  const {
    stickyHeader
  } = args;
  return <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TableContainer sx={{
      maxHeight: stickyHeader ? 250 : "auto"
    }}>
        <Table sx={{
        minWidth: 650
      }} aria-label="simple table" {...args}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => <TableRow key={row.name} sx={{
            "&:last-child td, &:last-child th": {
              border: 0
            }
          }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  const {
    stickyHeader
  } = args;
  return <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TableContainer sx={{
      maxHeight: stickyHeader ? 250 : "auto"
    }}>
        <Table sx={{
        minWidth: 650
      }} aria-label="simple table" {...args}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => <TableRow key={row.name} sx={{
            "&:last-child td, &:last-child th": {
              border: 0
            }
          }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const {
    stickyHeader
  } = args;
  return <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TableContainer sx={{
      maxHeight: stickyHeader ? 250 : "auto"
    }}>
        <Table sx={{
        minWidth: 650
      }} aria-label="simple table" {...args}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => <TableRow key={row.name} sx={{
            "&:last-child td, &:last-child th": {
              border: 0
            }
          }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const {
    stickyHeader
  } = args;
  return <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TableContainer component={Paper} sx={{
      maxHeight: stickyHeader ? 250 : "auto"
    }}>
        <Table sx={{
        minWidth: 650
      }} aria-label="simple table" {...args}>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Name
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => <TableRow key={row.name} sx={{
            "&:last-child td, &:last-child th": {
              border: 0
            }
          }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" {...args}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <Row key={row.name} row={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  </Stack>`,...N.parameters?.docs?.source}}},F=[`Basic`,`Dense`,`StickyHeader`,`ColumnGrouping`,`CollapsibleTable`]}))();export{k as Basic,N as CollapsibleTable,M as ColumnGrouping,A as Dense,j as StickyHeader,F as __namedExportsOrder,P as default};