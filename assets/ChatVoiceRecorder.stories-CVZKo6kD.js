import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Li as n,_ as r,_o as i,b as a,dt as o,ra as s,v as c,y as l}from"./iframe-D9hj5naP.js";import{n as u,t as d}from"./ChatVoiceRecorder-Dn4bdBzi.js";var f,p,m,h,g,_;e((()=>{a(),f=t(i(),1),u(),r(),p={component:d,parameters:{layout:`centered`},title:`Components/Data Display/ChatVoiceRecorder`},m=()=>{let[e,t]=(0,f.useState)(!1),[r,i]=(0,f.useState)(null),[a,u]=(0,f.useState)(null);return l(o,{spacing:2,width:360,height:`100%`,justifyContent:`center`,children:[l(s,{variant:`outlined`,sx:{alignItems:`center`,display:`flex`,gap:1,paddingX:2,paddingY:1},children:[c(n,{variant:`body2`,color:`text.secondary`,flex:1,children:`Écrire un message…`}),c(d,{onRecorded:e=>{t(!0),setTimeout(()=>{i(`${e.type||`audio`} — ${(e.size/1024).toFixed(1)} kB`),t(!1)},2e3)},onError:e=>u(e instanceof Error?e.message:String(e)),isProcessing:e,labels:{cancel:`Annuler`,record:`Enregistrer un vocal`,send:`Utiliser cet enregistrement`}})]}),r&&l(n,{variant:`caption`,children:[`Dernière prise : `,r]}),a&&c(n,{variant:`caption`,color:`error`,children:a})]})},h=()=>l(s,{variant:`outlined`,sx:{alignItems:`center`,display:`flex`,gap:1,paddingX:2,paddingY:1,width:360},children:[c(n,{variant:`body2`,color:`text.secondary`,flex:1,children:`Appuyez sur le micro et parlez`}),c(d,{isHighlighted:!0,onRecorded:()=>{},labels:{record:`Enregistrer un vocal`}})]}),g=()=>c(d,{isHighlighted:!0,startLabel:`Tester la voix`,onRecorded:()=>{}}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastTake, setLastTake] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const handleRecorded = (audio: Blob) => {
    setIsProcessing(true);
    setTimeout(() => {
      setLastTake(\`\${audio.type || "audio"} — \${(audio.size / 1024).toFixed(1)} kB\`);
      setIsProcessing(false);
    }, 2000);
  };
  return <Stack spacing={2} width={360} height="100%" justifyContent="center">
      <Paper variant="outlined" sx={{
      alignItems: "center",
      display: "flex",
      gap: 1,
      paddingX: 2,
      paddingY: 1
    }}>
        <Typography variant="body2" color="text.secondary" flex={1}>
          Écrire un message…
        </Typography>
        <ChatVoiceRecorder onRecorded={handleRecorded} onError={err => setError(err instanceof Error ? err.message : String(err))} isProcessing={isProcessing} labels={{
        cancel: "Annuler",
        record: "Enregistrer un vocal",
        send: "Utiliser cet enregistrement"
      }} />
      </Paper>
      {lastTake && <Typography variant="caption">Dernière prise : {lastTake}</Typography>}
      {error && <Typography variant="caption" color="error">
          {error}
        </Typography>}
    </Stack>;
}`,...m.parameters?.docs?.source},description:{story:`Records through the real microphone (allow the permission prompt), then simulates a
2s consumption of the take (the caller's transcription/upload drives isProcessing).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <Paper variant="outlined" sx={{
  alignItems: "center",
  display: "flex",
  gap: 1,
  paddingX: 2,
  paddingY: 1,
  width: 360
}}>
    <Typography variant="body2" color="text.secondary" flex={1}>
      Appuyez sur le micro et parlez
    </Typography>
    <ChatVoiceRecorder isHighlighted onRecorded={() => {}} labels={{
    record: "Enregistrer un vocal"
  }} />
  </Paper>`,...h.parameters?.docs?.source},description:{story:`Filled like a ready send button, when a guide asks the user to answer out loud.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <ChatVoiceRecorder isHighlighted startLabel="Tester la voix" onRecorded={() => {}} />`,...g.parameters?.docs?.source},description:{story:`With its label, the mic reads as the call to action of a guide.`,...g.parameters?.docs?.description}}},_=[`Default`,`Highlighted`,`WithLabel`]}))();export{m as Default,h as Highlighted,g as WithLabel,_ as __namedExportsOrder,p as default};