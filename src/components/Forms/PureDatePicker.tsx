import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TDatePicker = {
  name: string;
  size?: "small" | "medium";
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
};

const PureDatePicker = ({
  name,
  size = "small",
  label,
  required,
  fullWidth = true,
  sx,
}: TDatePicker) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              timezone="system"
              disablePast
              onChange={(date) => onChange(date)}
              {...field}
              value={value || Date.now()}
              slotProps={{
                textField: {
                  required: required,
                  size: size,
                  fullWidth: fullWidth,
                  sx: { ...sx },
                  variant: "outlined",
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default PureDatePicker;
