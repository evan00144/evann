import { Container, Grid } from "@mui/material";
import CardItem from "./CardItem";

export default function SectionThreePage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: "5rem 0",
      }}
    >
      <Grid container spacing={4.5}>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Grid item key={i} sm={4}>
              <CardItem
                title="Job Portal"
                bg={` ${
                  i % 2 !== 0
                    ? "linear-gradient(180deg, rgba(5,7,15,.2) 20%, rgba(157,142,254,.2) 100%"
                    : "linear-gradient(180deg, rgba(5,7,15,.2) 20%, rgba(64,176,132,.2) 100%"
                });
                `}
                content=" lorem ipsum dolor sit amet consectetur. Risus tincidunt gravida habitant nunc enim nunc ultrices volutpat. Volutpat eget convallis tincidunt in viverra. Turpis magna vestibulum tempus tellus. Diam laoreet tellus orci mattis eget odio aliquam."
                // img="/logo-dark.svg"
                img="/img/jobportal/thumbnail.png"
                index={i}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
