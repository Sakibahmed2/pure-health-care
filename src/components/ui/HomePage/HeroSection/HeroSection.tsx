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
            top: "-120px",
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

      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              alt="doctor1"
              width={240}
              height={380}
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="doctor2"
              width={240}
              height={350}
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            mt: "220px",
            ml: "-50px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            alt="doctor3"
            width={220}
            height={220}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: "0",
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="stethoscope"
            width={180}
            height={180}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
