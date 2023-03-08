import Role from "@/pages/admin/AccountManagement/Roles";
import User from "@/pages/admin/AccountManagement/Users";
import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import AdminProfile from "@/pages/admin/AdminProfile/Profile";
import Commodities from "@/pages/admin/Commodities/Commodities";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Faq from "@/pages/admin/FAQ/Faq";
import Login from "@/pages/admin/Login/Login";
import ChangePassword from "@/pages/admin/Settings/ChangePassword";
import Farmer from "@/pages/admin/UserManagement/Farmer/Farmer";
import FarmerProfile from "@/pages/admin/UserManagement/Farmer/Profile";
import FarmerGroup from "@/pages/admin/UserManagement/FarmerGroups/FarmerGroup";
import FarmerGroupsProfile from "@/pages/admin/UserManagement/FarmerGroups/Profile";
import Profile1 from "@/pages/admin/UserManagement/Vendor/Profile";
import Vendor from "@/pages/admin/UserManagement/Vendor/Vendor";
import { useRoutes } from "react-router-dom";

const routes = [
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
        path: "farmer-groups/profile",
        element: <FarmerGroupsProfile />,
      },
      {
        path: "farmers",
        element: <Farmer />,
      },
      {
        path: "farmers/profile",
        element: <FarmerProfile />,
      },
      {
        path: "vendors",
        element: <Vendor />,
      },
      {
        path: "vendor/profile1",
        element: <Profile1 />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "FAQs",
        element: <Faq />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
    ],
  },
  
  {
    path: "login",
    element: <Login />,
  },
];

export default function AdminRoutes() {
  return useRoutes(routes);
}
