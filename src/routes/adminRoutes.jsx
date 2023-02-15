import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Login from "@/pages/admin/Login/Login";
import FarmerGroup from "@/pages/admin/UserManagement/FarmerGroup";

export default [
  {
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "farmers-groups",
        element: <FarmerGroup />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
