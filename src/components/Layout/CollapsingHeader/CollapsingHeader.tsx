import { isMac } from "@getsoren/react-utils";
import { Box, Container, GlobalStyles, IconButton, Stack, Theme, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import ArrowBackIosRoundedIcon from "@/components/DataDisplay/Icons/ArrowBackIosRoundedIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import ExpandIcon from "@/components/DataDisplay/Icons/ExpandIcon";
import Button from "@/components/Inputs/Button";
import type { CollapsingHeaderLabels, CollapsingHeaderProps } from "@/components/Layout/CollapsingHeader/types";
import useTranslation from "@/hooks/useTranslation";

// Uber-style collapsing header: the full header is regular flow content that scrolls away with the
// page (1:1 finger tracking), while an always-mounted compact bar slides in over the content once
// the full header has left the viewport. The wrapper is a zero-height sticky so it never affects
// layout; only the inner bar animates.
const stickyBarWrapperSx = {
  height: 0,
  overflow: "visible",
  position: "sticky",
  top: 0,
  zIndex: 100,
} as const;

const stickyBarSx = (isActive: boolean) =>
  ({
    background: ({ palette }: Theme) => palette.background.default,
    borderBottom: ({ palette }: Theme) => `1px solid ${palette.divider}`,
    opacity: isActive ? 1 : 0,
    pointerEvents: isActive ? "auto" : "none",
    py: 1.5,
    transform: isActive ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease",
  }) as const;

/** Two-line tooltip: the action on the first line, its keyboard shortcut muted on the second. */
const ShortcutTooltipTitle = ({ title, shortcut }: { title: string; shortcut: string }) => (
  <Stack>
    <Typography variant="body2">{title}</Typography>
    <Typography variant="body2" color="textSecondary">
      {shortcut}
    </Typography>
  </Stack>
);

/**
 * Collapsing header of an entity preview panel or full page, designed for the `Backoffice` layout.
 * Preview: "open full page" link + close button above the title. Full page: back link above the
 * title, compact actions in the sticky bar.
 */
const CollapsingHeader = ({
  compactTitle,
  fullTitle,
  actions,
  compactActions,
  variant = "preview",
  onClose,
  onOpenFullPage,
  backLabel,
  onBack,
  labels,
  maxWidth = "lg",
}: CollapsingHeaderProps) => {
  const [isStickyActive, setIsStickyActive] = useState(false);
  const { t } = useTranslation();
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(breakpoints.up("lg"));
  const sentinelRef = useRef<HTMLDivElement>(null);
  const shortcut = isMac() ? "⌘+↵" : "Ctrl+↵";
  const containerProps = typeof maxWidth === "number" ? ({ maxWidth: false, sx: { maxWidth } } as const) : ({ maxWidth } as const);
  const label = useCallback((key: keyof CollapsingHeaderLabels) => labels?.[key] ?? t(key), [labels, t]);

  /**
   * The sentinel sits right below the full header: the compact bar shows once the sentinel is
   * scrolled out (clipped) through the top of its scroll container.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsStickyActive(!entry.isIntersecting);
    });

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (variant === "preview") {
    return (
      <>
        <Box sx={stickyBarWrapperSx}>
          <Box sx={stickyBarSx(isStickyActive)}>
            <Box sx={{ px: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={1} alignItems="center" minWidth={0}>
                  {onOpenFullPage && (
                    <Tooltip title={label("openFullScreen")}>
                      <IconButton size="small" onClick={onOpenFullPage}>
                        <ExpandIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {compactTitle}
                </Stack>
                <Tooltip title={label("close")}>
                  <IconButton size="small" onClick={onClose} sx={{ flexShrink: 0 }}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: 3, py: 3 }}>
          <Stack spacing={2}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              {onOpenFullPage && (
                <Tooltip title={<ShortcutTooltipTitle title={label("openFullScreen")} shortcut={shortcut} />}>
                  <Button
                    variant="link"
                    size="small"
                    onClick={onOpenFullPage}
                    startIcon={<ExpandIcon />}
                    sx={{ color: "text.secondary", textDecoration: "none" }}
                  >
                    {label("openFullPage")}
                  </Button>
                </Tooltip>
              )}
              <Tooltip title={<ShortcutTooltipTitle title={label("close")} shortcut={label("escape")} />}>
                <IconButton size="small" onClick={onClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
            <Stack direction="row" spacing={1.5} alignItems={isMobile ? "flex-start" : "center"}>
              {fullTitle}
            </Stack>
            {actions}
          </Stack>
        </Box>
        <Box ref={sentinelRef} />
      </>
    );
  }

  return (
    <>
      {/* On smaller screens the page keeps a single scroll flow, so the Backoffice layout's main
          must grow with its content instead of scrolling internally. */}
      {!isLargeScreen && (
        <GlobalStyles
          styles={{
            main: {
              height: "auto !important",
            },
          }}
        />
      )}
      <Box sx={stickyBarWrapperSx}>
        <Box sx={stickyBarSx(isStickyActive)}>
          <Container {...containerProps}>
            <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between">
              <Stack direction="row" spacing={1} alignItems="center" minWidth={0}>
                {compactTitle}
              </Stack>
              {!isMobile && compactActions}
            </Stack>
          </Container>
        </Box>
      </Box>
      <Box sx={{ mt: isMobile ? 0 : 3, py: 3 }}>
        <Container {...containerProps}>
          <Stack spacing={2}>
            {onBack && (
              <Box>
                <Button
                  variant="link"
                  size="small"
                  onClick={onBack}
                  startIcon={<ArrowBackIosRoundedIcon fontSize="small" />}
                  sx={{ color: "text.secondary", textDecoration: "none" }}
                >
                  {backLabel}
                </Button>
              </Box>
            )}
            <Stack direction="row" spacing={1.5} alignItems={isMobile ? "flex-start" : "center"}>
              {fullTitle}
            </Stack>
            {actions}
          </Stack>
        </Container>
      </Box>
      <Box ref={sentinelRef} />
    </>
  );
};

export default CollapsingHeader;
