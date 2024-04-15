"use client";

import { Button } from "@mui/material";
import ScheduleModal from "./component/ScheduleModal";
import { useState } from "react";

const SchedulesPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Create schedule</Button>
      <ScheduleModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default SchedulesPage;
