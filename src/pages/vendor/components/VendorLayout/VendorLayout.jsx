import PageHeader from "@/components/PageHeader";
import { VendorContextProvider } from "@/contexts/VendorContext";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export const VendorLayout = () => {
  const location = useLocation();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [title, setTitle] = useState("TalipaAPP");

  useEffect(() => {
    setSideNavOpen(false);
  }, [location.pathname]);

  return (
    <VendorContextProvider value={{ title, setTitle }}>
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
    </VendorContextProvider>
  );
};
