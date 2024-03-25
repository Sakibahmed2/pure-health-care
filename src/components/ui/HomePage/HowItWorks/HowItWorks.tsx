import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import howItWorks from "@/assets/how-it-works-img.png";
import Image from "next/image";
import assets from "@/assets";
import doctorIcon from "@/assets/icons/doctor-icon.png";
import searchIcon from "@/assets/icons/search-icon.png";
import charityIcon from "@/assets/icons/charity-icon.png";
import appointmentIcon from "@/assets/icons/appointment-icon.png";

const HowItWorks = () => {
  return (
    <Container
      sx={{
        my: 20,
      }}
    >
      <Box textAlign={"start"}>
        <Typography color="primary.main" variant="h6" component="h1">
          How it works
        </Typography>
        <Typography variant="h4" component="h1" fontWeight={700}>
          4 Easy steps to get your solutions
        </Typography>
        <Typography component="p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          harum!
        </Typography>
      </Box>

      <Stack
        direction={{
          md: "row",
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={4}
      >
        <Box>
          <Image
            src={howItWorks}
            width={1100}
            height={1100}
            alt="how it works"
          />
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                border={"2px solid gray"}
                width={300}
                padding={3}
                borderRadius={2}
              >
                <Image
                  src={searchIcon}
                  height={50}
                  width={50}
                  alt="doctor icon"
                />
                <Typography variant="h5" component="h1" mt={2} mb={1}>
                  Search doctor
                </Typography>
                <Typography component="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, harum!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                border={"2px solid gray"}
                width={300}
                padding={3}
                borderRadius={2}
              >
                <Image
                  src={searchIcon}
                  height={50}
                  width={50}
                  alt="doctor icon"
                />
                <Typography variant="h5" component="h1" mt={2} mb={1}>
                  Search doctor
                </Typography>
                <Typography component="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, harum!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                border={"2px solid gray"}
                width={300}
                padding={3}
                borderRadius={2}
              >
                <Image
                  src={searchIcon}
                  height={50}
                  width={50}
                  alt="doctor icon"
                />
                <Typography variant="h5" component="h1" mt={2} mb={1}>
                  Search doctor
                </Typography>
                <Typography component="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, harum!
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                border={"2px solid gray"}
                width={300}
                padding={3}
                borderRadius={2}
              >
                <Image
                  src={searchIcon}
                  height={50}
                  width={50}
                  alt="doctor icon"
                />
                <Typography variant="h5" component="h1" mt={2} mb={1}>
                  Search doctor
                </Typography>
                <Typography component="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, harum!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(42,196,155,1) 0%, rgba(1,197,228,1) 84%, rgba(0,212,255,1) 100%)",
          padding: "40px 60px",
          borderRadius: 5,
          mt: 5,
        }}
      >
        <Stack
          color={"white"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography variant="h2" component={"p"}>
              180+
            </Typography>
            <Typography variant="h5" component={"p"}>
              Expert doctors
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2" component={"p"}>
              26+
            </Typography>
            <Typography variant="h5" component={"p"}>
              Expert services
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2" component={"p"}>
              10k+
            </Typography>
            <Typography variant="h5" component={"p"}>
              Happy patients
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2" component={"p"}>
              150+
            </Typography>
            <Typography variant="h5" component={"p"}>
              Awards winners
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default HowItWorks;
