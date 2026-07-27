import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,Br as r,E as i,Fr as a,I as o,M as s,P as c,R as l,Si as u,Vi as d,Ya as f,at as p,d as m,f as h,m as g,p as _,u as v,zi as y}from"./iframe-BjXtUHP7.js";var b,x=e((()=>{g(),m(),b=e=>h(l,{...e});try{b.displayName=`Table`,b.__docgenInfo={description:``,displayName:`Table`,filePath:`/home/runner/work/design-system/design-system/src/components/DataDisplay/Table/stories/Table.tsx`,methods:[],props:{component:{defaultValue:null,declarations:[{fileName:`design-system/node_modules/@mui/material/esm/Table/Table.d.ts`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})),S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{g(),S=t(f(),1),x(),m(),C=(e,t,n,r,i,a)=>({calories:t,carbs:r,fat:n,history:[{amount:3,customerId:`11091700`,date:`2020-01-05`},{amount:1,customerId:`Anonymous`,date:`2020-01-02`}],name:e,price:a,protein:i}),w=[C(`Frozen yoghurt`,159,6,24,4,3.99),C(`Ice cream sandwich`,237,9,37,4.3,4.99),C(`Eclair`,262,16,24,6,3.79),C(`Cupcake`,305,3.7,67,4.3,2.5),C(`Gingerbread`,356,16,49,3.9,1.5)],T=e=>{let{row:t}=e,[s,l]=(0,S.useState)(!1);return _(v,{children:[_(i,{sx:{"& > *":{borderBottom:`unset`}},children:[h(c,{children:h(a,{"aria-label":`expand row`,size:`small`,onClick:()=>l(!s),children:s?`-`:`+`})}),h(c,{component:`th`,scope:`row`,children:t.name}),h(c,{align:`right`,children:t.calories}),h(c,{align:`right`,children:t.fat}),h(c,{align:`right`,children:t.carbs}),h(c,{align:`right`,children:t.protein})]}),h(i,{children:h(c,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:h(d,{in:s,timeout:`auto`,unmountOnExit:!0,children:_(r,{sx:{margin:1},children:[h(u,{variant:`h6`,gutterBottom:!0,component:`div`,children:`History`}),_(b,{size:`small`,"aria-label":`purchases`,children:[h(n,{children:_(i,{children:[h(c,{children:`Date`}),h(c,{children:`Customer`}),h(c,{align:`right`,children:`Amount`}),h(c,{align:`right`,children:`Total price ($)`})]})}),h(o,{children:t.history.map(e=>_(i,{children:[h(c,{component:`th`,scope:`row`,children:e.date}),h(c,{children:e.customerId}),h(c,{align:`right`,children:e.amount}),h(c,{align:`right`,children:Math.round(e.amount*t.price*100)/100})]},e.date))})]})]})})})})]})},E=e=>{let{stickyHeader:t}=e;return h(p,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:h(s,{sx:{maxHeight:t?250:`auto`},children:_(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[h(n,{children:_(i,{children:[h(c,{children:`Dessert (100g serving)`}),h(c,{align:`right`,children:`Calories`}),h(c,{align:`right`,children:`Fat\xA0(g)`}),h(c,{align:`right`,children:`Carbs\xA0(g)`}),h(c,{align:`right`,children:`Protein\xA0(g)`})]})}),h(o,{children:w.map(e=>_(i,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[h(c,{component:`th`,scope:`row`,children:e.name}),h(c,{align:`right`,children:e.calories}),h(c,{align:`right`,children:e.fat}),h(c,{align:`right`,children:e.carbs}),h(c,{align:`right`,children:e.protein})]},e.name))})]})})})},D=e=>{let{stickyHeader:t}=e;return h(p,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:h(s,{component:y,sx:{maxHeight:t?250:`auto`},children:_(b,{sx:{minWidth:650},"aria-label":`simple table`,...e,children:[_(n,{children:[_(i,{children:[h(c,{align:`center`,colSpan:2,children:`Name`}),h(c,{align:`center`,colSpan:3,children:`Details`})]}),_(i,{children:[h(c,{children:`Dessert (100g serving)`}),h(c,{align:`right`,children:`Calories`}),h(c,{align:`right`,children:`Fat\xA0(g)`}),h(c,{align:`right`,children:`Carbs\xA0(g)`}),h(c,{align:`right`,children:`Protein\xA0(g)`})]})]}),h(o,{children:w.map(e=>_(i,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[h(c,{component:`th`,scope:`row`,children:e.name}),h(c,{align:`right`,children:e.calories}),h(c,{align:`right`,children:e.fat}),h(c,{align:`right`,children:e.carbs}),h(c,{align:`right`,children:e.protein})]},e.name))})]})})})},O=e=>h(p,{spacing:2,alignItems:`center`,justifyContent:`center`,height:`100%`,children:h(s,{component:y,children:_(b,{"aria-label":`collapsible table`,...e,children:[h(n,{children:_(i,{children:[h(c,{}),h(c,{children:`Dessert (100g serving)`}),h(c,{align:`right`,children:`Calories`}),h(c,{align:`right`,children:`Fat\xA0(g)`}),h(c,{align:`right`,children:`Carbs\xA0(g)`}),h(c,{align:`right`,children:`Protein\xA0(g)`})]})}),h(o,{children:w.map(e=>h(T,{row:e},e.name))})]})})}),k=E.bind({}),k.args={},A=E.bind({}),A.args={size:`small`},j=E.bind({}),j.args={stickyHeader:!0},M=D.bind({}),M.args={},N=O.bind({}),N.args={},P={component:b,title:`Components/Data Display/Table`},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
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