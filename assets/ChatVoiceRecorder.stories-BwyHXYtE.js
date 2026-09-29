import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{$a as n,Hi as r,Ti as i,at as a,d as o,f as s,m as c,p as l}from"./iframe-BnMlKthA.js";import{n as u,t as d}from"./ChatVoiceRecorder-vKkE82r-.js";var f,p,m,h;e((()=>{c(),f=t(n(),1),u(),o(),p={component:d,parameters:{layout:`centered`},title:`Components/Data Display/ChatVoiceRecorder`},m=()=>{let[e,t]=(0,f.useState)(!1),[n,o]=(0,f.useState)(null),[c,u]=(0,f.useState)(null);return l(a,{spacing:2,width:360,height:`100%`,justifyContent:`center`,children:[l(r,{variant:`outlined`,sx:{alignItems:`center`,display:`flex`,gap:1,paddingX:2,paddingY:1},children:[s(i,{variant:`body2`,color:`text.secondary`,flex:1,children:`Écrire un message…`}),s(d,{onRecorded:e=>{t(!0),setTimeout(()=>{o(`${e.type||`audio`} — ${(e.size/1024).toFixed(1)} kB`),t(!1)},2e3)},onError:e=>u(e instanceof Error?e.message:String(e)),isProcessing:e,labels:{cancel:`Annuler`,record:`Enregistrer un vocal`,send:`Utiliser cet enregistrement`}})]}),n&&l(i,{variant:`caption`,children:[`Dernière prise : `,n]}),c&&s(i,{variant:`caption`,color:`error`,children:c})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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