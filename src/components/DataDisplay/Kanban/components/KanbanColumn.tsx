import { capitalize, useInView } from "@getsoren/react-utils";
import { Box, Card, ChipProps, CircularProgress, Skeleton, Stack, Typography } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { memo, useEffect, useRef } from "react";
import ChipStatusKanban from "@/components/DataDisplay/Kanban/components/ChipStatusKanban";
import KanbanCard from "@/components/DataDisplay/Kanban/components/KanbanCard";
import { defaultKanbanChip, HeaderColumnChip, KanbanCardVariant, KanbanDataItemProps } from "@/components/DataDisplay/Kanban/types";

const CARD_HEIGHT = 165;
const SKELETON_COUNT = 3;

export interface KanbanColumnProps {
  name: string;
  label?: string;
  count?: number;
  items: KanbanDataItemProps[];
  chipColumVariant?: ChipProps["variant"];
  chipColumDot?: boolean;
  chipStatus?: string;
  isLoading?: boolean;
  isFetching?: boolean;
  gutterSize: number;
  itemPerPage?: number;
  listWidth: number | string;
  disableCount?: boolean;
  activeItemId: string;
  onClickItem?: (id: string) => void;
  loadMoreItems?: (startIndex: number, stopIndex: number, status?: string) => void;
  onInView?: (name: string) => void;
  headerColumnChip?: HeaderColumnChip;
  variant?: KanbanCardVariant;
}

const KanbanColumn = memo(
  ({
    name,
    label,
    count,
    items,
    isFetching,
    isLoading,
    gutterSize,
    itemPerPage,
    listWidth,
    disableCount,
    loadMoreItems,
    activeItemId,
    onClickItem,
    onInView,
    chipColumVariant,
    chipColumDot,
    chipStatus,
    headerColumnChip,
    variant,
  }: KanbanColumnProps) => {
    const onInViewTriggered = useRef<string[]>([]);
    const lastLoadedOffset = useRef<number>(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);
    const inView = useInView(containerRef);
    const hasMoreItemsToLoad = count !== undefined && items.length < count;
    const hasLoaderRows = hasMoreItemsToLoad || isFetching;

    const rowVirtualizer = useVirtualizer({
      count: hasLoaderRows ? items.length + SKELETON_COUNT : items.length,
      estimateSize: () => CARD_HEIGHT + gutterSize,
      getScrollElement: () => parentRef.current,
      overscan: 5,
    });

    const countValue = disableCount ? undefined : (count ?? items.length);

    const countColor = (() => {
      const mapping = headerColumnChip ?? defaultKanbanChip;
      const { color } = (chipStatus && mapping[chipStatus]) || mapping[name] || { color: "default" };

      // `.dark`, not `.main`: the shade an outlined Chip paints its own label with
      return !color || color === "default" ? "text.secondary" : `${color}.dark`;
    })();

    /**
     * Infinite scroll: trigger loadMoreItems when the last rendered
     * virtual item reaches the end of real items (skeleton zone).
     * Follows the official @tanstack/react-virtual infinite scroll pattern.
     */
    // biome-ignore lint/correctness/useExhaustiveDependencies: getVirtualItems() must be called in deps to re-trigger on scroll
    useEffect(() => {
      const [lastVirtualItem] = [...rowVirtualizer.getVirtualItems()].reverse();

      if (!lastVirtualItem || isLoading || isFetching) {
        return;
      }

      if (lastVirtualItem.index >= items.length - 1 && hasMoreItemsToLoad && lastLoadedOffset.current !== items.length) {
        lastLoadedOffset.current = items.length;
        loadMoreItems?.(items.length, items.length + (itemPerPage || 0), name);
      }
    }, [hasMoreItemsToLoad, isFetching, isLoading, items.length, itemPerPage, name, loadMoreItems, rowVirtualizer.getVirtualItems()]);

    /**
     * Trigger onInView once per column
     */
    useEffect(() => {
      if (inView && !onInViewTriggered.current.includes(name)) {
        onInViewTriggered.current.push(name);
        onInView?.(name);
      }
    }, [name, inView, onInView]);

    return (
      <Stack ref={containerRef}>
        <Card
          variant="elevation"
          elevation={0}
          sx={{
            ".kanban-virtual-list": {
              "&::-webkit-scrollbar": { display: "none" },
              flex: 1,
              msOverflowStyle: "none",
              overflowY: "auto",
              scrollbarWidth: "none",
            },
            backgroundColor: "grey.100",
            border: 0,
            borderRadius: 2,
            flex: "1 1 auto",
            height: 0,
            width: listWidth,
          }}
        >
          <Stack height="100%">
            {/* Header */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ flexShrink: 0, paddingBottom: 0.5, paddingTop: 1.5, paddingX: `${gutterSize}px` }}
            >
              {/* The count stands outside the pill, so a four-digit count does not stretch it */}
              <ChipStatusKanban
                dot={chipColumDot}
                label={capitalize(label || name)}
                variant={chipColumVariant}
                status={chipStatus || name}
                size="small"
                headerColumnChip={headerColumnChip}
                sx={{ ".MuiChip-label": { fontWeight: 500 } }}
              />
              {!!countValue && (
                <Typography sx={{ color: countColor, fontWeight: 500 }} variant="body2">
                  {countValue}
                </Typography>
              )}
              {isFetching && <CircularProgress size={16} sx={{ color: "text.secondary" }} />}
            </Stack>
            {/* Content */}
            <Box flex={1} ref={parentRef} className="kanban-virtual-list">
              {isLoading ? (
                <Stack spacing={1} p={`${gutterSize}px`}>
                  {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                    <Skeleton key={index} variant="rounded" height={CARD_HEIGHT} />
                  ))}
                </Stack>
              ) : (
                <Box
                  sx={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    position: "relative",
                    width: "100%",
                  }}
                >
                  {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const isLoaderRow = virtualRow.index >= items.length;

                    return (
                      <Box
                        key={isLoaderRow ? `skeleton-${virtualRow.index}` : items[virtualRow.index].id}
                        ref={rowVirtualizer.measureElement}
                        data-index={virtualRow.index}
                        sx={{
                          left: 0,
                          paddingBottom: `${gutterSize}px`,
                          paddingTop: virtualRow.index === 0 ? `${gutterSize}px` : 0,
                          position: "absolute",
                          top: 0,
                          transform: `translateY(${virtualRow.start}px)`,
                          width: "100%",
                        }}
                      >
                        {isLoaderRow ? (
                          <Box sx={{ px: `${gutterSize}px` }}>
                            <Skeleton variant="rounded" height={CARD_HEIGHT} />
                          </Box>
                        ) : (
                          <KanbanCard
                            item={items[virtualRow.index]}
                            activeItemId={activeItemId}
                            gutterSize={gutterSize}
                            onClickItem={onClickItem}
                            variant={variant}
                          />
                        )}
                      </Box>
                    );
                  })}
                </Box>
              )}
            </Box>
          </Stack>
        </Card>
      </Stack>
    );
  },
);

export default KanbanColumn;
