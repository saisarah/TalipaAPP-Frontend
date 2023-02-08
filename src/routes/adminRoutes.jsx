import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Login from "@/pages/admin/Login/Login";
import UserSettings from "@/pages/admin/Settings/Usersettings";

export default [
  {
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "usersettings",
        element: <UserSettings />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
