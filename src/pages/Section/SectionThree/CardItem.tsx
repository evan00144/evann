import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Lottie from "react-lottie";
import animationCircleArrow from "../../../animatedSVG/animationCircleArrow.json";

interface iCardItem {
    title: string;
    content: string;
    img: string;
    bg: string;
  }
export default function CardItem ({ title, content, img, bg }: iCardItem)  {
    const [pause, setPause] = useState(true);

    return (
      <>
        <Card
          sx={{
            padding: "1.5rem 1.5rem 0 1.5rem",
            borderRadius: "1rem",
            position: "relative",
            background: bg,
          }}
        >
          <Box
            sx={{
              position: "relative",
              paddingBottom: "1.5rem",
              "&:after": {
                content: '""',
                display: "block",
                width: "100%",
                height: "3px",
                background: "white",
                bottom: "0",
                left: "0",
                borderRadius: "30rem",
                position: "absolute",
              },
            }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Typography variant={"h4"} fontWeight={700}>
                {title}
              </Typography>
              <Box
            //   onMouseEnter={() => setPause(false)}
            //     onMouseLeave={() => setPause(true)}
                sx={{
                  marginLeft: "auto",
                  transform: "rotate(-45deg)",
                }}
              >
                <Lottie
                    isStopped={pause}
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationCircleArrow,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={64}
                  width={64}
                />
              </Box>
            </Stack>
          </Box>
          <CardContent
            sx={{
              padding: "0 !important",
              paddingTop: "1.5rem !important",
            }}
          >
            <Typography
              marginBottom={"1.5rem"}
              variant={"body1"}
              fontWeight={600}
            >
              {content}
            </Typography>
          </CardContent>
          <img
            style={{
              position: "relative",
              bottom: "-.5rem",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
            width={"100%"}
            src={img}
            alt=""
          />
        </Card>
      </>
    );
  }