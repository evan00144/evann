import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import LinkedInIcon from "../../icons/LinkedInIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import GmailIcon from "../../icons/GmailIcon";
import QuoteIcon from "../../icons/QuoteIcon";
import Logo from "../../components/Logo";

export default function SectionFourTestimonial() {
  return (
    <Stack
      id="section-four"
      justifyContent={"end"}
      direction={"row"}
      paddingTop={"5rem"}
      sx={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          minHeight: "100vh",
          paddingTop: "5rem",
        }}
      >
        <Container
          maxWidth={"lg"}
          sx={
            {
              // width: "50%",
            }
          }
        >
          <Stack height={"100%"} width={"50%"} paddingRight={"3rem"}>
            <Typography variant="h4" fontWeight={600} marginBottom={"2.6rem"}>
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="h6" marginBottom={"5rem"}>
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
                sx={{ width: "36px", height: "36px" }}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <LinkedInIcon />
              </Box>
              <Typography variant="h6">
                <Link
                  color={"textPrimary"}
                  sx={{
                    textDecoration: "none",
                  }}
                  href="https://www.linkedin.com/in/evan0014/"
                >
                  linkedin.com/in/evan0014/
                </Link>
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={3}
              marginBottom={"1.5rem"}
              alignItems={"center"}
            >
              <Box
                sx={{ width: "36px", height: "36px" }}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <GitHubIcon />
              </Box>
              <Typography variant="h6">
                <Link
                  color={"textPrimary"}
                  sx={{
                    textDecoration: "none",
                  }}
                  href="https://github.com/evan00144"
                >
                  github.com/evan00144
                </Link>
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Box
                sx={{ width: "36px", height: "36px" }}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <GmailIcon />
              </Box>
              <Typography variant="h6">evan.epifanius@gmail.com</Typography>
            </Stack>
            <Box position={"absolute"} bottom={"2rem"}>
              <Logo />
            </Box>
          </Stack>
        </Container>
      </Stack>

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
                  I'm excited to share my perspective on Evan's internship. From
                  the outset, Evan's can-do attitude was evident, setting a
                  positive tone for the team. His rapid learning capabilities
                  were impressive, allowing him to contribute effectively to
                  projects. Notably, Evan excelled in articulating and
                  addressing technical issues, making collaboration seamless.
                  Overall, Evan's internship was defined by his proactive
                  attitude, quick learning, and strong communication skills in
                  the realm of technical problem-solving. These attributes
                  undoubtedly pave the way for his future success.
                </Typography>
                <Typography variant="h4" fontWeight={700} color={"primary"}>
                  Maykhel David
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  Frontend Developer Mentor
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  color={"primary.50"}
                >
                  PT Hashmicro Solusi Indonesia
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={6} sx={{ position: "relative" }}>
            <Grid container direction={"row"} sx={{ height: "100%" }}>
              <Grid item sm={12}>
                <Box
                  sx={{
                    backgroundColor: (theme) => theme.palette.secondary.light,
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
                      I have worked with Evan several times and I think Evan is
                      a great person. He has the ability to learn and adapt
                      quickly, he can also solve a problem systematically. His
                      positive mindset makes him not have the slightest
                      hesitation to ask others who are more experienced when
                      facing difficult situations. In addition, his co-operation
                      skills can also increase work productivity. Collaborating
                      with Evan can be a constructive experience and make a
                      positive contribution.
                    </Typography>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      color={"secondary"}
                    >
Najim Rizky                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color={"tertiary.main"}
                    >
                      Former Working Partner
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      color={"primary.50"}
                    >
                      PT Indonesia Indicator
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
                    <Typography variant="h6" fontWeight={700}>
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
