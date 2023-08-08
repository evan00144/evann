import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledProvider } from "styled-components";

import "./App.scss";
import Header from "./pages/Header/Header";
import SectionOne3D from "./pages/Section/SectionOne3D";
import SectionFourTestimonial from "./pages/Section/SectionFourTestimonial";
import SectionTwoPage from "./pages/Section/SectionTwo/SectionTwoPage";
import { CssBaseline, StyledEngineProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./theme";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledProvider theme={theme}>
          <CssBaseline />
          <Header toggleColorMode={toggleColorMode} />
          <SectionOne3D />
          <SectionTwoPage />
          <SectionFourTestimonial />
        </StyledProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
