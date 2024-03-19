import { Box, Container, Stack, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Container>
      <Stack py={2} direction={"row"} justifyContent="space-between">
        <Typography variant="h5" component="h1" fontWeight={600}>
          PU
          <Box component="span" color="primary.main">
            RE
          </Box>{" "}
          health care
        </Typography>
      </Stack>
    </Container>
  );
};

export default Navbar;
