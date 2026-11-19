import { SvgIcon, SxProps, Theme } from "@mui/material";

const SIZE = 104;

/**
 * Crash screen illustration: a traffic cone knocked over.
 * A line-drawn object rather than a character — that is what the error screens of Typeform, Glassdoor
 * or Google Meet do, and a cone says "site hiccup" in the vocabulary of the people using this app.
 * Drawn inline so it themes with the palette and ships no asset.
 */
const ErrorIllustration = ({ sx }: { sx?: SxProps<Theme> }) => (
  <SvgIcon
    viewBox="0 0 104 104"
    sx={{
      "& .cone": { stroke: ({ palette }) => palette.secondary.light },
      color: "text.disabled",
      display: "block",
      // SvgIcon's own class paints fill: currentColor — this is a stroke-only drawing.
      fill: "none",
      fontSize: SIZE,
      ...sx,
    }}
  >
    <g stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      {/* Ground line, broken under the cone so it reads as dust rather than a rule. */}
      <path d="M14 84h22" />
      <path d="M46 84h16" />
      <path d="M72 84h18" />
      {/* Bounce marks, on the side the cone came from. */}
      <path d="M24 40c-3-3-4-7-3-11" />
      <path d="M34 30c-2-4-2-8 0-12" />
    </g>

    <g className="cone" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      {/* Tipped over: the whole cone leans on its base, nose to the left. */}
      <g transform="rotate(-72 58 58)">
        <path d="M58 22 74 74H42Z" />
        <path d="M36 84h44a4 4 0 0 0 0-10H36a4 4 0 0 0 0 10Z" />
        <path d="M50 48h16" />
        <path d="M46 62h24" />
      </g>
    </g>
  </SvgIcon>
);

export default ErrorIllustration;
