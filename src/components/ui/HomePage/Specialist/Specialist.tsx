import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();

  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatment across specialist
          </Typography>
          <Typography component="p" color="gray">
            Find experience doctor across all specialist
          </Typography>
        </Box>
        <Stack direction="row" gap={4} mt={5}>
          {specialties?.slice(0, 6)?.map((specialty: any) => (
            <Box
              key={specialty.id}
              sx={{
                flex: 1,
                width: "150px",
                bgcolor: "rgba(245, 245, 245, 1)",
                border: "2px solid rgba(250, 250, 250, 1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "30px 10px",
                "& img": {
                  width: "80px",
                  height: "80px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "2px solid rgba(36, 153, 239, 1)",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.5s",
                },
              }}
            >
              <Image src={specialty.icon} alt="icon" width={100} height={100} />
              <Box>
                <Typography component="p" fontWeight={600} mt={1}>
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button
          variant="outlined"
          sx={{
            mt: "20px",
          }}
        >
          View all
        </Button>
      </Box>
    </Container>
  );
};

export default Specialist;
