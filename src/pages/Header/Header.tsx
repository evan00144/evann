import { Container, Stack } from "@mui/material";

export default function Header() {
  return (
    <>
      <div style={{ position: "fixed", top: "0", zIndex: "20", width: "100%" }}>
        <Container maxWidth="xl">
          <Stack padding={'1.5rem 0'}>
            <img src="/logoLight.svg" alt="" width={96} />
          </Stack>
        </Container>
      </div>
    </>
  );
}
