import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$i as n,B as r,Br as i,Gr as a,I as o,M as s,Ni as c,O as l,P as u,R as d,f,g as p,h as m,m as h,p as g,st as _,ta as v,uo as y}from"./iframe-CT4WrDGS.js";var b,x=e((()=>{p(),g(),b=e=>h(r,{...e});try{b.displayName=`Table`,b.__docgenInfo={description:``,displayName:`Table`,filePath:`/home/runner/work/design-system/design-system/src/components/DataDisplay/Table/stories/Table.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Table/Table.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{p(),S=t(y(),1),x(),g(),C=(e,t,n,r,i,a)=>({calories:t,carbs:r,fat:n,history:[{amount:3,customerId:`11091700`,date:`2020-01-05`},{amount:1,customerId:`Anonymous`,date:`2020-01-02`}],name:e,price:a,protein:i}),w=[C(`Frozen yoghurt`,159,6,24,4,3.99),C(`Ice cream sandwich`,237,9,37,4.3,4.99),C(`Eclair`,262,16,24,6,3.79),C(`Cupcake`,305,3.7,67,4.3,2.5),C(`Gingerbread`,356,16,49,3.9,1.5)],T=e=>{let{row:t}=e,[n,r]=(0,S.useState)(!1);return m(f,{children:[m(l,{sx:{"& > *":{borderBottom:`unset`}},children:[h(o,{children:h(i,{"aria-label":`expand row`,size:`small`,onClick:()=>r(!n),children:n?`-`:`+`})}),h(o,{component:`th`,scope:`row`,children:t.name}),h(o,{align:`right`,children:t.calories}),h(o,{align:`right`,children:t.fat}),h(o,{align:`right`,children:t.carbs}),h(o,{align:`right`,children:t.protein})]}),h(l,{children:h(o,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:h(v,{in:n,timeout:`auto`,unmountOnExit:!0,children:m(a,{sx:{margin:1},children:[h(c,{variant:`h6`,gutterBottom:!0,component:`div`,children:`History`}),m(b,{size:`small`,"aria-label":`purchases`,children:[h(s,{children:m(l,{children:[h(o,{children:`Date`}),h(o,{children:`Customer`}),h(o,{align:`right`,children:`Amount`}),h(o,{align:`right`,children:`Total price ($)`})]})}),h(d,{children:t.history.map(e=>m(l,{children:[h(o,{component:`th`,scope:`row`,children:e.date}),h(o,{children:e.customerId}),h(o,{align:`right`,children:e.amount}),h(o,{align:`right`,children:Math.round(e.amount*t.price*100)/100})]},e.date))})]})]})})})})]})},E=e=>{let{stickyHeader:t}=e;return h(_,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:h(u,{sx:{maxHeight:t?250:`auto`},children:m(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[h(s,{children:m(l,{children:[h(o,{children:`Dessert (100g serving)`}),h(o,{align:`right`,children:`Calories`}),h(o,{align:`right`,children:`Fat\xA0(g)`}),h(o,{align:`right`,children:`Carbs\xA0(g)`}),h(o,{align:`right`,children:`Protein\xA0(g)`})]})}),h(d,{children:w.map(e=>m(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[h(o,{component:`th`,scope:`row`,children:e.name}),h(o,{align:`right`,children:e.calories}),h(o,{align:`right`,children:e.fat}),h(o,{align:`right`,children:e.carbs}),h(o,{align:`right`,children:e.protein})]},e.name))})]})})})},D=e=>{let{stickyHeader:t}=e;return h(_,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:h(u,{component:n,sx:{maxHeight:t?250:`auto`},children:m(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[m(s,{children:[m(l,{children:[h(o,{align:`center`,colSpan:2,children:`Name`}),h(o,{align:`center`,colSpan:3,children:`Details`})]}),m(l,{children:[h(o,{children:`Dessert (100g serving)`}),h(o,{align:`right`,children:`Calories`}),h(o,{align:`right`,children:`Fat\xA0(g)`}),h(o,{align:`right`,children:`Carbs\xA0(g)`}),h(o,{align:`right`,children:`Protein\xA0(g)`})]})]}),h(d,{children:w.map(e=>m(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[h(o,{component:`th`,scope:`row`,children:e.name}),h(o,{align:`right`,children:e.calories}),h(o,{align:`right`,children:e.fat}),h(o,{align:`right`,children:e.carbs}),h(o,{align:`right`,children:e.protein})]},e.name))})]})})})},O=e=>h(_,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:h(u,{component:n,children:m(b,{"aria-label":`collapsible table`,...e,children:[h(s,{children:m(l,{children:[h(o,{}),h(o,{children:`Dessert (100g serving)`}),h(o,{align:`right`,children:`Calories`}),h(o,{align:`right`,children:`Fat\xA0(g)`}),h(o,{align:`right`,children:`Carbs\xA0(g)`}),h(o,{align:`right`,children:`Protein\xA0(g)`})]})}),h(d,{children:w.map(e=>h(T,{row:e},e.name))})]})})}),k=E.bind({}),k.args={},A=E.bind({}),A.args={size:`small`},j=E.bind({}),j.args={stickyHeader:!0},M=D.bind({}),M.args={},N=O.bind({}),N.args={},P={component:b,title:`Components/Data Display/Table`},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
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