export const toDigits = (value: string) => value.replace(/\D/g, "");

/** Caret index in `formatted` right after its `digitsBefore`-th digit — separators are stepped over. */
const caretAfterDigits = (formatted: string, digitsBefore: number) => {
  if (digitsBefore <= 0) {
    return 0;
  }

  // Caret positions right after each digit, in order
  const caretsAfterEachDigit = [...formatted].flatMap((char, index) => (/\d/.test(char) ? [index + 1] : []));

  return caretsAfterEachDigit[digitsBefore - 1] ?? formatted.length;
};

/** Deleting a separator alone would be undone by the formatting: the digit next to it goes instead. */
const deleteDigitAtCaret = (digits: string, digitsBeforeCaret: number, inputType: string) => {
  const removeAt = inputType === "deleteContentForward" ? digitsBeforeCaret : digitsBeforeCaret - 1;

  if (removeAt < 0 || removeAt >= digits.length) {
    return { digits, digitsBeforeCaret };
  }

  return {
    digits: digits.slice(0, removeAt) + digits.slice(removeAt + 1),
    digitsBeforeCaret: Math.min(digitsBeforeCaret, removeAt),
  };
};

export interface NextPhoneParams {
  /** Caret index in `rawValue` */
  caret: number;
  /** `InputEvent.inputType` — empty when the change was not a keystroke (autofill, a test harness) */
  inputType: string;
  /** Display value before the edit */
  previous: string;
  /** Input value as written by the browser, before formatting */
  rawValue: string;
  /** Display value of the digits left by the edit */
  format: (digits: string) => string;
}

/**
 * Pure transition of a phone field: previous value + raw input → next display value and caret.
 * Reformatting rewrites the whole value, which would send the browser caret to the end: an edit in
 * the middle of the number would then continue at the end. The caret is put back after the same
 * count of digits it followed (spaces move, digits do not).
 */
export const computeNextPhone = ({ caret, inputType, previous, rawValue, format }: NextPhoneParams) => {
  const typed = { digits: toDigits(rawValue), digitsBeforeCaret: toDigits(rawValue.slice(0, caret)).length };
  const isSeparatorDeletion = inputType.startsWith("delete") && typed.digits === toDigits(previous);
  const { digits, digitsBeforeCaret } = isSeparatorDeletion ? deleteDigitAtCaret(typed.digits, typed.digitsBeforeCaret, inputType) : typed;
  const formatted = format(digits);

  // `caretAfterDigits` clamps on its own when the format dropped the digits the caret followed
  return {
    caret: caretAfterDigits(formatted, digitsBeforeCaret),
    formatted,
  };
};
