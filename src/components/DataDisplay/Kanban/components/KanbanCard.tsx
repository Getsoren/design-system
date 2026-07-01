import { Box, Card, Divider, Stack, useTheme } from "@mui/material";
import { isValidElement, memo, ReactNode } from "react";
import ArticleImage from "@/components/DataDisplay/ArticleImage";
import Chip from "@/components/DataDisplay/Chip/Chip";
import { KanbanCardVariant, KanbanDataItemProps, SubtitleDataItemProps } from "@/components/DataDisplay/Kanban/types";
import { Tooltip } from "@/components/DataDisplay/Tooltip/stories/Tooltip";
import Typography from "@/components/DataDisplay/Typography/stories/Typography";
import Button from "@/components/Inputs/Button/stories/Button";

const IMG_SIZE = 40;

const POPPER_KANBAN = {
  sx: {
    "&[data-popper-reference-hidden]": {
      display: "none",
      pointerEvents: "none",
    },
  },
};

const TOOLTIP_DELAYS = { enterDelay: 300, enterNextDelay: 300 };

const renderSubtitleItem = ({ text, icon, onClick }: SubtitleDataItemProps, index: number): ReactNode => {
  const content = isValidElement(text) ? (
    text
  ) : (
    <Typography noWrap variant="body3" color={onClick ? "text.secondary" : "textSecondary"}>
      {text}
    </Typography>
  );

  return (
    <Stack
      key={isValidElement(text) ? index : String(text)}
      direction="row"
      alignItems="center"
      spacing={0.5}
      overflow="hidden"
      onClick={onClick}
      sx={onClick ? { cursor: "pointer" } : undefined}
    >
      {icon}
      {onClick ? (
        <Button variant="link" sx={{ color: "text.secondary" }}>
          {content}
        </Button>
      ) : (
        content
      )}
    </Stack>
  );
};

export interface KanbanCardProps {
  item: KanbanDataItemProps;
  activeItemId: string;
  gutterSize: number;
  onClickItem?: (id: string) => void;
  variant?: KanbanCardVariant;
}

const KanbanCard = memo(({ item, activeItemId, gutterSize, onClickItem, variant = "primary" }: KanbanCardProps) => {
  const {
    title,
    subtitle,
    subtitles,
    tag,
    image,
    id,
    Footer,
    RightFooter,
    secondaryImage,
    secondaryImageText,
    imageTitle,
    headerTitle,
    titleLineClamp,
  } = item;

  const { palette } = useTheme();
  const active = activeItemId === id;
  const isMultiLineTitle = titleLineClamp && titleLineClamp > 1;

  const titleSx = isMultiLineTitle
    ? {
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical" as const,
        WebkitLineClamp: titleLineClamp,
        whiteSpace: "normal" as const,
      }
    : undefined;

  const imageElement = (
    <Tooltip title={imageTitle} enterDelay={TOOLTIP_DELAYS.enterDelay} enterNextDelay={TOOLTIP_DELAYS.enterNextDelay}>
      <Box component="span">
        <ArticleImage
          src={image}
          secondarySrc={secondaryImage}
          secondaryAvatarProps={secondaryImageText ? { children: secondaryImageText, sx: { height: 24, width: 24 } } : undefined}
          alt={title}
          width={IMG_SIZE}
          height={IMG_SIZE}
        />
      </Box>
    </Tooltip>
  );

  const footerElement = (Footer || RightFooter) && (
    <Stack spacing={1} direction="row" alignItems="center" mt={1}>
      {Footer && <Box flex={1}>{Footer}</Box>}
      {RightFooter}
    </Stack>
  );

  const tagElement = <Chip label={tag} variant="rounded" color="default" size="small" />;

  const renderPrimary = () => {
    const hasBottomContent = (subtitles && subtitles.length > 0) || Footer || RightFooter;

    return (
      <>
        <Stack direction="row" spacing={1} alignItems="center">
          {imageElement}
          <Stack flex={1} overflow="hidden">
            {headerTitle && (
              <Tooltip
                title={headerTitle}
                enterDelay={TOOLTIP_DELAYS.enterDelay}
                enterNextDelay={TOOLTIP_DELAYS.enterNextDelay}
                slotProps={{ popper: POPPER_KANBAN }}
              >
                <Typography noWrap variant="body3" color="textSecondary">
                  {headerTitle}
                </Typography>
              </Tooltip>
            )}
            <Stack direction="row" alignItems="flex-start" spacing={1}>
              <Tooltip
                title={title}
                enterDelay={TOOLTIP_DELAYS.enterDelay}
                enterNextDelay={TOOLTIP_DELAYS.enterNextDelay}
                slotProps={{ popper: POPPER_KANBAN }}
              >
                <Typography noWrap={!isMultiLineTitle} variant="h6" flex={1} sx={titleSx}>
                  {title}
                </Typography>
              </Tooltip>
              {tagElement}
            </Stack>
            {subtitle && renderSubtitleItem(subtitle, 0)}
          </Stack>
        </Stack>
        {hasBottomContent && (
          <>
            <Divider sx={{ my: 1.5 }} />
            <Stack spacing={0.5}>
              {subtitles?.map((subtitleData, index) => renderSubtitleItem(subtitleData, index))}
              {footerElement}
            </Stack>
          </>
        )}
      </>
    );
  };

  const renderSecondary = () => {
    const subtitleList = subtitles?.map((subtitleData, index) => renderSubtitleItem(subtitleData, index));

    if (headerTitle) {
      return (
        <Stack direction="row" spacing={1} flex={1} overflow="hidden">
          <Stack spacing={1} flex={1} overflow="hidden">
            <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
              <Tooltip title={headerTitle}>
                <Typography noWrap variant="body3" color="textSecondary" overflow="hidden" textOverflow="ellipsis">
                  {headerTitle}
                </Typography>
              </Tooltip>
              {tagElement}
            </Stack>
            <Stack direction="row" spacing={1} flex={1} overflow="hidden">
              {imageElement}
              <Stack sx={{ flex: 1, overflow: "hidden", position: "relative", whiteSpace: "nowrap" }}>
                <Stack flex={1} overflow="hidden">
                  <Tooltip
                    title={title}
                    enterDelay={TOOLTIP_DELAYS.enterDelay}
                    enterNextDelay={TOOLTIP_DELAYS.enterNextDelay}
                    slotProps={{ popper: POPPER_KANBAN }}
                  >
                    <Typography noWrap={!isMultiLineTitle} variant="h6" sx={titleSx}>
                      {title}
                    </Typography>
                  </Tooltip>
                  {subtitleList}
                </Stack>
                {footerElement}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      );
    }

    return (
      <Stack direction="row" spacing={1} flex={1} overflow="hidden">
        {imageElement}
        <Stack sx={{ flex: 1, overflow: "hidden", position: "relative", whiteSpace: "nowrap" }}>
          <Stack direction="row" spacing={1} flex={1}>
            <Stack flex={1} overflow="hidden">
              <Tooltip
                title={title}
                enterDelay={TOOLTIP_DELAYS.enterDelay}
                enterNextDelay={TOOLTIP_DELAYS.enterNextDelay}
                slotProps={{ popper: POPPER_KANBAN }}
              >
                <Typography noWrap={!isMultiLineTitle} variant="h6" sx={titleSx}>
                  {title}
                </Typography>
              </Tooltip>
            </Stack>
            {tagElement}
          </Stack>
          {subtitleList}
          {footerElement}
        </Stack>
      </Stack>
    );
  };

  return (
    <Box component="div" style={{ paddingLeft: gutterSize, paddingRight: gutterSize }}>
      <Card
        variant="elevation"
        onClick={() => onClickItem?.(id)}
        sx={{
          ".grabbing &": {
            cursor: "grabbing",
            pointerEvents: "none",
          },
          "&:hover": {
            boxShadow: 4,
          },
          border: `1px solid ${active ? palette.action.active : "transparent"}`,
          boxShadow: "0px 0 8px 0 rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 1px 3px 0px rgba(0, 0, 0, 0.03)",
          cursor: "pointer",
          flexShrink: 0,
          p: 1.5,
          textDecoration: "none",
        }}
      >
        {variant === "secondary" ? renderSecondary() : renderPrimary()}
      </Card>
    </Box>
  );
});

export default KanbanCard;
