import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.scss";
import Header from "./pages/Header/Header";
import SectionOne3D from "./pages/Section/SectionOne3D";
import SectionTwo from "./pages/Section/SectionTwo";
import SectionFourTestimonial from "./pages/Section/SectionFourTestimonial";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary?: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}

function App() {
  const theme = createTheme({
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

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SectionOne3D />
      <SectionTwo />
      <SectionFourTestimonial />
    </ThemeProvider>
  );
}

export default App;
