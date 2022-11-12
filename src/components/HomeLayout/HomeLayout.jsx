import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

export default function HomeLayout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col relative">
      <Header />

      <div className="flex-grow">
        <Outlet />
      </div>

      <Navbar />
    </div>
  );
}
