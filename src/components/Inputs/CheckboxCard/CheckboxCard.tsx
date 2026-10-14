import { Box, ButtonBase, Skeleton, Stack, type SxProps, type Theme, Typography } from "@mui/material";
import type { ReactNode } from "react";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";
import getOutlineColor from "@/utils/getOutlineColor";

export interface CheckboxCardProps {
  /** Main line — one line in a horizontal card, up to three in a vertical one */
  label: string;
  /** Secondary line under the label — one line, ellipsized */
  description?: string;
  /** Leading visual, rendered in a 40px tile — an outlined icon, an avatar, an illustration */
  icon?: ReactNode;
  /** Content before the texts, rendered as is (an avatar, a badge) */
  leading?: ReactNode;
  /** Content after the texts of a horizontal card (an icon) */
  trailing?: ReactNode;
  /** Picture: above the texts of a vertical card, after them in a 56×48 box of a horizontal one */
  picture?: ReactNode;
  /** Shows a skeleton over the picture box */
  isPictureLoading?: boolean;
  /** `horizontal`: texts in a row; `vertical`: picture on top, for a catalog */
  layout?: "horizontal" | "vertical";
  /** Selection indicator; `none` for a plain choice. The group logic (single or multi select) belongs to the consumer */
  control?: "checkbox" | "radio" | "none";
  /** `end`: a check (or a dot) fading in after the texts; `start`: a circled indicator before them */
  controlPlacement?: "start" | "end";
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  testId?: string;
}

const PICTURE_BOX_SX: SxProps<Theme> = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
};

/**
 * Large tap-target selection card: optional icon tile or picture, label, description and a selection
 * indicator. Sized for tablet use in the field.
 */
const CheckboxCard = ({
  label,
  description,
  icon,
  leading,
  trailing,
  picture,
  isPictureLoading,
  layout = "horizontal",
  control = "checkbox",
  controlPlacement = "end",
  selected,
  disabled,
  onClick,
  testId,
}: CheckboxCardProps) => {
  const isVertical = layout === "vertical";
  const hasPicture = !!picture || !!isPictureLoading;

  /** Before the texts: a circle, filled with a check or a dot once selected */
  const startIndicator = control !== "none" && controlPlacement === "start" && (
    <Box
      aria-hidden
      sx={(theme) => ({
        alignItems: "center",
        bgcolor: selected && control === "checkbox" ? theme.palette.text.primary : "transparent",
        border: `1.5px solid ${selected ? theme.palette.text.primary : theme.palette.grey[500]}`,
        borderRadius: "50%",
        color: theme.palette.background.paper,
        display: "flex",
        flexShrink: 0,
        height: 22,
        justifyContent: "center",
        width: 22,
      })}
    >
      {selected &&
        (control === "checkbox" ? (
          <Box sx={{ "& svg": { fontSize: 15 }, display: "flex" }}>
            <CheckIcon />
          </Box>
        ) : (
          <Box sx={(theme) => ({ bgcolor: theme.palette.text.primary, borderRadius: "50%", height: 11, width: 11 })} />
        ))}
    </Box>
  );

  /** After the texts: a check or a dot, fading in once selected */
  const endIndicator = control !== "none" && controlPlacement === "end" && (
    <Box
      aria-hidden
      sx={{
        alignItems: "center",
        color: "text.primary",
        display: "flex",
        flexShrink: 0,
        opacity: selected ? 1 : 0,
        transition: "opacity 0.2s",
      }}
    >
      {control === "checkbox" ? (
        <CheckIcon />
      ) : (
        <Box sx={(theme) => ({ bgcolor: theme.palette.text.primary, borderRadius: "50%", height: 11, width: 11 })} />
      )}
    </Box>
  );

  const iconTile = icon && (
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: "action.hover",
        borderRadius: "8px",
        color: "text.primary",
        display: "flex",
        flexShrink: 0,
        height: 40,
        justifyContent: "center",
        width: 40,
      }}
    >
      {icon}
    </Box>
  );

  const pictureBox = (sx: SxProps<Theme>) => (
    <Box sx={[PICTURE_BOX_SX, ...(Array.isArray(sx) ? sx : [sx])]}>
      {isPictureLoading && <Skeleton variant="rectangular" sx={{ borderRadius: 1, height: "70%", position: "absolute", width: "70%" }} />}
      {picture}
    </Box>
  );

  const texts = isVertical ? (
    <Stack spacing={0.25} minWidth={0} flex={1}>
      <Typography
        variant="body2"
        fontWeight={500}
        // Catalog names can be long: clamp to three lines rather than a one-line ellipsis
        sx={{ display: "-webkit-box", overflow: "hidden", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}
      >
        {label}
      </Typography>
      {description && (
        <Typography variant="body3" color="text.secondary" noWrap>
          {description}
        </Typography>
      )}
    </Stack>
  ) : (
    <Stack spacing={0.25} flex={1} minWidth={0}>
      <Typography variant="h6" noWrap>
        {label}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" noWrap>
          {description}
        </Typography>
      )}
    </Stack>
  );

  const content = isVertical ? (
    <Stack sx={{ height: "100%", width: "100%" }}>
      {pictureBox({ aspectRatio: "16 / 9", padding: 2, width: "100%" })}
      <Stack direction="row" spacing={1.25} alignItems="flex-start" sx={{ flex: 1, paddingBottom: 1.5, paddingX: 2 }}>
        {startIndicator}
        {texts}
        {endIndicator}
      </Stack>
    </Stack>
  ) : (
    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ minHeight: 64, padding: "12px 16px", width: "100%" }}>
      {startIndicator}
      {iconTile}
      {leading && <Box sx={{ display: "flex", flexShrink: 0 }}>{leading}</Box>}
      {texts}
      {hasPicture
        ? pictureBox({ flexShrink: 0, height: 48, width: 56 })
        : trailing && <Box sx={{ "& svg": { fontSize: 24 }, color: "text.primary", display: "flex", flexShrink: 0 }}>{trailing}</Box>}
      {endIndicator}
    </Stack>
  );

  return (
    <ButtonBase
      data-testid={testId}
      onClick={onClick}
      disabled={disabled}
      role={control === "none" ? undefined : control}
      aria-checked={control === "none" ? undefined : selected}
      aria-pressed={control === "none" ? selected : undefined}
      sx={(theme) => ({
        "&:hover": { borderColor: theme.palette.text.primary },
        alignItems: "stretch",
        backgroundColor: selected ? theme.palette.action.hover : theme.palette.background.paper,
        border: `1px solid ${selected ? theme.palette.text.primary : getOutlineColor(theme)}`,
        borderRadius: `${theme.shape.borderRadiusL}px`,
        // A second line inside the border reads as the 2px border of a selection, without moving the content
        boxShadow: selected ? `inset 0 0 0 1px ${theme.palette.text.primary}` : "none",
        display: "flex",
        flexDirection: "column",
        // Vertical cards fill their grid cell, so a row of them shares one height
        height: isVertical ? "100%" : undefined,
        opacity: disabled ? 0.5 : 1,
        overflow: "hidden",
        textAlign: "left",
        transition: theme.transitions.create(["border-color", "box-shadow", "background-color"], {
          duration: theme.transitions.duration.shorter,
        }),
        width: "100%",
      })}
    >
      {content}
    </ButtonBase>
  );
};

export default CheckboxCard;
