import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TFormInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
};

const PureInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
}: TFormInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
        />
      )}
    />
  );
};

export default PureInput;
