/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
} from "@mui/material";
import { useEffect, useState } from "react";
import CodeIcon from "../../icons/CodeIcon";
import CaseClockIcon from "../../icons/CaseClockIcon";
import MedalIcon from "../../icons/MedalIcon";
import { styled } from "styled-components";
import { gsap } from "gsap";

export default function SectionTwo() {
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
        {value === index && <Box>{children}</Box>}
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
    interface SvgPath {
      y: number | null;
      smoothing: number | null;
    }

    document
      .querySelectorAll<HTMLButtonElement>(".button")
      .forEach((button) => {
        console.log(button);
        const duration = 3000;
        const svg: Element | null = button.querySelector("svg");
        const svgPath: SvgPath = new Proxy(
          {
            y: null,
            smoothing: null,
          },
          {
            set(target, key:keyof SvgPath, value) {
              target[key] = value;
              if (target.y !== null && target.smoothing !== null) {
                svg!.innerHTML = getPath(target.y, target.smoothing, null);
              }
              return true;
            },
            get(target, key:keyof SvgPath) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return target[key];
            },
          }
        );

        button.style.setProperty("--duration", `${duration}ms`);

        svgPath.y = 20;
        svgPath.smoothing = 0;

        button.addEventListener("click", (e) => {
          e.preventDefault();

          if (!button.classList.contains("loading")) {
            button.classList.add("loading");

            gsap.to(svgPath, {
              smoothing: 0.3,
              duration: (duration * 0.065) / 1000,
            });

            gsap.to(svgPath, {
              y: 12,
              duration: (duration * 0.265) / 1000,
              delay: (duration * 0.065) / 1000,
              ease: Elastic.easeOut.config(1.12, 0.4),
            });

            setTimeout(() => {
              svg!.innerHTML = getPath(0, 0, [
                [3, 14],
                [8, 19],
                [21, 6],
              ]);
            }, duration / 2);
          }
        });
      });

    function getPoint(
      point: number[],
      i: number,
      a: number[][],
      smoothing: number
    ): string {
      const cp = (
        current: number[],
        previous: number[] | null,
        next: number[] | null,
        reverse: boolean
      ) => {
        const p = previous || current;
        const n = next || current;
        const o = {
          length: Math.sqrt(
            Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)
          ),
          angle: Math.atan2(n[1] - p[1], n[0] - p[0]),
        };
        const angle = o.angle + (reverse ? Math.PI : 0);
        const length = o.length * smoothing;
        return [
          current[0] + Math.cos(angle) * length,
          current[1] + Math.sin(angle) * length,
        ];
      };
      const cps = cp(a[i - 1], a[i - 2], point, false);
      const cpe = cp(point, a[i - 1], a[i + 1], true);
      return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
    }

    function getPath(
      update: number,
      smoothing: number,
      pointsNew: number[][] | null
    ): string {
      const points = pointsNew
        ? pointsNew
        : [
            [4, 12],
            [12, update],
            [20, 12],
          ];
      const d = points.reduce(
        (acc, point, i, a) =>
          i === 0
            ? `M ${point[0]},${point[1]}`
            : `${acc} ${getPoint(point, i, a, smoothing)}`,
        ""
      );
      return `<path d="${d}" />`;
    }
  }, []);

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          // , height: "100%"
          display: "flex",
        }}
      >
        <div style={{ flex: "1" }}>
          <Grid
            container
            alignContent={"center"}
            // spacing={20}
            sx={{ height: "100%", flex: 1 }}
          >
            <Grid item sm={6}>
              <Typography variant="h6" marginBottom={"3rem"} color={"white"}>
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
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ padding: "1.5rem 2.25rem", fontSize: "2.5rem" }}
              >
                Download CV
              </Button>
              <ButtonGroup
                className="button"
                variant="contained"
                size="large"
                sx={{
                  button: {
                    "&:hover": {
                      background: (theme) => theme.palette.primary.main,
                    },
                    ".MuiTouchRipple-root": {
                      display: "none",
                    },
                  },
                  "&.loading": {
                    ".MuiButtonBase-root ul": {
                      // animation: `${textTransform} calc(var(--duration) * 1ms) linear forwards calc(var(--duration) * .065ms)`,
                      animation: `${textTransform} 3s linear forwards`,
                    },
                    div: {
                      " &:before": {
                        animation: `${lineKeyframes} 3s linear forwards`,
                      },
                      " &:after": {
                        animation: `${backgroundKeyframes} 3s linear forwards`,
                      },
                      svg: {
                        animation: `${svgKeyframes} 3s linear forwards `,
                      },
                    },
                  },
                  div: {
                    position: "relative",
                    width: "60px",
                    height: "60px",
                    overflow: "hidden",
                    background: "blue",
                    "&:before, &:after": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                    },
                    "&:before": {
                      borderRadius: "1px",
                      width: "2px",
                      top: "50%",
                      left: "50%",
                      height: "17px",
                      margin: "-9px 0 0 -1px",
                      background: "white",
                    },
                    "&:after": {
                      width: "100%",
                      height: "100%",
                      transformOrigin: "50% 0",
                      borderRadius: "0 0 80% 80%",
                      background: "red",
                      top: "0",
                      left: "0",
                      transform: "scaleY(0)",
                    },
                  },
                }}
              >
                <Button sx={{ overflow: "hidden" }}>
                  <CustomUL>
                    <li>&#68;ownload</li>
                    <li>&#68;ownloading</li>
                    <li>Open File</li>
                  </CustomUL>
                </Button>
                <Button>
                  <div>
                    <CustomSVG viewBox="0 0 24 24"></CustomSVG>
                  </div>
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item sm={6}>
              <Box sx={{ mb: "2rem" }}>
                <Tabs
                  sx={{
                    ".MuiTab-root": {
                      background: "#1C1C22",
                      color: "rgba(248, 247, 251, 0.5)",
                      gap: ".75rem",
                      padding: "0 1rem",
                      minHeight: "3.5rem",
                      display: "flex",
                      verticalAlign: "middle",
                      boxSizing: "border-box",
                    },
                    ".MuiTabs-indicator": {
                      background: "transparent",
                    },
                    ".Mui-selected": {
                      background: "#05070F",
                      color: "white !important",
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
              <CustomTabPanel value={value} index={0}>
                <Box
                  sx={{
                    background: "#05070F",
                    width: "100%",
                    minHeight: "10rem",
                    borderRadius: "1rem",
                  }}
                ></Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Expriences
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Ceritificates
              </CustomTabPanel>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

const CustomUL = styled.ul`
  margin: 0;
  padding: 16px 40px;
  list-style: none;
  text-align: center;
  position: relative;
  backface-visibility: hidden;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  li {
    &:not(:first-child) {
      top: 16px;
      left: 0;
      right: 0;
      position: absolute;
    }
    &:nth-child(2) {
      top: 76px;
    }
    &:nth-child(3) {
      top: 136px;
    }
  }
`;

const CustomSVG = styled.svg`
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  left: 50%;
  top: 50%;
  margin: -9px 0 0 -10px;
  fill: none;
  z-index: 1;
  stroke-width: 2px;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const textTransform = keyframes`
  10%, 85% {
    transform: translateY(-100%);
  }
  95%,100% {
    transform: translateY(-200%);
  }
`;

const lineKeyframes = keyframes`
  5%, 10% {
    transform: translateY(-30px);
  }
  40% {
    transform: translateY(-20px);
  }
  65% {
    transform: translateY(0);
  }
  75%, 100% {
    transform: translateY(30px);
  }
`;

const svgKeyframes = keyframes`
  0%, 20% {
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
  }
  21%, 89% {
    stroke-dasharray: 26px;
    stroke-dashoffset: 26px;
    stroke-width: 3px;
    margin: -10px 0 0 -10px;
    stroke: white;
  }
  100% {
    stroke-dasharray: 26px;
    stroke-dashoffset: 0;
    margin: -10px 0 0 -10px;
    stroke: white;
  }
  12% {
    opacity: 1;
  }
  20%, 89% {
    opacity: 0;
  }
  90%, 100% {
    opacity: 1;
  }
`;

const backgroundKeyframes = keyframes`
  10% {
    transform: scaleY(0);
  }
  40% {
    transform: scaleY(.15);
  }
  65% {
    transform: scaleY(.5);
    border-radius: 0 0 50% 50%;
  }
  75% {
    border-radius: 0 0 50% 50%;
  }
  90%, 100% {
    border-radius: 0;
  }
  75%, 100% {
    transform: scaleY(1);
  }
`;
