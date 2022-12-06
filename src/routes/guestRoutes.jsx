import Login from "../pages/login/Login";
import Verification from "../pages/login/Verification";
import Register from "../pages/register/Register";

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
