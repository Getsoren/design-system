import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { EmojiPicker } from "frimousse";
import { useContext, useState } from "react";
import { EMOJI_CELL_SIZE, EMOJI_FONT_FAMILY, EMOJI_PICKER_HEIGHT, getEmojiPickerWidth } from "@/components/DataDisplay/Chat/constants";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import { getRecentEmojis } from "@/components/DataDisplay/Chat/utils/recentEmojis";
import resolveChatEmojiData from "@/components/DataDisplay/Chat/utils/resolveChatEmojiData";
import SearchIcon from "@/components/DataDisplay/Icons/SearchIcon";
import { ThemeContext } from "@/context/Theme/ThemeProvider";
import useTranslation from "@/hooks/useTranslation/useTranslation";

interface ChatEmojiPickerContentProps {
  columns: number;
  onSelect: (emoji: string) => void;
  labels: ChatLabels;
}

/**
 * frimousse picker styled with the theme: search (in the app language), recently used emojis, categories.
 */
const ChatEmojiPickerContent = ({ columns, onSelect, labels }: ChatEmojiPickerContentProps) => {
  const { language } = useContext(ThemeContext);
  const { t } = useTranslation();
  // No keyboard popping over the picker on a tablet: only focus the search with a fine pointer
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const [search, setSearch] = useState("");
  const [recentEmojis] = useState(() => getRecentEmojis());

  return (
    <Box
      sx={{
        "& [frimousse-category-header]": {
          backgroundColor: "background.paper",
          color: "text.secondary",
          fontSize: ({ typography }) => typography.caption.fontSize,
          fontWeight: 600,
          lineHeight: "32px",
          px: 1,
        },
        "& [frimousse-emoji]": {
          "&[data-active]": { backgroundColor: "action.hover" },
          alignItems: "center",
          backgroundColor: "transparent",
          border: 0,
          borderRadius: 1.5,
          cursor: "pointer",
          display: "flex",
          fontSize: 24,
          height: EMOJI_CELL_SIZE,
          justifyContent: "center",
          padding: 0,
          width: EMOJI_CELL_SIZE,
        },
        "& [frimousse-empty], & [frimousse-loading]": {
          alignItems: "center",
          color: "text.secondary",
          display: "flex",
          inset: 0,
          justifyContent: "center",
          position: "absolute",
        },
        "& [frimousse-root]": { display: "flex", flexDirection: "column", height: EMOJI_PICKER_HEIGHT },
        "& [frimousse-search]": {
          "&::-webkit-search-cancel-button": { display: "none" },
          "&:focus": { borderColor: "text.primary" },
          backgroundColor: "transparent",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 999,
          color: "text.primary",
          font: "inherit",
          fontSize: ({ typography }) => typography.body2.fontSize,
          height: EMOJI_CELL_SIZE,
          outline: "none",
          pl: 5,
          pr: 2,
          width: "100%",
        },
        "& [frimousse-viewport]": { flex: 1, outline: "none", px: 1 },
        width: getEmojiPickerWidth(columns),
      }}
    >
      <EmojiPicker.Root
        locale={language === "fr" ? "fr" : "en"}
        resolveEmojiData={resolveChatEmojiData}
        columns={columns}
        onEmojiSelect={({ emoji }) => onSelect(emoji)}
      >
        <Box position="relative" p={1}>
          <SearchIcon
            sx={{ color: "text.secondary", fontSize: 20, left: 22, position: "absolute", top: "50%", transform: "translateY(-50%)" }}
          />
          <EmojiPicker.Search
            autoFocus={isFinePointer}
            placeholder={labels.searchEmoji}
            aria-label={labels.searchEmoji}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        {!search && recentEmojis.length > 0 && (
          <Stack px={1}>
            <Typography variant="caption" color="text.secondary" fontWeight={600} px={1} lineHeight="32px">
              {labels.recentEmojis}
            </Typography>
            <Stack direction="row">
              {recentEmojis.slice(0, columns).map((emoji) => (
                <ButtonBase
                  key={emoji}
                  aria-label={emoji}
                  onClick={() => onSelect(emoji)}
                  sx={{
                    "&:hover": { backgroundColor: "action.hover" },
                    borderRadius: 1.5,
                    fontFamily: EMOJI_FONT_FAMILY,
                    fontSize: 24,
                    height: EMOJI_CELL_SIZE,
                    width: EMOJI_CELL_SIZE,
                  }}
                >
                  {emoji}
                </ButtonBase>
              ))}
            </Stack>
          </Stack>
        )}
        <EmojiPicker.Viewport>
          <EmojiPicker.Loading>
            <CircularProgress size={24} color="inherit" />
          </EmojiPicker.Loading>
          <EmojiPicker.Empty>{t("noResult")}</EmojiPicker.Empty>
          <EmojiPicker.List />
        </EmojiPicker.Viewport>
      </EmojiPicker.Root>
    </Box>
  );
};

export default ChatEmojiPickerContent;
