import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{B as n,H as r,I as i,Li as a,M as o,R as s,W as c,Wr as l,Yr as u,_ as d,_o as f,aa as p,b as m,dt as h,g,ra as _,v,y}from"./iframe-fMdw047D.js";var b,x=e((()=>{m(),d(),b=e=>v(c,{...e});try{b.displayName=`Table`,b.__docgenInfo={description:``,displayName:`Table`,filePath:`/home/runner/work/design-system/design-system/src/components/DataDisplay/Table/stories/Table.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Table/Table.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{m(),S=t(f(),1),x(),d(),C=(e,t,n,r,i,a)=>({calories:t,carbs:r,fat:n,history:[{amount:3,customerId:`11091700`,date:`2020-01-05`},{amount:1,customerId:`Anonymous`,date:`2020-01-02`}],name:e,price:a,protein:i}),w=[C(`Frozen yoghurt`,159,6,24,4,3.99),C(`Ice cream sandwich`,237,9,37,4.3,4.99),C(`Eclair`,262,16,24,6,3.79),C(`Cupcake`,305,3.7,67,4.3,2.5),C(`Gingerbread`,356,16,49,3.9,1.5)],T=e=>{let{row:t}=e,[s,c]=(0,S.useState)(!1);return y(g,{children:[y(o,{sx:{"& > *":{borderBottom:`unset`}},children:[v(n,{children:v(l,{"aria-label":`expand row`,size:`small`,onClick:()=>c(!s),children:s?`-`:`+`})}),v(n,{component:`th`,scope:`row`,children:t.name}),v(n,{align:`right`,children:t.calories}),v(n,{align:`right`,children:t.fat}),v(n,{align:`right`,children:t.carbs}),v(n,{align:`right`,children:t.protein})]}),v(o,{children:v(n,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:v(p,{in:s,timeout:`auto`,unmountOnExit:!0,children:y(u,{sx:{margin:1},children:[v(a,{variant:`h6`,gutterBottom:!0,component:`div`,children:`History`}),y(b,{size:`small`,"aria-label":`purchases`,children:[v(i,{children:y(o,{children:[v(n,{children:`Date`}),v(n,{children:`Customer`}),v(n,{align:`right`,children:`Amount`}),v(n,{align:`right`,children:`Total price ($)`})]})}),v(r,{children:t.history.map(e=>y(o,{children:[v(n,{component:`th`,scope:`row`,children:e.date}),v(n,{children:e.customerId}),v(n,{align:`right`,children:e.amount}),v(n,{align:`right`,children:Math.round(e.amount*t.price*100)/100})]},e.date))})]})]})})})})]})},E=e=>{let{stickyHeader:t}=e;return v(h,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:v(s,{sx:{maxHeight:t?250:`auto`},children:y(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[v(i,{children:y(o,{children:[v(n,{children:`Dessert (100g serving)`}),v(n,{align:`right`,children:`Calories`}),v(n,{align:`right`,children:`Fat\xA0(g)`}),v(n,{align:`right`,children:`Carbs\xA0(g)`}),v(n,{align:`right`,children:`Protein\xA0(g)`})]})}),v(r,{children:w.map(e=>y(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[v(n,{component:`th`,scope:`row`,children:e.name}),v(n,{align:`right`,children:e.calories}),v(n,{align:`right`,children:e.fat}),v(n,{align:`right`,children:e.carbs}),v(n,{align:`right`,children:e.protein})]},e.name))})]})})})},D=e=>{let{stickyHeader:t}=e;return v(h,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:v(s,{component:_,sx:{maxHeight:t?250:`auto`},children:y(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[y(i,{children:[y(o,{children:[v(n,{align:`center`,colSpan:2,children:`Name`}),v(n,{align:`center`,colSpan:3,children:`Details`})]}),y(o,{children:[v(n,{children:`Dessert (100g serving)`}),v(n,{align:`right`,children:`Calories`}),v(n,{align:`right`,children:`Fat\xA0(g)`}),v(n,{align:`right`,children:`Carbs\xA0(g)`}),v(n,{align:`right`,children:`Protein\xA0(g)`})]})]}),v(r,{children:w.map(e=>y(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[v(n,{component:`th`,scope:`row`,children:e.name}),v(n,{align:`right`,children:e.calories}),v(n,{align:`right`,children:e.fat}),v(n,{align:`right`,children:e.carbs}),v(n,{align:`right`,children:e.protein})]},e.name))})]})})})},O=e=>v(h,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:v(s,{component:_,children:y(b,{"aria-label":`collapsible table`,...e,children:[v(i,{children:y(o,{children:[v(n,{}),v(n,{children:`Dessert (100g serving)`}),v(n,{align:`right`,children:`Calories`}),v(n,{align:`right`,children:`Fat\xA0(g)`}),v(n,{align:`right`,children:`Carbs\xA0(g)`}),v(n,{align:`right`,children:`Protein\xA0(g)`})]})}),v(r,{children:w.map(e=>v(T,{row:e},e.name))})]})})}),k=E.bind({}),k.args={},A=E.bind({}),A.args={size:`small`},j=E.bind({}),j.args={stickyHeader:!0},M=D.bind({}),M.args={},N=O.bind({}),N.args={},P={component:b,title:`Components/Data Display/Table`},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
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