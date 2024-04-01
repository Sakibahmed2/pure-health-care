"use client";

import assets from "@/assets";
import PureForm from "@/components/Forms/PureForm";
import PureInput from "@/components/Forms/PureInput";
import { registerPatient } from "@/services/actions/registerPatient";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { modifyPayload } from "@/utils/modifyPayload";
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
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type TPatientData = {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
};

type TPatientRegisterFromData = {
  password: string;
  patient: TPatientData;
};

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please provide a valid email "),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid contact number"),
  address: z.string().min(1, "Please enter your address"),
});

export const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 character"),
  patient: patientValidationSchema,
});

const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const toastId = toast.loading("Creating.....");
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res.success) {
        toast.success(res?.message, { id: toastId });

        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });

        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/dashboard");
        }
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
                Patient register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <PureForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={3} my={2}>
                <Grid item md={12}>
                  <PureInput
                    label="Name"
                    fullWidth={true}
                    name="patient.name"
                  />
                </Grid>
                <Grid item md={6}>
                  <PureInput
                    label="Email"
                    fullWidth={true}
                    name="patient.email"
                  />
                </Grid>
                <Grid item md={6}>
                  <PureInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <PureInput
                    label="Contact No"
                    type="tel"
                    fullWidth={true}
                    name="patient.contactNumber"
                  />
                </Grid>
                <Grid item md={6}>
                  <PureInput
                    label="Address"
                    fullWidth={true}
                    name="patient.address"
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth={true}
                sx={{
                  my: 2,
                }}
                type="submit"
              >
                Register
              </Button>
              <Typography component={"p"}>
                Do you have an account ?{" "}
                <Link href={"/login"} className="text-blue-500 underline">
                  Login
                </Link>
              </Typography>
            </PureForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
