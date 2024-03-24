import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        bgcolor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75% )",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          Our top rated doctors
        </Typography>
        <Typography width={"50%"} sx={{ margin: "0 auto", mt: "10px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          cumque facere dolore voluptatibus quasi expedita error ex quisquam
          delectus quibusdam.
        </Typography>
      </Box>

      <Container
        sx={{
          margin: "30px auto",
        }}
      >
        <Grid container spacing={2}>
          {doctors?.map((doctor: any) => (
            <Grid item key={doctor.id} md={4}>
              <Card>
                <Box>
                  <Image
                    src={doctor.profilePhoto}
                    width={500}
                    height={500}
                    alt="doctor"
                  />
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontWeight={600}
                  >
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.qualification} - {doctor.designation}
                  </Typography>
                  <Box mt={1}>
                    <Typography variant="body2" color="text.secondary">
                      <LocationOnIcon /> {doctor.address}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "center",
                    gap: 3,
                    pb: 2,
                  }}
                >
                  <Button>Book now</Button>
                  <Button variant="outlined">View profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box textAlign={"center"} my={4}>
          <Button variant="outlined">View all</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
