import { capitalize } from "@getsoren/react-utils";
import type { ChatParticipant } from "@/components/DataDisplay/Chat/types";

const defaultFormatName = ({ firstName, lastName }: ChatParticipant): string => `${capitalize(firstName)} ${capitalize(lastName)}`.trim();

/**
 * Format a list of participants into a comma-separated string of names.
 * An optional formatter can be provided to customize how each participant's name is displayed.
 */
const formatParticipantNames = (participants?: ChatParticipant[] | null, formatName?: (participant: ChatParticipant) => string): string =>
  participants?.map(formatName ?? defaultFormatName).join(", ") ?? "";

export default formatParticipantNames;
