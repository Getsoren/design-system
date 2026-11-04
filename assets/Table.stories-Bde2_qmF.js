import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{B as n,H as r,I as i,Li as a,M as o,R as s,W as c,Wr as l,Yr as u,_ as d,aa as f,b as p,dt as m,g as h,ra as g,v as _,y as v,yo as y}from"./iframe-sULezfsv.js";var b,x=e((()=>{p(),d(),b=e=>_(c,{...e});try{b.displayName=`Table`,b.__docgenInfo={description:``,displayName:`Table`,filePath:`/home/runner/work/design-system/design-system/src/components/DataDisplay/Table/stories/Table.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Table/Table.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{p(),S=t(y(),1),x(),d(),C=(e,t,n,r,i,a)=>({calories:t,carbs:r,fat:n,history:[{amount:3,customerId:`11091700`,date:`2020-01-05`},{amount:1,customerId:`Anonymous`,date:`2020-01-02`}],name:e,price:a,protein:i}),w=[C(`Frozen yoghurt`,159,6,24,4,3.99),C(`Ice cream sandwich`,237,9,37,4.3,4.99),C(`Eclair`,262,16,24,6,3.79),C(`Cupcake`,305,3.7,67,4.3,2.5),C(`Gingerbread`,356,16,49,3.9,1.5)],T=e=>{let{row:t}=e,[s,c]=(0,S.useState)(!1);return v(h,{children:[v(o,{sx:{"& > *":{borderBottom:`unset`}},children:[_(n,{children:_(l,{"aria-label":`expand row`,size:`small`,onClick:()=>c(!s),children:s?`-`:`+`})}),_(n,{component:`th`,scope:`row`,children:t.name}),_(n,{align:`right`,children:t.calories}),_(n,{align:`right`,children:t.fat}),_(n,{align:`right`,children:t.carbs}),_(n,{align:`right`,children:t.protein})]}),_(o,{children:_(n,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:_(f,{in:s,timeout:`auto`,unmountOnExit:!0,children:v(u,{sx:{margin:1},children:[_(a,{variant:`h6`,gutterBottom:!0,component:`div`,children:`History`}),v(b,{size:`small`,"aria-label":`purchases`,children:[_(i,{children:v(o,{children:[_(n,{children:`Date`}),_(n,{children:`Customer`}),_(n,{align:`right`,children:`Amount`}),_(n,{align:`right`,children:`Total price ($)`})]})}),_(r,{children:t.history.map(e=>v(o,{children:[_(n,{component:`th`,scope:`row`,children:e.date}),_(n,{children:e.customerId}),_(n,{align:`right`,children:e.amount}),_(n,{align:`right`,children:Math.round(e.amount*t.price*100)/100})]},e.date))})]})]})})})})]})},E=e=>{let{stickyHeader:t}=e;return _(m,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:_(s,{sx:{maxHeight:t?250:`auto`},children:v(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[_(i,{children:v(o,{children:[_(n,{children:`Dessert (100g serving)`}),_(n,{align:`right`,children:`Calories`}),_(n,{align:`right`,children:`Fat\xA0(g)`}),_(n,{align:`right`,children:`Carbs\xA0(g)`}),_(n,{align:`right`,children:`Protein\xA0(g)`})]})}),_(r,{children:w.map(e=>v(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[_(n,{component:`th`,scope:`row`,children:e.name}),_(n,{align:`right`,children:e.calories}),_(n,{align:`right`,children:e.fat}),_(n,{align:`right`,children:e.carbs}),_(n,{align:`right`,children:e.protein})]},e.name))})]})})})},D=e=>{let{stickyHeader:t}=e;return _(m,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:_(s,{component:g,sx:{maxHeight:t?250:`auto`},children:v(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[v(i,{children:[v(o,{children:[_(n,{align:`center`,colSpan:2,children:`Name`}),_(n,{align:`center`,colSpan:3,children:`Details`})]}),v(o,{children:[_(n,{children:`Dessert (100g serving)`}),_(n,{align:`right`,children:`Calories`}),_(n,{align:`right`,children:`Fat\xA0(g)`}),_(n,{align:`right`,children:`Carbs\xA0(g)`}),_(n,{align:`right`,children:`Protein\xA0(g)`})]})]}),_(r,{children:w.map(e=>v(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[_(n,{component:`th`,scope:`row`,children:e.name}),_(n,{align:`right`,children:e.calories}),_(n,{align:`right`,children:e.fat}),_(n,{align:`right`,children:e.carbs}),_(n,{align:`right`,children:e.protein})]},e.name))})]})})})},O=e=>_(m,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:_(s,{component:g,children:v(b,{"aria-label":`collapsible table`,...e,children:[_(i,{children:v(o,{children:[_(n,{}),_(n,{children:`Dessert (100g serving)`}),_(n,{align:`right`,children:`Calories`}),_(n,{align:`right`,children:`Fat\xA0(g)`}),_(n,{align:`right`,children:`Carbs\xA0(g)`}),_(n,{align:`right`,children:`Protein\xA0(g)`})]})}),_(r,{children:w.map(e=>_(T,{row:e},e.name))})]})})}),k=E.bind({}),k.args={},A=E.bind({}),A.args={size:`small`},j=E.bind({}),j.args={stickyHeader:!0},M=D.bind({}),M.args={},N=O.bind({}),N.args={},P={component:b,title:`Components/Data Display/Table`},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
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