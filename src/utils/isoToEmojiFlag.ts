/**
 * ISO 3166-1 alpha-2 country code → regional-indicator emoji flag.
 * Example: isoToEmojiFlag("FR") -> "🇫🇷"
 * @param iso
 */
const isoToEmojiFlag = (iso: string) => String.fromCodePoint(...iso.split("").map((char) => 127397 + char.charCodeAt(0)));

export default isoToEmojiFlag;
