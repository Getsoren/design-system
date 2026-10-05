import type { EmojiData, EmojiDataResolver } from "frimousse";
import { EMOJI_FONT_FAMILY } from "@/components/DataDisplay/Chat/constants";

interface EmojibaseEmoji {
  emoji: string;
  label: string;
  group?: number;
  subgroup?: number;
  version: number;
  tags?: string[];
  /** 1: emoji presentation by default, 0: text presentation (needs the FE0F selector) */
  type: number;
}

interface EmojibaseMessages {
  groups: { key: string; message: string; order: number }[];
  subgroups: { key: string; message: string; order: number }[];
  skinTones: { key: string; message: string }[];
}

// Bundled with the picker chunk rather than fetched from a CDN: the apps work without third-party hosts
const loaders: Record<string, () => Promise<[{ default: unknown }, { default: unknown }]>> = {
  en: () => Promise.all([import("emojibase-data/en/data.json"), import("emojibase-data/en/messages.json")]),
  fr: () => Promise.all([import("emojibase-data/fr/data.json"), import("emojibase-data/fr/messages.json")]),
};

// One emoji per Emoji version, newest first: the first one the system font draws in color sets the cap
const VERSION_PROBES: [number, string][] = [
  [16, "🫩"],
  [15.1, "🐦‍🔥"],
  [15, "🫨"],
  [14, "🫠"],
  [13.1, "😶‍🌫️"],
  [13, "🥲"],
  [12, "🥱"],
  [11, "🥰"],
];
const FALLBACK_VERSION = 14;

/**
 * Unsupported emojis render as a monochrome glyph (drawn in the fill color) or, for ZWJ sequences, as two glyphs.
 */
const isEmojiSupported = (context: CanvasRenderingContext2D, emoji: string): boolean => {
  if (context.measureText(emoji).width >= 4) {
    return false;
  }

  const draw = (color: string) => {
    context.clearRect(0, 0, 2, 2);
    context.fillStyle = color;
    context.fillText(emoji, 0, 0);
    return context.getImageData(0, 0, 2, 2).data;
  };
  const blue = draw("#00f");
  const red = draw("#f00");

  return blue.every((value, index) => index % 4 === 3 || value === red[index]);
};

const getEmojiSupport = (): { version: number; flags: boolean } => {
  let context: CanvasRenderingContext2D | null = null;

  try {
    context = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  } catch {
    // No canvas (tests, SSR)
  }

  if (!context) {
    return { flags: true, version: FALLBACK_VERSION };
  }

  context.canvas.width = 2;
  context.canvas.height = 2;
  context.font = `2px ${EMOJI_FONT_FAMILY}`;
  context.textBaseline = "middle";

  const supportedContext = context;
  const probe = VERSION_PROBES.find(([, emoji]) => isEmojiSupported(supportedContext, emoji));

  return { flags: isEmojiSupported(context, "🇪🇺"), version: probe?.[0] ?? FALLBACK_VERSION };
};

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

// "genial" finds "génial", "coeur" finds "cœur"
const stripAccents = (value: string) => value.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe").replace(/æ/g, "ae");

/**
 * frimousse resolver reading the Emojibase datasets shipped with the design system (en, fr), filtered on what
 * the device can draw.
 */
const resolveChatEmojiData: EmojiDataResolver = async (locale) => {
  const datasetLocale = locale === "fr" ? "fr" : "en";
  const [{ default: emojisModule }, { default: messagesModule }] = await loaders[datasetLocale]();
  const emojis = emojisModule as EmojibaseEmoji[];
  const messages = messagesModule as EmojibaseMessages;
  const support = getEmojiSupport();
  const componentGroup = messages.groups.find((group) => group.key === "component")?.order;
  const flagSubgroups = messages.subgroups
    .filter((subgroup) => subgroup.key === "country-flag" || subgroup.key === "subdivision-flag")
    .map((subgroup) => subgroup.order);

  return {
    categories: messages.groups
      .filter((group) => group.order !== componentGroup)
      .map((group) => ({ index: group.order, label: capitalize(group.message) })),
    emojis: emojis
      .filter(
        (emoji) =>
          emoji.group !== undefined &&
          emoji.group !== componentGroup &&
          emoji.version <= support.version &&
          (support.flags || !flagSubgroups.includes(emoji.subgroup ?? -1)),
      )
      .map((emoji) => {
        const tags = emoji.tags ?? [];

        return {
          category: emoji.group as number,
          // "👍️" → "👍": the same string as the quick reactions, so a reaction never splits into two pills
          emoji: emoji.type === 1 ? emoji.emoji.replace(/\uFE0F$/, "") : emoji.emoji,
          label: capitalize(emoji.label),
          tags: [...tags, ...[emoji.label, ...tags].map(stripAccents)],
          version: emoji.version,
        };
      }),
    locale: datasetLocale,
    skinTones: Object.fromEntries(
      messages.skinTones.map((skinTone) => [skinTone.key, capitalize(skinTone.message)]),
    ) as EmojiData["skinTones"],
  };
};

export default resolveChatEmojiData;
