import { SvgIcon, SxProps, Theme } from "@mui/material";

const FilePlusIcon = ({ color = "currentColor", sx }: { color?: string; sx?: SxProps<Theme> }) => (
  <SvgIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 20, ...sx }}>
    <path
      d="M16.6666 8.75008V5.66675C16.6666 4.26662 16.6666 3.56655 16.3941 3.03177C16.1544 2.56137 15.772 2.17892 15.3016 1.93923C14.7668 1.66675 14.0667 1.66675 12.6666 1.66675H7.33325C5.93312 1.66675 5.23305 1.66675 4.69828 1.93923C4.22787 2.17892 3.84542 2.56137 3.60574 3.03177C3.33325 3.56655 3.33325 4.26662 3.33325 5.66675V14.3334C3.33325 15.7335 3.33325 16.4336 3.60574 16.9684C3.84542 17.4388 4.22787 17.8212 4.69828 18.0609C5.23305 18.3334 5.93312 18.3334 7.33325 18.3334H9.99992M11.6666 9.16675H6.66659M8.33325 12.5001H6.66659M13.3333 5.83341H6.66659M14.9999 17.5001V12.5001M12.4999 15.0001H17.4999"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </SvgIcon>
);

export default FilePlusIcon;
