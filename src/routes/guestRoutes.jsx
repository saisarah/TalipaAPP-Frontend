
import ForgotPassword from "@/pages/auth/ForgotPassword/ForgotPassword";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Faq from "@/pages/help/Faq";
import Help from "@/pages/help/Help";
import Help1 from "@/pages/help/item/help1"
import help2 from "@/pages/help/item/help2"

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
  {
    path: "/help/item/help1",
    element: <Help1 />,
  },
  {
    path: "/help/item/help2",
    element: <help2 />,
  }
];
