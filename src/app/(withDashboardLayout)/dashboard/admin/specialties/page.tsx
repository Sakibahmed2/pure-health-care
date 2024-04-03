"use client";

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import SpecialistModal from "./component/SpecialtyModal";
import { useState } from "react";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialties.api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import PureLoading from "@/components/Loading/Loading";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  const handleDelete = (id: string) => {
    console.log(id);
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 300 },
    {
      field: "icon",
      headerName: "Icon",
      width: 300,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} width={30} height={30} alt="icon" />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 400,
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
        <Button onClick={() => setIsModalOpen(true)}>Create specialty</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>

      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <PureLoading />
      )}
    </Box>
  );
};

export default SpecialtiesPage;
