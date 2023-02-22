
import ForgotPassword from "@/pages/auth/ForgotPassword/ForgotPassword";

import About from "@/pages/farmer/Profile/components/About";
import Reviews from "@/pages/farmer/Profile/components/Reviews";
import Login from "../pages/auth/login/Login";
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
  }
];
