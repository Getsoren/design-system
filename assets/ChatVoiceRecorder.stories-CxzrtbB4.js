import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Pi as n,_ as r,ct as i,do as a,ea as o,g as s,h as c,m as l}from"./iframe-Dm8aw-Bq.js";import{n as u,t as d}from"./ChatVoiceRecorder-DYqcwXDD.js";var f,p,m,h;e((()=>{r(),f=t(a(),1),u(),l(),p={component:d,parameters:{layout:`centered`},title:`Components/Data Display/ChatVoiceRecorder`},m=()=>{let[e,t]=(0,f.useState)(!1),[r,a]=(0,f.useState)(null),[l,u]=(0,f.useState)(null);return s(i,{spacing:2,width:360,height:`100%`,justifyContent:`center`,children:[s(o,{variant:`outlined`,sx:{alignItems:`center`,display:`flex`,gap:1,paddingX:2,paddingY:1},children:[c(n,{variant:`body2`,color:`text.secondary`,flex:1,children:`Écrire un message…`}),c(d,{onRecorded:e=>{t(!0),setTimeout(()=>{a(`${e.type||`audio`} — ${(e.size/1024).toFixed(1)} kB`),t(!1)},2e3)},onError:e=>u(e instanceof Error?e.message:String(e)),isProcessing:e,labels:{cancel:`Annuler`,record:`Enregistrer un vocal`,send:`Utiliser cet enregistrement`}})]}),r&&s(n,{variant:`caption`,children:[`Dernière prise : `,r]}),l&&c(n,{variant:`caption`,color:`error`,children:l})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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