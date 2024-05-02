"use client";

import PureModal from "@/components/Shared/PureModal/PureModal";
import { useGetAllSchedulesQuery } from "@/redux/api/ScheduleApi";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { Dispatch, SetStateAction, useState } from "react";
import MultipleSelectFieldChip from "./MultipleSelectFieldChip";

type TModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DoctorSchedulesModal = ({ open, setOpen }: TModalProps) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);

  const query: Record<string, any> = {};

  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();

    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data, isLoading } = useGetAllSchedulesQuery(query);
  const schedules = data?.schedules;

  console.log(schedules);

  return (
    <PureModal open={open} setOpen={setOpen} title="Create doctor schedules">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Controlled picker"
          value={dayjs(selectedDate)}
          onChange={(newValue) =>
            setSelectedDate(dayjs(newValue).toISOString())
          }
          sx={{ width: "100%" }}
        />
      </LocalizationProvider>
      <MultipleSelectFieldChip schedules={schedules} />
    </PureModal>
  );
};

export default DoctorSchedulesModal;
