import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex divide-x-0 bg-red-500 hover:bg-green-500">Home</div>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <div>Register</div>,
  }, 
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
