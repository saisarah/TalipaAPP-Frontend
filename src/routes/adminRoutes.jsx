import User from "@/pages/admin/AccountManagement/Users";
import Role from "@/pages/admin/AccountManagement/Roles";
import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import Commodities from "@/pages/admin/Commodities/Commodities";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Faq from "@/pages/admin/FAQ/Faq";
import Login from "@/pages/admin/Login/Login";
import FarmerGroup from "@/pages/admin/UserManagement/FarmerGroup";
import Farmer from "@/pages/admin/UserManagement/Farmer";
import Vendor from "@/pages/admin/UserManagement/Vendor";
import ChangePassword from "@/pages/admin/Settings/ChangePassword";
import ChatSupport from "@/pages/admin/ChatSupport/ChatSupport";
import Sales from "@/pages/admin/Sales/Sales";

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
        path: "chatSupport",
        element: <ChatSupport />,
      },
      {
        path: "sales",
        element: <Sales />,
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
      {
        path: "FAQs",
        element: <Faq />,
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
];
