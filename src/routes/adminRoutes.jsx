import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Login from "@/pages/admin/Login/Login";
import Terms from "@/pages/admin/terms/Term";

export default [
  {
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
