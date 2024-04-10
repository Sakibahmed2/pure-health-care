"use client";

import { Button } from "@mui/material";
import ScheduleModal from "./component/ScheduleModal";
import { useState } from "react";

const SchedulesPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Create schedule</Button>
      <ScheduleModal open={open} setOpen={open} />
    </div>
  );
};

export default SchedulesPage;
