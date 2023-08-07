import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import ReactTyped from "react-typed";
import { useInView } from "react-intersection-observer";
import CaseClockIcon from "../../../icons/CaseClockIcon";
import CodeIcon from "../../../icons/CodeIcon";
import MedalIcon from "../../../icons/MedalIcon";
import CertificateTab from "./CertificateTab";
import ExperienceTab from "./ExperienceTab";
import SkillTab from "./SkillTab";

export default function SectionTwoPage() {
  const [ref, inView] = useInView({});
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(inView);
  }, [inView]);

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
    console.log(newValue);
    setValue(newValue);
  };

  const [glassHeight, setGlassHeight] = useState<number>(0);

  const contentHeight = document.querySelector(
    ".content-height-box"
  )?.clientHeight;

  useEffect(() => {
    setGlassHeight(contentHeight as number);
  }, [contentHeight]);

  const GlassBg = styled(Box)({
    position: "absolute",
    width: "100%",
    height: `calc(${glassHeight}px + 6rem)`,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: -1,
    background: "rgba(255, 255, 255, 0.14)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(12.3px)",
  });

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          display: "flex",
        }}
      >
        <Box sx={{ flex: "1", position: "relative" }}>
          <Grid
            container
            alignContent={"center"}
            // spacing={20}
            columnSpacing={15}
            justifyContent={"space-between"}
            sx={{ height: "100%", flex: 1, padding: "3rem" }}
          >
            <Grid item sm={5} className="content-height-box">
              <Typography variant="body1" marginBottom={"3rem"} color={"white"}>
                <span style={{ fontSize: "4rem", lineHeight: "1" }}>Evan</span>{" "}
                is a Front-End / Web Developer with almost 2 years of work
                experience. He is a graduate of Multimedia Nusantara University
                with a major in Information Technology, and he has gained solid
                skills in HTML, CSS, JavaScript, and various frontend
                frameworks, such as React and Angular, through internship,
                freelance, and college projects to prepare for a developer
                career. Evan has a strong passion for creating appealing user
                interfaces. He's able to work on his own initiative and as part
                of a team. He is dedicated to maintaining high-quality standards
                and can handle multiple projects simultaneously in a fast-paced
                and dynamic environment.
              </Typography>
              <ButtonGroup
                className="button"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  button: {
                    "&:hover": {
                      background: (theme) => theme.palette.secondary.main,
                    },
                    ".MuiTouchRipple-root": {
                      display: "none",
                    },
                  },
                }}
              >
                <Button
                  ref={ref}
                  color={"secondary"}
                  sx={{
                    overflow: "hidden",
                    padding: "1rem 2.25rem",
                    fontSize: "2rem",
                  }}
                >
                  Download CV
                </Button>
                <Button
                  color={"secondary"}
                  sx={{
                    padding: "1rem 2rem",
                  }}
                >
                  <svg
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="svgTest"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.1446 0C15.328 0 16.2874 0.95939 16.2874 2.14286V22.6722L24.6252 14.3078C25.4607 13.4697 26.8175 13.4675 27.6557 14.303C28.4938 15.1385 28.496 16.4953 27.6605 17.3335L15.6622 29.37C15.2602 29.7733 14.7142 30 14.1447 30C13.5753 30 13.0292 29.7734 12.6271 29.3702L0.625438 17.3337C-0.210188 16.4957 -0.208226 15.1389 0.629822 14.3032C1.46787 13.4676 2.82465 13.4696 3.66028 14.3076L12.0017 22.6732V2.14286C12.0017 0.95939 12.9611 0 14.1446 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item sm={6}>
              <Box
                sx={{
                  borderRadius: ".75rem",
                  overflow: "hidden",
                  border: "1px solid #707070",
                }}
              >
                <Box
                  sx={{
                    background: "#1C1C22",
                    padding: ".75rem 2.25rem 0 2.25rem",
                    borderBottom: "1px solid #707070",
                  }}
                >
                  <Tabs
                    sx={{
                      overflow: "unset",
                      alignItems: "end",
                      ".MuiTab-root": {
                        background: "#1C1C22",
                        color: "rgba(248, 247, 251, 0.5)",
                        gap: ".75rem",
                        padding: "0 1rem",
                        minHeight: "2.8rem",
                        display: "flex",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        overflow: "unset",

                        borderTop: "1px solid transparent",
                        borderLeft: "1px solid transparent",
                        borderRight: "1px solid transparent",
                      },
                      ".MuiTabs-indicator": {
                        background: "transparent",
                      },
                      ".MuiTabs-scroller": {
                        overflow: "unset !important ",
                      },
                      ".Mui-selected": {
                        background: "#05070F",
                        color: "white !important",
                        position: "relative",
                        borderColor: "#707070",
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          bottom: "-1px",
                          left: "0",
                          right: "0",
                          height: "1px",
                          background: "#05070f",
                          zIndex: "5",
                        },
                      },
                      ".MuiButtonBase-root": {
                        borderTopRightRadius: ".75rem !important",
                        borderTopLeftRadius: ".75rem !important",
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
                      label="Expriences"
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
                    background: "#05070F",
                    // height: "23.6rem",
                    overflowY: "auto",
                    padding: "1.5rem",
                    span: {
                      fontFamily: "'Inconsolata', monospace !important",
                    },
                    a: {
                      fontFamily: "'Inconsolata', monospace !important",
                      color: (theme) => theme.palette.secondary.main,
                    },
                  }}
                >
                  {/* SKILLS */}
                  <CustomTabPanel value={value} index={0}>
                    <SkillTab />
                  </CustomTabPanel>
                  {/* EXPERIENCE */}
                  <CustomTabPanel value={value} index={1}>
                    <ExperienceTab />
                  </CustomTabPanel>
                  {/* CERTIFICATE */}
                  <CustomTabPanel value={value} index={2}>
                    <CertificateTab />
                  </CustomTabPanel>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <GlassBg />
          <RadialCircle2 />
          <RadialCircle />
        </Box>
      </Container>
    </div>
  );
}

const randomNumber = (max: number) => Math.floor(Math.random() * max);
const generateXY = (number: number) => {
  const x = randomNumber(number);
  const y = randomNumber(number);
  return `left: ${x}%;  
    top: ${y}%;
    transform: translate(-${x}%, -${y}%);
    `;
};

const movingCircleKeyframes = keyframes`
  0% {
    top:0;
    left:0;
  }
  20% {
    ${generateXY(100)}
    scale: 1.2;
  }
  40% {
    ${generateXY(100)}
    scale: 1.5;
  }
  60% {
    ${generateXY(100)}
    scale: .7;
  }
  80% {
    ${generateXY(100)}
    scale: 2;
  }
  100% {
    left: 0;
    top: 0;  
    scale: 1;
  }
  `;
const movingCircleKeyframes2 = keyframes`
  0% {
    top:100%;
    left:100%;
    transform: translate(-100%, -100%);  
  }
  20% {
    ${generateXY(100)}
    scale: 1.2;
  }
  40% {
    ${generateXY(100)}
    scale: 1.5;
  }
  60% {
    ${generateXY(100)}
    scale: .7;
  }
  80% {
    ${generateXY(100)}
    scale: 2;
  }
  100% {
    top:100%;
    left:100%;
    transform: translate(-100%, -100%); 
       scale: 1;
  }
  `;
const RadialCircle = styled(Box)`
  position: absolute;
  width: 15rem;
  height: 15rem;
  z-index: -2;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: rgb(157, 142, 254);
  background: radial-gradient(
    circle,
    rgba(157, 142, 254, 1) 0%,
    rgba(0, 107, 208, 1) 100%
  );
  animation: ${movingCircleKeyframes} 12s linear infinite;
`;

const RadialCircle2 = styled(Box)`
  position: absolute;
  width: 20rem;
  height: 20rem;
  z-index: -2;
  top: 0;
  left: 0;
  border-radius: 50%;

  background: radial-gradient(
    50% 50% at 50% 50%,
    #40b084 0%,
    rgba(24, 33, 69, 0) 100%
  );
  animation: ${movingCircleKeyframes2} 12s linear infinite;
`;
