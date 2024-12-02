import React, { useState } from "react";
import Sidebar from "../components/moleculs/Sidebar";
import Header from "../components/moleculs/Header";
import DataTable from "../components/moleculs/table";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130, flex: 1 },
    { field: "lastName", headerName: "Last name", width: 130, flex: 1 },
    { field: "age", headerName: "Age", width: 130, flex: 1 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200, // Menyesuaikan lebar kolom
      align: "center", // Menyusun tombol di tengah
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Button
            onClick={() => {
              console.log(params.id);
            }}
            variant="outlined"
            startIcon={<DeleteIcon />}
            sx={{
              padding: "8px 16px",
              fontSize: "14px",
              color: "#d32f2f",
              borderColor: "#d32f2f",
              "&:hover": {
                backgroundColor: "#f8d7da",
              },
            }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              padding: "8px 16px",
              fontSize: "14px",
              backgroundColor: "#4caf50",
              "&:hover": {
                backgroundColor: "#388e3c",
              },
            }}
          >
            Send
          </Button>
        </div>
      ),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 78 },
    { id: 6, lastName: "Melisandre", firstName: "Ossas", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 14, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 15, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 16, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 17, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="grow px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
            Data Pengguna
          </h1>
          <DataTable rows={rows} columns={columns} />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
