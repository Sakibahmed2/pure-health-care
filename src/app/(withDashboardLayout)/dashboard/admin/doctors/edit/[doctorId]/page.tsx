"use client";

import { Box } from "@mui/material";

type TParams = {
  params: {
    doctorId: string;
  };
};

const DoctorUpdatePage = ({ params }: TParams) => {
  console.log(params.doctorId);
  return <Box>DoctorUpdatePage</Box>;
};

export default DoctorUpdatePage;
