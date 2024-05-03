"use client";

import PureLoading from "@/components/Loading/Loading";
import { useGetAllDoctorSchedulesQuery } from "@/redux/api/doctorScheduleApi";
import { TSchedule } from "@/types/schedules";
import { dateFormatter } from "@/utils/dateFormatter";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import DoctorSchedulesModal from "./component/DoctorSchedulesModal";

const DoctorSchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllDoctorSchedulesQuery({});

  const schedules = data?.doctorSchedules;
  const meta = data?.meta;

  useEffect(() => {
    const updateData = schedules?.map((schedule: any, index) => {
      return {
        sl: index + 1,
        id: schedule?.doctorId,
        startDate: dateFormatter(schedule?.schedule?.startDate),

        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL" },
    { field: "startDate", headerName: "Start Date", flex: 1 },
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
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create a schedules</Button>
      <DoctorSchedulesModal open={isModalOpen} setOpen={setIsModalOpen} />

      <Box sx={{ mb: 5 }}></Box>

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
    </Box>
  );
};

export default DoctorSchedulesPage;
