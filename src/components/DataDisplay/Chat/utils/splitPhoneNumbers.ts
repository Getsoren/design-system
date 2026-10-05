/**
 * French numbers, whatever the separators: 06 12 34 56 78, 06.12.34.56.78, 0612345678, +33 6 12 34 56 78,
 * +33 (0)6 12 34 56 78, 0033 6 12 34 56 78. The leading group stands for a lookbehind (not a digit nor a "+"), which
 * older Safari versions cannot parse.
 */
const PHONE_REGEX = /(^|[^\d+])((?:(?:\+|00)33[\s.-]?(?:\(0\)[\s.-]?)?|0)[1-9](?:[\s.-]?\d{2}){4})(?!\d)/g;

export interface PhoneNumberPart {
  text: string;
  /** "tel:+33612345678" on a phone number */
  href?: string;
}

const toTelHref = (phone: string): string => {
  const digits = phone.replace("(0)", "").replace(/[^\d+]/g, "");

  if (digits.startsWith("+")) {
    return `tel:${digits}`;
  }

  return `tel:${digits.startsWith("00") ? `+${digits.slice(2)}` : `+33${digits.slice(1)}`}`;
};

/**
 * Cuts a text around the French phone numbers it holds, each with its `tel:` link.
 */
const splitPhoneNumbers = (text: string): PhoneNumberPart[] => {
  const parts: PhoneNumberPart[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(PHONE_REGEX)) {
    const [, prefix, phone] = match;
    const start = (match.index ?? 0) + prefix.length;

    if (start > lastIndex) {
      parts.push({ text: text.slice(lastIndex, start) });
    }

    parts.push({ href: toTelHref(phone), text: phone });
    lastIndex = start + phone.length;
  }

  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex) });
  }

  return parts;
};

export default splitPhoneNumbers;
