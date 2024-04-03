"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialistModal from "./component/SpecialtyModal";
import { useState } from "react";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialties.api";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  console.log(data);

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button onClick={() => setIsModalOpen(true)}>Create specialty</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>

      <Box>
        <h1>Display </h1>
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
