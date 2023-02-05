
import About from "@/pages/farmer/Profile/About";
import Reviews from "@/pages/farmer/Profile/Reviews";
import Login from "../pages/auth/login/Login";
import Verification from "../pages/auth/login/Verification";
import Register from "../pages/auth/register/Register";

export default [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/temp",
    element: <Reviews />,
  },
];
