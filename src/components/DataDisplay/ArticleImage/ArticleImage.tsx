import { Skeleton, SxProps, Theme } from "@mui/material";
import { useState } from "react";
import Avatar, { AvatarProps } from "@/components/DataDisplay/Avatar/Avatar";

export interface ArticleImageProps {
  src?: string;
  alt?: string;
  isLoading?: boolean;
  width?: string | number;
  height?: string | number;
  secondarySrc?: AvatarProps["secondarySrc"];
  secondaryAvatarProps?: AvatarProps["secondaryAvatarProps"];
  secondaryTitle?: string;
  sx?: SxProps;
}

const geStyles = (width: number | string, height: number | string) => {
  const { w, h } = { h: Number(height), w: Number(width) };
  const radiusAndPadding = `${(w || h) / 10}px`;

  return { borderRadius: radiusAndPadding, padding: radiusAndPadding };
};

const ArticleImageSkeleton = ({ width, height, sx }: { width: number | string; height: number | string; sx: SxProps }) => (
  <Skeleton variant="rounded" width={width} height={height} sx={sx} />
);

const ArticleImage = ({
  src,
  isLoading,
  secondarySrc,
  secondaryAvatarProps,
  sx,
  secondaryTitle,
  width = 64,
  height = 64,
  alt = "Article",
}: ArticleImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const { borderRadius, padding } = geStyles(width, height);
  const stylesBase = { borderRadius, flexShrink: 0 };
  const displayLoader = (src && !loaded && !error) || isLoading;
  const displayPlaceholder = !src || (error && !isLoading);
  const isTransparent = src?.endsWith(".png") || src?.endsWith(".svg") || src?.endsWith(".gif") || src?.endsWith(".webp");

  const handleLoad = () => {
    setError(false);
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(false);
  };

  return (
    <Avatar
      src={src}
      secondarySrc={secondarySrc}
      secondaryAvatarProps={
        (secondaryAvatarProps || secondaryTitle) && {
          ...secondaryAvatarProps,
          ...(secondaryTitle &&
            !secondaryAvatarProps?.children && {
              children: secondaryTitle,
            }),
          title: secondaryTitle,
        }
      }
      alt={alt}
      onError={handleError}
      onLoad={handleLoad}
      sx={{
        ...stylesBase,
        // Hide wrong render image (browser) during loading
        "& img": {
          opacity: loaded || error ? 1 : 0,
        },
        background: ({ palette }: Theme) => palette.grey[100],
        color: ({ palette }: Theme) => palette.text.secondary,
        height,
        padding: isTransparent && !displayPlaceholder ? padding : 0,
        width,
        ...sx,
      }}
    >
      {/* Loading Skeleton */}
      {displayLoader && <ArticleImageSkeleton width={width} height={height} sx={stylesBase} />}

      {/* Placeholder: an outline mini-excavator, in the same family as the app icons (stroke,
          currentColor, round caps) rather than a filled illustration. 50% of the square and a
          2-unit stroke (~1.67px on screen): exactly the presence of the supplier fallback and of
          the navigation icons. */}
      {displayPlaceholder && (
        <svg
          width="50%"
          height="50%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>{alt}</title>
          {/* track */}
          <path d="M4.4 15.6h7.9a2.2 2.2 0 0 1 0 4.4H4.4a2.2 2.2 0 0 1 0-4.4Z" />
          {/* cab */}
          <path d="M6.6 15.6v-4.1c0-.7.6-1.3 1.3-1.3h2.6c.7 0 1.3.6 1.3 1.3v4.1" />
          {/* boom, in one piece from the cab to the bucket */}
          <path d="M11.9 11.3 15.6 7.4" />
          {/* bucket: an open scoop, not a floating diamond */}
          <path d="m14.4 6.3 3.9 3.6-2 2.9a1.3 1.3 0 0 1-1.8.2l-1.9-1.6a1.3 1.3 0 0 1-.2-1.8Z" />
        </svg>
      )}
    </Avatar>
  );
};

export default ArticleImage;
