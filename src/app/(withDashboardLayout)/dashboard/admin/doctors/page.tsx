"use client";

import PureFullScreenModal from "@/components/Shared/PureModal/PureFullScreenModal";
import PureModal from "@/components/Shared/PureModal/PureModal";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorModal from "./component/DoctorModal";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import PureLoading from "@/components/Loading/Loading";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";

const AdminDoctorPage = () => {
  const [open, setOpen] = useState(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  console.log(searchTerm);

  query["searchTerm"] = searchTerm;

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });

  const handleDelete = async (id: string) => {
    try {
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
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Button
            onClick={() => handleDelete(row.id)}
            variant="outlined"
            color="warning"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
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
