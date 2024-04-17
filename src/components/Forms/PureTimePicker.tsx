import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { SxProps } from "@mui/material";

type TTimePickerProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
};

const PureTimePicker = ({
  name,
  label,
  size = "small",
  placeholder,
  required,
  fullWidth = true,
  sx,
}: TTimePickerProps) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      name={name}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              {...field}
              label={label}
              value={value || Date.now()}
              onChange={(time) => onChange(time)}
              timezone="system"
              slotProps={{
                textField: {
                  required: required,
                  size: size,
                  sx: { ...sx },
                  variant: "outlined",
                  fullWidth: fullWidth,
                  error: isError,
                  helperText: isError
                    ? (formState.errors[name]?.message as string)
                    : "",
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default PureTimePicker;
