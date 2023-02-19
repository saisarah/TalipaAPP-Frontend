import User from "@/pages/admin/AccountManagement/Users";
import Role from "@/pages/admin/AccountManagement/Roles";
import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import Commodities from "@/pages/admin/Commodities/Commodities";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Login from "@/pages/admin/Login/Login";
import FarmerGroup from "@/pages/admin/UserManagement/FarmerGroup";
import Farmer from "@/pages/admin/UserManagement/Farmer";
import Vendor from "@/pages/admin/UserManagement/Vendor";
import ChangePassword from "@/pages/admin/Settings/ChangePassword";

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
      {
        path: "commodities",
        element: <Commodities />,
      },
      {
        path: "farmer-groups",
        element: <FarmerGroup />,
      },
      {
        path: "farmers",
        element: <Farmer />,
      },
      {
        path: "vendors",
        element: <Vendor />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
];
