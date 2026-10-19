import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$i as n,Ni as r,g as i,h as a,m as o,p as s,st as c,uo as l}from"./iframe-CT4WrDGS.js";import{n as u,t as d}from"./ChatVoiceRecorder-hoWCVRrH.js";var f,p,m,h;e((()=>{i(),f=t(l(),1),u(),s(),p={component:d,parameters:{layout:`centered`},title:`Components/Data Display/ChatVoiceRecorder`},m=()=>{let[e,t]=(0,f.useState)(!1),[i,s]=(0,f.useState)(null),[l,u]=(0,f.useState)(null);return a(c,{spacing:2,width:360,height:`100%`,justifyContent:`center`,children:[a(n,{variant:`outlined`,sx:{alignItems:`center`,display:`flex`,gap:1,paddingX:2,paddingY:1},children:[o(r,{variant:`body2`,color:`text.secondary`,flex:1,children:`Écrire un message…`}),o(d,{onRecorded:e=>{t(!0),setTimeout(()=>{s(`${e.type||`audio`} — ${(e.size/1024).toFixed(1)} kB`),t(!1)},2e3)},onError:e=>u(e instanceof Error?e.message:String(e)),isProcessing:e,labels:{cancel:`Annuler`,record:`Enregistrer un vocal`,send:`Utiliser cet enregistrement`}})]}),i&&a(r,{variant:`caption`,children:[`Dernière prise : `,i]}),l&&o(r,{variant:`caption`,color:`error`,children:l})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
2s consumption of the take (the caller's transcription/upload drives isProcessing).`,...m.parameters?.docs?.description}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,p as default};