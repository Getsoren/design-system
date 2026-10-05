const UNITS: Record<string, string[]> = {
  en: ["B", "KB", "MB", "GB"],
  fr: ["o", "Ko", "Mo", "Go"],
};

/**
 * Human-readable file size in the given language, e.g. "1,2 Mo" (fr) or "1.2 MB" (en).
 */
const formatFileSize = (bytes: number, language = "en"): string => {
  const units = UNITS[language] ?? UNITS.en;
  let value = Math.max(bytes, 0);
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  const formatted = new Intl.NumberFormat(language, { maximumFractionDigits: unitIndex < 2 ? 0 : 1 }).format(value);

  return `${formatted} ${units[unitIndex]}`;
};

export default formatFileSize;
