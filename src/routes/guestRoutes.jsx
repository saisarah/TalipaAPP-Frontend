import Login from "../pages/login/Login";
import Verification from "../pages/login/Verification";

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
    element: <div>Register</div>,
  },
];
