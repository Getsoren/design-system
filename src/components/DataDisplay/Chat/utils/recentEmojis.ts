const STORAGE_KEY = "soren-chat-recent-emojis";
const MAX_RECENT_EMOJIS = 24;

export const getRecentEmojis = (): string[] => {
  try {
    const value = JSON.parse(globalThis.localStorage?.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(value) ? value.filter((emoji) => typeof emoji === "string") : [];
  } catch {
    // localStorage unavailable (SSR, privacy mode...) or corrupted
    return [];
  }
};

export const addRecentEmoji = (emoji: string) => {
  try {
    const recents = [emoji, ...getRecentEmojis().filter((recent) => recent !== emoji)].slice(0, MAX_RECENT_EMOJIS);
    globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(recents));
  } catch {
    // localStorage unavailable (SSR, privacy mode...)
  }
};
