import PageHeader from "@/components/PageHeader";
import { useVendorContext } from "@/contexts/VendorContext";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export const VendorLayout = () => {
  const location = useLocation();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { title } = useVendorContext();

  useEffect(() => {
    setSideNavOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-size relative">
      <PageHeader
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

      <Sidebar sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
    </div>
  );
};
