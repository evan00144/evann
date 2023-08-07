import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
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
    },
    typography: {
      allVariants: {
        color: "white",
      },
    },
  });