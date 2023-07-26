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
          height: "fit-content",
          width: "fit-content",
          top: "-250px",
          left: "-150px",
          pointerEvents: "auto",
          // cursor: "grab",
        }}
        scene="https://prod.spline.design/7AZswQpLlWuQZEkv/scene.splinecode"
      />
    </div>
  );
}
