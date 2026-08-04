import { Box, ButtonTypeMap, CircularProgress, Button as MuiButton, ButtonProps as MuiButtonProps, Stack } from "@mui/material";
import { ElementType, ForwardedRef, forwardRef, ReactNode } from "react";

export type ButtonProps<RootComponent extends ElementType = ButtonTypeMap["defaultComponent"], AdditionalProps = {}> = MuiButtonProps<
  RootComponent,
  AdditionalProps & {
    component?: RootComponent;
    isLoading?: boolean;
    loadingIndicator?: ReactNode;
    loadingPosition?: "start" | "end";
  }
>;

interface LoaderProps {
  size: ButtonProps["size"];
  loadingPosition?: ButtonProps["loadingPosition"];
  position?: "relative" | "absolute";
}

const ICON_LOADING_SIZE = {
  large: 17,
  medium: 16,
  small: 15,
  xSmall: 14,
};

const Loader = ({ size, loadingPosition, position = "absolute" }: LoaderProps) => (
  <Box
    position={position}
    top={0}
    left={0}
    bottom={0}
    right={0}
    display="flex"
    alignItems="center"
    justifyContent="center"
    sx={{
      ...(position === "relative" && {
        ...(loadingPosition && {
          marginLeft: loadingPosition === "start" ? 0 : 1,
          marginRight: loadingPosition === "start" ? 1 : 0,
        }),
      }),
    }}
  >
    <CircularProgress role="alert" aria-busy="true" color="inherit" size={ICON_LOADING_SIZE[size || "medium"]} />
  </Box>
);

const WrapChildren = ({
  children,
  isLoading,
  loadingIndicator,
  loadingPosition,
  size,
  startIcon,
  endIcon,
}: Pick<ButtonProps, "children" | "isLoading" | "loadingIndicator" | "loadingPosition" | "size" | "startIcon" | "endIcon">) => {
  const isButtonWithIcon = startIcon || endIcon;

  if (isLoading && loadingPosition) {
    return (
      <Stack direction={loadingPosition === "start" ? "row" : "row-reverse"} alignItems="center">
        <Loader size={size} position="relative" loadingPosition={loadingPosition} />
        <Box component="span">{children}</Box>
      </Stack>
    );
  }

  if (isLoading && !loadingIndicator && !isButtonWithIcon) {
    return (
      <>
        {isLoading && !loadingIndicator && <Loader size={size} />}
        <Box component="span" sx={{ opacity: 0 }}>
          {children}
        </Box>
      </>
    );
  }

  if (isLoading && loadingIndicator) {
    return <> {loadingIndicator} </>;
  }

  return <Box component="span">{children}</Box>;
};

const Button = <RootComponent extends ElementType>(props: ButtonProps<RootComponent>, ref: ForwardedRef<any>) => {
  const {
    children,
    disabled,
    disableRipple,
    isLoading,
    loadingIndicator,
    loadingPosition,
    size,
    variant,
    startIcon,
    endIcon,
    ...restProps
  } = props;

  return (
    <MuiButton
      disabled={disabled || isLoading}
      ref={ref}
      size={size}
      variant={variant}
      disableRipple={disableRipple || variant === "link"}
      startIcon={isLoading && startIcon ? <Loader position="relative" size={size} /> : startIcon}
      endIcon={isLoading && endIcon ? <Loader position="relative" size={size} /> : endIcon}
      {...restProps}
    >
      <WrapChildren
        isLoading={isLoading}
        loadingIndicator={loadingIndicator}
        loadingPosition={loadingPosition}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {children}
      </WrapChildren>
    </MuiButton>
  );
};

export default forwardRef(Button);
