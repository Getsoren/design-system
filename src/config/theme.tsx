import {
  alpha,
  ComponentsPropsList,
  createTheme,
  getOverlayAlpha,
  Theme as MuiTheme,
  ThemeOptions as MuiThemeOptions,
  PaletteMode,
  responsiveFontSizes,
} from "@mui/material";
import type { Interpolation } from "@mui/system";
import { Children, CSSProperties, isValidElement } from "react";

// Local type definition since OverridesStyleRules is not exported from @mui/material/styles
type OverridesStyleRules<
  ClassKey extends string = string,
  ComponentName extends keyof ComponentsPropsList = keyof ComponentsPropsList,
  Theme = unknown,
> = Record<
  ClassKey,
  Interpolation<
    ComponentsPropsList[ComponentName] &
      Record<string, unknown> & {
        ownerState: ComponentsPropsList[ComponentName] & Record<string, unknown>;
        theme: Theme;
      }
  >
>;

import { ButtonProps } from "@/components/Inputs/Button";
import { dark, light } from "@/constants/colors";
import { defaultFontFamily } from "@/constants/fonts";
import pxToRem from "@/utils/pxToRem";

// Components module augmentation
declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    primary: true;
    secondary: true;
  }
}

declare module "@mui/material/Autocomplete" {
  interface AutocompletePropsSizeOverrides {
    xSmall: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    contrast: true;
  }
  interface ButtonPropsVariantOverrides {
    dashed: true;
    "dashed-rounded": true;
    link: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    "outlined-rounded": true;
    rounded: true;
  }
  interface ChipPropsSizeOverrides {
    xSmall: true;
  }
  interface ChipPropsColorOverrides {
    active: true;
  }
}

declare module "@mui/material/Dialog" {
  interface DialogProps {
    backgroundColor?: "primary" | "secondary" | string;
  }
}

declare module "@mui/material/FormControlLabel" {
  interface FormControlLabelProps {
    variant?: "card";
    size?: "small" | "medium";
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    xSmall: true;
    tiny: true;
  }
}

declare module "@mui/material/InputLabel" {
  interface InputLabelPropsSizeOverrides {
    xSmall: true;
    tiny: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    xSmall: true;
    tiny: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

// Shape module augmentation
declare module "@mui/system" {
  interface Shape {
    borderRadiusL: number;
    borderRadiusS: number;
  }
}

// Theme module augmentation
declare module "@mui/material/styles" {
  interface PaletteColor {
    "4p": string;
    "8p": string;
    "12p": string;
    "16p": string;
    "30p": string;
    "50p": string;
    "160p": string;
    black: string;
  }

  interface Palette {
    tertiary: PaletteColor;
    border: {
      outline: string;
    };
  }

  interface SimplePaletteColorOptions {
    "4p"?: string;
    "8p"?: string;
    "12p"?: string;
    "16p"?: string;
    "30p"?: string;
    "50p"?: string;
    "160p"?: string;
    black?: string;
  }
  interface PaletteOptions {
    tertiary?: SimplePaletteColorOptions;
    border?: {
      outline?: string;
    };
  }

  interface TypeBackground {
    dark: string;
  }

  interface TypeText {
    contrast: string;
  }

  interface TypographyVariants {
    body3: CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: CSSProperties;
  }
}

const actionStyleOverrides: Partial<
  OverridesStyleRules<"root" | "spacing", "MuiDialogActions" | "MuiCardActions", Omit<MuiTheme, "components">>
> = {
  root: ({ theme, ownerState }) => {
    const children = Children.toArray(ownerState.children);
    const lastChild = children[children.length - 1];

    if (isValidElement(lastChild) && typeof lastChild.props === "object" && lastChild.props !== null) {
      const { variant, size } = lastChild.props as { variant?: string; size?: string };

      if (variant === "contained" || variant === "outlined") {
        return {
          padding: theme.spacing(3),
        };
      }

      if (size === "small") {
        return {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
        };
      }
    }

    return undefined;
  },
};

const commonThemeOptions: MuiThemeOptions = {
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(!ownerState.square && { borderRadius: theme.shape.borderRadiusL }),
          ...(ownerState.variant === "standard" && {
            border: `solid 1px ${theme.palette[ownerState.severity || "success"].main}`,
          }),
        }),
      },
      variants: [
        {
          props: { severity: "secondary" },
          style: ({ theme }: { theme: MuiTheme } & ComponentsPropsList["MuiAlert"]) => ({
            "& .MuiAlert-icon": {
              color: `${theme.palette.text.secondary} !important`,
            },
            backgroundColor: `${theme.palette.grey[100]} !important`,
            borderColor: theme.palette.divider,
            color: `${theme.palette.primary.light} !important`,
          }),
        },
        {
          props: { severity: "secondary", variant: "outlined" },
          style: ({ theme }: { theme: MuiTheme } & ComponentsPropsList["MuiAlert"]) => ({
            "& .MuiAlert-icon": {
              color: `${theme.palette.text.primary} !important`,
            },
            backgroundColor: "transparent !important",
            borderColor: theme.palette.text.disabled,
          }),
        },
        {
          props: { severity: "secondary", variant: "filled" },
          style: ({ theme }: { theme: MuiTheme } & ComponentsPropsList["MuiAlert"]) => ({
            backgroundColor: `${theme.palette.grey[100]} !important`,
            borderColor: theme.palette.text.disabled,
          }),
        },
        {
          props: { severity: "primary", variant: "filled" },
          style: ({ theme }: { theme: MuiTheme } & ComponentsPropsList["MuiAlert"]) => ({
            color: `${theme.palette.primary.contrastText} !important`,
          }),
        },
        {
          props: {
            variant: "filled",
          },
          style: {
            borderColor: "transparent",
            color: "white",
          },
        },
        {
          props: {
            variant: "standard",
          },
          style: ({ theme, severity }: { theme: MuiTheme } & ComponentsPropsList["MuiAlert"]) => ({
            backgroundColor: theme.palette[severity || "success"]["8p"],
            color: theme.palette[severity || "success"]["160p"],
          }),
        },
      ],
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontSize: pxToRem(16),
          letterSpacing: -0.35,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.dark,
          height: 60,
        }),
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        limitTags: 1,
      },
      styleOverrides: {
        inputRoot: ({ ownerState }) => ({
          flexWrap: ownerState.focused ? "wrap" : "nowrap",
          overflow: "hidden",
        }),
        paper: ({ theme }) => ({
          marginTop: theme.spacing(0.5),
        }),
      },
      variants: [
        {
          props: { size: "xSmall" },
          style: {
            "& .MuiInputLabel-root:not(.MuiInputLabel-shrink)": {
              transform: "translate(12px, 8px) scale(1)",
            },
            "& .MuiOutlinedInput-root": {
              paddingBottom: 1,
              paddingTop: 1,
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
              paddingBottom: 10,
              paddingTop: 10,
            },
          },
        },
      ],
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& svg": {
            color: theme.palette.text.disabled,
          },
          backgroundColor: theme.palette.grey[100],
          color: theme.palette.text.primary,
          fontSize: pxToRem(14),
          letterSpacing: -0.45,
        }),
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: ({ theme, ownerState }) => {
          const getBadgeTextColor = (mode: PaletteMode, color?: string) => {
            if ((mode === "dark" && color === "error") || (mode === "dark" && color === "default")) {
              return theme.palette.common.white;
            }

            if ((mode === "light" && color === "secondary") || (mode === "light" && color === "default")) {
              return theme.palette.common.black;
            }

            return theme.palette.mode === "dark" ? theme.palette.common.black : theme.palette.common.white;
          };

          return {
            backgroundColor: theme.palette.mode === "light" && ownerState.color === "default" ? theme.palette.grey[100] : ownerState.color,
            borderRadius: theme.shape.borderRadiusS,
            color: getBadgeTextColor(theme.palette.mode, ownerState.color),
            fontSize: pxToRem(12),
            letterSpacing: 0.14,
          };
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        label: ({ theme }) => ({
          "&.Mui-selected": {
            color: theme.palette.common.white,
          },
          color: theme.palette.text.secondary,
          fontSize: pxToRem(14),
          letterSpacing: -0.3,
        }),
        root: ({ theme }) => ({
          "&.Mui-selected": {
            color: theme.palette.common.white,
            svg: {
              color: theme.palette.common.white,
            },
          },
          backgroundColor: theme.palette.background.dark,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:not(:hover)": {
            boxShadow: "none",
          },
          borderRadius: theme.shape.borderRadius,
          lineHeight: 1,
          paddingLeft: "24px",
          paddingRight: "24px",
          textTransform: "none",
        }),
      },
      variants: [
        {
          props: {
            color: "primary",
            variant: "outlined",
          },
          style: ({ theme }) => {
            const hoverOverlay = alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity);

            return {
              "&:hover": {
                backgroundColor: theme.palette.tertiary.main,
                backgroundImage: `linear-gradient(${hoverOverlay}, ${hoverOverlay})`,
                borderColor: theme.palette.text.disabled,
              },
              backgroundColor: theme.palette.tertiary.main,
              borderColor: theme.palette.divider,
            };
          },
        },
        {
          props: { size: "small" },
          style: {
            fontSize: pxToRem(13),
            letterSpacing: -0.3,
            minHeight: 40,
          },
        },
        {
          props: { size: "medium" },
          style: {
            minHeight: 48,
          },
        },
        {
          props: { size: "large" },
          style: {
            fontSize: pxToRem(15),
            letterSpacing: -0.35,
            minHeight: 56,
          },
        },
        {
          props: {
            variant: "contained",
          },
          style: ({ theme }) => ({
            color: theme.palette.primary.contrastText,
          }),
        },
        {
          props: { color: "contrast", variant: "contained" },
          style: ({ theme }) => {
            const hoverOverlay = alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity);

            return {
              "&:hover": {
                backgroundColor: theme.palette.grey.A100,
                backgroundImage: `linear-gradient(${hoverOverlay}, ${hoverOverlay})`,
              },
              backgroundColor: theme.palette.grey.A100,
              color: theme.palette.text.primary,
            };
          },
        },
        {
          props: { color: "contrast", variant: "outlined" },
          style: ({ theme }) => {
            const hoverOverlay = alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity);

            return {
              "&:hover": {
                backgroundColor: theme.palette.grey.A100,
                backgroundImage: `linear-gradient(${hoverOverlay}, ${hoverOverlay})`,
                borderColor: theme.palette.text.disabled,
              },
              backgroundColor: theme.palette.grey.A100,
              // Same subtle border as outlined primary.
              borderColor: theme.palette.divider,
              color: theme.palette.text.primary,
            };
          },
        },
        {
          props: { variant: "link" },
          style: ({ theme, ownerState }: { theme: MuiTheme; ownerState?: ButtonProps } & ComponentsPropsList["MuiButton"]) => {
            const color =
              ownerState?.color === "inherit" || ownerState?.color === "contrast"
                ? theme.palette.text.primary
                : theme.palette?.[ownerState?.color || "primary"]?.main;

            return {
              "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
                textDecorationColor: alpha(color || theme.palette.primary.main, 0.4),
              },
              color,
              fontWeight: "inherit",
              lineHeight: "inherit",
              minHeight: "auto",
              minWidth: "auto",
              padding: 0,
              textDecoration: "underline",
              textTransform: "none",
            };
          },
        },
        // Dashed variant (borderRadius: 4px)
        {
          props: { variant: "dashed" },
          style: ({ theme }) => ({
            "&:hover": {
              backgroundColor: theme.palette.grey[100],
              borderColor: theme.palette.action.disabled,
            },
            "&.Mui-disabled": {
              backgroundColor: "transparent",
              borderColor: theme.palette.action.disabled,
              borderStyle: "dashed",
              color: theme.palette.action.disabled,
            },
            backgroundColor: "transparent",
            border: `1px dashed ${theme.palette.action.disabled}`,
            borderRadius: theme.shape.borderRadiusS,
            color: theme.palette.text.secondary,
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1.5),
          }),
        },
        {
          props: { color: "secondary", variant: "dashed" },
          style: ({ theme }) => ({
            "&:hover": {
              backgroundColor: theme.palette.grey[200],
            },
            "&.Mui-disabled": {
              backgroundColor: "transparent",
              border: `1px dashed ${theme.palette.action.disabled}`,
              color: theme.palette.action.disabled,
            },
            backgroundColor: theme.palette.grey[100],
            border: "none",
            borderRadius: theme.shape.borderRadiusS,
            color: theme.palette.primary.main,
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1.5),
          }),
        },
        {
          props: { color: "error", variant: "dashed" },
          style: ({ theme }) => ({
            "&:hover": {
              backgroundColor: theme.palette.error["8p"],
              borderColor: theme.palette.error.main,
            },
            "&.Mui-disabled": {
              backgroundColor: "transparent",
              borderColor: theme.palette.action.disabled,
              borderStyle: "dashed",
              color: theme.palette.action.disabled,
            },
            backgroundColor: "transparent",
            border: `1px dashed ${theme.palette.error.main}`,
            borderRadius: theme.shape.borderRadiusS,
            color: theme.palette.primary.main,
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1.5),
          }),
        },
        // Dashed-rounded variant (borderRadius: 9999px)
        {
          props: { variant: "dashed-rounded" },
          style: ({ theme }) => ({
            "&:hover": {
              backgroundColor: theme.palette.grey[100],
              borderColor: theme.palette.action.disabled,
            },
            "&.Mui-disabled": {
              backgroundColor: "transparent",
              borderColor: theme.palette.action.disabled,
              borderStyle: "dashed",
              color: theme.palette.action.disabled,
            },
            backgroundColor: "transparent",
            border: `1px dashed ${theme.palette.action.disabled}`,
            borderRadius: 9999,
            color: theme.palette.text.secondary,
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1.5),
          }),
        },
        {
          props: { color: "secondary", variant: "dashed-rounded" },
          style: ({ theme }) => ({
            "&:hover": {
              backgroundColor: theme.palette.grey[200],
            },
            "&.Mui-disabled": {
              backgroundColor: "transparent",
              border: `1px dashed ${theme.palette.action.disabled}`,
              color: theme.palette.action.disabled,
            },
            backgroundColor: theme.palette.grey[100],
            border: "none",
            borderRadius: 9999,
            color: theme.palette.primary.main,
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1.5),
          }),
        },
        {
          props: { color: "error", variant: "dashed-rounded" },
          style: ({ theme }) => ({
            "&:hover": {
              backgroundColor: theme.palette.error["8p"],
              borderColor: theme.palette.error.main,
            },
            "&.Mui-disabled": {
              backgroundColor: "transparent",
              borderColor: theme.palette.action.disabled,
              borderStyle: "dashed",
              color: theme.palette.action.disabled,
            },
            backgroundColor: "transparent",
            border: `1px dashed ${theme.palette.error.main}`,
            borderRadius: 9999,
            color: theme.palette.primary.main,
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1.5),
          }),
        },
        // Dashed sizes
        {
          props: { size: "large", variant: "dashed" },
          style: ({ theme }) => ({
            ...theme.typography.body2,
            "& .MuiButton-startIcon > *:nth-of-type(1), & .MuiButton-endIcon > *:nth-of-type(1)": { fontSize: 20 },
            height: 34,
            minHeight: 34,
          }),
        },
        {
          props: { size: "medium", variant: "dashed" },
          style: ({ theme }) => ({
            ...theme.typography.body2,
            "& .MuiButton-startIcon > *:nth-of-type(1), & .MuiButton-endIcon > *:nth-of-type(1)": { fontSize: 16 },
            height: 26,
            minHeight: 26,
          }),
        },
        {
          props: { size: "small", variant: "dashed" },
          style: ({ theme }) => ({
            ...theme.typography.body3,
            "& .MuiButton-startIcon > *:nth-of-type(1), & .MuiButton-endIcon > *:nth-of-type(1)": { fontSize: 14 },
            height: 22,
            minHeight: 22,
          }),
        },
        // Dashed-rounded sizes
        {
          props: { size: "large", variant: "dashed-rounded" },
          style: ({ theme }) => ({
            ...theme.typography.body2,
            "& .MuiButton-startIcon > *:nth-of-type(1), & .MuiButton-endIcon > *:nth-of-type(1)": { fontSize: 20 },
            height: 34,
            minHeight: 34,
          }),
        },
        {
          props: { size: "medium", variant: "dashed-rounded" },
          style: ({ theme }) => ({
            ...theme.typography.body2,
            "& .MuiButton-startIcon > *:nth-of-type(1), & .MuiButton-endIcon > *:nth-of-type(1)": { fontSize: 16 },
            height: 26,
            minHeight: 26,
          }),
        },
        {
          props: { size: "small", variant: "dashed-rounded" },
          style: ({ theme }) => ({
            ...theme.typography.body3,
            "& .MuiButton-startIcon > *:nth-of-type(1), & .MuiButton-endIcon > *:nth-of-type(1)": { fontSize: 14 },
            height: 22,
            minHeight: 22,
          }),
        },
      ],
    },
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(!ownerState.square && {
            borderRadius: theme.shape.borderRadiusL,
          }),
        }),
      },
      variants: [
        {
          props: {
            variant: "elevation",
          },
          style: () => ({
            borderColor: "transparent",
          }),
        },
        {
          props: {
            variant: "outlined",
          },
          style: ({ theme }) => {
            const { common } = theme.palette;
            const backgroundImageColor = alpha(common.white, +getOverlayAlpha(1));

            return {
              backgroundImage: `linear-gradient(${backgroundImageColor}, ${backgroundImageColor})`,
            };
          },
        },
      ],
    },
    MuiCardActions: {
      styleOverrides: actionStyleOverrides,
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({ padding: theme.spacing(3) }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme, ownerState }) => {
          const { color = "default", variant = "standard" } = ownerState;
          const isOutlinedVariant = ["outlined", "outlined-rounded"].includes(variant);

          return {
            ...(color === "default" && {
              backgroundColor: isOutlinedVariant ? theme.palette.grey[50] : theme.palette.grey[100],
              border: isOutlinedVariant ? `1px solid ${theme.palette.divider}` : "transparent",
              color: theme.palette.text.primary,
            }),
            ...(color === "primary" && {
              "&:hover": {
                backgroundColor: `${theme.palette.grey[200]} !important`,
              },
              backgroundColor: theme.palette.primary["4p"],
              border: isOutlinedVariant ? `1px solid ${theme.palette.divider}` : "transparent",
              color: theme.palette.primary.black,
            }),
            ...(color === "secondary" && {
              "&:hover": {
                backgroundColor: `${isOutlinedVariant ? theme.palette.secondary["30p"] : theme.palette.secondary["50p"]} !important`,
              },
              backgroundColor: isOutlinedVariant ? theme.palette.secondary["8p"] : theme.palette.secondary["16p"],
              border: isOutlinedVariant ? `1px solid ${theme.palette.secondary["30p"]}` : "transparent",
              color: isOutlinedVariant ? theme.palette.secondary.dark : theme.palette.secondary.black,
            }),
            ...(color === "error" && {
              "&:hover": {
                backgroundColor: `${isOutlinedVariant ? theme.palette.error["30p"] : theme.palette.error["50p"]} !important`,
              },
              backgroundColor: isOutlinedVariant ? theme.palette.error["8p"] : theme.palette.error["30p"],
              border: isOutlinedVariant ? `1px solid ${theme.palette.error["30p"]}` : "transparent",
              color: isOutlinedVariant ? theme.palette.error.dark : theme.palette.error["160p"],
            }),
            ...(color === "info" && {
              "&:hover": {
                backgroundColor: `${isOutlinedVariant ? theme.palette.info["30p"] : theme.palette.info["50p"]} !important`,
              },
              backgroundColor: isOutlinedVariant ? theme.palette.info["8p"] : theme.palette.info["30p"],
              border: isOutlinedVariant ? `1px solid ${theme.palette.info["30p"]}` : "transparent",
              color: isOutlinedVariant ? theme.palette.info.dark : theme.palette.info["160p"],
            }),
            ...(color === "success" && {
              "&:hover": {
                backgroundColor: `${isOutlinedVariant ? theme.palette.success["30p"] : theme.palette.success["50p"]} !important`,
              },
              backgroundColor: isOutlinedVariant ? theme.palette.success["8p"] : theme.palette.success["30p"],
              border: isOutlinedVariant ? `1px solid ${theme.palette.success["30p"]}` : "transparent",
              color: isOutlinedVariant ? theme.palette.success.dark : theme.palette.success["160p"],
            }),
            ...(color === "warning" && {
              "&:hover": {
                backgroundColor: `${isOutlinedVariant ? theme.palette.warning["30p"] : theme.palette.warning["50p"]} !important`,
              },
              backgroundColor: isOutlinedVariant ? theme.palette.warning["8p"] : theme.palette.warning["30p"],
              border: isOutlinedVariant ? `1px solid ${theme.palette.warning["30p"]}` : "transparent",
              color: isOutlinedVariant ? theme.palette.warning.dark : theme.palette.warning["160p"],
            }),
            ...(color === "active" && {
              backgroundColor: `${theme.palette.text.primary} !important`,
              border: isOutlinedVariant ? `1px solid ${theme.palette.divider}` : "transparent",
              color: theme.palette.text.contrast,
            }),
            fontWeight: 500,
          };
        },
      },
      variants: [
        {
          props: { variant: "rounded" },
          style: ({ theme }) => ({
            borderRadius: theme.shape.borderRadiusS,
          }),
        },
        {
          props: { variant: "outlined-rounded" },
          style: ({ theme }) => ({
            borderRadius: theme.shape.borderRadiusS,
          }),
        },
        {
          props: { size: "medium" },
          style: ({ theme }) => ({
            "& .MuiChip-label": {
              fontSize: theme.typography.pxToRem(14),
              letterSpacing: -0.3,
              paddingLeft: 8,
              paddingRight: 8,
            },
          }),
        },
        {
          props: { size: "small" },
          style: ({ theme }) => ({
            "& .MuiChip-label": {
              fontSize: theme.typography.pxToRem(13),
              letterSpacing: -0.2,
            },
          }),
        },
        {
          props: { size: "xSmall" },
          style: ({ theme }) => ({
            "& .MuiChip-deleteIcon": {
              fontSize: theme.typography.pxToRem(14),
            },
            "& .MuiChip-icon": {
              fontSize: theme.typography.pxToRem(16),
            },
            "& .MuiChip-label": {
              fontSize: theme.typography.pxToRem(12),
              letterSpacing: 0,
              paddingLeft: 8,
              paddingRight: 8,
            },
            height: 20,
          }),
        },
      ],
    },
    MuiDialog: {
      styleOverrides: {
        paper: ({ ownerState, theme }) => {
          const getBackgroundColor = () => {
            if (ownerState.backgroundColor === "primary") {
              return theme.palette.background.default;
            }

            if (ownerState.backgroundColor === "secondary") {
              return theme.palette.background.default;
            }

            return ownerState.backgroundColor;
          };

          const backgroundColor = getBackgroundColor();

          const paperSlotProps = ownerState.slotProps?.paper as Record<string, unknown> | undefined;
          const noElevation = !paperSlotProps?.elevation;

          return {
            ...(backgroundColor && { backgroundColor }),
            ...(noElevation && { backgroundImage: "none", boxShadow: "none" }),
          };
        },
        root: ({ theme }) => ({
          "& .MuiDialog-container": {
            [theme.breakpoints.between("xs", "sm")]: {
              "& > .MuiPaper-root": {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                margin: 0,
                maxWidth: "100%",
                width: "100%",
              },
              alignItems: "flex-end",
              display: "flex",
            },
          },
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: actionStyleOverrides,
    },
    MuiDialogTitle: {
      defaultProps: {
        variant: "h3",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          paddingRight: theme.spacing(7),
        }),
      },
    },
    MuiFormControlLabel: {
      variants: [
        {
          props: { variant: "card" },
          style: ({ theme }) => ({
            "& .MuiFormControlLabel-label": {
              zIndex: 1,
            },
            "& .MuiRadio-root": {
              border: `solid 1px ${theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.border.outline}`,
              borderRadius: theme.shape.borderRadius,
              height: "100%",
              left: 0,
              margin: 0,
              position: "absolute",
              top: 0,
              width: "100%",
            },
            "& .MuiRadio-root > span": {
              display: "none",
            },
            "& .MuiRadio-root.Mui-checked": {
              "&:before": {
                backgroundImage: `url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.79508%2015.8749L4.62508%2011.7049L3.20508%2013.1149L8.79508%2018.7049L20.7951%206.70492L19.3851%205.29492L8.79508%2015.8749Z%22%20fill%3D%22%23${theme.palette.secondary.main.replace(
                  "#",
                  "",
                )}%22%2F%3E%3C%2Fsvg%3E")`,
                bottom: 0,
                content: "''",
                display: "block",
                height: 20,
                marginTop: -2,
                position: "absolute",
                right: theme.spacing(1.5),
                top: "50%",
                transform: "translateY(-50%)",
                width: 20,
              },
              backgroundColor: alpha(theme.palette.secondary.main, 0.08),
              borderColor: theme.palette.secondary.main,
            },
            backgroundColor: "transparent",
            margin: "inherit",
            padding: theme.spacing(2),
            paddingRight: theme.spacing(5),
            position: "relative",
          }),
        },
        {
          props: { size: "small", variant: "card" },
          style: ({ theme }) => ({
            padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
            paddingRight: theme.spacing(6),
          }),
        },
      ],
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: pxToRem(14),
          letterSpacing: 0.4,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: () => ({
          letterSpacing: -0.3,
        }),
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === "light" ? theme.palette.background.paper : "transparent",
        }),
      },
      variants: [
        {
          props: { size: "tiny" },
          style: {
            ".MuiOutlinedInput-notchedOutline": {
              top: 0,
            },
            ".MuiOutlinedInput-notchedOutline legend": {
              display: "none",
            },
            "& .MuiInputBase-input": {
              paddingTop: 0,
            },
            "& .MuiInputBase-input.MuiFilledInput-input": {
              paddingBottom: 2.5,
              paddingTop: 5.5,
            },
            "& .MuiInputBase-input.MuiOutlinedInput-input:not(.MuiInputBase-inputMultiline)": {
              paddingBottom: 3.5,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 3.5,
            },
            "&.MuiInputBase-multiline": {
              paddingBottom: 8,
              paddingTop: 8,
            },
            fontSize: pxToRem(14),
          },
        },
        {
          props: { size: "small" },
          style: {
            "& .MuiOutlinedInput-input.MuiInputBase-inputSizeSmall": {
              paddingBottom: 12.5,
              paddingTop: 12.5,
            },
            "& .MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.MuiInputBase-inputMultiline": {
              paddingBottom: 0,
              paddingTop: 0,
            },
          },
        },
        {
          props: { size: "xSmall" },
          style: {
            "& .MuiInputBase-input": {
              paddingTop: 0,
            },
            "& .MuiInputBase-input.MuiFilledInput-input": {
              paddingBottom: 3.5,
              paddingTop: 13.5,
            },
            "& .MuiInputBase-input.MuiOutlinedInput-input": {
              paddingBottom: 8.5,
              paddingTop: 8.5,
            },
            "&.MuiInputBase-multiline": {
              paddingBottom: 6,
              paddingTop: 6,
            },
            "&.MuiInputBase-multiline textarea.MuiInputBase-input": {
              padding: 0,
            },
          },
        },
      ],
    },
    MuiInputLabel: {
      variants: [
        {
          props: { size: "tiny" },
          style: {
            // Filled
            "&.MuiInputLabel-filled.MuiInputLabel-sizeTiny": {
              transform: "translate(12px, 0px) scale(0.65)",
            },
            // Outlined
            "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
              display: "none",
            },
            // Label when not shrunk
            "&.MuiInputLabel-outlined.MuiInputLabel-sizeTiny:not(.MuiInputLabel-shrink), &.MuiInputLabel-filled.MuiInputLabel-sizeTiny:not(.MuiInputLabel-shrink)":
              {
                transform: "translate(12px, 5px) scale(1)",
              },
            // Standard shrink
            "&.MuiInputLabel-standard.MuiInputLabel-sizeTiny.MuiInputLabel-shrink": {
              transform: "translate(0, 6.5px) scale(0.75)",
            },
            fontSize: pxToRem(12),
          },
        },
        {
          props: { size: "xSmall" },
          style: {
            "&.MuiInputLabel-filled.MuiInputLabel-sizeXSmall": {
              transform: "translate(12px, 0px) scale(0.75)",
            },
            "&.MuiInputLabel-outlined.MuiInputLabel-sizeXSmall:not(.MuiInputLabel-shrink), &.MuiInputLabel-filled.MuiInputLabel-sizeXSmall:not(.MuiInputLabel-shrink)":
              {
                transform: "translate(14px, 8px) scale(1)",
              },
          },
        },
        {
          props: { size: "small" },
          style: {
            "&.MuiInputLabel-outlined.MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)": {
              transform: "translate(14px, 12px) scale(1)",
            },
          },
        },
      ],
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiSvgIcon-root": {
            fontSize: theme.typography.pxToRem(20),
          },
        }),
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 4,
      },
      styleOverrides: {
        list: ({ theme }) => ({
          minWidth: 200,
          padding: theme.spacing(1),
        }),
        root: ({ theme }) => ({
          marginTop: theme.spacing(0.5),
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...theme.typography.body2,
          borderRadius: theme.shape.borderRadiusS,
          lineHeight: theme.typography.pxToRem(24),
          ...(!ownerState.dense && {
            padding: theme.spacing(1, 2),
          }),
        }),
      },
    },
    MuiPaper: {
      variants: [
        {
          props: {
            square: false,
          },
          style: ({ theme }) => ({
            border: `solid 1px ${theme.palette.divider}`,
            borderRadius: theme.shape.borderRadiusL,
          }),
        },
      ],
    },
    MuiSelect: {
      variants: [
        {
          props: { variant: "outlined" },
          style: ({ theme }) => ({
            "& .MuiOutlinedInput-notchedOutline": {
              ...(theme.palette.mode === "light" && {
                borderColor: theme.palette.grey[200],
              }),
            },
            borderRadius: theme.shape.borderRadius,
          }),
        },
        {
          props: { variant: "filled" },
          style: {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          },
        },
        {
          props: { disableUnderline: true, variant: "standard" },
          style: ({ theme }) => ({
            "& .MuiSelect-select": {
              background: "none !important",
            },
            color: theme.palette.text.secondary,
          }),
        },
      ],
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: {
          horizontal: "center",
          vertical: "bottom",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:first-of-type": {
            marginLeft: 0,
          },
          "&:last-of-type": {
            marginRight: 0,
          },
          marginLeft: theme.spacing(1.5),
          marginRight: theme.spacing(1.5),
          minWidth: 0,
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: "none",
        }),
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `solid 1px ${theme.palette.divider}`,
          borderRadius: theme.shape.borderRadius,
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // Remove the default spin button on number inputs
          "& .MuiOutlinedInput-root": {
            /* Chrome, Safari, Edge, Opera */
            "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            /* Firefox */
            "input[type=number]": {
              MozAppearance: "textfield",
            },
          },
        },
      },
      variants: [
        {
          props: { variant: "standard" },
          style: {
            ".MuiInputBase-root": {
              backgroundColor: "transparent",
            },
            ".MuiInputBase-root:before, .MuiInputBase-root:after, .MuiInputBase-root.MuiInput-underline:hover:before": {
              borderBottom: "none",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: ({ theme }) => ({
            "& .MuiInputBase-root": {
              borderRadius: theme.shape.borderRadius,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              ...(theme.palette.mode === "light" && {
                borderColor: theme.palette.grey[200],
              }),
            },
          }),
        },
        {
          props: { variant: "filled" },
          style: {
            "& .MuiInputBase-root": {
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            },
          },
        },
        {
          props: { type: "search" },
          style: ({ theme }) => {
            const fillColor = encodeURIComponent(theme.palette.action.active);

            return {
              "& .MuiInputBase-input::-webkit-search-cancel-button": {
                "&:hover": {
                  backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
                },
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 24 24'%3E%3Cpath d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' fill='${fillColor}'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "20px 20px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: theme.typography.pxToRem(24),
                height: 28,
                WebkitAppearance: "none",
                width: 28,
              },
            };
          },
        },
      ],
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          "&.Mui-selected": {
            ...(ownerState.color &&
              ownerState.color !== "standard" && { backgroundColor: alpha(theme.palette[ownerState.color].main, 0.12) }),
          },
          borderRadius: theme.shape.borderRadius,
          padding: "8px 11px",
        }),
      },
      variants: [
        {
          props: { size: "small" },
          style: {
            minHeight: 40,
          },
        },
        {
          props: { size: "medium" },
          style: {
            minHeight: 48,
          },
        },
        {
          props: { size: "large" },
          style: {
            minHeight: 56,
          },
        },
      ],
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: pxToRem(14),
          letterSpacing: 0,
        },
      },
    },
  },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.10),0px 1px 1px 0px rgba(0,0,0,0.04),0px 1px 3px 0px rgba(0,0,0,0.03)",
    "0px 3px 1px -2px rgba(0,0,0,0.17),0px 2px 2px 0px rgba(0,0,0,0.11),0px 1px 5px 0px rgba(0,0,0,0.09)",
    "0px 3px 3px -2px rgba(0,0,0,0.17),0px 3px 4px 0px rgba(0,0,0,0.11),0px 1px 8px 0px rgba(0,0,0,0.09)",
    "0px 2px 4px -1px rgba(0,0,0,0.17),0px 4px 5px 0px rgba(0,0,0,0.11),0px 1px 10px 0px rgba(0,0,0,0.09)",
    "0px 3px 5px -1px rgba(0,0,0,0.17),0px 5px 8px 0px rgba(0,0,0,0.11),0px 1px 14px 0px rgba(0,0,0,0.09)",
    "0px 3px 5px -1px rgba(0,0,0,0.17),0px 6px 10px 0px rgba(0,0,0,0.11),0px 1px 18px 0px rgba(0,0,0,0.09)",
    "0px 4px 5px -2px rgba(0,0,0,0.17),0px 7px 10px 1px rgba(0,0,0,0.11),0px 2px 16px 1px rgba(0,0,0,0.09)",
    "0px 5px 5px -3px rgba(0,0,0,0.17),0px 8px 10px 1px rgba(0,0,0,0.11),0px 3px 14px 2px rgba(0,0,0,0.09)",
    "0px 5px 6px -3px rgba(0,0,0,0.17),0px 9px 12px 1px rgba(0,0,0,0.11),0px 3px 16px 2px rgba(0,0,0,0.09)",
    "0px 6px 6px -3px rgba(0,0,0,0.17),0px 10px 14px 1px rgba(0,0,0,0.11),0px 4px 18px 3px rgba(0,0,0,0.09)",
    "0px 6px 7px -4px rgba(0,0,0,0.17),0px 11px 15px 1px rgba(0,0,0,0.11),0px 4px 20px 3px rgba(0,0,0,0.09)",
    "0px 7px 8px -4px rgba(0,0,0,0.17),0px 12px 17px 2px rgba(0,0,0,0.11),0px 5px 22px 4px rgba(0,0,0,0.09)",
    "0px 7px 8px -4px rgba(0,0,0,0.17),0px 13px 19px 2px rgba(0,0,0,0.11),0px 5px 24px 4px rgba(0,0,0,0.09)",
    "0px 7px 9px -4px rgba(0,0,0,0.17),0px 14px 21px 2px rgba(0,0,0,0.11),0px 5px 26px 4px rgba(0,0,0,0.09)",
    "0px 8px 9px -5px rgba(0,0,0,0.17),0px 15px 22px 2px rgba(0,0,0,0.11),0px 6px 28px 5px rgba(0,0,0,0.09)",
    "0px 8px 10px -5px rgba(0,0,0,0.17),0px 16px 24px 2px rgba(0,0,0,0.11),0px 6px 30px 5px rgba(0,0,0,0.09)",
    "0px 8px 11px -5px rgba(0,0,0,0.17),0px 17px 26px 2px rgba(0,0,0,0.11),0px 6px 32px 5px rgba(0,0,0,0.09)",
    "0px 9px 11px -5px rgba(0,0,0,0.17),0px 18px 28px 2px rgba(0,0,0,0.11),0px 7px 34px 6px rgba(0,0,0,0.09)",
    "0px 9px 12px -6px rgba(0,0,0,0.17),0px 19px 29px 2px rgba(0,0,0,0.11),0px 7px 36px 6px rgba(0,0,0,0.09)",
    "0px 10px 13px -6px rgba(0,0,0,0.17),0px 20px 31px 3px rgba(0,0,0,0.11),0px 8px 38px 7px rgba(0,0,0,0.09)",
    "0px 10px 13px -6px rgba(0,0,0,0.17),0px 21px 33px 3px rgba(0,0,0,0.11),0px 8px 40px 7px rgba(0,0,0,0.09)",
    "0px 10px 14px -6px rgba(0,0,0,0.17),0px 22px 35px 3px rgba(0,0,0,0.11),0px 8px 42px 7px rgba(0,0,0,0.09)",
    "0px 11px 14px -7px rgba(0,0,0,0.17),0px 23px 36px 3px rgba(0,0,0,0.11),0px 9px 44px 8px rgba(0,0,0,0.09)",
    "0px 11px 15px -7px rgba(0,0,0,0.17),0px 24px 38px 3px rgba(0,0,0,0.11),0px 9px 46px 8px rgba(0,0,0,0.09)",
  ],
  shape: {
    borderRadius: 8,
    borderRadiusL: 12,
    borderRadiusS: 4,
  },
  typography: () => ({
    body1: {
      fontSize: pxToRem(16),
      letterSpacing: -0.35,
    },
    body2: {
      fontSize: pxToRem(14),
      letterSpacing: -0.3,
    },
    body3: {
      fontSize: pxToRem(12),
      letterSpacing: -0.3,
    },
    button: {
      fontSize: pxToRem(14),
      letterSpacing: -0.3,
    },
    caption: {
      fontSize: pxToRem(12),
      letterSpacing: -0.3,
    },
    fontFamily: defaultFontFamily,
    h1: {
      fontSize: pxToRem(28),
      fontWeight: 700,
      letterSpacing: -0.6,
    },
    h2: {
      fontSize: pxToRem(24),
      fontWeight: 600,
      letterSpacing: -0.5,
    },
    h3: {
      fontSize: pxToRem(20),
      fontWeight: 600,
      letterSpacing: -0.45,
    },
    h4: {
      fontSize: pxToRem(18),
      fontWeight: 500,
      letterSpacing: -0.4,
    },
    h5: {
      fontSize: pxToRem(16),
      fontWeight: 500,
      letterSpacing: -0.35,
    },
    h6: {
      fontSize: pxToRem(14),
      fontWeight: 500,
      letterSpacing: -0.3,
    },
    overline: {
      fontSize: pxToRem(12),
      letterSpacing: 0.25,
    },
    subtitle1: {
      fontSize: pxToRem(16),
      letterSpacing: -0.35,
    },
    subtitle2: {
      fontSize: pxToRem(14),
      letterSpacing: -0.3,
    },
  }),
};

export const commonTheme = responsiveFontSizes(createTheme(commonThemeOptions));
export const lightTheme = responsiveFontSizes(createTheme(commonThemeOptions, light));
export const darkTheme = responsiveFontSizes(createTheme(commonThemeOptions, dark));

export default {
  commonTheme,
  darkTheme,
  lightTheme,
};
