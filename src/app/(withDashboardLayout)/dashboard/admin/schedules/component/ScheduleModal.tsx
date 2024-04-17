"use client";

import PureDatePicker from "@/components/Forms/PureDatePicker";
import PureForm from "@/components/Forms/PureForm";
import PureTimePicker from "@/components/Forms/PureTimePicker";
import PureModal from "@/components/Shared/PureModal/PureModal";
import { useCreateScheduleMutation } from "@/redux/api/ScheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values?.startDate);
    values.endDate = dateFormatter(values?.endDate);

    values.startTime = timeFormatter(values?.startTime);
    values.endTime = timeFormatter(values?.endTime);

    try {
      const res: any = await createSchedule(values);
      if (res?.data?.length) {
        toast.success("Schedules successfully created");
        setOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PureModal open={open} setOpen={setOpen} title="Create schedule">
      <PureForm onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          sx={{
            width: "400px",
          }}
        >
          {/* <Typography component={"span"} mx={"auto"} mt={1}>
            Select date
          </Typography> */}
          <Grid item md={12}>
            <PureDatePicker name="startDate" label="Start date" />
          </Grid>
          <Grid item md={12}>
            <PureDatePicker name="endDate" label="End date" />
          </Grid>

          {/* <Typography component={"span"} mx={"auto"} mt={1}>
            <Chip label="Select time" size="medium" color="warning" />
          </Typography> */}

          <Grid item md={6}>
            <PureTimePicker name="startTime" label="Start time" />
          </Grid>
          <Grid item md={6}>
            <PureTimePicker name="endTime" label="End time" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Submit
        </Button>
      </PureForm>
    </PureModal>
  );
};

export default ScheduleModal;
