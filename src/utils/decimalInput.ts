/**
 * What a decimal field keeps of a typed text: its digits and its first decimal separator, a comma or a dot.
 */
export const sanitizeDecimalInput = (text: string): string => {
  const kept = text.replace(/[^\d.,]/g, "");
  const separatorIndex = kept.search(/[.,]/);

  return separatorIndex === -1 ? kept : kept.slice(0, separatorIndex + 1) + kept.slice(separatorIndex + 1).replace(/[.,]/g, "");
};

/**
 * The number a sanitized text reads as ("12,5" reads 12.5), nothing for no digit at all.
 */
export const parseDecimalInput = (text: string): number | undefined => {
  const figure = /\d/.test(text) ? Number(text.replace(",", ".")) : Number.NaN;

  return Number.isNaN(figure) ? undefined : figure;
};

/**
 * A figure in a language's number format, to `maxFractionDigits` decimals at most.
 */
export const formatDecimal = (value: number, language: string, maxFractionDigits = 2): string =>
  value.toLocaleString(language, { maximumFractionDigits: maxFractionDigits });
