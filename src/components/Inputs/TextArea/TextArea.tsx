import { GlobalStyles, TextareaAutosize, TextareaAutosizeProps, useTheme } from "@mui/material";
import { forwardRef, Ref } from "react";
import { getSoftOutlineColor } from "@/utils/colors";

const TextArea = ({ className, style, minRows = 4, ...props }: TextareaAutosizeProps, ref: Ref<HTMLTextAreaElement>) => {
  const { palette, shape, spacing } = useTheme();

  return (
    <>
      <GlobalStyles
        styles={{
          "& .MuiTextArea": {
            "&:focus": {
              border: `solid 1px ${palette.primary.main} !important`,
              outline: `solid 1px ${palette.primary.main} !important`,
            },
          },
        }}
      />
      <TextareaAutosize
        className={[className, "MuiTextArea"].join(" ").trim()}
        ref={ref}
        minRows={minRows}
        style={{
          backgroundColor: "transparent",
          borderColor: getSoftOutlineColor(palette),
          borderRadius: shape.borderRadius,
          color: palette.text.primary,
          marginTop: spacing(1),
          maxWidth: "100%",
          minWidth: "100%",
          padding: spacing(1),
          ...style,
        }}
        {...props}
      />
    </>
  );
};

export default forwardRef(TextArea);
