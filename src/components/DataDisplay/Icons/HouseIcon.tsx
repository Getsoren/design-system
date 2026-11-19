import { SvgIcon, SxProps } from "@mui/material";

/** A house without a door, drawn on 18 inside the 20 box: the agencies. `HomeIcon` draws the door */
const HouseIcon = ({ sx, color = "currentColor" }: { color?: string; sx?: SxProps }) => (
  <SvgIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 20, ...sx }}>
    <path
      d="M1.5 7.80421C1.5 7.32558 1.5 7.08627 1.56169 6.86588C1.61633 6.67065 1.70614 6.48704 1.82669 6.32405C1.96278 6.14005 2.15168 5.99312 2.52949 5.69927L8.18141 1.30333C8.47418 1.07562 8.62057 0.961766 8.78221 0.918001C8.92484 0.879384 9.07516 0.879384 9.21779 0.918001C9.37943 0.961766 9.52582 1.07562 9.81859 1.30333L15.4705 5.69927C15.8483 5.99312 16.0372 6.14005 16.1733 6.32405C16.2939 6.48704 16.3837 6.67065 16.4383 6.86588C16.5 7.08627 16.5 7.32558 16.5 7.80421V13.8333C16.5 14.7667 16.5 15.2335 16.3183 15.59C16.1586 15.9036 15.9036 16.1585 15.59 16.3183C15.2335 16.5 14.7668 16.5 13.8333 16.5H4.16667C3.23325 16.5 2.76654 16.5 2.41002 16.3183C2.09641 16.1585 1.84144 15.9036 1.68166 15.59C1.5 15.2335 1.5 14.7667 1.5 13.8333V7.80421Z"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </SvgIcon>
);

export default HouseIcon;
