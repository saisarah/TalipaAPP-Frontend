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
];
