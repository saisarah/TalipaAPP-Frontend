import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

export default function HomeLayout() {
  return (
    <div className="mx-auto min-h-screen max-w-md pb-16">
      <Outlet />
      <Navbar />
    </div>
  );
}
