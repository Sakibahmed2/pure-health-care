import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Healthier hearts
        </Typography>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Come from
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          color={"primary.main"}
        >
          Preventive care
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            width: "50%",
            mb: "20px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia
          corporis cumque porro laudantium ipsam natus! Reiciendis dolor
          praesentium dignissimos inventore .
        </Typography>
        <Button>Make appointment</Button>
        <Button
          variant="outlined"
          sx={{
            ml: "10px",
          }}
        >
          Contact us
        </Button>
      </Box>
      <Box>right</Box>
    </Container>
  );
};

export default HeroSection;
