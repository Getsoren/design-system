import { Box, ButtonBase, Skeleton, Stack, type SxProps, type Theme, Typography } from "@mui/material";
import type { ReactNode } from "react";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";

export interface CheckboxCardProps {
  /** Main line — one line in a horizontal card, up to three in a vertical one or a tile */
  label: string;
  /** Secondary line under the label — one line, ellipsized */
  description?: string;
  /** Leading visual, rendered in a 40px tile — an outlined icon, an avatar, an illustration */
  icon?: ReactNode;
  /** Content before the texts, rendered as is (an avatar, a badge) */
  leading?: ReactNode;
  /** Content after the texts of a horizontal card (an icon) */
  trailing?: ReactNode;
  /** Picture: above the texts of a vertical card, after them in a 56×48 box of a horizontal one, as is at the top of a tile */
  picture?: ReactNode;
  /** Shows a skeleton over the picture box, or in place of the picture of a tile */
  isPictureLoading?: boolean;
  /**
   * Animates the picture of a tile while the card is hovered or focused with the keyboard: a picture rises and floats, an icon
   * lifts, and both spring back once the card is left. Still for whoever asks their system for less motion
   */
  animatePicture?: boolean;
  /**
   * `horizontal`: texts in a row; `vertical`: picture on top, for a catalog; `tile`: the picture at the top, the
   * label at the bottom, for a grid of a few big choices
   */
  layout?: "horizontal" | "vertical" | "tile";
  /** Selection indicator; `none` for a plain choice. The group logic (single or multi select) belongs to the consumer */
  control?: "checkbox" | "radio" | "none";
  /** `end`: a check (or a dot) fading in after the texts; `start`: a circled indicator before them */
  controlPlacement?: "start" | "end";
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  testId?: string;
}

/** Side of the skeleton standing for a tile's picture */
const TILE_PICTURE_SIZE = 56;

/** Class of the box holding a tile's picture, which the card's motion targets */
const TILE_PICTURE_CLASS = "CheckboxCard-tilePicture";

/** The card hovered, or focused with the keyboard */
const ACTIVE = "&:hover, &.Mui-focusVisible";

/** A spring: the move overshoots its end a little before settling, both when the card is reached and when it is left */
const SPRING = "cubic-bezier(0.34, 1.56, 0.64, 1)";

/** Class of the box inside, which floats while the picture is risen */
const TILE_PICTURE_FLOAT_CLASS = "CheckboxCard-tilePictureFloat";

/**
 * A tile's picture rising and floating, or its icon lifting, while the card is active, and springing back once it is
 * left. The rise springs on the outer box; the float loops on the inner one, two pixels at most, so its stop is lost
 * in the spring back
 */
const PICTURE_MOTION: SxProps<Theme> = {
  "@keyframes checkboxCardPictureFloat": {
    "0%, 100%": { transform: "translate(0, 0)" },
    "50%": { transform: "translate(1px, -2px)" },
  },
  "@media (prefers-reduced-motion: no-preference)": {
    [`& .${TILE_PICTURE_CLASS}, & .${TILE_PICTURE_CLASS} .MuiSvgIcon-root`]: { transition: `transform 450ms ${SPRING}` },
    [ACTIVE]: {
      [`& .${TILE_PICTURE_CLASS} .MuiSvgIcon-root`]: { transform: "translateY(-2px)" },
      // An icon only lifts: a picture, which is not one, rises and floats
      // Rising, it eases out gently; the spring is for its way back
      [`& .${TILE_PICTURE_CLASS}:not(:has(.MuiSvgIcon-root))`]: {
        transform: "translate(1px, -2px)",
        transition: "transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      [`& .${TILE_PICTURE_CLASS}:not(:has(.MuiSvgIcon-root)) .${TILE_PICTURE_FLOAT_CLASS}`]: {
        animation: "checkboxCardPictureFloat 1600ms ease-in-out infinite",
      },
    },
  },
};

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
  animatePicture,
  layout = "horizontal",
  control = "checkbox",
  controlPlacement = "end",
  selected,
  disabled,
  onClick,
  testId,
}: CheckboxCardProps) => {
  const isVertical = layout === "vertical";
  const isTile = layout === "tile";
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

  const texts = isTile ? (
    <Stack spacing={0.25} flex={1} minWidth={0}>
      <Typography fontWeight={500} sx={{ display: "-webkit-box", overflow: "hidden", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}>
        {label}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" noWrap>
          {description}
        </Typography>
      )}
    </Stack>
  ) : isVertical ? (
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

  const tilePicture = isPictureLoading ? (
    <Skeleton variant="rounded" width={TILE_PICTURE_SIZE} height={TILE_PICTURE_SIZE} />
  ) : (
    picture && (
      <Box className={TILE_PICTURE_CLASS} sx={{ display: "flex" }}>
        <Box className={TILE_PICTURE_FLOAT_CLASS} sx={{ display: "flex" }}>
          {picture}
        </Box>
      </Box>
    )
  );

  const content = isTile ? (
    // The pictures of a row of tiles line up at the top, their labels at the bottom
    <Stack spacing={1.5} alignItems="flex-start" justifyContent="space-between" sx={{ height: "100%", padding: 2, width: "100%" }}>
      {tilePicture}
      <Stack direction="row" spacing={1.25} alignItems="flex-end" sx={{ width: "100%" }}>
        {startIndicator}
        {texts}
        {endIndicator}
      </Stack>
    </Stack>
  ) : isVertical ? (
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
      sx={[
        (theme) => ({
          // Hovered or focused with the keyboard, the card greys like a clickable Card, and keeps its outline
          "&:hover, &.Mui-focusVisible": { backgroundColor: theme.palette.action.hover },
          alignItems: "stretch",
          backgroundColor: selected ? theme.palette.action.hover : theme.palette.background.paper,
          // On a raised surface in dark mode (a popover, a dialog), the paper's colour alone is darker than the surface around
          // it: the card takes the surface's own lightening, which the surface hands down. None outside a raised surface
          backgroundImage: selected ? undefined : "var(--Paper-overlay)",
          // At rest, the outline of a Card rather than a field's: a grid of cards reads as content, not as a form
          border: `1px solid ${selected ? theme.palette.text.primary : theme.palette.divider}`,
          borderRadius: `${theme.shape.borderRadiusL}px`,
          // A second line inside the border reads as the 2px border of a selection, without moving the content
          boxShadow: selected ? `inset 0 0 0 1px ${theme.palette.text.primary}` : "none",
          display: "flex",
          flexDirection: "column",
          // Vertical cards and tiles fill their grid cell, so a row of them shares one height
          height: isVertical || isTile ? "100%" : undefined,
          opacity: disabled ? 0.5 : 1,
          overflow: "hidden",
          textAlign: "left",
          transition: theme.transitions.create(["border-color", "box-shadow", "background-color"], {
            duration: theme.transitions.duration.shorter,
          }),
          width: "100%",
        }),
        !!animatePicture && isTile && PICTURE_MOTION,
      ]}
    >
      {content}
    </ButtonBase>
  );
};

export default CheckboxCard;
