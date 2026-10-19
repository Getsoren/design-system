import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";
import type { AiAssistantReplyActionsProps, AiAssistantVote } from "@/components/DataDisplay/AiAssistant/types";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";
import CopyIcon from "@/components/DataDisplay/Icons/CopyIcon";
import ThumbDownIcon from "@/components/DataDisplay/Icons/ThumbDownIcon";
import ThumbUpIcon from "@/components/DataDisplay/Icons/ThumbUpIcon";

const COPIED_FEEDBACK_MS = 1500;

interface VoteButton {
  value: AiAssistantVote;
  Icon: typeof ThumbUpIcon;
  labelKey: keyof NonNullable<AiAssistantReplyActionsProps["labels"]>;
  defaultLabel: string;
  slot: keyof NonNullable<AiAssistantReplyActionsProps["slotProps"]>;
}

const VOTE_BUTTONS: VoteButton[] = [
  { defaultLabel: "Helpful", Icon: ThumbUpIcon, labelKey: "helpful", slot: "upVoteButton", value: "up" },
  { defaultLabel: "Not helpful", Icon: ThumbDownIcon, labelKey: "notHelpful", slot: "downVoteButton", value: "down" },
];

/** Copy and vote buttons under an assistant reply; the vote is controlled by the host app. */
const AiAssistantReplyActions = ({
  content,
  vote = null,
  onVote,
  labels,
  slotProps,
  dataTestId = "assistantReplyActions",
}: AiAssistantReplyActionsProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyLabel = labels?.copy ?? "Copy";

  // The check stays a moment, then the copy glyph comes back.
  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timeout = setTimeout(() => setIsCopied(false), COPIED_FEEDBACK_MS);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
    } catch {
      // Clipboard unavailable (permission, insecure context): nothing to confirm.
    }
  };

  return (
    // The negative margin lines the first glyph up with the reply's text.
    <Stack
      direction="row"
      spacing={0.5}
      sx={{ "& svg": { fontSize: 16 }, color: "text.secondary", marginLeft: -0.75 }}
      data-testid={dataTestId}
    >
      <Tooltip title={isCopied ? (labels?.copied ?? "Copied") : copyLabel}>
        <IconButton {...slotProps?.copyButton} size="small" color="inherit" aria-label={copyLabel} onClick={copy}>
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </IconButton>
      </Tooltip>
      {onVote &&
        VOTE_BUTTONS.map(({ defaultLabel, Icon, labelKey, slot, value }) => {
          const isPressed = vote === value;
          const label = labels?.[labelKey] ?? defaultLabel;

          return (
            <Tooltip key={value} title={label}>
              <IconButton
                {...slotProps?.[slot]}
                size="small"
                color="inherit"
                aria-label={label}
                aria-pressed={isPressed}
                onClick={() => onVote(isPressed ? null : value)}
              >
                <Icon filled={isPressed} />
              </IconButton>
            </Tooltip>
          );
        })}
    </Stack>
  );
};

export default AiAssistantReplyActions;
