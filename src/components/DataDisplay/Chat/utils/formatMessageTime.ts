import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";

/**
 * "14:32" in the reader's locale
 */
const formatMessageTime = (date: string): string => {
  try {
    return new Intl.DateTimeFormat(undefined, { hour: "2-digit", hour12: false, minute: "2-digit" }).format(new Date(ensureUtc(date)));
  } catch {
    return "";
  }
};

export default formatMessageTime;
