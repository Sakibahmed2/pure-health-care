"use client";

import PureLoading from "@/components/Loading/Loading";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/redux/api/doctorApi";
import { useDebounced } from "@/redux/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import DoctorModal from "./component/DoctorModal";
import { toast } from "sonner";
import CreateIcon from "@mui/icons-material/Create";
import Link from "next/link";

const AdminDoctorPage = () => {
  const [open, setOpen] = useState(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debounced = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debounced) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const [deleteDoctor] = useDeleteDoctorMutation();

  const handleDelete = async (id: string) => {
    console.log(id);
    try {
      const res = await deleteDoctor(id).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Doctor deleted successfully!!!");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const doctors = data?.doctors;
  const meta = data?.meta;

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "ContactNo", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "apointmentFee", headerName: "Appointment fee", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Stack direction={"row"} spacing={2}>
            <Button
              onClick={() => handleDelete(row.id)}
              variant="outlined"
              color="warning"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button
              component={Link}
              href={`/dashboard/admin/doctors/edit/${row.id}`}
              variant="outlined"
              color="secondary"
              startIcon={<CreateIcon />}
            >
              Update
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button onClick={() => setOpen((prev) => (prev = true))}>
          Create new doctor
        </Button>
        <DoctorModal open={open} setOpen={setOpen} />
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search doctor"
        />
      </Stack>

      <Box>
        {!isLoading ? (
          <Box my={2}>
            <DataGrid rows={doctors} columns={columns} />
          </Box>
        ) : (
          <PureLoading />
        )}
      </Box>
    </Box>
  );
};

export default AdminDoctorPage;
