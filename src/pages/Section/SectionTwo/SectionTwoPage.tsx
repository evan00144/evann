import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    // let mouseX = 0,
    //   mouseY = 0;
    // let xp = 0,
    //   yp = 0;

    // document.getElementById("glass-bg")?.addEventListener("mousemove", (e) => {
    //   mouseX = e.offsetX - 250;
    //   mouseY = e.offsetY - 130;
    //   updateCircle();
    // });
    // const updateCircle = () => {
    //   xp += (mouseX - xp) / 2;
    //   yp += (mouseY - yp) / 2;
    //   const circle = document.getElementById("circle");
    //   if (circle) {
    //     circle.style.transform = `translate(${xp}px, ${yp}px)`;
    //   }
    // };

    const circle = document.getElementById("circle") as HTMLElement;
    const inner = document.getElementById("glass-bg") as HTMLElement;

    // Mouse
    const mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition(event: MouseEvent) {
        const e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin(e: HTMLElement) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show() {
        return `(${this.x}, ${this.y})`;
      },
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(inner);

    //-----------------------------------------

    let counter = 0;
    const updateRate = 10;
    const isTimeToUpdate = () => {
      return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    const onMouseEnterHandler = (event: MouseEvent) => {
      update(event);
    };

    const onMouseLeaveHandler = () => {
      inner.style.transform = "";
    };

    const onMouseMoveHandler = (event: MouseEvent) => {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //-----------------------------------------

    const update = (event: MouseEvent) => {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    const updateTransformStyle = (x: string, y: string) => {
      const style = `perspective(500px) rotateX(${x}deg) rotateY(${y}deg)`;
      inner.style.transform = style;
      // circle follow cursor
      circle.style.transform = `translate(${
        mouse.x +circle.offsetWidth / 2 -100
      }px, ${-mouse.y +circle.offsetHeight -150 }px)`;
    };

    //-----------------------------------------

    inner.onmouseenter = onMouseEnterHandler;
    inner.onmouseleave = onMouseLeaveHandler;
    inner.onmousemove = onMouseMoveHandler;
  }, []);

  return (
    <div>
      <Container maxWidth="xl" sx={{}}>
        <GlassBg id="glass-bg">
          <Grid
            container
            alignContent={"center"}
            columnSpacing={15}
            sx={{}}
            justifyContent={"space-between"}
          >
            <Grid item sm={5} ref={ref} className="content-height-box">
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
                  border: ".05px solid rgba(248, 247, 251, 0.25)",
                }}
              >
                <Box
                  sx={{
                    background: "#1C1C22",
                    padding: ".75rem 1rem 0 1rem",
                    borderBottom: ".05px solid rgba(248, 247, 251, 0.25)",
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
                        background: "#05070F",
                        color: "white !important",
                        position: "relative",
                        borderColor: "rgba(248, 247, 251, 0.25)",
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
                        borderTopRightRadius: ".5rem !important",
                        borderTopLeftRadius: ".5rem !important",
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
                    background: "#05070F",
                    height: "26.5rem",
                    overflowY: "auto",
                    padding: "1rem 0 1rem 1.5rem",
                    span: {
                      fontFamily: "'Inconsolata', monospace !important",
                    },
                    a: {
                      fontFamily: "'Inconsolata', monospace !important",
                      color: (theme) => theme.palette.secondary.main,
                    },
                  }}
                >
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
                </Box>
              </Box>
            </Grid>
          </Grid>
          <RadialCircle2 className="moving-circle" id={"circle"} />
        </GlassBg>
      </Container>
    </div>
  );
}

const GlassBg = styled(Box)({
  padding: "2rem",
  position: "relative",
  background: "rgba(5, 7, 15, 0.2)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(12.3px)",
  overflow: "hidden",
  "&:hover": {
    ".moving-circle": {
      display: "block",
    },
  },
});

const RadialCircle2 = styled(Box)`
  position: absolute;
  width: 50rem;
  height: 50rem;
  z-index: -2;
  top: 0;
  left: 0;
  border-radius: 50%;
  opacity: 0.5;
  display: none;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #40b084 0%,
    rgba(24, 33, 69, 0) 100%
  );
  transition: all 0.1s ease-in-out;
`;
