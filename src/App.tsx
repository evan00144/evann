import { ThemeProvider } from "@mui/material/styles";

import "./App.scss";
import Header from "./pages/Header/Header";
import SectionOne3D from "./pages/Section/SectionOne3D";
import SectionFourTestimonial from "./pages/Section/SectionFourTestimonial";
import { theme } from "./theme";
import SectionTwoPage from "./pages/Section/SectionTwo/SectionTwoPage";

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
      <SectionTwoPage />
      <SectionFourTestimonial />
    </ThemeProvider>
  );
}

export default App;
