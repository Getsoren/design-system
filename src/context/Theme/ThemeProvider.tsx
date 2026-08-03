import { CssBaseline, createTheme, css, GlobalStyles, ThemeOptions, ThemeProvider as ThemeProviderMUI } from "@mui/material";
import { frFR, Localization } from "@mui/material/locale";
import { createContext, ReactNode, useMemo } from "react";
import { commonTheme, darkTheme, lightTheme } from "@/config/theme";
import { defaultFontWeight } from "@/constants/fonts";

type Language = "en" | "fr";

export interface ThemeProviderProps {
  /**
   * Children to render
   */
  children: ReactNode;
  /**
   * Set HTML and body height to 100%
   */
  fullHeight?: boolean;
  /**
   * Include CssBaseline
   */
  includeCssBaseline?: boolean;
  /**
   * Include scroll bar style
   */
  includeScrollBarStyle?: boolean;
  /**
   * Theme mode
   */
  theme?: "light" | "dark" | ThemeOptions | Localization;
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme?: boolean;
  /**
   * Language to use
   * @default "en"
   * @supported "en" | "fr"
   */
  language?: string;
  /**
   * Font options
   */
  font?: {
    googleFontName?: string; // Google font name to load
    import?: boolean; // Inject font @import in css
    fontWeight?: number[]; // Font weight to load
  };
}

const defaultFont: ThemeProviderProps["font"] = {
  fontWeight: defaultFontWeight,
  import: true,
};

export const ThemeContext = createContext<{ language: Language }>({
  language: "en",
});

/**
 * The theme prop comes either as a mode ("dark") or as ThemeOptions carrying `palette.mode`: both
 * forms must answer the same question, otherwise the app-level overrides (which can only be objects)
 * left these global styles in their light version.
 */
const isDarkTheme = (theme: ThemeProviderProps["theme"]) =>
  theme === "dark" || (typeof theme === "object" && !!theme && "palette" in theme && theme?.palette?.mode === "dark");

const ScrollBarStyle = ({ theme }: { theme: ThemeProviderProps["theme"] }) => (
  <GlobalStyles
    styles={css`
      * {
        scrollbar-color: ${
          isDarkTheme(theme) ? "rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05)"
        };
        scrollbar-width: thin;
      }

      *::-webkit-scrollbar {
        height: 6px;
        width: 6px;
      }

      *::-webkit-scrollbar-button {
        height: 0;
        width: 0;
      }

      *::-webkit-scrollbar-corner {
        background: transparent;
      }

      *::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border: 0;
        border-radius: 10px;
      }

      *::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
      }
    `}
  />
);

const FullHeightStyle = () => (
  <GlobalStyles
    styles={css`
      html,
      body,
      #root {
        height: 100%;
      }
    `}
  />
);

const ThemeProvider = ({
  children,
  enableColorScheme,
  includeCssBaseline = true,
  includeScrollBarStyle = true,
  fullHeight = true,
  theme,
  language = "en",
  font = defaultFont,
}: ThemeProviderProps) => {
  const fontOptions = { ...defaultFont, ...font };
  const fontName = fontOptions?.googleFontName || commonTheme.typography.fontFamily?.split(",")[0];
  const fontWeight = fontOptions?.fontWeight?.join(";");
  const themeContextValue = useMemo(() => ({ language: language as Language }), [language]);

  const memoizedTheme = useMemo(() => {
    const themeOptions = typeof theme === "object" ? theme : {};
    const languages = {
      ...(language === "fr" && frFR),
    };

    if (isDarkTheme(theme)) {
      return createTheme(darkTheme, themeOptions, languages);
    }

    if (!theme || theme === "light" || (typeof theme === "object" && "palette" in theme && theme?.palette?.mode === "light")) {
      return createTheme(lightTheme, themeOptions, languages);
    }

    return createTheme(commonTheme, themeOptions, languages);
  }, [theme, language]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProviderMUI theme={memoizedTheme}>
        <GlobalStyles
          styles={css`
            ::-webkit-calendar-picker-indicator {
              filter: invert(${isDarkTheme(theme) ? 1 : 0});
            }
          `}
        />
        {fontOptions.import && (
          <GlobalStyles
            styles={css`
              @import url("https://fonts.googleapis.com/css2?family=${fontName}:wght@${fontWeight}&display=swap");
            `}
          />
        )}
        {includeCssBaseline && <CssBaseline enableColorScheme={enableColorScheme} />}
        {fullHeight && <FullHeightStyle />}
        {includeScrollBarStyle && <ScrollBarStyle theme={theme} />}
        {children}
      </ThemeProviderMUI>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
