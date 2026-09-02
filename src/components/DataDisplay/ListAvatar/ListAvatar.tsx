import {
  Box,
  Chip,
  ChipProps,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  ListItemText,
  Skeleton,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import type { ListProps } from "@mui/material/List";
import { isValidElement, MouseEvent, ReactNode, useState } from "react";
import sheetsImage from "@/assets/img/sheets.png";
import Avatar from "@/components/DataDisplay/Avatar/Avatar";
import FileViewer from "@/components/DataDisplay/FileViewer";
import getBrowser, { Browser } from "@/utils/getBrowser";
import isDocumentType from "@/utils/isDocumentType";
import isValidUrl from "@/utils/isValidUrl";

interface ListAvatarItemBase {
  /**
   * Custom avatar component to display instead of the default avatar.
   */
  Avatar?: ReactNode;
  /**
   * Unique identifier for the list item.
   */
  id?: string | number | null;
  /**
   * Primary text displayed in the list item.
   */
  title?: ReactNode;
  /**
   * Secondary text displayed below the title.
   */
  subtitle?: ReactNode;
  /**
   * Full-size image URL used for the avatar and lightbox preview.
   */
  image?: string | null;
  /**
   * Thumbnail image URL used as the avatar source when available.
   */
  thumbnail?: string | null;
  /**
   * Secondary thumbnail image URL displayed as a secondary avatar source.
   */
  thumbnailSecondary?: string | null;
  /**
   * Icon displayed inside the avatar when no image is provided.
   */
  icon?: ReactNode;
  /**
   * Label displayed in a chip next to the title.
   */
  chipLabel?: ReactNode;
  /**
   * Color of the chip. Accepts MUI Chip color values or a custom string.
   */
  chipColor?: ChipProps["color"] | string;
  /**
   * Action element displayed on the right side of the item, visible on hover.
   */
  secondaryAction?: ReactNode;
  /**
   * Secondary action always visible, regardless of hover state.
   */
  persistentSecondaryAction?: ReactNode;
  /**
   * Always display secondary action for this item. Overrides the list-level prop.
   */
  alwaysDisplaySecondaryAction?: boolean;
  /**
   * If true, renders a divider instead of the list item content.
   */
  divider?: boolean;
  /**
   * Custom styles applied to the list item.
   */
  sx?: SxProps<Theme>;
}

export interface ListAvatarClickPayload {
  id?: string | number | null;
  image?: string | null;
  thumbnail?: string | null;
  subtitle?: ReactNode;
  title?: ReactNode;
  icon?: ReactNode;
  isFile: boolean;
  isPdf: boolean;
}

export interface ListAvatarAction {
  title?: string | null;
  subtitle?: string | null;
  image?: string | null;
  icon?: ReactNode;
  onClick?: ListItemButtonProps["onClick"];
}

export interface ListAvatarItem extends ListAvatarItemBase {
  onClick?: (event: MouseEvent<HTMLLIElement>, item: ListAvatarClickPayload) => void;
}

export interface ListAvatarProps extends ListProps {
  /**
   * Empty message
   */
  Empty?: ReactNode;
  /**
   * Full width
   */
  fullWidth?: boolean;
  /**
   * Always display secondary action
   */
  alwaysDisplaySecondaryAction?: boolean;
  /**
   * If true, the list is loading state
   */
  isLoading?: boolean;
  /**
   * Number of items to display
   */
  numberLoadingItems?: number;
  /**
   * Disable lightbox only if the image list item is provided
   */
  disableLightbox?: boolean;
  /**
   * List items
   */
  items?: ListAvatarItem[];
  /**
   * Action
   */
  action?: ListAvatarAction;
  /**
   * Density of the list
   */
  density?: "standard" | "comfortable";
}

const AVATAR_MARGIN_RIGHT = 1;

const styles = {
  list: {
    marginLeft: ({ spacing }: Theme) => `-${spacing(0.5)} !important`,
    marginRight: ({ spacing }: Theme) => `-${spacing(0.5)} !important`,
    minWidth: 250,
  },
  listItem: {
    borderRadius: 1,
    padding: 0.5,
  },
};

const isChipColor = (color: ChipProps["color"] | string): color is ChipProps["color"] => typeof color === "string";

interface ListAvatarItemRowProps extends ListAvatarItem {
  index: number;
  listAlwaysDisplaySecondaryAction?: boolean;
  listItemBaseSx: object;
  disableLightbox?: boolean;
  isFirefox: boolean;
  openElement: string;
  setOpenElement: (key: string) => void;
}

const ListAvatarItemRow = ({
  Avatar: AvatarProp,
  id,
  title,
  subtitle,
  image,
  thumbnail,
  thumbnailSecondary,
  icon,
  chipLabel,
  chipColor,
  secondaryAction,
  persistentSecondaryAction,
  alwaysDisplaySecondaryAction,
  divider,
  sx,
  onClick,
  index,
  listAlwaysDisplaySecondaryAction,
  listItemBaseSx,
  disableLightbox,
  isFirefox,
  openElement,
  setOpenElement,
}: ListAvatarItemRowProps) => {
  const key = `key-${index}-${title}-${id}`;
  const isPdf = !!image?.toLowerCase()?.endsWith(".pdf");
  const isValidImageUrl = isValidUrl(image);
  const isValidThumbnailUrl = isValidUrl(thumbnail);
  const isFile = isDocumentType(image);
  const userSelect = onClick ? "none" : undefined;
  const lightBoxDisabled = disableLightbox || !!icon || !isValidImageUrl || isFile;
  const clickable = !!onClick || !!(!(onClick || disableLightbox) && image);
  const open = openElement === key;
  const avatarThumb = isValidThumbnailUrl ? thumbnail : "";
  const avatarImage = isValidImageUrl ? image : "";
  const avatarSrc = avatarThumb || avatarImage || "";
  const hasPersistentSecondaryAction = !!persistentSecondaryAction;

  const resolvedSecondaryAction =
    persistentSecondaryAction && secondaryAction ? (
      <Stack direction="row" alignItems="center">
        <Box className="ListAvatar-hoverAction">{secondaryAction}</Box>
        {persistentSecondaryAction}
      </Stack>
    ) : (
      persistentSecondaryAction || secondaryAction
    );

  if (divider) {
    return (
      <ListItem disableGutters key={key}>
        <Divider flexItem sx={{ width: "100%" }} />
      </ListItem>
    );
  }

  return (
    <ListItem
      key={key}
      secondaryAction={resolvedSecondaryAction}
      onClick={(event) => {
        onClick?.(event, {
          ...(icon && { icon }),
          ...(id && { id }),
          ...(image && { image }),
          ...(subtitle && { subtitle }),
          ...(thumbnail && { thumbnail }),
          ...(title && { thumbnail }),
          isFile,
          isPdf,
        });

        if (clickable && !open && !onClick) {
          setOpenElement(key);
        }
      }}
      sx={{
        ...listItemBaseSx,
        "& .MuiListItemSecondaryAction-root": {
          alignItems: "center",
          display: "flex",
          flexShrink: 0,
          justifyContent: "center",
          // The text block takes every pixel it can, so a long title (or the chip that follows it)
          // ran flush into the first action. One step keeps them apart whatever the title's length.
          marginLeft: ({ spacing }: Theme) => spacing(1),
          opacity: hasPersistentSecondaryAction || (alwaysDisplaySecondaryAction ?? listAlwaysDisplaySecondaryAction) ? 1 : 0,
          position: "static",
          right: ({ spacing }: Theme) => spacing(0.5),
          transform: "none",
        },
        ...(hasPersistentSecondaryAction && {
          "& .ListAvatar-hoverAction": {
            opacity: (alwaysDisplaySecondaryAction ?? listAlwaysDisplaySecondaryAction) ? 1 : 0,
          },
        }),
        "&:hover": {
          "& .ListAvatar-hoverAction": {
            opacity: 1,
          },
          "& .MuiListItemSecondaryAction-root": {
            opacity: 1,
          },
          ...(!(sx && typeof sx === "object" && !Array.isArray(sx) && "backgroundColor" in sx) &&
            clickable && {
              backgroundColor: ({ palette }: Theme) => palette.action.hover,
            }),
        },
        cursor: clickable ? "pointer" : "default",
        ...sx,
      }}
    >
      {/* Custom avatar */}
      {AvatarProp !== undefined && <Box marginRight={AVATAR_MARGIN_RIGHT}>{AvatarProp}</Box>}

      {/* PDF Thumb */}
      {!AvatarProp && isPdf && (
        <FileViewer
          iconOnly={isFirefox}
          src={image}
          srcThumb={thumbnail}
          width={40}
          height={40}
          sx={{ borderRadius: 1, marginRight: AVATAR_MARGIN_RIGHT }}
          disableLightbox={disableLightbox}
          open={open}
          onClose={() => setOpenElement("")}
        />
      )}

      {/* Image or avatar */}
      {!(AvatarProp || isPdf) && (
        <FileViewer
          disableThumb
          src={image}
          srcThumb={thumbnail}
          disableLightbox={lightBoxDisabled}
          open={open}
          onClose={() => setOpenElement("")}
        >
          <Avatar
            src={isFile ? sheetsImage : avatarSrc}
            secondarySrc={thumbnailSecondary}
            variant="rounded"
            sx={{ marginRight: AVATAR_MARGIN_RIGHT }}
            slotProps={{
              img: {
                sx: {
                  ...(isFile && { padding: "15%" }),
                },
              },
            }}
          >
            {!isFile && (icon || (typeof title === "string" && (title || "")?.charAt(0).toUpperCase()))}
          </Avatar>
        </FileViewer>
      )}

      <ListItemText
        primary={
          <Stack direction="row" alignItems="center" spacing={1}>
            {title &&
              (isValidElement(title) ? (
                title
              ) : (
                <Typography variant="h6" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                  {title}
                </Typography>
              ))}
            {chipLabel && <Chip label={chipLabel} variant="rounded" size="xSmall" color={isChipColor(chipColor) ? chipColor : "default"} />}
          </Stack>
        }
        secondary={subtitle}
        slotProps={{
          primary: {
            component: "div",
          },
          secondary: {
            component: "div",
          },
        }}
        sx={{ marginY: 0, userSelect }}
      />
    </ListItem>
  );
};

export const ListAvatar = ({
  Empty,
  action,
  items,
  fullWidth,
  sx,
  alwaysDisplaySecondaryAction,
  isLoading,
  disableLightbox,
  numberLoadingItems = 3,
  density = "standard",
  ...props
}: ListAvatarProps) => {
  const [openElement, setOpenElement] = useState("");
  const browser = getBrowser();
  const isFirefox = browser === Browser.Firefox;

  const listItemBaseSx = {
    ...styles.listItem,
    ...(density === "comfortable" && {
      "&:last-of-type": {
        marginBottom: 0,
      },
      marginBottom: 1,
      padding: 1.5,
    }),
  };

  if (!(items?.length || isLoading || action)) {
    return Empty || null;
  }

  if (isLoading) {
    return (
      <List
        sx={{
          ...styles.list,
          ...(fullWidth && { width: "100%" }),
        }}
      >
        {[...Array(numberLoadingItems).keys()].map((index) => (
          <ListItem key={index} sx={listItemBaseSx}>
            <Skeleton width={40} height={40} sx={{ marginRight: AVATAR_MARGIN_RIGHT }} variant="rounded" />
            <ListItemText
              primary={
                <Typography variant="h6">
                  <Skeleton width={90} />
                </Typography>
              }
              secondary={<Skeleton width={70} />}
              sx={{ marginY: 0 }}
            />
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <List
      sx={{
        ...styles.list,
        ...(fullWidth && { width: "100%" }),
        ...sx,
      }}
      {...props}
    >
      {items?.map((item, index) => (
        <ListAvatarItemRow
          key={`key-${index}-${item.title}-${item.id}`}
          {...item}
          index={index}
          listAlwaysDisplaySecondaryAction={alwaysDisplaySecondaryAction}
          listItemBaseSx={listItemBaseSx}
          disableLightbox={disableLightbox}
          isFirefox={isFirefox}
          openElement={openElement}
          setOpenElement={setOpenElement}
        />
      ))}
      {action && (
        <ListItemButton
          onClick={action?.onClick}
          sx={{
            ...listItemBaseSx,
            "&:hover": {
              backgroundColor: ({ palette }: Theme) => palette.action.hover,
            },
          }}
        >
          <Avatar src={action?.image || ""} variant="rounded" sx={{ marginRight: AVATAR_MARGIN_RIGHT }}>
            {action?.icon || action?.title?.charAt(0).toUpperCase()}
          </Avatar>
          <ListItemText
            primary={action?.title && <Typography variant="h6">{action?.title}</Typography>}
            secondary={action?.subtitle}
            sx={{ marginY: 0 }}
          />
        </ListItemButton>
      )}
    </List>
  );
};

export default ListAvatar;
