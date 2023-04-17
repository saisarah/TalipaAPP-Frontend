import ForgotPassword from "@/pages/auth/ForgotPassword/ForgotPassword";
import Faq from "@/pages/help/Faq";
import Help from "@/pages/help/Help";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/register/Register";
import help1 from "@/pages/help/item/help1";
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
    path: "/help1",
    element: <help1 />,
  },  
  {
    path: "/item/help2",
    element: <help2 />,
  },  
];
