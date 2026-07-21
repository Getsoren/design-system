import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AiAssistantHeaderProps } from "@/components/DataDisplay/AiAssistant/types";
import AiSparkIcon from "@/components/DataDisplay/Icons/AiSparkIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";

/** Panel header: brand icon + assistant name (host-app choice) + close */
const AiAssistantHeader = ({ title, subtitle, onClose, icon = <AiSparkIcon variant="gradient" size={20} /> }: AiAssistantHeaderProps) => (
  <>
    <Stack direction="row" alignItems="center" justifyContent="space-between" paddingX={2} paddingY={1}>
      <Stack direction="row" alignItems="center" spacing={1}>
        {icon}
        <Typography variant="subtitle1" fontWeight={700}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="caption" color="text.secondary" lineHeight={1}>
            {subtitle}
          </Typography>
        )}
      </Stack>
      <IconButton onClick={onClose} size="small">
        <CloseIcon />
      </IconButton>
    </Stack>
    <Divider />
  </>
);

export default AiAssistantHeader;
