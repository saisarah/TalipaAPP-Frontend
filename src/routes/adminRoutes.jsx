import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Login from "@/pages/admin/Login/Login";
import ManagementVendor from "@/pages/admin/UserManagement/ManagementVendor";

export default [
  {
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "vendor",
        element: <ManagementVendor />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
