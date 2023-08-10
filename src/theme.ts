import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
    light: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
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
          light: {
            main: "#fff",
          },
          text: {
            primary: "#182145",
          },
          background: {
            default: "#e8f3f1",
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
          light: {
            main: "#ffffff",
          },
          text: {
            primary: "#ffffff",
          },
          background: {
            default: "#182145",
          },
        }),
  },
});
