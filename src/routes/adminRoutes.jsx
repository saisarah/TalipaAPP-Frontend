import User from "@/pages/admin/AccountManagement/Users";
import Role from "@/pages/admin/AccountManagement/Roles";
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
        path: "users",
        element: <User />,
      },
      {
        path: "roles",
        element: <Role />,
      },
    ],
  },
  
  {
    path: "login",
    element: <Login />,
  },
];
