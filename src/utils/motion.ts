import { keyframes } from "@mui/material";

/**
 * Entrance of a picture or a row: it fades in while rising into place.
 */
export const riseIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: none; }
`;
