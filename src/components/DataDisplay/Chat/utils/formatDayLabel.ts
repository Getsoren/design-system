import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";

/**
 * "Today", "Yesterday", or the day in the browser's language
 */
const formatDayLabel = (date: string) => {
  const day = new Date(ensureUtc(date));
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (day.toDateString() === today.toDateString()) {
    return "Today";
  }

  if (day.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  }

  return day.toLocaleDateString(undefined, { day: "numeric", month: "long", weekday: "long" });
};

export default formatDayLabel;
