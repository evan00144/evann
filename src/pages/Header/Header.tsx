import { Button, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

interface iProps{
  toggleColorMode: () => void;
}

export default function Header({ toggleColorMode}:iProps) {
  useEffect(()=>{
    window.addEventListener('scroll', () => {
        const fixedElement = document.querySelector('.logo') as HTMLElement;
        if (document.documentElement.scrollTop > 200) {
        if (fixedElement) {
          fixedElement.style.opacity = '0';
        }
      }
      if (document.documentElement.scrollTop < 200) {
        if (fixedElement) {
          fixedElement.style.opacity = '1';
        }
      }
    });
    
  },[])
  return (
    <>
      <div style={{ position: "fixed", top: "0", zIndex: "20", width: "100%" }}>
        <Container maxWidth="lg">
          <Stack
            padding={"1.5rem 0"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <img src="/logoLight.svg" style={{
              transition: '0.2s ease-in-out',
            }} className="logo" alt="" width={96} />
            <Stack direction={"row"} spacing={5}>
              <Typography variant="h6" marginLeft={"auto"}>
                About
              </Typography>
              <Typography variant="h6">Projects </Typography>
              <Typography variant="h6">Contact</Typography>
              <Button color="secondary" variant="contained" onClick={toggleColorMode}>
                Toggle
              </Button>
            </Stack>
          </Stack>
        </Container>
      </div>
    </>
  );
}
