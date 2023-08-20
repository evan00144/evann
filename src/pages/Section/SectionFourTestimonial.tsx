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
            <Typography
              variant="h4"
              fontWeight={600}
              marginBottom={"2.6rem"}
              paddingTop={'5rem'}
              sx={{
                // background: "#182145",
                background: (theme) => theme.palette.mode ==="light" ? 
                  "linear-gradient(to right, #182145 0%, #9D8EFE 50%, #40B084 100%)": "linear-gradient(to right, #f8f7fb 0%, #9D8EFE 50%, #40B084 100%)",
                " -webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              Let's bring your incredible design ideas to life with me{" "}
            </Typography>
            <Typography variant="h6" marginBottom={"5rem"}>
              Looking to collaborate on an exciting project? Feel free to drop
              me an email or connect with me through instant messaging!
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
                backgroundColor: (theme) => theme.palette.green.main,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  padding: "1.5rem",
                }}
              >
                <Typography
                  marginBottom={"1.5rem"}
                  sx={{
                    color: (theme) => theme.palette.blue.main,
                  }}
                >
                  <QuoteIcon />
                </Typography>
                <Typography
                  fontWeight={300}
                  variant="body1"
                  marginBottom={"4rem"}
                  sx={{
                    color: (theme) => theme.palette.blue.main,
                  }}
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
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    color: (theme) => theme.palette.blue.main,
                  }}
                >
                  Maykhel David
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    color: "#F8F7FB",
                  }}
                >
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
                    <Typography
                      marginBottom={"1.5rem"}
                      sx={{
                        color: (theme) => theme.palette.green.main,
                      }}
                    >
                      <QuoteIcon />
                    </Typography>
                    <Typography
                      fontWeight={300}
                      variant="body1"
                      marginBottom={"1rem"}
                      color={"textSecondary"}
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
                      sx={{
                        color: (theme) => theme.palette.green.main,
                      }}
                    >
                      Najim Rizky{" "}
                    </Typography>
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
                      sx={{
                        color: "#F8F7FB",
                      }}
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
                    <Typography
                      marginBottom={"1.5rem"}
                      sx={{
                        color: (theme) => theme.palette.blue.main,
                      }}
                    >
                      <QuoteIcon />
                    </Typography>
                    <Typography
                      fontWeight={300}
                      variant="body1"
                      marginBottom={"1rem"}
                      sx={{
                        color: "#F8F7FB",
                      }}
                    >
                      As a partner during my previous internship, I, who was a
                      UI/UX designer at that time, was highly satisfied with
                      Evan's work outcomes. For me, Evan was able to translate
                      complex and seemingly impossible design ideas into reality
                      through coding. Evan paid meticulous attention to my
                      design work, ensuring precise realization, even when
                      dealing with my perfectionist tendencies. Overall,
                      collaborating with Evan was an amazing experience, and
                      working with him has set a high standard for other
                      frontend developers. I am eagerly looking forward to
                      reconnecting with Evan as a work partner in the future.
                      Keep up the great work, Evan!
                    </Typography>
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.blue.main,
                      }}
                      variant="h4"
                      fontWeight={700}
                    >
                      Vera Felia
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        color: "#F8F7FB",
                      }}
                    >
                      Former Working Partner
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
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* <Box width={"50%"}></Box> */}
    </Stack>
  );
}
