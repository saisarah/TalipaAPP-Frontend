import Role from "@/pages/admin/AccountManagement/Roles";
import User from "@/pages/admin/AccountManagement/Users";
import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import AdminProfile from "@/pages/admin/AdminProfile/Profile";
import ProfileUpdate from "@/pages/admin/AdminProfile/ProfileUpdate";
import ChatSupport from "@/pages/admin/Messages/ChatSupport";
import Commodities from "@/pages/admin/Commodities/Commodities";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Faq from "@/pages/admin/FAQ/Faq";
import Login from "@/pages/admin/Login/Login";
import Sales from "@/pages/admin/Sales/Sales";
import Transaction from "@/pages/admin/Sales/Transaction";
import ChangePassword from "@/pages/admin/Settings/ChangePassword";
import Terms from "@/pages/admin/terms/Term";
import Farmer from "@/pages/admin/UserManagement/Farmer/Farmer";
import FarmerProfile from "@/pages/admin/UserManagement/Farmer/Profile";
import FarmerGroup from "@/pages/admin/UserManagement/FarmerGroups/FarmerGroup";
import FarmerGroupsProfile from "@/pages/admin/UserManagement/FarmerGroups/Profile";
import VendorProfile from "@/pages/admin/UserManagement/Vendor/Profile";
import Vendor from "@/pages/admin/UserManagement/Vendor/Vendor";

import { useRoutes } from "react-router-dom";
import VerificationUser from "@/pages/admin/AccountManagement/VerificationUser";
import Messages from "@/pages/farmer/Messages/Messages";
import ThreadsPage from "@/pages/farmer/Messages/ThreadsPage";
import ConversationPage from "@/pages/farmer/Messages/ConversationPage";

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
        path: "vendors/profile",
        element: <VendorProfile />,
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
        path: "terms",
        element: <Terms />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
      {
        path: "profile/update",
        element: <ProfileUpdate />,
      },
      // {
      //   path: "chat-support",
      //   element: <ChatSupport />,
      // },
      {
        path: "messages",
        element: <Messages />,
        children: [
          {
            path: "",
            element: <ThreadsPage />
          },
          {
            path: ":id",
            element: <ConversationPage />,
          },
        ]
      },
      
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "verification-user",
        element: <VerificationUser />,
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
