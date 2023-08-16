import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledProvider } from "styled-components";

import "./App.scss";
import Header from "./pages/Header/Header";
import SectionOne3D from "./pages/Section/SectionOne3D";
import SectionFourTestimonial from "./pages/Section/SectionFourTestimonial";
import SectionTwoPage from "./pages/Section/SectionTwo/SectionTwoPage";
import { CssBaseline, PaletteMode, StyledEngineProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { getDesignTokens } from "./theme";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { toggleThemeMode } from "./store/reducer/ui";
import SectionThreePageTwo from "./pages/Section/SectionThree/SectionThreePageTwo";

function App() {
  // const [mode, setMode] = useState<"light" | "dark">("dark");
  const {themeMode}  = useAppSelector(state => state.ui)
  const dispatch = useAppDispatch()
  const toggleColorMode = () => {
    dispatch(toggleThemeMode())
  };

  const theme = useMemo(() => createTheme(getDesignTokens(themeMode as PaletteMode)), [themeMode]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledProvider theme={theme}>
          <CssBaseline />
          <Header toggleColorMode={toggleColorMode} />
          <SectionOne3D />
          <SectionTwoPage />
          <SectionThreePageTwo/>
          <SectionFourTestimonial />
        </StyledProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
