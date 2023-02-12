import User from "@/pages/admin/AccountManagement/user";
import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Login from "@/pages/admin/Login/Login";

export default [
  {
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
