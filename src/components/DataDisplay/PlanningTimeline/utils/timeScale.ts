/** Zoom level of the timeline. Each mode is just a different px-per-day and tick granularity. */
export type ViewMode = "day" | "week" | "month" | "year";

export const MS_PER_DAY = 1000 * 60 * 60 * 24;

/**
 * Horizontal zoom per mode. Bar geometry is always computed in px-per-day, so switching mode only
 * rescales the same linear axis — it never changes the bar maths (avoids variable-width month columns).
 */
export const PX_PER_DAY: Record<ViewMode, number> = {
  day: 72,
  month: 7,
  week: 22,
  year: 2,
};

export interface DateRange {
  start: Date;
  end: Date;
}

/** A single header cell (a day/week/month for the minor row, a month/year for the major row). */
export interface Tick {
  key: string;
  /** Left offset in px from the range start. */
  x: number;
  /** Cell width in px. */
  width: number;
  label: string;
}

export interface TimeScale {
  mode: ViewMode;
  rangeStart: Date;
  rangeEnd: Date;
  pxPerDay: number;
  /** Total timeline width in px. */
  width: number;
  /** Map a date to its x offset (px) from the range start. */
  dateToX: (date: Date | number) => number;
  /** Inverse of `dateToX`. */
  xToDate: (x: number) => Date;
  ticks: { minor: Tick[]; major: Tick[] };
}

/** Label language when no locale is given, so output doesn't depend on the host machine's locale. */
const DEFAULT_LOCALE = "en";

const ms = (value: Date | number) => (typeof value === "number" ? value : value.getTime());

/** Local-midnight start of the given day. */
export const startOfDay = (date: Date | number): Date => {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

/** Last millisecond of the given day (23:59:59.999, local time). */
export const endOfDay = (date: Date | number): Date => {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);
};

export const startOfMonth = (date: Date | number): Date => {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth(), 1);
};

export const startOfYear = (date: Date | number): Date => new Date(new Date(date).getFullYear(), 0, 1);

export const addDays = (date: Date | number, days: number): Date => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

/** Add calendar months, clamping to the last day of the target month (Jan 31 + 1 month → Feb 28/29). */
export const addMonths = (date: Date | number, months: number): Date => {
  const d = new Date(date);
  const day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + months);
  const lastDayOfTargetMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, lastDayOfTargetMonth));
  return d;
};

/** Step a date by one `mode` unit (toolbar prev/next arrows). */
export const addViewModeStep = (date: Date, direction: 1 | -1, mode: ViewMode): Date => {
  switch (mode) {
    case "day":
      return addDays(date, direction);
    case "week":
      return addDays(date, direction * 7);
    case "month":
      return addMonths(date, direction);
    default:
      return addMonths(date, direction * 12);
  }
};

/** Locale-aware formatter; falls back to English when the locale code is unknown/invalid. */
const formatter = (locale: string | undefined, options: Intl.DateTimeFormatOptions): Intl.DateTimeFormat => {
  try {
    return new Intl.DateTimeFormat(locale ?? DEFAULT_LOCALE, options);
  } catch {
    return new Intl.DateTimeFormat(DEFAULT_LOCALE, options);
  }
};

/** Toolbar label for the focused date: "05 Jan 2026" (day/week), "January 2026" (month), "2026" (year). */
export const formatViewDateLabel = (date: Date, mode: ViewMode, locale?: string): string => {
  const year = formatter(locale, { year: "numeric" }).format(date);
  if (mode === "year") {
    return year;
  }
  if (mode === "month") {
    return `${formatter(locale, { month: "long" }).format(date)} ${year}`;
  }
  return `${formatter(locale, { day: "2-digit" }).format(date)} ${formatter(locale, { month: "short" }).format(date)} ${year}`;
};

/**
 * Compute the visible date span: from the earliest start to the latest end, padded on both sides.
 * The end always keeps at least `horizonMonths` of runway after today, so a rental can be dragged /
 * extended well into the future even when every loaded booking ends sooner. Invalid dates (NaN) are
 * ignored — a single corrupt row must not poison the whole axis. Falls back to a window around today
 * when no valid date remains.
 */
export const computeRange = (tasks: { start: Date; end: Date }[], padDays = 3, horizonMonths = 12): DateRange => {
  const horizonEnd = endOfDay(addMonths(new Date(), horizonMonths));

  const startTimes = tasks.map((task) => task.start.getTime()).filter(Number.isFinite);
  const endTimes = tasks.map((task) => task.end.getTime()).filter(Number.isFinite);

  if (!(startTimes.length && endTimes.length)) {
    const today = new Date();
    const fallbackEnd = endOfDay(addDays(today, 14));
    return {
      end: new Date(Math.max(fallbackEnd.getTime(), horizonEnd.getTime())),
      start: startOfDay(addDays(today, -14)),
    };
  }

  const paddedEnd = addDays(endOfDay(Math.max(...endTimes)), padDays);
  return {
    end: paddedEnd.getTime() > horizonEnd.getTime() ? paddedEnd : horizonEnd,
    start: addDays(startOfDay(Math.min(...startTimes)), -padDays),
  };
};

/** Map a date to its x offset (px) from `rangeStart`, at ms precision. */
export const dateToX = (date: Date | number, rangeStart: Date | number, pxPerDay: number): number =>
  ((ms(date) - ms(rangeStart)) / MS_PER_DAY) * pxPerDay;

/** Inverse of `dateToX`: map an x offset (px) back to a date. */
export const xToDate = (x: number, rangeStart: Date | number, pxPerDay: number): Date =>
  new Date(ms(rangeStart) + (x / pxPerDay) * MS_PER_DAY);

/** Snap a date to the nearest day boundary (midnight) — used when committing a dragged bar end. */
export const snapDateToDay = (date: Date | number): Date => {
  const d = new Date(date);
  return startOfDay(d.getHours() >= 12 ? addDays(d, 1) : d);
};

/** Inclusive count of calendar months touched from `start` to `end` — a safe series upper bound. */
const monthSpan = (start: Date, end: Date): number =>
  (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

/**
 * The tick starts: `at(0)`, `at(1)`, … `at(count - 1)`, keeping only those strictly before `endMs`.
 * `count` only needs to be a safe upper bound — the overshoot is filtered out. Works because the
 * i-th tick is computable independently (calendar day/month arithmetic is associative).
 */
const dateSeries = (count: number, endMs: number, at: (index: number) => Date): Date[] =>
  Array.from({ length: Math.max(0, count) }, (_, index) => at(index)).filter((date) => date.getTime() < endMs);

/** Build the two-tier header ticks (minor cells + their major groupings) for the given range and mode. */
export const getTicks = (rangeStart: Date, rangeEnd: Date, mode: ViewMode, locale?: string): { minor: Tick[]; major: Tick[] } => {
  const pxPerDay = PX_PER_DAY[mode];
  const toX = (date: Date) => dateToX(date, rangeStart, pxPerDay);
  const dayFormat = formatter(locale, { day: "2-digit" });
  const monthShortFormat = formatter(locale, { month: "short" });
  const monthLongFormat = formatter(locale, { month: "long" });
  const yearFormat = formatter(locale, { year: "numeric" });
  const endMs = rangeEnd.getTime();

  // Minor row: one cell per day / per week / per month (month/year modes both use month cells).
  const minorUnit = mode === "month" || mode === "year" ? "month" : mode === "week" ? "week" : "day";
  const minorStepDays = minorUnit === "week" ? 7 : 1;
  // Weeks are anchored on the range start (not on a locale week start) to keep tests timezone-stable.
  const minorFirst = minorUnit === "month" ? startOfMonth(rangeStart) : startOfDay(rangeStart);
  const minorCount =
    minorUnit === "month" ? monthSpan(minorFirst, rangeEnd) : Math.ceil((endMs - minorFirst.getTime()) / (minorStepDays * MS_PER_DAY)) + 1;
  const minorStarts = dateSeries(minorCount, endMs, (index) =>
    minorUnit === "month" ? addMonths(minorFirst, index) : addDays(minorFirst, index * minorStepDays),
  );

  const minor: Tick[] = minorStarts.map((start) => {
    const next = minorUnit === "month" ? addMonths(start, 1) : addDays(start, minorStepDays);
    const x = toX(start);
    const label =
      minorUnit === "month"
        ? monthShortFormat.format(start)
        : mode === "week"
          ? `${dayFormat.format(start)} ${monthShortFormat.format(start)}`
          : dayFormat.format(start);
    return { key: start.toISOString(), label, width: toX(next) - x, x };
  });

  // Major row: month groupings (day/week modes) or year groupings (month/year modes).
  const majorUnit = mode === "month" || mode === "year" ? "year" : "month";
  const majorStepMonths = majorUnit === "year" ? 12 : 1;
  const majorFirst = majorUnit === "year" ? startOfYear(rangeStart) : startOfMonth(rangeStart);
  const majorCount = Math.ceil(monthSpan(majorFirst, rangeEnd) / majorStepMonths);
  const majorStarts = dateSeries(majorCount, endMs, (index) => addMonths(majorFirst, index * majorStepMonths));

  const major: Tick[] = majorStarts.map((start) => {
    const next = addMonths(start, majorStepMonths);
    const startX = Math.max(0, toX(start));
    const endX = Math.min(dateToX(rangeEnd, rangeStart, pxPerDay), toX(next));
    const label = majorUnit === "year" ? yearFormat.format(start) : `${monthLongFormat.format(start)} ${yearFormat.format(start)}`;
    return { key: start.toISOString(), label, width: endX - startX, x: startX };
  });

  return { major, minor };
};

/** Build the full scale (range, zoom, width, converters, ticks) for a set of rows in a given mode. */
export const createTimeScale = (tasks: { start: Date; end: Date }[], mode: ViewMode, locale?: string, padDays = 3): TimeScale => {
  const { start, end } = computeRange(tasks, padDays);
  const pxPerDay = PX_PER_DAY[mode];

  return {
    dateToX: (date) => dateToX(date, start, pxPerDay),
    mode,
    pxPerDay,
    rangeEnd: end,
    rangeStart: start,
    ticks: getTicks(start, end, mode, locale),
    width: dateToX(end, start, pxPerDay),
    xToDate: (x) => xToDate(x, start, pxPerDay),
  };
};
