import { Box, Stack } from "@mui/material";
import ReactTyped from "react-typed";
import { animatedTextFadeUp } from "../../../styled/animation.styled";
import {
  TertiaryText,
  WhiteText,
  SecondaryText,
  GreyText,
} from "../../../styled/text-color.styled";
import { theme } from "../../../theme";

interface iExperienceContent {
  title: string;
  content: string;
  comment: string;
}

const ExperienceContent = ({ title, content, comment }: iExperienceContent) => {
  return (
    <>
      <Box>
        <TertiaryText component={"span"} theme={theme}>
          {`<div `}
        </TertiaryText>
        <WhiteText component={"span"}>{`class`}</WhiteText>
        <TertiaryText component={"span"} theme={theme}>{`="`}</TertiaryText>
        <SecondaryText
          component={"span"}
          theme={theme}
        >{`${title}`}</SecondaryText>
        <TertiaryText component={"span"} theme={theme}>{`">`}</TertiaryText>
      </Box>
      <Box
        sx={{
          paddingLeft: "2rem",
        }}
      >
        <WhiteText component={"span"}>{`${content}`}</WhiteText>
      </Box>
      <Box
        sx={{
          paddingLeft: "2rem",
        }}
      >
        <GreyText component={"span"}>//({`${comment}`})</GreyText>
      </Box>
      <Box>
        <TertiaryText component={"span"} theme={theme}>{`</div>`}</TertiaryText>
      </Box>
    </>
  );
};

export default function ExperienceTab() {
  return (
    <>
      <Stack direction={"row"}>
        <Box
          sx={{
            color: "#6e7681",
            paddingRight: "1rem",
            "& > *": {
              lineHeight: "1.568rem",
              fontFamily: "'Inconsolata', monospace !important",
            },
          }}
        >
          {Array.from(Array(15).keys()).map((item) => (
            <Box key={item}>{item + 1}</Box>
          ))}
        </Box>
        <Box
          sx={{
            overflowX: "auto",
            overflowY: "hidden",
            paddingBottom:'1rem',
            "&::-webkit-scrollbar-track": {
              WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
              borderRadius: "10px",
              backgroundColor: "transparent",
              marginRight: "1.5rem",
            },
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
              backgroundColor: "transparent",
              marginRight: "1.5rem",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "10px",
              WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
              backgroundColor: "#555",
              marginRight: "1.5rem",
            },
          }}
        >
          <Box>
            <TertiaryText component={"span"} theme={theme}>
              <ReactTyped
                strings={[`&lt;div&nbsp;`]}
                typeSpeed={40}
                showCursor={false}
              />
            </TertiaryText>
            <WhiteText component={"span"}>
              <ReactTyped
                strings={[`^200class`]}
                typeSpeed={40}
                showCursor={false}
              />
            </WhiteText>
            <TertiaryText component={"span"} theme={theme}>
              <ReactTyped
                strings={[`^400="`]}
                typeSpeed={40}
                showCursor={false}
              />
            </TertiaryText>
            <SecondaryText component={"span"} theme={theme}>
              <ReactTyped
                strings={[`^480Jan2023-Jun2023`]}
                typeSpeed={40}
                showCursor={false}
              />
            </SecondaryText>
            <TertiaryText component={"span"} theme={theme}>
              <ReactTyped
                strings={[`^1600">`]}
                typeSpeed={40}
                showCursor={false}
              />
            </TertiaryText>
          </Box>
          <Box
            sx={{
              animation: `${animatedTextFadeUp} 1s forwards`,
              animationDelay: "1600ms",
              opacity: 0,
              visibility: "hidden",
            }}
          >
            <Box
              sx={{
                paddingLeft: "2rem",
              }}
            >
              <WhiteText
                component={"span"}
              >{`Frontend Developer - PT Indonesia Indicator`}</WhiteText>
            </Box>
            <Box
              sx={{
                paddingLeft: "2rem",
              }}
            >
              <GreyText component={"span"}>
                //({`South Jakarta, Hybrid`})
              </GreyText>
            </Box>
            <Box>
              <TertiaryText
                component={"span"}
                theme={theme}
              >{`</div>`}</TertiaryText>
            </Box>
            <Box>-</Box> {/** Spacer */}
            <ExperienceContent
              title={"Aug2022-Dec2022"}
              content="Frontend Developer Intern - PT Indonesia Indicator"
              comment="South Jakarta, Hybrid"
            />
            <Box>-</Box> {/** Spacer */}
            <ExperienceContent
              title={"Feb2022-Jun2022"}
              content="Frontend Developer Intern - PT Hashmicro Solusi Indonesia"
              comment="South Jakarta, Hybrid"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
