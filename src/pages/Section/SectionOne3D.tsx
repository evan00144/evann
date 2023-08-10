import { Container, Grid, Typography } from "@mui/material";
import ReactTyped from "react-typed";
import { useAppSelector } from "../../store/hooks";
// import Spline from "@splinetool/react-spline";
// import { useState } from "react";

export default function SectionOne3D() {
  // const [render, setRender] = useState(false);
  const { themeMode} = useAppSelector(state => state.ui)
  const canvas: HTMLCanvasElement | null = document.getElementById(
    "responsive-canvas"
  ) as HTMLCanvasElement | null;
  const heightRatio = 1.5;

  if (canvas) {
    canvas.height = canvas.width * heightRatio;
  } else {
    console.error("Canvas element with ID 'responsive-canvas' not found.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCompleteTyping = (self:any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    self.cursor.remove();

  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        background: `url('img/bg/jumbotron-${themeMode}.png') 50% 100% / cover no-repeat`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 100%",
      }}
    >
      {/* {render && ( */}
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
                  <ReactTyped
                    strings={["^1120 I'll make it for you"]}
                    onComplete={onCompleteTyping}
                    typeSpeed={40}
                  />
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
      </Container>
      {/* )} */}
      {/* <Spline
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
        scene="https://prod.spline.design/vjmmer6SDlaR5P5n/scene.splinecode"
      /> */}
    </div>
  );
}
