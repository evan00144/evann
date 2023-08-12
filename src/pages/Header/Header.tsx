import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useAppSelector } from "../../store/hooks";
import Logo from "../../components/Logo";
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
            padding={"1rem 0"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Logo size={72} />
            <Stack direction={"row"} alignItems={"center"} spacing={5}>
              <Typography variant="body1" fontWeight={700} marginLeft={"auto"}>
                About
              </Typography>
              <Typography variant="body1" fontWeight={700}>Projects </Typography>
              <Typography variant="body1" fontWeight={700}>Contact</Typography>
            </Stack>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              onClick={toggleColorMode}
              sx={{
                minHeight: "0px",
                borderRadius: "30rem",
                height:'fit-content',
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? `${theme.palette.secondary.light} !important`
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
              <Stack direction={"row"} sx={{
                "svg":{
                  width:'100%'
                }
              }} position={"relative"} alignItems={'center'} justifyContent={'center'} columnGap={".55rem"}>
                <Box width={"20px"} height={'20px'}>
                  <DarkModeIcon fontSize="small" className="dark" />
                </Box>
                <Box width={"20px"} height={'20px'}>
                  <WbSunnyIcon fontSize="small" className="light" />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    height: "100%",
                    width: "20px",
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
