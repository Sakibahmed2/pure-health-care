"use client";

import PureFullScreenModal from "@/components/Shared/PureModal/PureFullScreenModal";
import PureModal from "@/components/Shared/PureModal/PureModal";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorModal from "./component/DoctorModal";

const AdminDoctorPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button onClick={() => setOpen((prev) => (prev = true))}>
          Create new doctor
        </Button>
        <DoctorModal open={open} setOpen={setOpen} />
        <TextField size="small" placeholder="Search doctor" />
      </Stack>
    </Box>
  );
};

export default AdminDoctorPage;
