import { isString } from "@getsoren/react-utils";
import { Box, Chip, Collapse as CollapseMui, Divider, Stack, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FileViewer from "@/components/DataDisplay/FileViewer";
import ArrowRightIcon from "@/components/DataDisplay/Icons/ArrowRightIcon";
import ChevronIcon from "@/components/DataDisplay/Icons/ChevronIcon";
import StatusIcon from "@/components/DataDisplay/StatusIcon";
import { TimeLineProps } from "@/components/DataDisplay/TimeLine/TimeLine";

type TimeLineEventItemProps = NonNullable<TimeLineProps["items"]>[number] & {
  isLastElement: boolean;
  variant?: TimeLineProps["variant"];
};

const IMAGE_SIZE = 64;
const ENTER_DELAY = 1000;

const TimeLineEventItem = ({
  title,
  subtitle,
  isLastElement,
  active,
  onClick,
  variant,
  tag,
  collapseItems,
  collapseDefaultOpen,
  Action,
  Icon,
  Footer,
  Collapse,
}: TimeLineEventItemProps) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const hasCollapse = Collapse || !!collapseItems?.length;

  // Open collapse by default
  useEffect(() => {
    if (collapseDefaultOpen) {
      setIsCollapseOpen(true);
    }
  }, [collapseDefaultOpen]);

  return (
    <Stack direction="row" alignItems="stretch" spacing={0} mt={0.5}>
      <Box mt={1.5} textAlign="center">
        <Stack spacing={1} alignItems="center" sx={{ height: "100%", width: 32 }}>
          {Icon || <StatusIcon color={active ? "secondary" : "primary"} />}
          <Box sx={{ flex: 1 }}>
            {!isLastElement && (
              <Divider
                sx={{
                  borderColor: ({ palette }) => (active ? palette.secondary.main : palette.divider),
                  borderStyle: active ? "solid" : "dashed",
                  height: "100%",
                }}
                flexItem
                orientation="vertical"
              />
            )}
          </Box>
        </Stack>
      </Box>
      <Stack
        flex={1}
        pt={0.5}
        pl={1}
        minWidth={0}
        sx={{
          "&:hover": {
            "& .action": {
              opacity: 1,
            },
            borderRadius: 1,
          },
          padding: 1.5,
        }}
      >
        <Stack spacing={1} justifyContent="space-between" direction="row">
          <Box>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ cursor: hasCollapse ? "pointer" : "default" }}
              onClick={() => setIsCollapseOpen((prevState) => !prevState)}
            >
              <Typography
                component="span"
                onClick={onClick}
                variant="h6"
                sx={{
                  cursor: hasCollapse || onClick ? "pointer" : "default",
                  marginRight: 1,
                  textDecoration: onClick ? "underline" : "none",
                }}
              >
                {title}
              </Typography>
              {hasCollapse && (
                <ChevronIcon
                  sx={{
                    transform: isCollapseOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              )}
            </Stack>
            {tag && <Chip color={tag?.color || "default"} label={tag?.label} size="xSmall" variant="outlined" />}
            {subtitle &&
              (isString(subtitle) ? (
                <Typography variant="body2" color="textSecondary">
                  {subtitle}
                </Typography>
              ) : (
                subtitle
              ))}
          </Box>
          {Action && (
            <Box
              className="action"
              sx={{
                opacity: variant === "hover" ? 0 : 1,
                transition: "opacity 0.15s",
              }}
            >
              {Action}
            </Box>
          )}
        </Stack>
        {Footer}
        {Collapse && <CollapseMui in={isCollapseOpen}>{Collapse}</CollapseMui>}
        {!!collapseItems?.length && (
          <CollapseMui in={isCollapseOpen}>
            <Stack marginTop={3} spacing={3}>
              {collapseItems?.map((item, index) => {
                const key = `${item.title}-${index}`;
                const files = Array.isArray(item?.file) ? item?.file : [item?.file];
                const firstFile = files.length > 0 ? files[0] : null;

                return (
                  <Stack key={key} direction="row" spacing={1} minWidth={0}>
                    <ArrowRightIcon sx={{ height: 18, paddingTop: 0.5, width: 18 }} />
                    <Stack minWidth={0}>
                      <Stack direction="row" alignItems="center" spacing={1} overflow="hidden">
                        {item?.title && (
                          <Tooltip
                            title={item?.title}
                            enterDelay={ENTER_DELAY}
                            sx={{
                              ...(item?.onClick && {
                                cursor: "pointer",
                                textDecoration: "underline",
                              }),
                            }}
                          >
                            <Typography
                              variant="h6"
                              whiteSpace="nowrap"
                              textOverflow="ellipsis"
                              overflow="hidden"
                              minWidth={0}
                              onClick={item?.onClick}
                            >
                              {item?.title}
                            </Typography>
                          </Tooltip>
                        )}
                        {item?.tag && (
                          <Chip color={item?.tag?.color || "default"} label={item?.tag?.label} size="xSmall" variant="outlined" />
                        )}
                      </Stack>

                      {item?.subtitle && (
                        <Tooltip title={item?.subtitle} enterDelay={ENTER_DELAY}>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            whiteSpace="nowrap"
                            textOverflow="ellipsis"
                            overflow="hidden"
                            minWidth={0}
                          >
                            {item?.subtitle}
                          </Typography>
                        </Tooltip>
                      )}
                      {item?.file && (
                        <Stack direction="row" marginTop={1} spacing={0.5}>
                          {firstFile &&
                            (typeof firstFile === "string" ? (
                              <FileViewer
                                src={firstFile}
                                sx={{
                                  borderRadius: 0.5,
                                  cursor: "pointer",
                                  height: IMAGE_SIZE,
                                  width: IMAGE_SIZE,
                                }}
                              />
                            ) : (
                              <FileViewer
                                src={firstFile.src || ""}
                                srcThumb={firstFile.srcThumb}
                                fileName={firstFile.fileName}
                                sx={{
                                  borderRadius: 0.5,
                                  cursor: "pointer",
                                  height: IMAGE_SIZE,
                                  width: IMAGE_SIZE,
                                }}
                              />
                            ))}
                          {files.length > 1 && (
                            <Box
                              sx={{
                                alignItems: "center",
                                backgroundColor: ({ palette }) => palette.grey[100],
                                borderRadius: 0.5,
                                display: "flex",
                                height: IMAGE_SIZE,
                                justifyContent: "center",
                                width: IMAGE_SIZE,
                              }}
                            >{`${files.length - 1}+`}</Box>
                          )}
                        </Stack>
                      )}
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          </CollapseMui>
        )}
      </Stack>
    </Stack>
  );
};

export default TimeLineEventItem;
