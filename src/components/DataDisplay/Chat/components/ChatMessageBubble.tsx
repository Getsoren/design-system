import { getInitials } from "@getsoren/react-utils";
import { Theme } from "@mui/material";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import Avatar from "@/components/DataDisplay/Avatar";
import type { ChatMessageBubbleProps } from "@/components/DataDisplay/Chat/types";
import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";
import { extractUrls } from "@/components/DataDisplay/Chat/utils/extractUrls";

const URL_REGEX = /https?:\/\/\S+/g;

const defaultFormatTime = (date: string): string => {
  try {
    return new Intl.DateTimeFormat(undefined, { hour: "2-digit", hour12: false, minute: "2-digit" }).format(new Date(ensureUtc(date)));
  } catch {
    return "";
  }
};

const renderMessageBody = (body: string, isOwn?: boolean): ReactNode => {
  const urls = body.match(URL_REGEX) || [];

  if (!urls.length) {
    return body;
  }

  const parts = body.split(URL_REGEX);

  return parts.reduce<ReactNode[]>((acc, part, index) => {
    acc.push(part);

    if (index < urls.length) {
      const url = urls[index];

      acc.push(
        <Link
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          sx={{
            "&:hover": { opacity: 0.8 },
            color: isOwn ? "primary.contrastText" : undefined,
            textDecorationColor: "inherit",
            wordBreak: "break-all",
          }}
        >
          {url}
        </Link>,
      );
    }

    return acc;
  }, []);
};

interface BubbleProps {
  children: ReactNode;
  isOwn?: boolean;
}

const Bubble = ({ children, isOwn }: BubbleProps) => (
  <Paper
    sx={{
      backgroundColor: isOwn ? "primary.main" : "tertiary.light",
      border: 0,
      borderBottomLeftRadius: isOwn ? undefined : "5px ! important",
      borderBottomRightRadius: isOwn ? "5px ! important" : undefined,
      borderRadius: 2,
      boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 3px rgba(0,0,0,0.1)",
      color: isOwn ? "primary.contrastText" : undefined,
      px: 2,
      py: 1.3,
    }}
  >
    {children}
  </Paper>
);

const ChatMessageBubble = ({ isOwn, message, participants, avatarSrcResolver, renderAfterBubble, formatTime }: ChatMessageBubbleProps) => {
  const formattedTime = (formatTime ?? defaultFormatTime)(message.createdAt);
  const urls = extractUrls(message.body);

  if (isOwn) {
    return (
      <Stack alignItems="flex-end" spacing={0.5} sx={{ maxWidth: "70%" }} alignSelf="flex-end">
        <Bubble isOwn>
          <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
            {renderMessageBody(message.body, isOwn)}
          </Typography>
        </Bubble>
        {renderAfterBubble?.(urls)}
        <Typography variant="caption" color="text.secondary">
          {formattedTime}
        </Typography>
      </Stack>
    );
  }

  const author = participants?.find((p) => p.userId === message.authorId);

  return (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
      <Avatar
        src={avatarSrcResolver?.(author?.avatar)}
        sx={{
          backgroundColor: ({ palette }: Theme) => (palette.mode === "dark" ? "grey.500" : "grey.100"),
          fontSize: 12,
          height: 28,
          mt: 0.5,
          width: 28,
        }}
      >
        {getInitials(
          author ? { firstName: author.firstName, lastName: author.lastName } : { fullName: String(message.authorId).slice(0, 2) },
          true,
        )}
      </Avatar>
      <Stack spacing={0.5} sx={{ maxWidth: "70%" }}>
        <Bubble>
          <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
            {renderMessageBody(message.body, isOwn)}
          </Typography>
        </Bubble>
        {renderAfterBubble?.(urls)}
        <Typography variant="caption" color="text.secondary">
          {formattedTime}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ChatMessageBubble;
