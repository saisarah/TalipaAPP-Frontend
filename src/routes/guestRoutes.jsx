import ForgotPassword from "@/pages/auth/ForgotPassword/ForgotPassword";
import LandingPage from "@/pages/LandingPage/LandingPage";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/register/Register";

export default [
  {
    path: "/",
    element: <LandingPage />
  },
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
