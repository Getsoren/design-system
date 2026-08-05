import { useTheme } from "@mui/material";
import { useCallback } from "react";
import type { LogoProps } from "@/components/DataDisplay/Logo/Logo";

const DEFAULT_SIZE_SHAPE = 32;
const DEFAULT_HEIGHT_DEFAULT_VARIANT = 24;
const DEFAULT_WIDTH_DEFAULT_VARIANT = 105;
const DEFAULT_HEIGHT_SUPPLIER_VARIANT = 24;
const DEFAULT_WIDTH_SUPPLIER_VARIANT = 195;
const DEFAULT_HEIGHT_OTHER_VARIANT = 44;
const DEFAULT_WIDTH__OTHER_VARIANT = 147;

const useLogo = () => {
  const { palette } = useTheme();

  const getTextColor = useCallback(
    (color: LogoProps["color"]): NonNullable<LogoProps["color"]> => {
      if (color === "white") {
        return "#fff";
      }

      if (color === "black") {
        return "#000";
      }

      if (color) {
        return color;
      }

      return palette.text.primary;
    },
    [palette.text.primary],
  );

  const getShapeColor = useCallback(
    (colorShape: LogoProps["colorShape"]): NonNullable<LogoProps["colorShape"]> => {
      if (colorShape) {
        return colorShape;
      }

      return palette.primary.contrastText;
    },
    [palette.primary.contrastText],
  );

  const getShapeBackgroundColor = useCallback(
    (shapeBackgroundColor: LogoProps["shapeBackgroundColor"]): NonNullable<LogoProps["shapeBackgroundColor"]> => {
      if (shapeBackgroundColor) {
        return shapeBackgroundColor;
      }

      return palette.text.primary;
    },
    [palette.text.primary],
  );

  const getImageModule = useCallback((variant: LogoProps["variant"], mode: string, withoutText: LogoProps["withoutText"]) => {
    if (withoutText) {
      return import("@/assets/img/tracktor-logo.svg");
    }

    switch (variant) {
      case "supplier":
        return mode === "dark" ? import("@/assets/img/tracktor-supplier-dark.svg") : import("@/assets/img/tracktor-supplier-light.svg");
      case "pricing":
        return import("@/assets/img/tracktor-pricing.svg");
      default:
        return mode === "dark" ? import("@/assets/img/tracktor-dark.svg") : import("@/assets/img/tracktor-light.svg");
    }
  }, []);

  const getSize = useCallback(
    ({
      variant,
      width,
      height,
      withoutText,
    }: {
      variant: LogoProps["variant"];
      width: LogoProps["width"];
      height: LogoProps["height"];
      withoutText: LogoProps["withoutText"];
    }) => {
      if (withoutText) {
        return {
          height: height || DEFAULT_SIZE_SHAPE,
          width: width || DEFAULT_SIZE_SHAPE,
        };
      }

      if (variant === "default") {
        return {
          height: height || DEFAULT_HEIGHT_DEFAULT_VARIANT,
          width: width || DEFAULT_WIDTH_DEFAULT_VARIANT,
        };
      }

      if (variant === "supplier") {
        return {
          height: height || DEFAULT_HEIGHT_SUPPLIER_VARIANT,
          width: width || DEFAULT_WIDTH_SUPPLIER_VARIANT,
        };
      }

      return {
        height: height || DEFAULT_HEIGHT_OTHER_VARIANT,
        width: width || DEFAULT_WIDTH__OTHER_VARIANT,
      };
    },
    [],
  );

  return {
    getImageModule,
    getShapeBackgroundColor,
    getShapeColor,
    getSize,
    getTextColor,
  };
};

export default useLogo;
