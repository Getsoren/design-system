import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import splitPhoneNumbers from "@/components/DataDisplay/Chat/utils/splitPhoneNumbers";

const URL_REGEX = /https?:\/\/\S+/g;

const linkSx = {
  "&:hover": { opacity: 0.8 },
  textDecorationColor: "inherit",
};

/**
 * Phone numbers as `tel:` links: a tap calls from a phone or a tablet, a click opens the calling app on a computer
 */
const renderPhoneNumbers = (text: string, key: number, callLabel: string): ReactNode[] =>
  splitPhoneNumbers(text).map(({ text: part, href }, index) =>
    href ? (
      <Link key={`${key}-${index}`} href={href} title={`${callLabel} ${part}`} underline="always" sx={{ ...linkSx, whiteSpace: "nowrap" }}>
        {part}
      </Link>
    ) : (
      part
    ),
  );

interface ChatMessageTextProps {
  body: string;
  callLabel: string;
}

/**
 * The message's text, its links and phone numbers clickable
 */
const ChatMessageText = ({ body, callLabel }: ChatMessageTextProps) => {
  const urls = body.match(URL_REGEX) ?? [];

  return (
    <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
      {body.split(URL_REGEX).flatMap((part, index) => [
        ...renderPhoneNumbers(part, index, callLabel),
        urls[index] && (
          <Link
            key={urls[index]}
            href={urls[index]}
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
            sx={{ ...linkSx, wordBreak: "break-all" }}
          >
            {urls[index]}
          </Link>
        ),
      ])}
    </Typography>
  );
};

export default ChatMessageText;
