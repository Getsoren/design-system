import { Box, Stack, SvgIcon } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useCallback, useEffect, useRef, useState } from "react";
import Chat from "@/components/DataDisplay/Chat/Chat";
import type {
  ChatActionResponseHandler,
  ChatAttachment,
  ChatAttachmentLink,
  ChatLinkAttachment,
  ChatMessage,
  ChatMessageAction,
  ChatMessageBooking,
  ChatMessageInputHandle,
  ChatParticipant,
  ChatQuickAction,
  ChatSearchUser,
  ChatThread,
  ChatUploadAttachment,
} from "@/components/DataDisplay/Chat/types";
import FileTextIcon from "@/components/DataDisplay/Icons/FileTextIcon";
import LinkIcon from "@/components/DataDisplay/Icons/LinkIcon";
import SportsScoreIcon from "@/components/DataDisplay/Icons/SportsScoreIcon";
import { ThemeContext } from "@/context/Theme/ThemeProvider";

const now = new Date();
const yesterday = new Date(now.getTime() - 86400000);
const twoDaysAgo = new Date(now.getTime() - 172800000);

const participants: ChatParticipant[] = [
  { avatar: null, firstName: "Alice", lastName: "Martin", userId: "user-1" },
  { avatar: null, firstName: "Bob", lastName: "Dupont", userId: "user-2" },
  { avatar: null, firstName: "Claire", lastName: "Bernard", userId: "user-3" },
];

const searchUsers: ChatSearchUser[] = [
  { avatar: null, email: "david.leroy@example.com", firstName: "David", id: "user-4", lastName: "Leroy" },
  { avatar: null, email: "emma.moreau@example.com", firstName: "Emma", id: "user-5", lastName: "Moreau" },
  { avatar: null, email: "francois.petit@example.com", firstName: "François", id: "user-6", lastName: "Petit" },
];

const threads: ChatThread[] = [
  {
    createdAt: twoDaysAgo.toISOString(),
    id: "thread-1",
    lastMessagePreview: "Sure, I'll send you the details right away!",
    participants: [participants[0], participants[1]],
    unreadCount: 2,
    updatedAt: now.toISOString(),
  },
  {
    createdAt: twoDaysAgo.toISOString(),
    id: "thread-2",
    lastMessagePreview: "The worksite visit is confirmed for tomorrow",
    participants: [participants[2]],
    unreadCount: 0,
    updatedAt: yesterday.toISOString(),
  },
  {
    createdAt: twoDaysAgo.toISOString(),
    id: "thread-3",
    lastMessagePreview: "Thanks for the update",
    participants: [participants[0], participants[1], participants[2]],
    unreadCount: 0,
    updatedAt: twoDaysAgo.toISOString(),
  },
];

const messagesThread1: ChatMessage[] = [
  { authorId: "user-1", body: "Hey! How's the project going?", createdAt: yesterday.toISOString(), id: "msg-1" },
  { authorId: "current-user", body: "Going well! We're on track for delivery.", createdAt: yesterday.toISOString(), id: "msg-2" },
  { authorId: "user-1", body: "Great to hear. Can you send me the latest report?", createdAt: now.toISOString(), id: "msg-3" },
  {
    authorId: "current-user",
    body: "Sure, I'll send you the details right away!",
    createdAt: now.toISOString(),
    id: "msg-4",
  },
  {
    authorId: "user-1",
    body: "Also check this link: https://example.com/booking/123",
    createdAt: now.toISOString(),
    id: "msg-5",
  },
];

const CURRENT_USER_ID = "current-user";

const FullExample: StoryFn = () => {
  const [selectedThreadId, setSelectedThreadId] = useState("thread-1");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [localMessages, setLocalMessages] = useState<ChatMessage[]>(messagesThread1);

  const handleSendMessage = useCallback((_threadId: string, body: string) => {
    setLocalMessages((prev) => [
      ...prev,
      { authorId: CURRENT_USER_ID, body, createdAt: new Date().toISOString(), id: `msg-${Date.now()}` },
    ]);
  }, []);

  return (
    <Chat height="100vh">
      <Chat.Body>
        <Chat.ConversationList
          threads={threads}
          selectedThreadId={selectedThreadId}
          onSelectThread={setSelectedThreadId}
          onNewConversation={() => setDialogOpen(true)}
        />
        <Chat.ConversationDetail
          threadId={selectedThreadId}
          participants={threads.find((t) => t.id === selectedThreadId)?.participants}
          messages={selectedThreadId === "thread-1" ? localMessages : []}
          currentUserId={CURRENT_USER_ID}
          onDeleteConversation={() => {}}
          onNewConversation={() => setDialogOpen(true)}
          onSendMessage={handleSendMessage}
          onAddParticipants={() => {}}
          onSearchParticipants={() => {}}
          searchResults={searchUsers}
        />
      </Chat.Body>
      <Chat.ParticipantDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={() => setDialogOpen(false)}
        onSearch={() => {}}
        searchResults={searchUsers}
      />
    </Chat>
  );
};

export const Default = FullExample.bind({});

const ConversationListTemplate: StoryFn = (args) => (
  <Chat height="100vh">
    <Chat.ConversationList threads={threads} selectedThreadId="thread-1" onSelectThread={() => {}} onNewConversation={() => {}} {...args} />
  </Chat>
);

export const ConversationList = ConversationListTemplate.bind({});

export const ConversationListLoading = ConversationListTemplate.bind({});
ConversationListLoading.args = {
  isLoading: true,
  threads: undefined,
};

const FIRST_NAMES = ["Alice", "Bob", "Claire", "David", "Emma", "François", "Gabriel", "Hélène", "Ivan", "Julie"];
const LAST_NAMES = ["Martin", "Dupont", "Bernard", "Leroy", "Moreau", "Petit", "Roux", "Simon", "Laurent", "Michel"];
const PREVIEWS = [
  "Sure, I'll send you the details!",
  "The worksite visit is confirmed",
  "Thanks for the update",
  "Can we reschedule?",
  "I'll check and get back to you",
  "Sounds good, let's proceed",
  "Please review the document",
  "Meeting moved to 3pm",
];

const generateThreads = (count: number, startIndex: number): ChatThread[] =>
  Array.from({ length: count }, (_, i) => {
    const idx = startIndex + i;
    const date = new Date(now.getTime() - idx * 3600000);
    return {
      createdAt: date.toISOString(),
      id: `thread-${idx}`,
      lastMessagePreview: PREVIEWS[idx % PREVIEWS.length],
      participants: [
        {
          avatar: null,
          firstName: FIRST_NAMES[idx % FIRST_NAMES.length],
          lastName: LAST_NAMES[idx % LAST_NAMES.length],
          userId: `user-${idx}`,
        },
        {
          avatar: null,
          firstName: FIRST_NAMES[(idx + 3) % FIRST_NAMES.length],
          lastName: LAST_NAMES[(idx + 3) % LAST_NAMES.length],
          userId: `user-${idx}-2`,
        },
      ],
      unreadCount: idx % 4 === 0 ? idx % 5 : 0,
      updatedAt: date.toISOString(),
    };
  });

const PAGE_SIZE = 10;
const TOTAL_ITEMS = 80;

const ConversationListInfiniteScrollTemplate: StoryFn = () => {
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
      setAllThreads((prev) => [...prev, ...generateThreads(PAGE_SIZE, prev.length)]);
      setIsLoadingMore(false);
    }, 800);
  }, [isLoadingMore]);

  return (
    <Chat height="100vh">
      <Chat.ConversationList
        threads={allThreads}
        selectedThreadId="thread-0"
        onSelectThread={() => {}}
        onNewConversation={() => {}}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
      />
    </Chat>
  );
};

export const ConversationListInfiniteScroll = ConversationListInfiniteScrollTemplate.bind({});

export const ConversationListFirstNameOnly = ConversationListTemplate.bind({});
ConversationListFirstNameOnly.args = {
  formatParticipantName: (p: ChatParticipant) => p.firstName,
};

const ConversationDetailTemplate: StoryFn = (args) => (
  <Chat height="100vh">
    <Chat.ConversationDetail
      threadId="thread-1"
      participants={[participants[0], participants[1]]}
      messages={messagesThread1}
      currentUserId={CURRENT_USER_ID}
      onDeleteConversation={() => {}}
      onNewConversation={() => {}}
      onSendMessage={() => {}}
      onAddParticipants={() => {}}
      {...args}
    />
  </Chat>
);

export const ConversationDetail = ConversationDetailTemplate.bind({});

export const ConversationDetailLoading = ConversationDetailTemplate.bind({});
ConversationDetailLoading.args = {
  isLoading: true,
  messages: undefined,
};

export const ConversationDetailEmpty: StoryFn = () => (
  <Chat height="100vh">
    <Chat.ConversationDetail
      participants={null}
      messages={undefined}
      currentUserId={CURRENT_USER_ID}
      onDeleteConversation={() => {}}
      onNewConversation={() => {}}
      onSendMessage={() => {}}
      onAddParticipants={() => {}}
    />
  </Chat>
);

const MessageInputTemplate: StoryFn = () => (
  <Box maxWidth={500}>
    <Chat.MessageInput onSend={() => {}} />
  </Box>
);

export const MessageInput = MessageInputTemplate.bind({});

const MessageBubbleTemplate: StoryFn = () => (
  <Stack spacing={3} maxWidth={500} p={3}>
    <Chat.MessageBubble
      isOwn={false}
      message={{ authorId: "user-1", body: "Hello! How are you doing today?", createdAt: now.toISOString(), id: "1" }}
      participants={[participants[0]]}
    />
    <Chat.MessageBubble
      isOwn
      message={{ authorId: CURRENT_USER_ID, body: "I'm doing great, thanks for asking!", createdAt: now.toISOString(), id: "2" }}
    />
    <Chat.MessageBubble
      isOwn={false}
      message={{
        authorId: "user-1",
        body: "Check out this link: https://example.com/some-page",
        createdAt: now.toISOString(),
        id: "3",
      }}
      participants={[participants[0]]}
    />
  </Stack>
);

export const MessageBubble = MessageBubbleTemplate.bind({});

const photo = (seed: string, width = 1200, height = 900): ChatAttachment => ({
  fileName: `${seed}.jpg`,
  height,
  id: `photo-${seed}`,
  mimeType: "image/jpeg",
  size: 1_850_000,
  thumbnailUrl: `https://picsum.photos/seed/${seed}/480/${Math.round((480 * height) / width)}`,
  url: `https://picsum.photos/seed/${seed}/${width}/${height}`,
  width,
});

const ORDER_LINK_LABEL = "Commande #24817 · Bon de livraison";

const attachmentMessages: ChatMessage[] = [
  {
    attachments: [photo("livraison-benne", 1200, 900)],
    authorId: "user-1",
    body: "Benne livrée ce matin, voici la photo",
    createdAt: yesterday.toISOString(),
    id: "att-1",
    reactions: [{ emoji: "👍", userIds: ["current-user", "user-2"] }],
  },
  {
    attachments: [photo("acces-chantier", 900, 1200), photo("portail", 1200, 900), photo("zone-stockage", 1200, 900)],
    authorId: CURRENT_USER_ID,
    body: "",
    createdAt: yesterday.toISOString(),
    id: "att-2",
    reactions: [{ emoji: "✅", userIds: ["user-1"] }],
  },
  {
    attachments: ["dalle", "coffrage", "grue", "toupie", "pompe", "ferraillage"].map((seed) => photo(seed)),
    authorId: "user-2",
    body: "Le reste du chantier",
    createdAt: now.toISOString(),
    id: "att-3",
    reactions: [
      { emoji: "👀", userIds: ["user-1", "user-2", "current-user"] },
      { emoji: "🙏", userIds: ["user-1"] },
    ],
  },
  {
    attachments: [
      {
        fileName: "Bon de livraison 24817.pdf",
        id: "pdf-1",
        link: { label: ORDER_LINK_LABEL },
        mimeType: "application/pdf",
        size: 1_258_291,
        url: "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf",
      },
    ],
    authorId: "user-1",
    body: "",
    createdAt: now.toISOString(),
    id: "att-4",
  },
  {
    attachments: [
      {
        fileName: "Devis chantier Lyon 7e - version signée.xlsx",
        id: "xlsx-1",
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        size: 48_300,
        url: "https://example.com/devis.xlsx",
      },
    ],
    authorId: CURRENT_USER_ID,
    body: "Et le devis signé",
    createdAt: now.toISOString(),
    id: "att-5",
    reactions: [
      { emoji: "😂", userIds: ["user-2"] },
      { emoji: "❤️", userIds: ["user-1", "user-2"] },
    ],
  },
];

/**
 * A few seconds of syllable-like tone bursts as a WAV file, standing for a recorded voice message.
 */
const createVoiceSampleUrl = (seconds: number, pitch: number): string => {
  const sampleRate = 8000;
  const length = Math.round(seconds * sampleRate);
  const view = new DataView(new ArrayBuffer(44 + length * 2));
  const writeText = (offset: number, text: string) => {
    for (let i = 0; i < text.length; i += 1) {
      view.setUint8(offset + i, text.charCodeAt(i));
    }
  };

  writeText(0, "RIFF");
  view.setUint32(4, 36 + length * 2, true);
  writeText(8, "WAVEfmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeText(36, "data");
  view.setUint32(40, length * 2, true);

  for (let i = 0; i < length; i += 1) {
    const time = i / sampleRate;
    const envelope = Math.max(0, Math.sin(time * Math.PI * 3.1)) ** 2;
    const sample = envelope * 0.3 * (Math.sin(2 * Math.PI * pitch * time) + 0.5 * Math.sin(4 * Math.PI * pitch * time));
    view.setInt16(44 + i * 2, sample * 32767, true);
  }

  return URL.createObjectURL(new Blob([view], { type: "audio/wav" }));
};

/**
 * A voice message received (its length read from the file) and one sent (its length known from the recording).
 */
const createVoiceMessages = (): ChatMessage[] => [
  {
    attachments: [
      { fileName: "vocal-20261005-091204.wav", id: "voice-1", mimeType: "audio/wav", size: 112_044, url: createVoiceSampleUrl(7, 180) },
    ],
    authorId: "user-1",
    body: "",
    createdAt: now.toISOString(),
    id: "att-6",
  },
  {
    attachments: [
      {
        durationMs: 4_000,
        fileName: "vocal-20261005-091530.wav",
        id: "voice-2",
        mimeType: "audio/wav",
        size: 64_044,
        url: createVoiceSampleUrl(4, 140),
      },
    ],
    authorId: CURRENT_USER_ID,
    body: "",
    createdAt: now.toISOString(),
    id: "att-7",
    reactions: [{ emoji: "👍", userIds: ["user-1"] }],
  },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const failedOnce = new Set<string>();

/**
 * Progress in steps; a file named "echec…" fails on its first try (the retry goes through).
 */
const simulateUpload: ChatUploadAttachment = async (file, onProgress) => {
  const shouldFail = /^echec/i.test(file.name) && !failedOnce.has(file.name);
  const dimensions = await createImageBitmap(file).then(
    ({ width, height }) => ({ height, width }),
    () => ({ height: null, width: null }),
  );

  for (let progress = 0; progress < 100; progress += 15) {
    onProgress(progress);
    await wait(500);

    if (shouldFail && progress >= 45) {
      failedOnce.add(file.name);
      throw new Error("Network error");
    }
  }

  const url = URL.createObjectURL(file);

  return { ...dimensions, fileName: file.name, id: `upload-${Date.now()}-${file.name}`, mimeType: file.type, size: file.size, url };
};

/**
 * Stands for the app's dialog (pick the order and the document type).
 */
const simulateLinkDialog = async (): Promise<ChatAttachmentLink> => {
  await wait(600);

  return { label: ORDER_LINK_LABEL, onClick: () => console.info("Open order #24817") };
};

const toggleUser = (userIds: string[], userId: string) =>
  userIds.includes(userId) ? userIds.filter((id) => id !== userId) : [...userIds, userId];

/**
 * Paperclip, drag & drop or paste: the upload is simulated (progress, a file named "echec…" fails once).
 * Mic next to the paperclip: the take is uploaded the same way, then sent at once as a voice message.
 * Reactions on hover or long press, emoji picker in French with search.
 */
export const Attachments: StoryFn = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [...attachmentMessages, ...createVoiceMessages()]);

  const handleSendMessage = (_threadId: string, body: string, attachments?: ChatAttachment[]) => {
    setMessages((previous) => [
      ...previous,
      { attachments, authorId: CURRENT_USER_ID, body, createdAt: new Date().toISOString(), id: `msg-${Date.now()}` },
    ]);
  };

  const handleToggleReaction = (messageId: ChatMessage["id"], emoji: string) => {
    setMessages((previous) =>
      previous.map((message) => {
        if (message.id !== messageId) {
          return message;
        }

        const reactions = message.reactions ?? [];
        const existing = reactions.find((reaction) => reaction.emoji === emoji);

        return {
          ...message,
          reactions: existing
            ? reactions.map((reaction) =>
                reaction === existing ? { ...reaction, userIds: toggleUser(reaction.userIds, CURRENT_USER_ID) } : reaction,
              )
            : [...reactions, { emoji, userIds: [CURRENT_USER_ID] }],
        };
      }),
    );
  };

  const handleLinkAttachment: ChatLinkAttachment = async (attachment, { message }) => {
    const link = await simulateLinkDialog();

    // A sent file: the app updates its own message data
    if (message) {
      setMessages((previous) =>
        previous.map((current) =>
          current.id === message.id
            ? { ...current, attachments: current.attachments?.map((file) => (file.id === attachment.id ? { ...file, link } : file)) }
            : current,
        ),
      );
    }

    return link;
  };

  return (
    <ThemeContext.Provider value={{ language: "fr" }}>
      <Chat height="100vh">
        <Chat.ConversationDetail
          threadId="thread-1"
          participants={[participants[0], participants[1]]}
          messages={messages}
          currentUserId={CURRENT_USER_ID}
          onDeleteConversation={() => {}}
          onNewConversation={() => {}}
          onSendMessage={handleSendMessage}
          onAddParticipants={() => {}}
          onUploadAttachment={simulateUpload}
          onLinkAttachment={handleLinkAttachment}
          onToggleReaction={handleToggleReaction}
          labels={{ enterToSend: "", send: "Envoyer", writeAMessage: "Écrire un message" }}
        />
      </Chat>
    </ThemeContext.Provider>
  );
};

const minutesAgo = (minutes: number) => new Date(now.getTime() - minutes * 60000).toISOString();

/**
 * Ticks next to the time of my messages: the first ones were read by Alice, the last one not yet. A new message shows
 * the clock until it is acknowledged, then Alice reads it a moment later.
 */
export const ReadReceipts: StoryFn = () => {
  const [aliceLastReadAt, setAliceLastReadAt] = useState(minutesAgo(30));
  const [messages, setMessages] = useState<ChatMessage[]>([
    { authorId: "user-1", body: "Bonjour, la nacelle est bien prévue pour demain ?", createdAt: minutesAgo(50), id: "rr-1" },
    { authorId: CURRENT_USER_ID, body: "Oui, livraison entre 7 h et 9 h.", createdAt: minutesAgo(45), id: "rr-2" },
    { authorId: CURRENT_USER_ID, body: "Le chauffeur vous appellera en arrivant.", createdAt: minutesAgo(44), id: "rr-3" },
    { authorId: CURRENT_USER_ID, body: "Pensez à libérer l'accès côté portail.", createdAt: minutesAgo(5), id: "rr-4" },
  ]);
  const readers: ChatParticipant[] = [{ ...participants[0], lastReadAt: aliceLastReadAt }];

  const handleSendMessage = (_threadId: string, body: string) => {
    const id = `temp-${Date.now()}`;

    setMessages((previous) => [...previous, { authorId: CURRENT_USER_ID, body, createdAt: new Date().toISOString(), id }]);
    // The server acknowledges the message, then Alice reads it
    setTimeout(
      () => setMessages((previous) => previous.map((message) => (message.id === id ? { ...message, id: `rr-${id}` } : message))),
      1200,
    );
    setTimeout(() => setAliceLastReadAt(new Date().toISOString()), 3500);
  };

  return (
    <ThemeContext.Provider value={{ language: "fr" }}>
      <Chat height="100vh">
        <Chat.ConversationDetail
          threadId="thread-1"
          participants={readers}
          messages={messages}
          currentUserId={CURRENT_USER_ID}
          onDeleteConversation={() => {}}
          onNewConversation={() => {}}
          onSendMessage={handleSendMessage}
          onAddParticipants={() => {}}
          labels={{ enterToSend: "", send: "Envoyer", writeAMessage: "Écrire un message" }}
        />
      </Chat>
    </ThemeContext.Provider>
  );
};

const SUPPLIER: ChatParticipant = { avatar: null, firstName: "Sophie", lastName: "Garnier", userId: "supplier-1" };

const nacelleBooking: ChatMessageBooking = {
  image: "https://picsum.photos/seed/nacelle/96/96",
  label: "N° 34126",
  onClick: () => console.info("Open order 34126"),
};

/**
 * Messages the product writes on its own (end of rental, order shared, order detail) as centered notices; a run of
 * them folds into one line, and the pills above the conversation keep the messages or the updates only.
 */
export const AutomaticMessages: StoryFn = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      authorId: SUPPLIER.userId,
      body: "https://app.getsoren.ai/bookings/34126",
      createdAt: minutesAgo(26 * 60),
      event: { booking: nacelleBooking, icon: <LinkIcon fontSize="inherit" />, title: "Commande partagée" },
      id: "ev-1",
    },
    { authorId: CURRENT_USER_ID, body: "Bonjour Sophie, la nacelle peut rester jusqu'au 12 ?", createdAt: minutesAgo(25 * 60), id: "ev-2" },
    { authorId: SUPPLIER.userId, body: "Oui, je prolonge et je vous confirme.", createdAt: minutesAgo(24 * 60), id: "ev-3" },
    {
      authorId: SUPPLIER.userId,
      body: "5T - thermique 💬 Commentaire : accès par la rue de Gerland",
      createdAt: minutesAgo(90),
      event: {
        booking: nacelleBooking,
        details: ["Nacelle 16 m thermique", "Accès par la rue de Gerland"],
        icon: <FileTextIcon fontSize="inherit" />,
        title: "Détail de commande",
      },
      id: "ev-4",
    },
    {
      authorId: SUPPLIER.userId,
      body: "https://app.getsoren.ai/bookings/34126",
      createdAt: minutesAgo(80),
      event: { booking: nacelleBooking, icon: <LinkIcon fontSize="inherit" />, title: "Commande partagée" },
      id: "ev-5",
    },
    {
      authorId: SUPPLIER.userId,
      body: "Fin de location confirmée au 12/10/2026 ✅ 📋 Commande n°34126 🚜 Machine : Nacelle 16 m",
      createdAt: minutesAgo(75),
      event: {
        booking: nacelleBooking,
        details: ["Nacelle 16 m", "12/10/2026"],
        icon: <SportsScoreIcon fontSize="inherit" />,
        title: "Fin de location confirmée",
      },
      id: "ev-6",
    },
    { authorId: CURRENT_USER_ID, body: "Parfait, merci !", createdAt: minutesAgo(60), id: "ev-7" },
    {
      authorId: SUPPLIER.userId,
      body: "Fin de location confirmée au 14/10/2026 ✅",
      createdAt: minutesAgo(20),
      event: {
        booking: { ...nacelleBooking, label: "N° 34188" },
        details: ["Mini-pelle 2,5 t", "14/10/2026"],
        icon: <SportsScoreIcon fontSize="inherit" />,
        title: "Fin de location confirmée",
      },
      id: "ev-8",
    },
  ]);

  return (
    <ThemeContext.Provider value={{ language: "fr" }}>
      <Chat height="100vh">
        <Chat.ConversationDetail
          threadId="thread-1"
          participants={[{ ...SUPPLIER, lastReadAt: minutesAgo(30) }]}
          messages={messages}
          currentUserId={CURRENT_USER_ID}
          onDeleteConversation={() => {}}
          onNewConversation={() => {}}
          onSendMessage={(_threadId, body) =>
            setMessages((previous) => [
              ...previous,
              { authorId: CURRENT_USER_ID, body, createdAt: new Date().toISOString(), id: `msg-${Date.now()}` },
            ])
          }
          onAddParticipants={() => {}}
          labels={{ enterToSend: "", send: "Envoyer", writeAMessage: "Écrire un message" }}
        />
      </Chat>
    </ThemeContext.Provider>
  );
};

// Lucide-like strokes, standing for the app's own icons
const strokeIcon = (d: string) => (
  <SvgIcon viewBox="0 0 24 24" fontSize="inherit">
    <path d={d} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

const clientQuickActions: ChatQuickAction[] = [
  {
    icon: strokeIcon("M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM12 14v4M10 16h4"),
    id: "extend",
    label: "Prolonger la location",
  },
  {
    icon: strokeIcon(
      "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    ),
    id: "pickup",
    label: "Demander la reprise",
  },
  {
    icon: strokeIcon(
      "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M16 2v4M8 2v4M3 10h5M17.5 17.5 16 16.3V14M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z",
    ),
    id: "reschedule",
    label: "Décaler la livraison",
  },
  {
    icon: strokeIcon("m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3ZM12 9v4M12 17h.01"),
    id: "breakdown",
    label: "Signaler une panne",
  },
  { icon: <FileTextIcon fontSize="inherit" />, id: "document", label: "Demander un document" },
];

const nacelle: ChatMessageBooking = { ...nacelleBooking, label: "N° 34126 · Nacelle 16 m" };
const minipelle: ChatMessageBooking = { image: "https://picsum.photos/seed/minipelle/96/96", label: "N° 34188 · Mini-pelle 2,5 t" };

/**
 * The composer's "+" opens the quick actions (the app's dialog is simulated: the request leaves at once). Requests
 * show as cards; the ones addressed to me carry one-tap answers.
 */
export const QuickActions: StoryFn = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      action: {
        booking: minipelle,
        details: ["Mardi 14 oct.", "Matin"],
        status: { label: "Acceptée par Kiloutou · 09:12", tone: "success" },
        title: "Demande de reprise",
      },
      authorId: CURRENT_USER_ID,
      body: "Demande de reprise le 14 oct. au matin",
      createdAt: minutesAgo(180),
      id: "qa-1",
    },
    {
      action: {
        booking: nacelle,
        responses: [{ id: "upload", label: "Déposer le document" }],
        status: { label: "En attente", tone: "pending" },
        title: "Demande du bon de commande",
      },
      authorId: SUPPLIER.userId,
      body: "Pouvez-vous déposer le bon de commande ?",
      createdAt: minutesAgo(60),
      id: "qa-2",
    },
    {
      action: {
        booking: nacelle,
        details: ["Fin prévue le 12 oct."],
        responses: [
          { id: "stop", label: "Oui, arrêter" },
          { id: "extend", label: "Non, prolonger", variant: "secondary" },
        ],
        status: { label: "En attente", tone: "pending" },
        title: "Confirmer la fin de location ?",
      },
      authorId: SUPPLIER.userId,
      body: "Confirmez-vous la fin de location le 12 oct. ?",
      createdAt: minutesAgo(40),
      id: "qa-3",
    },
  ]);

  const updateAction = (messageId: ChatMessage["id"], update: Partial<ChatMessageAction>) =>
    setMessages((previous) =>
      previous.map((message) =>
        message.id === messageId && message.action ? { ...message, action: { ...message.action, responses: [], ...update } } : message,
      ),
    );

  const handleActionResponse: ChatActionResponseHandler = async (messageId, responseId) => {
    await wait(800);
    const time = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

    if (responseId === "upload") {
      updateAction(messageId, { status: { label: `Déposé · ${time}`, tone: "success" } });
    } else {
      updateAction(messageId, {
        status: { label: responseId === "stop" ? `Fin confirmée · ${time}` : `Prolongation demandée · ${time}`, tone: "neutral" },
      });
    }
  };

  const handleQuickAction = (actionId: string) => {
    const label = clientQuickActions.find(({ id }) => id === actionId)?.label ?? "";

    setMessages((previous) => [
      ...previous,
      {
        action: {
          booking: nacelle,
          details: actionId === "extend" ? ["Jusqu'au 19 oct."] : undefined,
          note: actionId === "extend" ? "Le chantier a pris une semaine de retard." : undefined,
          status: { label: "En attente", tone: "pending" },
          title: label,
        },
        authorId: CURRENT_USER_ID,
        body: label,
        createdAt: new Date().toISOString(),
        id: `qa-${Date.now()}`,
      },
    ]);
  };

  return (
    <ThemeContext.Provider value={{ language: "fr" }}>
      <Chat height="100vh">
        <Chat.ConversationDetail
          threadId="thread-1"
          participants={[{ ...SUPPLIER, lastReadAt: minutesAgo(30) }]}
          messages={messages}
          currentUserId={CURRENT_USER_ID}
          onDeleteConversation={() => {}}
          onNewConversation={() => {}}
          onSendMessage={(_threadId, body) =>
            setMessages((previous) => [
              ...previous,
              { authorId: CURRENT_USER_ID, body, createdAt: new Date().toISOString(), id: `msg-${Date.now()}` },
            ])
          }
          onAddParticipants={() => {}}
          onUploadAttachment={simulateUpload}
          quickActions={clientQuickActions}
          onQuickAction={handleQuickAction}
          onActionResponse={handleActionResponse}
          labels={{ enterToSend: "", send: "Envoyer", writeAMessage: "Écrire un message" }}
        />
      </Chat>
    </ThemeContext.Provider>
  );
};

const JULIE: ChatParticipant = { avatar: null, firstName: "Julie", lastName: "Martin", userId: "colleague-1" };
const MARC: ChatParticipant = { avatar: null, firstName: "Marc", lastName: "Dupont", userId: "supplier-2" };

const teamMessages: Record<string, ChatMessage[]> = {
  "team-1": [
    {
      authorId: JULIE.userId,
      body: "Bonjour Marc, la benne de 15 m³ peut-elle être vidée jeudi ?",
      createdAt: minutesAgo(200),
      id: "tm-1",
    },
    { authorId: MARC.userId, body: "Oui, passage prévu jeudi entre 8 h et 10 h.", createdAt: minutesAgo(150), id: "tm-2" },
  ],
  "team-2": [{ authorId: SUPPLIER.userId, body: "Le groupe électrogène est prêt au dépôt.", createdAt: minutesAgo(400), id: "tm-3" }],
};

/**
 * "My conversations / Team" pills above the list; a colleague's thread opens read-only, with a bar to join it.
 */
export const TeamConversations: StoryFn = () => {
  const [tab, setTab] = useState("mine");
  const [joinedIds, setJoinedIds] = useState<string[]>([]);
  const [selectedThreadId, setSelectedThreadId] = useState("thread-1");
  const myThreads: ChatThread[] = [
    {
      createdAt: minutesAgo(600),
      id: "thread-1",
      lastMessagePreview: "Parfait, merci !",
      participants: [SUPPLIER],
      unreadCount: 1,
      updatedAt: minutesAgo(60),
    },
    ...threads.slice(1, 2),
  ];
  const teamThreads: ChatThread[] = [
    {
      createdAt: minutesAgo(600),
      id: "team-1",
      lastMessagePreview: "Oui, passage prévu jeudi entre 8 h et 10 h.",
      participants: [JULIE, MARC],
      updatedAt: minutesAgo(150),
    },
    {
      createdAt: minutesAgo(900),
      id: "team-2",
      lastMessagePreview: "Le groupe électrogène est prêt au dépôt.",
      participants: [JULIE, SUPPLIER],
      updatedAt: minutesAgo(400),
    },
  ];
  const joined = teamThreads.filter(({ id }) => joinedIds.includes(id));
  const visibleThreads = tab === "mine" ? [...joined, ...myThreads] : teamThreads.filter(({ id }) => !joinedIds.includes(id));
  const selectedThread = [...myThreads, ...teamThreads].find(({ id }) => id === selectedThreadId);
  const isTeamThread = teamThreads.some(({ id }) => id === selectedThreadId) && !joinedIds.includes(selectedThreadId);
  const participantsOf = (thread?: ChatThread) => thread?.participants?.map(({ firstName }) => firstName).join(" et ");

  const handleJoin = async () => {
    await wait(800);
    setJoinedIds((previous) => [...previous, selectedThreadId]);
    setTab("mine");
  };

  return (
    <ThemeContext.Provider value={{ language: "fr" }}>
      <Chat height="100vh">
        <Chat.Body>
          <Chat.ConversationList
            threads={visibleThreads}
            selectedThreadId={selectedThreadId}
            onSelectThread={setSelectedThreadId}
            onNewConversation={() => {}}
            labels={{ messages: "Messages", search: "Rechercher" }}
            tabs={[
              { count: myThreads.length + joined.length, id: "mine", label: "Mes conversations" },
              { count: teamThreads.length - joined.length, id: "team", label: "Équipe" },
            ]}
            selectedTab={tab}
            onTabChange={setTab}
          />
          <Chat.ConversationDetail
            threadId={selectedThreadId}
            participants={selectedThread?.participants}
            messages={teamMessages[selectedThreadId] ?? messagesThread1}
            currentUserId={CURRENT_USER_ID}
            onDeleteConversation={() => {}}
            onNewConversation={() => {}}
            onSendMessage={() => {}}
            onAddParticipants={() => {}}
            readOnly={
              isTeamThread ? { label: `Vous consultez la conversation de ${participantsOf(selectedThread)}`, onAction: handleJoin } : null
            }
            labels={{ enterToSend: "", send: "Envoyer", writeAMessage: "Écrire un message" }}
          />
        </Chat.Body>
      </Chat>
    </ThemeContext.Provider>
  );
};

/**
 * Supplier side: one-tap replies above the empty field while the last message comes from the client; a tap sends it.
 */
export const QuickReplies: StoryFn = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { authorId: CURRENT_USER_ID, body: "Bonjour, la nacelle est prête au dépôt.", createdAt: minutesAgo(90), id: "qr-1" },
    { authorId: "user-1", body: "Super, vous pouvez la livrer demain avant 8 h ?", createdAt: minutesAgo(10), id: "qr-2" },
  ]);

  const handleSendMessage = (_threadId: string, body: string) => {
    setMessages((previous) => [
      ...previous,
      { authorId: CURRENT_USER_ID, body, createdAt: new Date().toISOString(), id: `msg-${Date.now()}` },
    ]);
    // The client answers a moment later: the replies come back
    setTimeout(
      () =>
        setMessages((previous) => [
          ...previous,
          { authorId: "user-1", body: "Merci, à demain !", createdAt: new Date().toISOString(), id: `msg-${Date.now()}` },
        ]),
      2500,
    );
  };

  return (
    <ThemeContext.Provider value={{ language: "fr" }}>
      <Chat height="100vh">
        <Chat.ConversationDetail
          threadId="thread-1"
          participants={[{ ...participants[0], lastReadAt: minutesAgo(5) }]}
          messages={messages}
          currentUserId={CURRENT_USER_ID}
          onDeleteConversation={() => {}}
          onNewConversation={() => {}}
          onSendMessage={handleSendMessage}
          onAddParticipants={() => {}}
          quickReplies={["C'est noté", "Bien pris en compte", "Je regarde et je reviens vers vous", "Merci"]}
          labels={{ enterToSend: "", send: "Envoyer", writeAMessage: "Écrire un message" }}
        />
      </Chat>
    </ThemeContext.Provider>
  );
};

/**
 * French phone numbers in a message become `tel:` links, underlined like the URLs: a tap calls from a tablet.
 */
export const PhoneNumbers: StoryFn = () => (
  <ThemeContext.Provider value={{ language: "fr" }}>
    <Chat height="100vh">
      <Chat.ConversationDetail
        threadId="thread-1"
        participants={[{ ...participants[0], lastReadAt: minutesAgo(1) }]}
        messages={[
          { authorId: CURRENT_USER_ID, body: "Je suis absent demain, qui me remplace ?", createdAt: minutesAgo(30), id: "tel-1" },
          {
            authorId: "user-1",
            body: "Julien prend le relais : 06 12 34 56 78.\nLe dépôt de Lyon répond aussi au 04.72.00.00.00 de 7 h à 17 h.",
            createdAt: minutesAgo(20),
            id: "tel-2",
          },
          {
            authorId: CURRENT_USER_ID,
            body: "Merci ! Le chef de chantier est joignable au +33 6 98 76 54 32. Plan d'accès : https://example.com/acces",
            createdAt: minutesAgo(5),
            id: "tel-3",
          },
        ]}
        currentUserId={CURRENT_USER_ID}
        onDeleteConversation={() => {}}
        onNewConversation={() => {}}
        onSendMessage={() => {}}
        onAddParticipants={() => {}}
        labels={{ enterToSend: "", send: "Envoyer", writeAMessage: "Écrire un message" }}
      />
    </Chat>
  </ThemeContext.Provider>
);

const createSampleImage = (): Promise<File> =>
  new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 480;
    const context = canvas.getContext("2d");

    if (context) {
      context.fillStyle = "#8a9a5b";
      context.fillRect(0, 0, 640, 480);
      context.fillStyle = "#c2b280";
      context.fillRect(0, 300, 640, 180);
    }

    canvas.toBlob((blob) => resolve(new File([blob ?? new Blob()], "photo-chantier.jpg", { type: "image/jpeg" })), "image/jpeg");
  });

/**
 * The composer with files already picked: an image and a PDF uploading, a failing one, a refused one.
 */
export const MessageInputAttachments: StoryFn = () => {
  const inputRef = useRef<ChatMessageInputHandle>(null);
  const [sent, setSent] = useState<string>("");

  useEffect(() => {
    createSampleImage().then((image) => {
      const pdf = new File([new Uint8Array(1_258_291)], "Bon de livraison 24817.pdf", { type: "application/pdf" });
      const failing = new File([new Uint8Array(820_000)], "echec-plan-acces.pdf", { type: "application/pdf" });
      const video = new File([new Uint8Array(1000)], "visite.mov", { type: "video/quicktime" });

      inputRef.current?.addFiles([image, pdf, failing, video]);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ language: "fr" }}>
      <Box maxWidth={720}>
        <Chat.MessageInput
          ref={inputRef}
          onSend={(body, attachments) =>
            setSent(
              `${body} · ${attachments?.map(({ fileName, link }) => `${fileName}${link ? ` (${link.label})` : ""}`).join(", ") ?? ""}`,
            )
          }
          onUploadAttachment={simulateUpload}
          onLinkAttachment={simulateLinkDialog}
          labels={{ enterToSend: "", send: "Envoyer", writeAMessage: "Écrire un message" }}
        />
        <Box p={2} fontSize={12} color="text.secondary">
          {sent}
        </Box>
      </Box>
    </ThemeContext.Provider>
  );
};

export default {
  parameters: {
    layout: "fullscreen",
  },
  title: "Components/Data Display/Chat",
} as Meta;
