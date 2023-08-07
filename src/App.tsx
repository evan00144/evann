import { ThemeProvider } from "@mui/material/styles";

import "./App.scss";
import Header from "./pages/Header/Header";
import SectionOne3D from "./pages/Section/SectionOne3D";
import SectionTwo from "./pages/Section/SectionTwo";
import SectionFourTestimonial from "./pages/Section/SectionFourTestimonial";
import { theme } from "./theme";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
  }
}


function App() {
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
