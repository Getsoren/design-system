import { describe, expect, it } from "vitest";
import {
  addDays,
  addMonths,
  computeRange,
  createTimeScale,
  dateToX,
  formatViewDateLabel,
  getTicks,
  MS_PER_DAY,
  PX_PER_DAY,
  parseLocalDate,
  snapDateToDay,
  xToDate,
} from "../utils/timeScale";

const d = (iso: string) => new Date(iso);

describe("dateToX / xToDate", () => {
  const rangeStart = d("2026-01-01T00:00:00.000Z");

  it("places the range start at x=0", () => {
    expect(dateToX(rangeStart, rangeStart, PX_PER_DAY.day)).toBe(0);
  });

  it("scales one day to exactly pxPerDay", () => {
    const oneDayLater = new Date(rangeStart.getTime() + MS_PER_DAY);
    expect(dateToX(oneDayLater, rangeStart, PX_PER_DAY.day)).toBe(PX_PER_DAY.day);
    expect(dateToX(oneDayLater, rangeStart, PX_PER_DAY.week)).toBe(PX_PER_DAY.week);
  });

  it("round-trips a date through dateToX → xToDate", () => {
    const target = d("2026-01-09T13:37:00.000Z");
    const x = dateToX(target, rangeStart, PX_PER_DAY.day);
    expect(xToDate(x, rangeStart, PX_PER_DAY.day).getTime()).toBe(target.getTime());
  });

  it("is denser in day mode than in month mode for the same date", () => {
    const target = d("2026-02-01T00:00:00.000Z");
    expect(dateToX(target, rangeStart, PX_PER_DAY.day)).toBeGreaterThan(dateToX(target, rangeStart, PX_PER_DAY.month));
  });
});

describe("addMonths", () => {
  it("adds plain calendar months", () => {
    expect(addMonths(new Date(2026, 0, 15), 2).getTime()).toBe(new Date(2026, 2, 15).getTime());
  });

  it("clamps to the last day of the target month", () => {
    expect(addMonths(new Date(2026, 0, 31), 1).getTime()).toBe(new Date(2026, 1, 28).getTime());
  });

  it("crosses year boundaries backwards", () => {
    expect(addMonths(new Date(2026, 0, 15), -1).getTime()).toBe(new Date(2025, 11, 15).getTime());
  });
});

describe("parseLocalDate", () => {
  it("reads a date-only string as local midnight, whatever the timezone", () => {
    expect(parseLocalDate("2026-07-01").getTime()).toBe(new Date(2026, 6, 1).getTime());
  });

  it("keeps ISO datetime strings, Date and timestamp inputs as-is", () => {
    expect(parseLocalDate("2026-07-01T10:30:00.000Z").getTime()).toBe(new Date("2026-07-01T10:30:00.000Z").getTime());
    expect(parseLocalDate(1234567890).getTime()).toBe(1234567890);
  });

  it("returns an invalid date for garbage input (dropped by the caller)", () => {
    expect(Number.isNaN(parseLocalDate("not-a-date").getTime())).toBe(true);
  });
});

describe("snapDateToDay", () => {
  it("snaps a morning time down to the same midnight", () => {
    expect(snapDateToDay(d("2026-03-10T09:00:00")).getTime()).toBe(new Date(2026, 2, 10).getTime());
  });

  it("snaps an afternoon time up to the next midnight", () => {
    expect(snapDateToDay(d("2026-03-10T15:00:00")).getTime()).toBe(new Date(2026, 2, 11).getTime());
  });
});

describe("formatViewDateLabel", () => {
  const date = new Date(2026, 0, 5);

  it("formats per mode in English by default", () => {
    expect(formatViewDateLabel(date, "day")).toBe("05 Jan 2026");
    expect(formatViewDateLabel(date, "month")).toBe("January 2026");
    expect(formatViewDateLabel(date, "year")).toBe("2026");
  });

  it("localises the label", () => {
    expect(formatViewDateLabel(date, "month", "fr")).toBe("janvier 2026");
  });
});

describe("computeRange", () => {
  it("falls back to a window around today when there are no tasks", () => {
    const { start, end } = computeRange([]);
    expect(start.getTime()).toBeLessThan(end.getTime());
  });

  it("spans from the earliest start to the latest end, padded on both sides", () => {
    const tasks = [
      { end: d("2026-01-10T00:00:00"), start: d("2026-01-05T00:00:00") },
      { end: d("2026-01-20T00:00:00"), start: d("2026-01-08T00:00:00") },
    ];
    const { start, end } = computeRange(tasks, 3);
    expect(start.getTime()).toBeLessThan(d("2026-01-05T00:00:00").getTime());
    expect(end.getTime()).toBeGreaterThan(d("2026-01-20T00:00:00").getTime());
  });

  it("ignores rows with invalid dates instead of poisoning the range", () => {
    const tasks = [
      { end: new Date(Number.NaN), start: new Date(Number.NaN) },
      { end: d("2026-01-10T00:00:00"), start: d("2026-01-05T00:00:00") },
    ];
    const { start, end } = computeRange(tasks, 3, 0);
    expect(Number.isFinite(start.getTime())).toBe(true);
    expect(Number.isFinite(end.getTime())).toBe(true);
    expect(start.getFullYear()).toBe(2026);
    expect(end.getFullYear()).toBe(2026);
  });

  it("falls back to a window around today when every row has invalid dates", () => {
    const { start, end } = computeRange([{ end: new Date(Number.NaN), start: new Date(Number.NaN) }]);
    expect(start.getTime()).toBeLessThan(Date.now());
    expect(end.getTime()).toBeGreaterThan(Date.now());
  });

  it("keeps a runway of `horizonMonths` after today so bars can be extended into the future", () => {
    // Every booking ends in the past → the axis must still reach ~12 months ahead of today.
    const tasks = [{ end: d("2020-01-10T00:00:00"), start: d("2020-01-05T00:00:00") }];
    const { end } = computeRange(tasks, 3, 12);
    const expectedMin = addDays(new Date(), 11 * 30);
    expect(end.getTime()).toBeGreaterThan(expectedMin.getTime());
  });

  it("does not shrink a range that already ends beyond the horizon", () => {
    const farEnd = new Date();
    farEnd.setFullYear(farEnd.getFullYear() + 3);
    const { end } = computeRange([{ end: farEnd, start: d("2026-01-05T00:00:00") }], 3, 12);
    expect(end.getTime()).toBeGreaterThan(farEnd.getTime());
  });
});

describe("getTicks", () => {
  it("emits one minor cell per day in day mode", () => {
    const start = d("2026-01-01T00:00:00");
    const end = d("2026-01-08T00:00:00"); // 7 full days
    const { minor } = getTicks(start, end, "day");
    expect(minor).toHaveLength(7);
    expect(minor[0].width).toBeCloseTo(PX_PER_DAY.day, 5);
  });

  it("groups days under month majors in day mode", () => {
    const { major } = getTicks(d("2026-01-20T00:00:00"), d("2026-02-10T00:00:00"), "day");
    expect(major.map((m) => m.label)).toEqual(["January 2026", "February 2026"]);
  });

  it("localises the tick labels", () => {
    const { major } = getTicks(d("2026-01-20T00:00:00"), d("2026-01-25T00:00:00"), "day", "fr");
    expect(major.map((m) => m.label)).toEqual(["janvier 2026"]);
  });

  it("emits month cells under year majors in year mode", () => {
    const { minor, major } = getTicks(d("2026-01-01T00:00:00"), d("2026-12-31T00:00:00"), "year");
    expect(minor).toHaveLength(12);
    expect(major.map((m) => m.label)).toEqual(["2026"]);
  });

  it("is more compact in year mode than in month mode", () => {
    const start = d("2026-01-01T00:00:00");
    const end = d("2026-12-31T00:00:00");
    const yearWidth = dateToX(end, start, PX_PER_DAY.year);
    const monthWidth = dateToX(end, start, PX_PER_DAY.month);
    expect(yearWidth).toBeLessThan(monthWidth);
  });
});

describe("createTimeScale", () => {
  it("bundles a consistent range, width and converters", () => {
    const tasks = [{ end: d("2026-01-10T00:00:00"), start: d("2026-01-01T00:00:00") }];
    const scale = createTimeScale(tasks, "day");
    expect(scale.dateToX(scale.rangeStart)).toBe(0);
    expect(scale.width).toBeCloseTo(scale.dateToX(scale.rangeEnd), 5);
    expect(scale.width).toBeGreaterThan(0);
  });
});
