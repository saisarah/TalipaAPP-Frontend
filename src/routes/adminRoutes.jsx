import AdminLayout from "@/pages/admin/AdminLayout/AdminLayout";
import Commodities from "@/pages/admin/Commodities/Commodities";
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
          path: "commodities",
          element: <Commodities/>,
      },
        
        
    ]
  },
  {
    path: "login",
    element: <Login />,
  },
];
