import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import LinkedInIcon from "../../icons/LinkedInIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import GmailIcon from "../../icons/GmailIcon";
import QuoteIcon from "../../icons/QuoteIcon";

export default function SectionFourTestimonial() {
  return (
    <Stack
      justifyContent={"end"}
      direction={"row"}
      sx={{
        height: "100vh",
        position: "relative",
      }}
    >
      <Grid
        container
        alignItems={"center"}
        sx={{
          position: "absolute",
          height: "100%",
          paddingLeft: "5rem",
        }}
      >
        <Grid item sm={5}>
          <Typography variant="h3" fontWeight={600} marginBottom={"2.6rem"}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="h5" marginBottom={"5rem"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Typography>

          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <Box
              sx={{ width: "60px", height: "60px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <LinkedInIcon />
            </Box>
            <Typography variant="body1">linkedin.com/in/evan0014/</Typography>
          </Stack>
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <Box
              sx={{ width: "60px", height: "60px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <GitHubIcon />
            </Box>
            <Typography variant="body1">linkedin.com/in/evan0014/</Typography>
          </Stack>
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <Box
              sx={{ width: "60px", height: "60px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <GmailIcon />
            </Box>
            <Typography variant="body1">linkedin.com/in/evan0014/</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Box
        sx={{
          width: "50%",
          height: "100%",
        }}
      >
        <Grid
          container
          sx={{
            height: "100%",
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
                <Typography variant="h4" fontWeight={600} color={"primary"}>
                  John Doe
                </Typography>
                <Typography variant="h6" color={"white"}>
                  Kuli Bangunan Tetangga
                </Typography>
                <Typography variant="body2" color={"primary.50"}>
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
                      fontWeight={600}
                      color={"secondary"}
                    >
                      John Doe
                    </Typography>
                    <Typography variant="h6" color={"tertiary.main"}>
                      Kuli Bangunan Tetangga
                    </Typography>
                    <Typography variant="body2" color={"primary.50"}>
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
                    <Typography variant="h4" fontWeight={600} color={"primary"}>
                      John Doe
                    </Typography>
                    <Typography variant="h6" color={"white"}>
                      Kuli Bangunan Tetangga
                    </Typography>
                    <Typography variant="body2" color={"primary.50"}>
                      Kuli Bangunan Tetangga
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
