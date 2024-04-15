"use client";

import PureDatePicker from "@/components/Forms/PureDatePicker";
import PureForm from "@/components/Forms/PureForm";
import PureModal from "@/components/Shared/PureModal/PureModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PureModal open={open} setOpen={setOpen} title="Create schedule">
      <PureForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <PureDatePicker name="startDate" sx={{ my: 2 }} />
          </Grid>
        </Grid>
        <Button type="submit">Submit</Button>
      </PureForm>
    </PureModal>
  );
};

export default ScheduleModal;
