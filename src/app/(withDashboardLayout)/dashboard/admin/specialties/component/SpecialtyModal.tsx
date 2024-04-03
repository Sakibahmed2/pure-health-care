import PureFileUploader from "@/components/Forms/PureFileUploader";
import PureForm from "@/components/Forms/PureForm";
import PureInput from "@/components/Forms/PureInput";
import PureModal from "@/components/Shared/PureModal/PureModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialties.api";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";

import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      if (res?.id) {
        toast.success("Specialty created successfully!!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <PureModal open={open} setOpen={setOpen} title="Create A New Specialty">
      <PureForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PureInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PureFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </PureForm>
    </PureModal>
  );
};

export default SpecialtyModal;
