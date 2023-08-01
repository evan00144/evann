import {
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CodeIcon from "../../icons/CodeIcon";
import CaseClockIcon from "../../icons/CaseClockIcon";
import MedalIcon from "../../icons/MedalIcon";

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
  return (
    <div
      style={{
        position: "relative",
        background: "primary.main",
      }}
    >
      <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
        <Grid
          container
          alignContent={"center"}
          spacing={20}
          sx={{ height: "100%" }}
        >
          <Grid item sm={6}>
            <Typography variant="h6" marginBottom={"3rem"} color={"white"}>
              <span style={{ fontSize: "4rem", lineHeight: "1" }}>Evan</span> is
              a Front-End / Web Developer with almost 2 years of work
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
              variant="contained"
              color="secondary"
              size="large"
              sx={{ padding: "1.5rem 2.25rem", fontSize: "2.5rem" }}
            >
              Download CV
            </Button>
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
      </Container>
    </div>
  );
}
