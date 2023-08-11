import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useAppSelector } from "../../store/hooks";
interface iProps {
  toggleColorMode: () => void;
}

export default function Header({ toggleColorMode }: iProps) {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const { themeMode } = useAppSelector((state) => state.ui);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < prevScrollY);
      setPrevScrollY(currentScrollY);
      setIsAtTop(window.scrollY === 0);
    });
  }, [prevScrollY]);

  useEffect(() => {
    const fixedElement = document.querySelector(".header") as HTMLElement;
    if (isScrollingUp) {
      if (fixedElement) {
        fixedElement.style.opacity = "1";
        fixedElement.style.pointerEvents = "auto";
      }
    } else {
      if (fixedElement) {
        fixedElement.style.opacity = "0";
        fixedElement.style.pointerEvents = "none";
      }
    }
  }, [isScrollingUp]);

  return (
    <>
      <Box
        className="header"
        sx={{
          position: "fixed",
          top: "0",
          zIndex: "20",
          transition: ".2s",
          width: "100%",
          background: isAtTop
            ? "transparent"
            : (theme) => theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            padding={"1.5rem 0"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <img
              src={`/logo-${themeMode === "light" ? "dark" : "light"}.svg`}
              style={{
                transition: "0.1s",
              }}
              alt=""
              width={96}
            />
            <Stack direction={"row"} spacing={5}>
              <Typography variant="h6" marginLeft={"auto"}>
                About
              </Typography>
              <Typography variant="h6">Projects </Typography>
              <Typography variant="h6">Contact</Typography>
            </Stack>
            <Button
              color="secondary"
              variant="contained"
              onClick={toggleColorMode}
              sx={{
                borderRadius: "30rem",
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? "white !important"
                    : `${theme.palette.secondary.main} !important`,
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "white"
                    : `${theme.palette.primary.main} !important`,
                ".dark": {
                  opacity: themeMode === "dark" ? 0 : 1,
                },
                ".light": {
                  opacity: themeMode === "light" ? 0 : 1,
                },
              }}
            >
              <Stack direction={"row"} position={"relative"} columnGap={"1rem"}>
                <DarkModeIcon className="dark" />
                <WbSunnyIcon className="light" />
                <Box
                  sx={{
                    position: "absolute",
                    height: "100%",
                    width: "24px",
                    top: 0,
                    left: themeMode === "dark" ? 0 : "100%",
                    transform: themeMode === "dark" ? "" : "translateX(-100%)",
                    transition: ".2s",
                    background:
                      themeMode === "dark"
                        ? (theme) => theme.palette.primary.main
                        : "white",
                    zIndex: 1,
                    borderRadius: "50%",
                  }}
                />
              </Stack>
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
