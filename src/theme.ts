import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
  }
}



export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#182145",
            contrastText: "white",
            "50": "rgba(24, 33, 69, 0.5)",
          },
          secondary: {
            main: "#40B084",
            dark: "#2C6965",
            contrastText: "#182145",
          },
          tertiary: {
            main: "#9D8EFE",
          },
          background: {
            default: "#fff",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#182145",
            contrastText: "white",
            "50": "rgba(24, 33, 69, 0.5)",
          },
          secondary: {
            main: "#40B084",
            dark: "#2C6965",
            contrastText: "#182145",
          },
          tertiary: {
            main: "#9D8EFE",
          },
          background: {
            default: "#182145",
          },
        }),
  },
});

