"use client";

import { Box, Button, IconButton } from "@mui/material";
import ScheduleModal from "./component/ScheduleModal";
import { useEffect, useState } from "react";
import { useGetAllSchedulesQuery } from "@/redux/api/ScheduleApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import PureLoading from "@/components/Loading/Loading";
import Image from "next/image";
import { TSchedule } from "@/types/schedules";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

const SchedulesPage = () => {
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSchedulesQuery({});

  const schedules = data?.schedules;
  const meta = data?.meta;

  useEffect(() => {
    const updateData = schedules?.map((schedule: TSchedule) => {
      return {
        id: schedule?.id,
        startDate: dateFormatter(schedule.startDate),
        endDate: dateFormatter(schedule.endDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton aria-label="delete">
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <IconButton aria-label="update">
              <CreateIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Create schedule</Button>
      <ScheduleModal open={open} setOpen={setOpen} />

      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={allSchedule ?? []}
            columns={columns}
            hideFooter={true}
          />
        </Box>
      ) : (
        <PureLoading />
      )}
    </div>
  );
};

export default SchedulesPage;
