"use client";

import { getUserInfo, isLoggedIn } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const userInfo = getUserInfo();
  const isUserExist = isLoggedIn();

  return (
    <Container>
      <Stack
        py={2}
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>
          PU
          <Box component="span" color="primary.main">
            RE
          </Box>{" "}
          health care
        </Typography>
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography component={Link} href="/">
            Consultation
          </Typography>
          <Typography component={Link} href="/">
            Health Plans
          </Typography>
          <Typography component={Link} href="/">
            Medicine
          </Typography>
          <Typography component={Link} href="/">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/">
            NGOs
          </Typography>
        </Stack>

        {isUserExist ? (
          <Button color="error">Logout</Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
