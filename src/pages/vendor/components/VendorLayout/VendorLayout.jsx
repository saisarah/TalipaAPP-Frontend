import VendorPageHeader from "@/components/PageHeader/VendorPageHeader";
import { useAppContext } from "@/contexts/AppContext";
import { useVendorContext } from "@/contexts/VendorContext";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export const VendorLayout = () => {
  const location = useLocation();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { viewport } = useAppContext();
  const { title } = useVendorContext();

  useEffect(() => {
    setSideNavOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      <div className="lg:pl-[300px]">
        <Sidebar sideNavOpen={sideNavOpen || viewport.isLarge} setSideNavOpen={setSideNavOpen} />
        <div className="overflow-x-auto flex-grow lg:pt-16">
          <VendorPageHeader
            left={
              <Button
                onClick={() => setSideNavOpen(true)}
                type="text"
                icon={<MenuUnfoldOutlined />}
              />
            }
            title={title}
          />

          <Outlet />
        </div>
      </div>
    </div>
  );
};
