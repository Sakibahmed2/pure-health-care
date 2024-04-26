"use client";

import assets from "@/assets";
import PureForm from "@/components/Forms/PureForm";
import PureInput from "@/components/Forms/PureInput";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export type TLoginFormData = {
  email: string;
  password: string;
};

export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Must be at least 6 character"),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (values: FieldValues) => {
    const toastId = toast.loading("Loading .....");
    try {
      const res = await userLogin(values);
      console.log(res);

      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success(res?.message, { id: toastId });
        router.push("/dashboard");
      } else {
        setError(res?.message);
        toast.error(res?.message, { id: toastId });
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

          {error && (
            <Box>
              <Typography
                sx={{
                  bgcolor: "#ff8080",
                  padding: 1,
                  border: "2px solid red",
                  borderRadius: 1,
                  color: "white",
                  mt: 1,
                }}
              >
                {error}
              </Typography>
            </Box>
          )}

          <Box>
            <PureForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={3} my={2}>
                <Grid item md={6}>
                  <PureInput label="Email" fullWidth={true} name="email" />
                </Grid>
                <Grid item md={6}>
                  <PureInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
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
