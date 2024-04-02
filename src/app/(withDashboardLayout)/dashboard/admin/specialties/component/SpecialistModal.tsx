import PureModal from "@/components/Shared/PureModal/PureModal";
import { TextField } from "@mui/material";
import React, { Dispatch } from "react";

type TProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  return (
    <PureModal open={open} setOpen={setOpen} title={"Create specialist"}>
      <TextField size="small" />
    </PureModal>
  );
};

export default SpecialistModal;
