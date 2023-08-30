import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import CaseClockIcon from "../../../icons/CaseClockIcon";
import CodeIcon from "../../../icons/CodeIcon";
import MedalIcon from "../../../icons/MedalIcon";
import CertificateTab from "./CertificateTab";
import ExperienceTab from "./ExperienceTab";
import SkillTab from "./SkillTab";
// import DownloadIcon from "../../../icons/DownloadIcon";
import Lottie from "react-lottie";
import animationDownload from "../../../animatedSVG/animationDownload.json";

export default function SectionTwoPage() {
  const [ref, inView] = useInView({});
  const [value, setValue] = useState(0);

  const [pause, setPause] = useState(true);

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box
            sx={{
              "& > *": {
                lineHeight: "1.5rem",
              },
            }}
          >
            {children}
          </Box>
        )}
      </div>
    );
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabContent = useMemo(() => {
    return (
      <>
        {/* SKILLS */}
        <CustomTabPanel value={value} index={0}>
          <SkillTab inView={inView} />
        </CustomTabPanel>
        {/* EXPERIENCE */}
        <CustomTabPanel value={value} index={1}>
          <ExperienceTab inView={inView} />
        </CustomTabPanel>
        {/* CERTIFICATE */}
        <CustomTabPanel value={value} index={2}>
          <CertificateTab inView={inView} />
        </CustomTabPanel>
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return (
    <div
      id="section-two"
      style={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "25vh",
          left: "0",
          color: (theme) => theme.palette.text.primary,
          width: "100%",
          zIndex: "0",
          ["@media (max-height: 1200px)"]: {
            top: "30vh",
          },
          ["@media (max-height: 1000px)"]: {
            top: "27vh",
          },
          ["@media (max-height: 840px)"]: {
            top: "22vh",
          },
          ["@media (max-height: 720px)"]: {
            top: "15vh",
          },
          svg: {
            width: "100%",
          },
        }}
      >
        <svg
          width="100%"
          height="64"
          viewBox="0 0 1920 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1953 54.1152H342.514C338.072 54.1152 334.472 50.5147 334.472 46.0733V26.8063C334.472 17.5534 326.971 10.0524 317.718 10.0524H315.54C306.287 10.0524 298.786 17.5534 298.786 26.8063V51.0995V51.0995C298.786 54.3014 294.467 55.3163 293.041 52.4494L274.116 14.4009C271.165 8.46739 262.706 8.44967 259.73 14.3707L241.704 50.2363C238.786 56.0422 230.543 56.1691 227.448 50.4557L207.748 14.0958C206.342 11.5011 203.628 9.88482 200.677 9.88482H-9.5"
            stroke="currentColor"
            strokeWidth="10.0524"
            strokeLinecap="round"
          />
          <path
            d="M265.277 31.8325H282.701"
            stroke="#40B084"
            strokeWidth="10.0524"
            strokeLinecap="round"
          />
          <path
            d="M205.299 9.71716H231.77"
            stroke="#40B084"
            strokeWidth="10.0524"
            strokeLinecap="round"
          />
          <path
            d="M205.299 31.8325H231.77"
            stroke="#40B084"
            strokeWidth="10.0524"
            strokeLinecap="round"
          />
        </svg>
      </Box>
      <img
        src="/img/bg/section2radial.png"
        style={{
          position: "absolute",
          top: "-35vh",
          width: "90vw",
          // transform: "translateY(  50%)",
          zIndex: "-1",
          right: "0",
        }}
        alt=""
      />
      <Container maxWidth="lg" sx={{ height: "100vh" }}>
        <Grid
          container
          alignContent={"center"}
          columnSpacing={5}
          sx={{ height: "100%" }}
          justifyContent={"space-between"}
        >
          <Grid item sm={5} ref={ref} className="content-height-box">
            <Typography
              variant="body1"
              marginBottom={"1.5rem"}
              marginTop={"12vh"}
            >
              {/* <span style={{ fontSize: "4rem", lineHeight: "1" }}>Evan</span> */}
              Evan is a Front-End / Web Developer with almost 2 years of work
              experience. He is a graduate of Multimedia Nusantara University
              with a major in Information Technology, and he has gained solid
              skills in HTML, CSS, JavaScript, and various frontend frameworks,
              such as React and Angular, through internship, freelance, and
              college projects to prepare for a developer career. Evan has a
              strong passion for creating appealing user interfaces. He's able
              to work on his own initiative and as part of a team. He is
              dedicated to maintaining high-quality standards and can handle
              multiple projects simultaneously in a fast-paced and dynamic
              environment.
            </Typography>
            <Button
              size="small"
              color={"light"}
              variant="contained"
              onMouseEnter={() => setPause(false)}
              onMouseLeave={() => setPause(true)}
              // onClick={() =>{
              //   window.open('/pdf/CV_Evan.pdf', '_blank');
              // }}
              component="a"
              href="/pdf/CV_Evan.pdf"
              download={true}
              sx={{
                padding: "0 ",
                fontSize: "1.2rem",
                color: "light",
                textTransform: "none",
                borderRadius: "30rem",
                width: "3rem",
                height: "3rem",
                position: "relative",
                display: "flex",
                overflow: "visible",
                alignItems: "center",
                transition: ".5s",
                justifyContent: "start",
                minWidth: "0  ",
                "&:hover": {
                  width: "13.5rem",
                  transition: ".5s",
                  span: {
                    color: "primary.main",
                    transition: "1s",
                  },
                },
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{
                  flexWrap: "nowrap",
                  marginLeft: "-.05rem",
                  svg: {
                    flex: "none",
                  },
                }}
              >
                {/* <DownloadIcon /> */}
                <Lottie
                  isStopped={pause}
                  isClickToPauseDisabled={true}
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationDownload,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={50}
                  width={50}
                />

                <Typography
                  component={"span"}
                  marginLeft={"1rem"}
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    transition: "1s",
                    whiteSpace: "nowrap",
                    lineHeight: "1",
                  }}
                >
                  Download CV
                </Typography>
              </Stack>
            </Button>
          </Grid>
          <Grid item sm={6}>
            <Box
              sx={{
                borderRadius: " .75rem 0 0 .75rem",
                position: "absolute",
                overflow: "hidden",
                right: "0",
                width: "44rem",
                border: ".05px solid rgba(248, 247, 251, 0.25)",
              }}
            >
              <Box
                sx={{
                  background: (theme) =>
                    theme.palette.mode === "dark" ? "#1C1C22" : "#C1C0C4",
                  padding: ".4rem 1rem 0 1rem",
                  borderBottom: ".05px solid rgba(248, 247, 251, 0.25)",
                }}
              >
                <Tabs
                  sx={{
                    overflow: "unset",
                    alignItems: "end",
                    ".MuiTab-root": {
                      background: (theme) =>
                        theme.palette.mode === "dark" ? "#1C1C22" : "#C1C0C4",

                      color: (theme) =>
                        theme.palette.mode === "dark"
                          ? "rgba(248, 247, 251, 0.5)"
                          : "rgba(110, 118, 129, 0.5)",
                      fontWeight: 700,
                      gap: ".75rem",
                      padding: "0 1rem",
                      minHeight: "2.4rem",
                      display: "flex",
                      verticalAlign: "middle",
                      boxSizing: "border-box",
                      overflow: "unset",
                      fontSize: ".625rem !important",
                      borderTop: ".05px solid transparent",
                      borderLeft: ".05px solid transparent",
                      borderRight: ".05px solid transparent",
                    },
                    ".MuiTabs-indicator": {
                      background: "transparent",
                    },
                    ".MuiTabs-scroller": {
                      overflow: "unset !important ",
                    },
                    ".Mui-selected": {
                      background: (theme) =>
                        theme.palette.mode === "dark"
                          ? "#05070F"
                          : theme.palette.primary.light,
                      color: (theme) =>
                        theme.palette.mode === "dark"
                          ? "white !important"
                          : theme.palette.blue.main,
                      position: "relative",
                      borderColor: "rgba(248, 247, 251, 0.25)",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-1px",
                        left: "0",
                        right: "0",
                        height: "1px",
                        background: (theme) =>
                          theme.palette.mode === "dark"
                            ? "#05070F"
                            : theme.palette.primary.light,
                        zIndex: "5",
                      },
                    },
                    ".MuiButtonBase-root": {
                      borderTopRightRadius: ".3rem !important",
                      borderTopLeftRadius: ".3rem !important",
                    },
                  }}
                  value={value}
                  onChange={handleChange}
                  aria-label="basic secondary tabs example"
                >
                  <Tab
                    icon={<CodeIcon />}
                    iconPosition="start"
                    label="Skills"
                    {...a11yProps(0)}
                  />
                  <Tab
                    icon={<CaseClockIcon />}
                    iconPosition="start"
                    label="Experiences"
                    {...a11yProps(1)}
                  />
                  <Tab
                    icon={<MedalIcon />}
                    iconPosition="start"
                    label="Ceritificates"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </Box>
              <Box
                sx={{
                  background: (theme) =>
                    theme.palette.mode === "dark"
                      ? "#05070F"
                      : theme.palette.primary.light,
                  height: "26.5rem",
                  overflowY: "auto",
                  padding: "1rem 0 1rem 1.5rem",
                  span: {
                    fontFamily: "'Inconsolata', monospace !important",
                    fontWeight: "600",
                  },
                  a: {
                    fontFamily: "'Inconsolata', monospace !important",
                    color: (theme) => theme.palette.secondary.main,
                  },
                }}
              >
                <>{tabContent}</>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
