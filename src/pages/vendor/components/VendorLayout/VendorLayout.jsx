import VendorPageHeader from "@/components/PageHeader/VendorPageHeader";
import { useAppContext } from "@/contexts/AppContext";
import { useVendorContext } from "@/contexts/VendorContext";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Header = ({ setSideNavOpen, title }) => {
  const { user } = useVendorContext()
  return (
    <div className="fixed top-0 right-0 left-0 z-10 grid h-16 flex-shrink-0 grid-cols-12 items-center bg-white px-4 shadow-sm lg:flex lg:justify-between lg:pl-[316px]">
      <div className="col-span-2 lg:hidden">
        <Button
          onClick={() => setSideNavOpen(true)}
          type="text"
          icon={<MenuUnfoldOutlined />}
        />
      </div>
      <div className="col-span-8 text-center lg:text-left">
        <span className="text-2xl font-bold">{title}</span>
      </div>
      <div className="hidden items-center gap-2 lg:flex">
        <div className="text-lg">Hi! {user.firstname}</div>
        <Avatar src={user.profile_picture} />
      </div>
    </div>
  );
};

export const VendorLayout = () => {
  const location = useLocation();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { viewport } = useAppContext();
  const { title } = useVendorContext();

  useEffect(() => {
    setSideNavOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative">
      <div className="flex min-h-screen lg:pl-[300px]">
        <Sidebar
          sideNavOpen={sideNavOpen || viewport.isLarge}
          setSideNavOpen={setSideNavOpen}
        />
        <div className="flex flex-grow flex-col overflow-x-auto pt-16">
          <Header setSideNavOpen={setSideNavOpen} title={title} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
