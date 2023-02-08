import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Faq from "@/pages/admin/FAQ/Faq";
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
        path: "faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];
