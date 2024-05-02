"use client";

import { Box, Button } from "@mui/material";
import { useState } from "react";
import DoctorSchedulesModal from "./component/DoctorSchedulesModal";

const DoctorSchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create a schedules</Button>
      <DoctorSchedulesModal open={isModalOpen} setOpen={setIsModalOpen} />
    </Box>
  );
};

export default DoctorSchedulesPage;
