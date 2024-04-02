import PureFileUploader from "@/components/Forms/PureFileUploader";
import PureForm from "@/components/Forms/PureForm";
import PureInput from "@/components/Forms/PureInput";
import PureModal from "@/components/Shared/PureModal/PureModal";
import { Button, Grid, TextField } from "@mui/material";
import React, { Dispatch } from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

const handleFormSubmit = (values: FieldValues) => {
  console.log(values);
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  return (
    <PureModal open={open} setOpen={setOpen} title={"Create a new specialty"}>
      <PureForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PureInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PureFileUploader name={"file"} label={"Upload file"} />
          </Grid>
        </Grid>
        <Button
          sx={{
            mt: 1,
          }}
          type="submit"
        >
          Create
        </Button>
      </PureForm>
    </PureModal>
  );
};

export default SpecialistModal;
