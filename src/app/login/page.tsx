import assets from "@/assets";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 2,
            p: 6,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Login Pure health care
              </Typography>
            </Box>
          </Stack>

          <Box>
            <form>
              <Grid container spacing={3} my={2}>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography
                textAlign={"end"}
                component={"p"}
                color={"blue"}
                mb={1}
              >
                Forgot password?
              </Typography>
              <Button
                fullWidth={true}
                sx={{
                  my: 2,
                }}
              >
                Login
              </Button>
              <Typography component={"p"}>
                Don&apos;t have an account ? {""}
                <Link href={"/register"} className="text-blue-500 underline">
                  Create an account
                </Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
