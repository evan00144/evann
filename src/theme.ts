import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
    light: Palette["primary"];
    blue: Palette["primary"];
    green: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
    blue: PaletteOptions["primary"];
    green: PaletteOptions["primary"];
    light: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an ochre option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    light: true;
  }
}

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#40B084",
            dark: "#2C6965",
            light: "#e8f3f1",
            contrastText: "#182145",
            "50": "rgba(24, 33, 69, 0.5)",
          },
          secondary: {
            main: "#182145",
            light: "#182145",
            contrastText: "#f8f7fb",
            "50": "rgba(24, 33, 69, 0.5)",
          },
          tertiary: {
            main: "#9D8EFE",
          },
          light: {
            main: "#fff",
          },
          text: {
            primary: "#182145",
            secondary: "#f8f7fb",
          },
          background: {
            default: "#e8f3f1",
          },
          blue: {
            main: "#182145",
          },
          green: {
            main: "#40B084",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#182145",
            contrastText: "#f8f7fb",
            "50": "rgba(24, 33, 69, 0.5)",
          },
          secondary: {
            main: "#40B084",
            dark: "#2C6965",
            light: "#e8f3f1",
            contrastText: "#182145",
          },
          tertiary: {
            main: "#9D8EFE",
          },
          light: {
            main: "#ffffff",
          },
          text: {
            primary: "#f8f7fb",
            secondary: "#182145",
          },
          background: {
            default: "#182145",
          },

          blue: {
            main: "#182145",
          },
          green: {
            main: "#40B084",
          },
        }),
  },
});
