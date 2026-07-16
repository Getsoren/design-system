import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { RailSpacer } from "@/components/DataDisplay/BookingTimeline/components/Rail";
import TimelineAnchor from "@/components/DataDisplay/BookingTimeline/components/TimelineAnchor";
import TimelineEvent from "@/components/DataDisplay/BookingTimeline/components/TimelineEvent";
import { NODE_SIZE } from "@/components/DataDisplay/BookingTimeline/constants";
import { BookingTimelineLabels, BookingTimelineProps } from "@/components/DataDisplay/BookingTimeline/types";
import ArrowBackRoundedIcon from "@/components/DataDisplay/Icons/ArrowBackRoundedIcon";
import ArrowForwardRoundedIcon from "@/components/DataDisplay/Icons/ArrowForwardRoundedIcon";
import PlayArrowRoundedIcon from "@/components/DataDisplay/Icons/PlayArrowRoundedIcon";
import SportsScoreIcon from "@/components/DataDisplay/Icons/SportsScoreIcon";
import useTranslation from "@/hooks/useTranslation";

/**
 * Rental timeline: a vertical rail carrying the Delivery / Start / End / Retrieval bookends,
 * with every event of the rental displayed in between on a single line (status flag node,
 * name, photo pile, declarant avatar, date).
 *
 * Purely presentational — dates and labels arrive formatted; the host app adapts its data.
 * The arrival / departure arrows belong to Delivery / Retrieval: when those bookends are
 * absent (delivery on the start day / retrieval on the end day, folded into the start / end
 * anchors) the anchors keep the arrows, otherwise the start shows a play glyph and the end
 * a finish flag.
 */
const BookingTimeline = ({
  start,
  end,
  delivery,
  retrieval,
  isLoading,
  emptyMessage,
  labels,
  events = [],
  "data-test": dataTest,
  "data-testid": dataTestId,
}: BookingTimelineProps) => {
  const { t } = useTranslation();
  const label = useCallback((key: keyof BookingTimelineLabels) => labels?.[key] ?? t(key), [labels, t]);

  if (isLoading) {
    return (
      <Stack spacing={2.5} sx={{ py: 1 }} data-test={dataTest} data-testid={dataTestId}>
        {[0, 1, 2, 3].map((i) => (
          <Stack key={i} direction="row" alignItems="center" spacing={1.5}>
            <Skeleton variant="circular" width={NODE_SIZE} height={NODE_SIZE} />
            <Skeleton variant="text" width="55%" />
          </Stack>
        ))}
      </Stack>
    );
  }

  if (!(start || end || delivery || retrieval) && events.length === 0) {
    return (
      <Typography variant="body2" color="textSecondary" sx={{ py: 2 }} data-test={dataTest} data-testid={dataTestId}>
        {emptyMessage}
      </Typography>
    );
  }

  const eventLabels: BookingTimelineLabels = { closed: label("closed"), open: label("open") };

  return (
    <Box sx={{ position: "relative" }} data-test={dataTest} data-testid={dataTestId}>
      {delivery && <TimelineAnchor anchor={delivery} glyph={<ArrowForwardRoundedIcon fontSize="inherit" />} railVariant="top" />}
      {delivery && <RailSpacer height={12} />}

      {start && (
        <TimelineAnchor
          anchor={start}
          glyph={delivery ? <PlayArrowRoundedIcon fontSize="inherit" /> : <ArrowForwardRoundedIcon fontSize="inherit" />}
          railVariant={delivery ? "mid" : "top"}
        />
      )}
      {start && events.length > 0 && <RailSpacer height={12} />}

      {events.map((event) => (
        <TimelineEvent key={event.key} event={event} labels={eventLabels} />
      ))}

      {end && events.length > 0 && <RailSpacer height={12} />}
      {end && (
        <TimelineAnchor
          anchor={end}
          glyph={retrieval ? <SportsScoreIcon fontSize="inherit" /> : <ArrowBackRoundedIcon fontSize="inherit" />}
          railVariant={retrieval ? "mid" : "bottom"}
        />
      )}

      {retrieval && <TimelineAnchor anchor={retrieval} glyph={<ArrowBackRoundedIcon fontSize="inherit" />} railVariant="bottom" />}
    </Box>
  );
};

export default BookingTimeline;
