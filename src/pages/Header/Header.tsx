import { Button, Container, Stack, Typography } from "@mui/material";

interface iProps{
  toggleColorMode: () => void;
}

export default function Header({ toggleColorMode}:iProps) {
  return (
    <>
      <div style={{ position: "fixed", top: "0", zIndex: "20", width: "100%" }}>
        <Container maxWidth="xl">
          <Stack
            padding={"1.5rem 0"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <img src="/logoLight.svg" alt="" width={96} />
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
