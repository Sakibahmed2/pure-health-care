import { Box, Container, Typography } from "@mui/material";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const specialties = await res.json();
  console.log(specialties);

  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "start",
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={600}>
            Explore Treatment across specialist
          </Typography>
          <Typography component="p" color="gray">
            Find experience doctor across all specialist
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialist;
