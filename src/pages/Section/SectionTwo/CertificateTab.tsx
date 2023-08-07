import { Stack, Box } from "@mui/material";
import ReactTyped from "react-typed";
import {
  TertiaryText,
  WhiteText,
  SecondaryText,
  GreyText,
} from "../../../styled/text-color.styled";
import { theme } from "../../../theme";
import { animatedTextFadeUp } from "../../../styled/animation.styled";

export default function CertificateTab() {
  interface iCertificateContent {
    title: string;
    content: string;
    comment: string;
    link: string;
  }

  const CertificateContent = ({
    title,
    content,
    comment,
    link,
  }: iCertificateContent) => {
    return (
      <>
        <Box>
          <TertiaryText component={"span"} theme={theme}>
            {`<div `}
          </TertiaryText>
          <WhiteText component={"span"}>{`class`}</WhiteText>
          <TertiaryText component={"span"} theme={theme}>{`="`}</TertiaryText>
          <SecondaryText component={"span"} theme={theme}>
            {`${title}`}-
            <a href={link} target="_blank">
              Certificate
            </a>
          </SecondaryText>
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
          <TertiaryText component={"span"} theme={theme}>
            {`{`}
          </TertiaryText>
          <GreyText
            sx={{
              whiteSpace: "nowrap",
            }}
            component={"span"}
          >
            /*{`${comment}`}*/
          </GreyText>

          <TertiaryText component={"span"} theme={theme}>
            {`}`}
          </TertiaryText>
        </Box>
        <Box>
          <TertiaryText
            component={"span"}
            theme={theme}
          >{`</div>`}</TertiaryText>
        </Box>
      </>
    );
  };
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
                strings={[
                  `^480Feb2023-<a href={'https://www.credly.com/badges/666f44c5-c702-46cd-884f-c5f1fdf5d6e2/linked_in?t=rqhoc5'} target="_blank">Certificate</a>`,
                ]}
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
                component={"span"}
              >{`IT Specialist - Javascript by Certiport`}</WhiteText>
            </Box>
            <Box
              sx={{
                paddingLeft: "2rem",
              }}
            >
              <TertiaryText component={"span"} theme={theme}>
                {`{`}
              </TertiaryText>
              <GreyText
                sx={{
                  whiteSpace: "nowrap",
                }}
                component={"span"}
              >
                /*
                {`Certification for recognizing, writing, and debugging JavaScriptcode that will logically solve a problem.`}
                */
              </GreyText>

              <TertiaryText component={"span"} theme={theme}>
                {`}`}
              </TertiaryText>
            </Box>
            <Box>
              <TertiaryText
                component={"span"}
                theme={theme}
              >{`</div>`}</TertiaryText>
            </Box>
            <Box>-</Box> {/** Spacer */}
            <CertificateContent
              title={"Feb2022"}
              content="Jquery Couse by Sololearn"
              comment={
                "Learned to manipulate CSS and DOM. Created an effect such as hide/show, fade, slide, and animate an element."
              }
              link={"https://www.sololearn.com/Certificate/CT-X7ZKJHZM/jpg"}
            />
            <Box>-</Box> {/** Spacer */}
            <CertificateContent
              title={"Jun2022"}
              content="Belajar membuat Front-End Web untuk Pemula by Dicoding"
              comment={
                "Learned about basic Javascript (data type, array, operator, etc.) and web storage (loca storage, session storage)"
              }
              link={"https://www.dicoding.com/certificates/53XE04Q09XRN"}
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
