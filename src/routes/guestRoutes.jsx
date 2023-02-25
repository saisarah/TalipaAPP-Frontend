import ForgotPassword from "@/pages/auth/ForgotPassword/ForgotPassword";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/register/Register";
import Faq from "@/pages/help/Faq";
import Help from "@/pages/help/Help";

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
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/help",
    element: <Help />,
  },
];
