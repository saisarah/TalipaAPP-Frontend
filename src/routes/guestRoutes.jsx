import ForgotPassword from "@/pages/auth/ForgotPassword/ForgotPassword";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/register/Register";

export default [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
];
