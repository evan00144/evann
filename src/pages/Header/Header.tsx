import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
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
  const [sectionThreeInview, setSectionThreeInview] = useState(false);

  const { themeMode } = useAppSelector((state) => state.ui);

  useEffect(() => {
    const sectionThree = document.querySelector(
      "#section-three"
    ) as HTMLElement;
    if (sectionThree) {
      const boundingClient = sectionThree.getBoundingClientRect();
      console.log(boundingClient);
      if (
        (boundingClient.top < 0 && boundingClient.bottom > 0) ||
        (boundingClient.top < boundingClient.height / 4 &&
          boundingClient.bottom > 0)
      ) {
        setSectionThreeInview(true);
      } else {
        setSectionThreeInview(false);
      }
    }
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      const logo = document.querySelector("#logo") as HTMLElement;

      if (window.scrollY > 80) {
        logo.style.opacity = "0";
      } else {
        logo.style.opacity = "1";
      }
      setIsScrollingUp(currentScrollY < prevScrollY);
      setPrevScrollY(currentScrollY);
      setIsAtTop(window.scrollY === 0);
    });
  }, [prevScrollY]);

  useEffect(() => {
    console.log(sectionThreeInview);
    const headerElement = document.querySelector(".header") as HTMLElement;
    if (isScrollingUp) {
      if (sectionThreeInview) {
        if (headerElement) {
          headerElement.style.opacity = "0";
          headerElement.style.pointerEvents = "none";
          headerElement.style.transform = "translateY(-100%)";
        }
      } else {
        if (headerElement) {
          headerElement.style.opacity = "1";
          headerElement.style.transform = "translateY(0)";
          headerElement.style.pointerEvents = "auto";
        }
      }
    } else {
      if (headerElement) {
        headerElement.style.opacity = "0";
        headerElement.style.pointerEvents = "none";
        headerElement.style.transform = "translateY(-100%)";
      }
    }
  }, [isScrollingUp, sectionThreeInview]);

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
                <Link href="#section-two" color={"textPrimary"}>
                  About
                </Link>
              </Typography>
              <Typography variant="body1" fontWeight={700}>
                <Link href="#section-three" color={"textPrimary"}>
                  Project
                </Link>
              </Typography>
              <Typography variant="body1" fontWeight={700}>
                <Link href="#section-four" color={"textPrimary"}>
                  Contact
                </Link>
              </Typography>
            </Stack>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              onClick={toggleColorMode}
              sx={{
                minHeight: "0px",
                borderRadius: "30rem",
                height: "fit-content",
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
              <Stack
                direction={"row"}
                sx={{
                  svg: {
                    width: "100%",
                  },
                }}
                position={"relative"}
                alignItems={"center"}
                justifyContent={"center"}
                columnGap={".55rem"}
              >
                <Box width={"20px"} height={"20px"}>
                  <DarkModeIcon fontSize="small" className="dark" />
                </Box>
                <Box width={"20px"} height={"20px"}>
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
