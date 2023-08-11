import { Box, Container, Grid, Typography } from "@mui/material";
import ReactTyped from "react-typed";
import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
import animationMouse from "../../animatedSVG/animationMouse.json";
import Lottie from "react-lottie";

import Spline from "@splinetool/react-spline";

export default function SectionOne3D() {
  const [render, setRender] = useState(false);
  const [firstStringFinished, setFirstStringFinished] = useState(false);
  const { themeMode } = useAppSelector((state) => state.ui);
  const canvas: HTMLCanvasElement | null = document.getElementById(
    "responsive-canvas"
  ) as HTMLCanvasElement | null;
  const heightRatio = 1.5;

  if (canvas) {
    canvas.height = canvas.width * heightRatio;
  } else {
    console.error("Canvas element with ID 'responsive-canvas' not found.");
  }

  const onLoadSpline = () => {
    setRender(true);
  };

  const onCompleteTyping = (self: any) => {
    self.cursor.remove();
    setFirstStringFinished(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        background: `url('img/bg/jumbotron-${themeMode}.png') 50% 100%  no-repeat`,
        // backgroundSize: "cover",
        // backgroundPosition: "50% 100%",
      }}
    >
      {render && (
        <Container maxWidth="lg">
          <div style={{ minHeight: "100vh", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0",
                left: "0",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Grid
                container
                alignContent={"center"}
                sx={{ height: "100%", pb: "7vh" }}
              >
                <Grid item sm={6}></Grid>
                <Grid item sm={3}>
                  <Typography variant="h6">
                    <ReactTyped
                      strings={["Need a website?"]}
                      onComplete={onCompleteTyping}
                      typeSpeed={40}
                    />
                    <br />
                    {firstStringFinished && (
                      <ReactTyped
                        strings={["I'll make it for you"]}
                        // onComplete={onCompleteTyping}
                        typeSpeed={40}
                      />
                    )}
                  </Typography>
                </Grid>
                <Grid item sm={3}></Grid>
                <Grid item sm={12}>
                  <Typography
                    variant="h1"
                    fontWeight={"bold"}
                    textAlign={"center"}
                    fontSize={"15rem"}
                  >
                    Evan
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={"light"}
                    textAlign={"center"}
                  >
                    Front-End / Web Developer
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
          <Box sx={{
            position: "absolute",
            bottom: "5vh",
            left: "50%",
            transform: "translateX(-50%)",
          }}>
            <Lottie
              // isStopped={pause}
              options={{
                loop: true,
                autoplay: true,
                animationData: animationMouse,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={84}
              width={84}
            />
          </Box>
        </Container>
      )}
      {themeMode == "dark" ? (

        <Spline
        id="responsive-canvas"
        onLoad={onLoadSpline}
        style={{
          position: "absolute",
          height: "fit-content",
          width: "fit-content",
          top: "-20rem",
          left: "-20rem",
          pointerEvents: "auto",
          cursor: "grab",
        }}
        scene={`${"https://prod.spline.design/vjmmer6SDlaR5P5n/scene.splinecode"}`}
        />
        ):(
          
        <Spline
        id="responsive-canvas"
        onLoad={onLoadSpline}
        style={{
          position: "absolute",
          height: "fit-content",
          width: "fit-content",
          top: "-20rem",
          left: "-20rem",
          pointerEvents: "auto",
          cursor: "grab",
        }}
        scene={`${"https://prod.spline.design/Avu63nidCXKxoRoF/scene.splinecode"}`}
        />
        )}
    </div>
  );
}
