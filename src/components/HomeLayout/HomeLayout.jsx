import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

export default function HomeLayout() {
  return (
    <div className="max-w-md mx-auto min-h-screen pb-16">
      <Outlet />
      <Navbar />
    </div>
  );
}
