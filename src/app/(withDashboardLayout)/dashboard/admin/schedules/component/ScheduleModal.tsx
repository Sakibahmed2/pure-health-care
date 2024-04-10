"use client";

import PureForm from "@/components/Forms/PureForm";
import PureModal from "@/components/Shared/PureModal/PureModal";
import { Button } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const handleSubmit = (values: FieldValues) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PureModal open={open} setOpen={setOpen} title="Create schedule">
      <PureForm onSubmit={handleSubmit}>
        <Button type="submit">Submit</Button>
      </PureForm>
    </PureModal>
  );
};

export default ScheduleModal;
