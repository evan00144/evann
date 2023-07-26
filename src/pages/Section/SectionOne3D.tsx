import { Container, Grid, Typography } from "@mui/material";
import Spline from "@splinetool/react-spline";

export default function SectionOne3D() {
  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        background: "url('img/bg/jumbotron.svg",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <div style={{ height: "100vh", position: "relative" }}>
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
              sx={{ height: "100%", color: "white" }}
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
      <Spline
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: "0",
          left: "0",
          pointerEvents: "auto",
          cursor: "grab",
        }}
        scene="https://prod.spline.design/dFiHBSwhufVLYJgM/scene.splinecode"
      />
      <div
        style={{
          // background: "radial-gradient(circle, rgba(64,176,132,0.5) 0%, rgba(23,33,72,1) 100%)",
          position: "absolute",
          width: "100%",
          zIndex: -1,
          height: "20rem",
          bottom: "0",
        }}
      >
        <svg
          width="1920"
          height="520"
          viewBox="0 0 1920 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-14"
            width="1935"
            height="520"
            fill="url(#paint0_radial_273_400)"
            fill-opacity="0.5"
          />
          <defs>
            <radialGradient
              id="paint0_radial_273_400"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(953.75 328.218) rotate(89.9553) scale(320.253 1191.71)"
            >
              <stop stop-color="#40B084" stop-opacity="0.5" />
              <stop offset="1" stop-color="#172148" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
