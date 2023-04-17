import ForgotPassword from "@/pages/auth/ForgotPassword/ForgotPassword";
import Faq from "@/pages/help/Faq";
import Help from "@/pages/help/Help";
import Help1 from "@/pages/help/item/Help1";
import Help2 from "@/pages/help/item/Help2";
import Help3 from "@/pages/help/item/Help3";
import Help4 from "@/pages/help/item/Help4";
import Help5 from "@/pages/help/item/Help5";
import Help6 from "@/pages/help/item/Help6";
import Help7 from "@/pages/help/item/Help7";
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
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/help/item/Help1",
    element: <Help1 />,
  },
  {
    path: "/help/item/Help2",
    element: <Help2 />,
  },
  {
    path: "/help/item/Help3",
    element: <Help3 />,
  },
  {
    path: "/help/item/Help4",
    element: <Help4 />,
  },
  {
    path: "/help/item/Help5",
    element: <Help5 />,
  },
  {
    path: "/help/item/Help6",
    element: <Help6 />,
  },
  {
    path: "/help/item/Help7",
    element: <Help7 />,
  },
];
