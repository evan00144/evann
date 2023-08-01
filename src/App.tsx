import { ThemeProvider, createTheme } from "@mui/material";
import "./App.scss";
import Header from "./pages/Header/Header";
import SectionOne3D from "./pages/Section/SectionOne3D";
import SectionTwo from "./pages/Section/SectionTwo";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#182145",
      },
      secondary: {
        main: "#40B084",
        light: "#42a5f5",
        dark: "#1565c0",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SectionOne3D />
      <SectionTwo />
    </ThemeProvider>
  );
}

export default App;
