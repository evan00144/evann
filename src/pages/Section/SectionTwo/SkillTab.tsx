import { Box, Stack } from "@mui/material";
import ReactTyped from "react-typed";
import { animatedTextFadeUp } from "../../../styled/animation.styled";
import {
  TertiaryText,
  WhiteText,
  SecondaryText,
} from "../../../styled/text-color.styled";
import { theme } from "../../../theme";

interface iSkillContent {
  title: string;
  content: string;
}

const SkillContent = ({ title, content }: iSkillContent) => {
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
        <WhiteText
          sx={{
            whiteSpace: "nowrap",
          }}
          component={"span"}
        >{`${content}`}</WhiteText>
      </Box>
      <Box>
        <TertiaryText component={"span"} theme={theme}>{`</div>`}</TertiaryText>
      </Box>
    </>
  );
};

export default function SkillTab() {
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
        {/* {inView && ( */}
        <Box
          sx={{
            overflowX: "auto",
            overflowY: "hidden",
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
                strings={[`^480programming-language`]}
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
            }}
          >
            <Box
              sx={{
                paddingLeft: "2rem",
              }}
            >
              <WhiteText
                sx={{
                  whiteSpace: "nowrap",
                }}
                component={"span"}
              >{`Java, HTML, CSS, JS, C, MySQL, PHP`}</WhiteText>
            </Box>
            <Box>
              <TertiaryText
                component={"span"}
                theme={theme}
              >{`</div>`}</TertiaryText>
            </Box>
            <Box>-</Box> {/** Spacer */}
            <SkillContent
              title={"framework/library"}
              content={
                "ReactJS, jQuery, Bootstrap, Firebase, Code Igniter, Ionic React, GSAP, Angular JS"
              }
            />
            <Box>-</Box> {/** Spacer */}
            <SkillContent
              title={"software"}
              content={
                "VS Code, Android Studio, IntelliJ, GitHub, Figma, Google Colab"
              }
            />
            <Box>-</Box> {/** Spacer */}
            <SkillContent
              title={"language"}
              content={
                "Bahasa Indonesia (Native), English (Limited Working Proficiency)"
              }
            />
          </Box>
        </Box>
        {/* )} */}
      </Stack>
    </>
  );
}
