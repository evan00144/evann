import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import LinkedInIcon from "../../icons/LinkedInIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import GmailIcon from "../../icons/GmailIcon";
import QuoteIcon from "../../icons/QuoteIcon";
import { useAppSelector } from "../../store/hooks";

export default function SectionFourTestimonial() {
  const { themeMode } = useAppSelector((state) => state.ui);
  return (
    <Stack
      justifyContent={"end"}
      direction={"row"}
      sx={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* <Grid
        container
        alignItems={"center"}
        sx={{
          // position: "absolute",
          height: "100%",
          paddingLeft: "5rem",
        }}
      >
        <Grid
          item
          sm={5}
          sx={{
            height: "100%",
          }}
        > */}
      <Container
        maxWidth={"lg"}
        sx={{
          width: "50%",
        }}
      >
        <Stack height={"100%"} padding={"5rem 7rem"}>
          <Typography variant="h3" fontWeight={600} marginBottom={"2.6rem"}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="h5" marginBottom={"5rem"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Typography>

          <Stack
            direction={"row"}
            spacing={3}
            marginBottom={"1.5rem"}
            alignItems={"center"}
          >
            <Box
              sx={{ width: "48px", height: "48px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <LinkedInIcon />
            </Box>
            <Typography variant="h6">linkedin.com/in/evan0014/</Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={3}
            marginBottom={"1.5rem"}
            alignItems={"center"}
          >
            <Box
              sx={{ width: "48px", height: "48px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <GitHubIcon />
            </Box>
            <Typography variant="h6">linkedin.com/in/evan0014/</Typography>
          </Stack>
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <Box
              sx={{ width: "48px", height: "48px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <GmailIcon />
            </Box>
            <Typography variant="h6">linkedin.com/in/evan0014/</Typography>
          </Stack>
          <img
            src={`/logo-${themeMode === "light" ? "dark" : "light"}.svg`}
            style={{
              transition: "0.1s",
              marginTop: "auto",
            }}
            alt=""
            width={96}
          />
        </Stack>
      </Container>
      {/* </Grid> */}
      {/* </Grid> */}

      <Box
        sx={{
          position: "relative",
          right: 0,
          top: 0,
          width: "50%",
          height: "100%",
        }}
      >
        <Grid
          container
          sx={{
          minHeight: "100vh",

          }}
        >
          <Grid item sm={6}>
            <Box
              sx={{
                backgroundColor: (theme) => theme.palette.secondary.main,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  padding: "1.5rem",
                }}
              >
                <Typography marginBottom={"1.5rem"} color={"primary"}>
                  <QuoteIcon />
                </Typography>
                <Typography
                  fontWeight={300}
                  variant="body1"
                  marginBottom={"4rem"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
                <Typography variant="h4" fontWeight={700} color={"primary"}>
                  John Doe
                </Typography>
                <Typography variant="h6" fontWeight={700} color={"white"}>
                  Kuli Bangunan Tetangga
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  color={"primary.50"}
                >
                  Kuli Bangunan Tetangga
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={6} sx={{ position: "relative" }}>
            <Grid container direction={"row"} sx={{ height: "100%" }}>
              <Grid item sm={12}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      padding: "1.5rem",
                    }}
                  >
                    <Typography marginBottom={"1.5rem"} color={"secondary"}>
                      <QuoteIcon />
                    </Typography>
                    <Typography
                      fontWeight={300}
                      variant="body1"
                      marginBottom={"1rem"}
                      color={"primary"}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      color={"secondary"}
                    >
                      John Doe
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color={"tertiary.main"}
                    >
                      Kuli Bangunan Tetangga
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      color={"primary.50"}
                    >
                      Kuli Bangunan Tetangga
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item sm={12}>
                <Box
                  sx={{
                    backgroundColor: "tertiary.main",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      padding: "1.5rem",
                    }}
                  >
                    <Typography marginBottom={"1.5rem"} color={"primary"}>
                      <QuoteIcon />
                    </Typography>
                    <Typography
                      fontWeight={300}
                      variant="body1"
                      marginBottom={"1rem"}
                      color={"white"}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography variant="h4" fontWeight={700} color={"primary"}>
                      John Doe
                    </Typography>
                    <Typography variant="h6" fontWeight={700} color={"white"}>
                      Kuli Bangunan Tetangga
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      color={"primary.50"}
                    >
                      Kuli Bangunan Tetangga
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* <Box width={"50%"}></Box> */}
    </Stack>
  );
}
