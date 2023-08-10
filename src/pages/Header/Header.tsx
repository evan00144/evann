import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface iProps {
  toggleColorMode: () => void;
}

export default function Header({ toggleColorMode }: iProps) {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < prevScrollY);
      setPrevScrollY(currentScrollY);
    });
  }, [prevScrollY]);

  useEffect(() => {
    const fixedElement = document.querySelector(".header") as HTMLElement;
    if (isScrollingUp) {
      if (fixedElement) {
        fixedElement.style.opacity = "1";
      }
    } else {
      if (fixedElement) {
        fixedElement.style.opacity = "0";
      }
    }
    console.log(isScrollingUp)
  }, [isScrollingUp]);
  return (
    <>
      <Box className="header" sx={{ position: "fixed", top: "0", zIndex: "20", transition:'1s', width: "100%",background:(theme)=> theme.palette.primary.main }}>
        <Container maxWidth="lg">
          <Stack
            padding={"1.5rem 0"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <img
              src="/logoLight.svg"
              style={{
                transition: "0.2s",
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
              <Button
                color="secondary"
                variant="contained"
                onClick={toggleColorMode}
              >
                Toggle
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
