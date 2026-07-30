import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Br as n,Ya as r,at as i,d as a,f as o,m as s,p as c}from"./iframe-9cuzH673.js";import{n as l,t as u}from"./Chat-BKaRs3a5.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{s(),d=t(r(),1),l(),a(),f=new Date,p=new Date(f.getTime()-864e5),m=new Date(f.getTime()-1728e5),h=[{avatar:null,firstName:`Alice`,lastName:`Martin`,userId:`user-1`},{avatar:null,firstName:`Bob`,lastName:`Dupont`,userId:`user-2`},{avatar:null,firstName:`Claire`,lastName:`Bernard`,userId:`user-3`}],g=[{avatar:null,email:`david.leroy@example.com`,firstName:`David`,id:`user-4`,lastName:`Leroy`},{avatar:null,email:`emma.moreau@example.com`,firstName:`Emma`,id:`user-5`,lastName:`Moreau`},{avatar:null,email:`francois.petit@example.com`,firstName:`François`,id:`user-6`,lastName:`Petit`}],_=[{createdAt:m.toISOString(),id:`thread-1`,lastMessagePreview:`Sure, I'll send you the details right away!`,participants:[h[0],h[1]],unreadCount:2,updatedAt:f.toISOString()},{createdAt:m.toISOString(),id:`thread-2`,lastMessagePreview:`The worksite visit is confirmed for tomorrow`,participants:[h[2]],unreadCount:0,updatedAt:p.toISOString()},{createdAt:m.toISOString(),id:`thread-3`,lastMessagePreview:`Thanks for the update`,participants:[h[0],h[1],h[2]],unreadCount:0,updatedAt:m.toISOString()}],v=[{authorId:`user-1`,body:`Hey! How's the project going?`,createdAt:p.toISOString(),id:`msg-1`},{authorId:`current-user`,body:`Going well! We're on track for delivery.`,createdAt:p.toISOString(),id:`msg-2`},{authorId:`user-1`,body:`Great to hear. Can you send me the latest report?`,createdAt:f.toISOString(),id:`msg-3`},{authorId:`current-user`,body:`Sure, I'll send you the details right away!`,createdAt:f.toISOString(),id:`msg-4`},{authorId:`user-1`,body:`Also check this link: https://example.com/booking/123`,createdAt:f.toISOString(),id:`msg-5`}],y=`current-user`,b=()=>{let[e,t]=(0,d.useState)(`thread-1`),[n,r]=(0,d.useState)(!1),[i,a]=(0,d.useState)(v),s=(0,d.useCallback)((e,t)=>{a(e=>[...e,{authorId:y,body:t,createdAt:new Date().toISOString(),id:`msg-${Date.now()}`}])},[]);return c(u,{height:`100vh`,children:[c(u.Body,{children:[o(u.ConversationList,{threads:_,selectedThreadId:e,onSelectThread:t,onNewConversation:()=>r(!0)}),o(u.ConversationDetail,{threadId:e,participants:_.find(t=>t.id===e)?.participants,messages:e===`thread-1`?i:[],currentUserId:y,onDeleteConversation:()=>{},onNewConversation:()=>r(!0),onSendMessage:s,onAddParticipants:()=>{},onSearchParticipants:()=>{},searchResults:g})]}),o(u.ParticipantDialog,{open:n,onClose:()=>r(!1),onConfirm:()=>r(!1),onSearch:()=>{},searchResults:g})]})},x=b.bind({}),S=e=>o(u,{height:`100vh`,children:o(u.ConversationList,{threads:_,selectedThreadId:`thread-1`,onSelectThread:()=>{},onNewConversation:()=>{},...e})}),C=S.bind({}),w=S.bind({}),w.args={isLoading:!0,threads:void 0},T=[`Alice`,`Bob`,`Claire`,`David`,`Emma`,`François`,`Gabriel`,`Hélène`,`Ivan`,`Julie`],E=[`Martin`,`Dupont`,`Bernard`,`Leroy`,`Moreau`,`Petit`,`Roux`,`Simon`,`Laurent`,`Michel`],D=[`Sure, I'll send you the details!`,`The worksite visit is confirmed`,`Thanks for the update`,`Can we reschedule?`,`I'll check and get back to you`,`Sounds good, let's proceed`,`Please review the document`,`Meeting moved to 3pm`],O=(e,t)=>Array.from({length:e},(e,n)=>{let r=t+n,i=new Date(f.getTime()-r*36e5);return{createdAt:i.toISOString(),id:`thread-${r}`,lastMessagePreview:D[r%D.length],participants:[{avatar:null,firstName:T[r%T.length],lastName:E[r%E.length],userId:`user-${r}`},{avatar:null,firstName:T[(r+3)%T.length],lastName:E[(r+3)%E.length],userId:`user-${r}-2`}],unreadCount:r%4==0?r%5:0,updatedAt:i.toISOString()}}),k=10,A=80,j=()=>{let[e,t]=(0,d.useState)(()=>O(k,0)),[n,r]=(0,d.useState)(!1),i=e.length<A,a=(0,d.useCallback)(()=>{n||(r(!0),setTimeout(()=>{t(e=>[...e,...O(k,e.length)]),r(!1)},800))},[n]);return o(u,{height:`100vh`,children:o(u.ConversationList,{threads:e,selectedThreadId:`thread-0`,onSelectThread:()=>{},onNewConversation:()=>{},onLoadMore:a,hasMore:i})})},M=j.bind({}),N=S.bind({}),N.args={formatParticipantName:e=>e.firstName},P=e=>o(u,{height:`100vh`,children:o(u.ConversationDetail,{threadId:`thread-1`,participants:[h[0],h[1]],messages:v,currentUserId:y,onDeleteConversation:()=>{},onNewConversation:()=>{},onSendMessage:()=>{},onAddParticipants:()=>{},...e})}),F=P.bind({}),I=P.bind({}),I.args={isLoading:!0,messages:void 0},L=()=>o(u,{height:`100vh`,children:o(u.ConversationDetail,{participants:null,messages:void 0,currentUserId:y,onDeleteConversation:()=>{},onNewConversation:()=>{},onSendMessage:()=>{},onAddParticipants:()=>{}})}),R=()=>o(n,{maxWidth:500,children:o(u.MessageInput,{onSend:()=>{}})}),z=R.bind({}),B=()=>c(i,{spacing:3,maxWidth:500,p:3,children:[o(u.MessageBubble,{isOwn:!1,message:{authorId:`user-1`,body:`Hello! How are you doing today?`,createdAt:f.toISOString(),id:`1`},participants:[h[0]]}),o(u.MessageBubble,{isOwn:!0,message:{authorId:y,body:`I'm doing great, thanks for asking!`,createdAt:f.toISOString(),id:`2`}}),o(u.MessageBubble,{isOwn:!1,message:{authorId:`user-1`,body:`Check out this link: https://example.com/some-page`,createdAt:f.toISOString(),id:`3`},participants:[h[0]]})]}),V=B.bind({}),H={parameters:{layout:`fullscreen`},title:`Components/Data Display/Chat`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [selectedThreadId, setSelectedThreadId] = useState("thread-1");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [localMessages, setLocalMessages] = useState<ChatMessage[]>(messagesThread1);
  const handleSendMessage = useCallback((_threadId: string, body: string) => {
    setLocalMessages(prev => [...prev, {
      authorId: CURRENT_USER_ID,
      body,
      createdAt: new Date().toISOString(),
      id: \`msg-\${Date.now()}\`
    }]);
  }, []);
  return <Chat height="100vh">
      <Chat.Body>
        <Chat.ConversationList threads={threads} selectedThreadId={selectedThreadId} onSelectThread={setSelectedThreadId} onNewConversation={() => setDialogOpen(true)} />
        <Chat.ConversationDetail threadId={selectedThreadId} participants={threads.find(t => t.id === selectedThreadId)?.participants} messages={selectedThreadId === "thread-1" ? localMessages : []} currentUserId={CURRENT_USER_ID} onDeleteConversation={() => {}} onNewConversation={() => setDialogOpen(true)} onSendMessage={handleSendMessage} onAddParticipants={() => {}} onSearchParticipants={() => {}} searchResults={searchUsers} />
      </Chat.Body>
      <Chat.ParticipantDialog open={dialogOpen} onClose={() => setDialogOpen(false)} onConfirm={() => setDialogOpen(false)} onSearch={() => {}} searchResults={searchUsers} />
    </Chat>;
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <Chat height="100vh">
    <Chat.ConversationList threads={threads} selectedThreadId="thread-1" onSelectThread={() => {}} onNewConversation={() => {}} {...args} />
  </Chat>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <Chat height="100vh">
    <Chat.ConversationList threads={threads} selectedThreadId="thread-1" onSelectThread={() => {}} onNewConversation={() => {}} {...args} />
  </Chat>`,...w.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [allThreads, setAllThreads] = useState<ChatThread[]>(() => generateThreads(PAGE_SIZE, 0));
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const hasMore = allThreads.length < TOTAL_ITEMS;
  const handleLoadMore = useCallback(() => {
    if (isLoadingMore) {
      return;
    }
    setIsLoadingMore(true);

    // Simulate API delay
    setTimeout(() => {
      setAllThreads(prev => [...prev, ...generateThreads(PAGE_SIZE, prev.length)]);
      setIsLoadingMore(false);
    }, 800);
  }, [isLoadingMore]);
  return <Chat height="100vh">
      <Chat.ConversationList threads={allThreads} selectedThreadId="thread-0" onSelectThread={() => {}} onNewConversation={() => {}} onLoadMore={handleLoadMore} hasMore={hasMore} />
    </Chat>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => <Chat height="100vh">
    <Chat.ConversationList threads={threads} selectedThreadId="thread-1" onSelectThread={() => {}} onNewConversation={() => {}} {...args} />
  </Chat>`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => <Chat height="100vh">
    <Chat.ConversationDetail threadId="thread-1" participants={[participants[0], participants[1]]} messages={messagesThread1} currentUserId={CURRENT_USER_ID} onDeleteConversation={() => {}} onNewConversation={() => {}} onSendMessage={() => {}} onAddParticipants={() => {}} {...args} />
  </Chat>`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <Chat height="100vh">
    <Chat.ConversationDetail threadId="thread-1" participants={[participants[0], participants[1]]} messages={messagesThread1} currentUserId={CURRENT_USER_ID} onDeleteConversation={() => {}} onNewConversation={() => {}} onSendMessage={() => {}} onAddParticipants={() => {}} {...args} />
  </Chat>`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => <Chat height="100vh">
    <Chat.ConversationDetail participants={null} messages={undefined} currentUserId={CURRENT_USER_ID} onDeleteConversation={() => {}} onNewConversation={() => {}} onSendMessage={() => {}} onAddParticipants={() => {}} />
  </Chat>`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => <Box maxWidth={500}>
    <Chat.MessageInput onSend={() => {}} />
  </Box>`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => <Stack spacing={3} maxWidth={500} p={3}>
    <Chat.MessageBubble isOwn={false} message={{
    authorId: "user-1",
    body: "Hello! How are you doing today?",
    createdAt: now.toISOString(),
    id: "1"
  }} participants={[participants[0]]} />
    <Chat.MessageBubble isOwn message={{
    authorId: CURRENT_USER_ID,
    body: "I'm doing great, thanks for asking!",
    createdAt: now.toISOString(),
    id: "2"
  }} />
    <Chat.MessageBubble isOwn={false} message={{
    authorId: "user-1",
    body: "Check out this link: https://example.com/some-page",
    createdAt: now.toISOString(),
    id: "3"
  }} participants={[participants[0]]} />
  </Stack>`,...V.parameters?.docs?.source}}},U=[`Default`,`ConversationList`,`ConversationListLoading`,`ConversationListInfiniteScroll`,`ConversationListFirstNameOnly`,`ConversationDetail`,`ConversationDetailLoading`,`ConversationDetailEmpty`,`MessageInput`,`MessageBubble`]}))();export{F as ConversationDetail,L as ConversationDetailEmpty,I as ConversationDetailLoading,C as ConversationList,N as ConversationListFirstNameOnly,M as ConversationListInfiniteScroll,w as ConversationListLoading,x as Default,V as MessageBubble,z as MessageInput,U as __namedExportsOrder,H as default};