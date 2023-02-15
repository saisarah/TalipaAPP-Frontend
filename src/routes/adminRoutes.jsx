import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Login from "@/pages/admin/Login/Login";
import Farmer from "@/pages/admin/UserManagement/Farmer";

export default [
  {
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "farmers",
        element: <Farmer />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
