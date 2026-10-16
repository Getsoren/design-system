import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { useState } from "react";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import ChatQuickActionMenu from "@/components/DataDisplay/Chat/components/ChatQuickActionMenu";
import { LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatQuickAction } from "@/components/DataDisplay/Chat/types";
import { composerToolSx } from "@/components/DataDisplay/Chat/utils/composerSx";

/**
 * The bolt as a mask over the landing's ember: the composer's line (1.25px at 20px), its colour the button's, and a
 * warm 48° band parked off it until a hover sends it across, as on the Soren logo of getsoren.ai
 */
const BOLT_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='${LINE_ICON_PATHS.bolt}' fill='none' stroke='black' stroke-width='${(1.25 * 24) / 20}' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
)}")`;

const boltEmberSx = {
  backgroundColor: "currentColor",
  backgroundImage:
    "linear-gradient(48deg, rgba(247, 78, 0, 0) 36%, rgba(247, 78, 0, 0.85) 44%, #ff9a4d 50%, rgba(247, 78, 0, 0.85) 56%, rgba(247, 78, 0, 0) 64%)",
  backgroundPosition: "140% -40%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "300% 300%",
  display: "block",
  flexShrink: 0,
  height: 20,
  maskImage: BOLT_MASK,
  maskRepeat: "no-repeat",
  maskSize: "contain",
  WebkitMaskImage: BOLT_MASK,
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskSize: "contain",
  width: 20,
};

interface ChatQuickActionsButtonProps {
  actions: ChatQuickAction[];
  labels: ChatLabels;
  disabled?: boolean;
  onAction?: (actionId: string) => void;
}

/**
 * "Actions", a named tool next to the paperclip, as ChatGPT's and Codex's selectors: in sight without crowding the bar
 */
const ChatQuickActionsButton = ({ actions, labels, disabled, onAction }: ChatQuickActionsButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <ButtonBase
        aria-haspopup="menu"
        aria-expanded={!!anchorEl}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        disabled={disabled}
        data-test="chatQuickActions"
        sx={{
          ...composerToolSx(!!anchorEl),
          // The landing's logo ember: one warm pass across the bolt on hover, then it settles back
          "@keyframes chatBoltEmber": { from: { backgroundPosition: "140% -40%" }, to: { backgroundPosition: "-40% 140%" } },
          "@media (prefers-reduced-motion: reduce)": { "& [data-bolt]": { animation: "none !important", backgroundImage: "none" } },
          "&:hover [data-bolt]": { animation: "chatBoltEmber 900ms cubic-bezier(0.4, 0, 0.3, 1) 1" },
        }}
      >
        {/* Order actions: a lightning bolt, not the AI assistant's spark */}
        <Box component="span" data-bolt sx={boltEmberSx} />
        <span data-label>{labels.moreActions}</span>
        <ChatLineIcon
          d={LINE_ICON_PATHS.chevronDown}
          size={16}
          sx={{ transform: anchorEl ? "rotate(180deg)" : "none", transition: "transform 150ms" }}
        />
      </ButtonBase>
      <ChatQuickActionMenu
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        actions={actions}
        onAction={(actionId) => onAction?.(actionId)}
        labels={labels}
      />
    </>
  );
};

export default ChatQuickActionsButton;
