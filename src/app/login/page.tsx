"use client";

import assets from "@/assets";
import PureForm from "@/components/Forms/PureForm";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
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
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export type TLoginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    const toastId = toast.loading("Loading .....");
    try {
      const res = await userLogin(values);

      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success(res?.message, { id: toastId });
        router.push("/");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

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
            <PureForm onSubmit={handleLogin}>
              <Grid container spacing={3} my={2}>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
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
                type="submit"
              >
                Login
              </Button>
              <Typography component={"p"}>
                Don&apos;t have an account ? {""}
                <Link href={"/register"} className="text-blue-500 underline">
                  Create an account
                </Link>
              </Typography>
            </PureForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
