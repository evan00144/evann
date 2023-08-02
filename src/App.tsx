import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.scss";
import Header from "./pages/Header/Header";
import SectionOne3D from "./pages/Section/SectionOne3D";
import SectionTwo from "./pages/Section/SectionTwo";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#182145",
        contrastText: "white",
      },
      secondary: {
        main: "#40B084",
        contrastText: "#182145",
      },
    },
    typography:{
      allVariants:{
        color: "white"
      }
    }
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
