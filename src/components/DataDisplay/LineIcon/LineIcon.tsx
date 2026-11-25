import { SxProps, Theme } from "@mui/material";
import ArrowLeftRightIcon from "@/components/DataDisplay/Icons/LineIcons/ArrowLeftRightIcon";
import CalendarIcon from "@/components/DataDisplay/Icons/LineIcons/CalendarIcon";
import CameraIcon from "@/components/DataDisplay/Icons/LineIcons/CameraIcon";
import CheckIcon from "@/components/DataDisplay/Icons/LineIcons/CheckIcon";
import CircleCheckIcon from "@/components/DataDisplay/Icons/LineIcons/CircleCheckIcon";
import CircleHelpIcon from "@/components/DataDisplay/Icons/LineIcons/CircleHelpIcon";
import CirclePauseIcon from "@/components/DataDisplay/Icons/LineIcons/CirclePauseIcon";
import CircleXIcon from "@/components/DataDisplay/Icons/LineIcons/CircleXIcon";
import ClipboardCheckIcon from "@/components/DataDisplay/Icons/LineIcons/ClipboardCheckIcon";
import ClockIcon from "@/components/DataDisplay/Icons/LineIcons/ClockIcon";
import CloudRainIcon from "@/components/DataDisplay/Icons/LineIcons/CloudRainIcon";
import EllipsisIcon from "@/components/DataDisplay/Icons/LineIcons/EllipsisIcon";
import EuroIcon from "@/components/DataDisplay/Icons/LineIcons/EuroIcon";
import FileCheckIcon from "@/components/DataDisplay/Icons/LineIcons/FileCheckIcon";
import FileTextIcon from "@/components/DataDisplay/Icons/LineIcons/FileTextIcon";
import FileXIcon from "@/components/DataDisplay/Icons/LineIcons/FileXIcon";
import FlagIcon from "@/components/DataDisplay/Icons/LineIcons/FlagIcon";
import FolderIcon from "@/components/DataDisplay/Icons/LineIcons/FolderIcon";
import ForkliftIcon from "@/components/DataDisplay/Icons/LineIcons/ForkliftIcon";
import GaugeIcon from "@/components/DataDisplay/Icons/LineIcons/GaugeIcon";
import GavelIcon from "@/components/DataDisplay/Icons/LineIcons/GavelIcon";
import HammerIcon from "@/components/DataDisplay/Icons/LineIcons/HammerIcon";
import HardHatIcon from "@/components/DataDisplay/Icons/LineIcons/HardHatIcon";
import HourglassIcon from "@/components/DataDisplay/Icons/LineIcons/HourglassIcon";
import ImageIcon from "@/components/DataDisplay/Icons/LineIcons/ImageIcon";
import KeyIcon from "@/components/DataDisplay/Icons/LineIcons/KeyIcon";
import ListChecksIcon from "@/components/DataDisplay/Icons/LineIcons/ListChecksIcon";
import ListIcon from "@/components/DataDisplay/Icons/LineIcons/ListIcon";
import LockOpenIcon from "@/components/DataDisplay/Icons/LineIcons/LockOpenIcon";
import type { LineIconComponent } from "@/components/DataDisplay/Icons/LineIcons/lineIcon";
import PackageCheckIcon from "@/components/DataDisplay/Icons/LineIcons/PackageCheckIcon";
import PowerOffIcon from "@/components/DataDisplay/Icons/LineIcons/PowerOffIcon";
import PuzzleIcon from "@/components/DataDisplay/Icons/LineIcons/PuzzleIcon";
import RotateCcwIcon from "@/components/DataDisplay/Icons/LineIcons/RotateCcwIcon";
import SettingsIcon from "@/components/DataDisplay/Icons/LineIcons/SettingsIcon";
import SmartphoneIcon from "@/components/DataDisplay/Icons/LineIcons/SmartphoneIcon";
import ThumbsDownIcon from "@/components/DataDisplay/Icons/LineIcons/ThumbsDownIcon";
import TriangleAlertIcon from "@/components/DataDisplay/Icons/LineIcons/TriangleAlertIcon";
import TruckIcon from "@/components/DataDisplay/Icons/LineIcons/TruckIcon";
import UndoIcon from "@/components/DataDisplay/Icons/LineIcons/UndoIcon";
import UnlinkIcon from "@/components/DataDisplay/Icons/LineIcons/UnlinkIcon";
import UserCogIcon from "@/components/DataDisplay/Icons/LineIcons/UserCogIcon";
import UserIcon from "@/components/DataDisplay/Icons/LineIcons/UserIcon";
import UserXIcon from "@/components/DataDisplay/Icons/LineIcons/UserXIcon";
import WrenchIcon from "@/components/DataDisplay/Icons/LineIcons/WrenchIcon";
import ZapIcon from "@/components/DataDisplay/Icons/LineIcons/ZapIcon";

/**
 * Every line icon by its name (Lucide's, in kebab case), the same names as the mobile design system's: a shared rule can
 * name an icon that each app draws with its own design system
 */
export const LINE_ICONS = {
  "arrow-left-right": ArrowLeftRightIcon,
  calendar: CalendarIcon,
  camera: CameraIcon,
  check: CheckIcon,
  "circle-check": CircleCheckIcon,
  "circle-help": CircleHelpIcon,
  "circle-pause": CirclePauseIcon,
  "circle-x": CircleXIcon,
  "clipboard-check": ClipboardCheckIcon,
  clock: ClockIcon,
  "cloud-rain": CloudRainIcon,
  ellipsis: EllipsisIcon,
  euro: EuroIcon,
  "file-check": FileCheckIcon,
  "file-text": FileTextIcon,
  "file-x": FileXIcon,
  flag: FlagIcon,
  folder: FolderIcon,
  forklift: ForkliftIcon,
  gauge: GaugeIcon,
  gavel: GavelIcon,
  hammer: HammerIcon,
  "hard-hat": HardHatIcon,
  hourglass: HourglassIcon,
  image: ImageIcon,
  key: KeyIcon,
  list: ListIcon,
  "list-checks": ListChecksIcon,
  "lock-open": LockOpenIcon,
  "package-check": PackageCheckIcon,
  "power-off": PowerOffIcon,
  puzzle: PuzzleIcon,
  "rotate-ccw": RotateCcwIcon,
  settings: SettingsIcon,
  smartphone: SmartphoneIcon,
  "thumbs-down": ThumbsDownIcon,
  "triangle-alert": TriangleAlertIcon,
  truck: TruckIcon,
  undo: UndoIcon,
  unlink: UnlinkIcon,
  user: UserIcon,
  "user-cog": UserCogIcon,
  "user-x": UserXIcon,
  wrench: WrenchIcon,
  zap: ZapIcon,
} satisfies Record<string, LineIconComponent>;

export type LineIconName = keyof typeof LINE_ICONS;

export const LINE_ICON_NAMES = Object.keys(LINE_ICONS) as LineIconName[];

export interface LineIconProps {
  /**
   * The icon's name, as `LINE_ICONS` lists it
   */
  name: LineIconName;
  sx?: SxProps<Theme>;
}

/**
 * A line icon by its name
 */
const LineIcon = ({ name, sx }: LineIconProps) => {
  const Icon = LINE_ICONS[name];

  return <Icon sx={sx} />;
};

export default LineIcon;
