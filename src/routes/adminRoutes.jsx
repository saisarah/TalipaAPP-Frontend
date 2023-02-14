import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import ChatSupport from "@/pages/admin/ChatSupport/ChatSupport";
import Dashboard from "@/pages/admin/Dashboard/Dashboard";
import Login from "@/pages/admin/Login/Login";

export default [
  {
    element: <AdminLayout />,
    children: [
        {
            path: "",
            element: <Dashboard/>,
        },
        {
          path: "chat",
          element: <ChatSupport/>,
      },
        
        
    ]
  },
  {
    path: "login",
    element: <Login />,
  },
];
