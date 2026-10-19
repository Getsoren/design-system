import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{B as n,Br as r,Gr as i,I as a,Ji as o,M as s,O as c,P as l,R as u,Xi as d,ao as f,f as p,g as m,h,ki as g,m as _,p as v,st as y}from"./iframe-CANUN3yO.js";var b,x=e((()=>{m(),v(),b=e=>_(n,{...e});try{b.displayName=`Table`,b.__docgenInfo={description:``,displayName:`Table`,filePath:`/home/runner/work/design-system/design-system/src/components/DataDisplay/Table/stories/Table.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Table/Table.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{m(),S=t(f(),1),x(),v(),C=(e,t,n,r,i,a)=>({calories:t,carbs:r,fat:n,history:[{amount:3,customerId:`11091700`,date:`2020-01-05`},{amount:1,customerId:`Anonymous`,date:`2020-01-02`}],name:e,price:a,protein:i}),w=[C(`Frozen yoghurt`,159,6,24,4,3.99),C(`Ice cream sandwich`,237,9,37,4.3,4.99),C(`Eclair`,262,16,24,6,3.79),C(`Cupcake`,305,3.7,67,4.3,2.5),C(`Gingerbread`,356,16,49,3.9,1.5)],T=e=>{let{row:t}=e,[n,o]=(0,S.useState)(!1);return h(p,{children:[h(c,{sx:{"& > *":{borderBottom:`unset`}},children:[_(a,{children:_(r,{"aria-label":`expand row`,size:`small`,onClick:()=>o(!n),children:n?`-`:`+`})}),_(a,{component:`th`,scope:`row`,children:t.name}),_(a,{align:`right`,children:t.calories}),_(a,{align:`right`,children:t.fat}),_(a,{align:`right`,children:t.carbs}),_(a,{align:`right`,children:t.protein})]}),_(c,{children:_(a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:_(d,{in:n,timeout:`auto`,unmountOnExit:!0,children:h(i,{sx:{margin:1},children:[_(g,{variant:`h6`,gutterBottom:!0,component:`div`,children:`History`}),h(b,{size:`small`,"aria-label":`purchases`,children:[_(s,{children:h(c,{children:[_(a,{children:`Date`}),_(a,{children:`Customer`}),_(a,{align:`right`,children:`Amount`}),_(a,{align:`right`,children:`Total price ($)`})]})}),_(u,{children:t.history.map(e=>h(c,{children:[_(a,{component:`th`,scope:`row`,children:e.date}),_(a,{children:e.customerId}),_(a,{align:`right`,children:e.amount}),_(a,{align:`right`,children:Math.round(e.amount*t.price*100)/100})]},e.date))})]})]})})})})]})},E=e=>{let{stickyHeader:t}=e;return _(y,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:_(l,{sx:{maxHeight:t?250:`auto`},children:h(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[_(s,{children:h(c,{children:[_(a,{children:`Dessert (100g serving)`}),_(a,{align:`right`,children:`Calories`}),_(a,{align:`right`,children:`Fat\xA0(g)`}),_(a,{align:`right`,children:`Carbs\xA0(g)`}),_(a,{align:`right`,children:`Protein\xA0(g)`})]})}),_(u,{children:w.map(e=>h(c,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[_(a,{component:`th`,scope:`row`,children:e.name}),_(a,{align:`right`,children:e.calories}),_(a,{align:`right`,children:e.fat}),_(a,{align:`right`,children:e.carbs}),_(a,{align:`right`,children:e.protein})]},e.name))})]})})})},D=e=>{let{stickyHeader:t}=e;return _(y,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:_(l,{component:o,sx:{maxHeight:t?250:`auto`},children:h(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[h(s,{children:[h(c,{children:[_(a,{align:`center`,colSpan:2,children:`Name`}),_(a,{align:`center`,colSpan:3,children:`Details`})]}),h(c,{children:[_(a,{children:`Dessert (100g serving)`}),_(a,{align:`right`,children:`Calories`}),_(a,{align:`right`,children:`Fat\xA0(g)`}),_(a,{align:`right`,children:`Carbs\xA0(g)`}),_(a,{align:`right`,children:`Protein\xA0(g)`})]})]}),_(u,{children:w.map(e=>h(c,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[_(a,{component:`th`,scope:`row`,children:e.name}),_(a,{align:`right`,children:e.calories}),_(a,{align:`right`,children:e.fat}),_(a,{align:`right`,children:e.carbs}),_(a,{align:`right`,children:e.protein})]},e.name))})]})})})},O=e=>_(y,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:_(l,{component:o,children:h(b,{"aria-label":`collapsible table`,...e,children:[_(s,{children:h(c,{children:[_(a,{}),_(a,{children:`Dessert (100g serving)`}),_(a,{align:`right`,children:`Calories`}),_(a,{align:`right`,children:`Fat\xA0(g)`}),_(a,{align:`right`,children:`Carbs\xA0(g)`}),_(a,{align:`right`,children:`Protein\xA0(g)`})]})}),_(u,{children:w.map(e=>_(T,{row:e},e.name))})]})})}),k=E.bind({}),k.args={},A=E.bind({}),A.args={size:`small`},j=E.bind({}),j.args={stickyHeader:!0},M=D.bind({}),M.args={},N=O.bind({}),N.args={},P={component:b,title:`Components/Data Display/Table`},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
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