import { Container, Grid, Typography } from "@mui/material";
import Spline from "@splinetool/react-spline";

export default function SectionOne3D() {
  const canvas: HTMLCanvasElement | null = document.getElementById(
    "responsive-canvas"
  ) as HTMLCanvasElement | null;
  const heightRatio = 1.5;

  if (canvas) {
    canvas.height = canvas.width * heightRatio;
  } else {
    console.error("Canvas element with ID 'responsive-canvas' not found.");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        background: "url('img/bg/jumbotron.png')",
        // backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 100%",
      }}
    >
      <Container maxWidth="xl">
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
              sx={{ height: "100%", color: "white", pb: "7vh" }}
            >
              <Grid item sm={6}></Grid>
              <Grid item sm={3}>
                <Typography variant="h6">
                  Need a website? <br /> I'll make it for you
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
                  Frontend / Web Developer
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
      {/* <Spline
        id="responsive-canvas"
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
