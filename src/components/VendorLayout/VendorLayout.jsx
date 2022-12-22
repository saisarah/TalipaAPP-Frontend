import UserFilled from "@/icons/heroicons/UserFilled";
import useCurrentUserQuery from "@/query/queries/useCurrentUserQuery";
import {
  BellFilled,
  HomeFilled,
  MenuUnfoldOutlined,
  MessageFilled,
  QuestionCircleFilled,
  SettingFilled,
} from "@ant-design/icons";
import { Avatar, Button, Divider } from "antd";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../PageHeader";

const VendorLayoutContext = createContext();

export const VendorLayout = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const {data:user} = useCurrentUserQuery()

  return (
    <VendorLayoutContext.Provider value={{}}>
      <div className="relative mx-auto min-h-screen max-w-md">
        <PageHeader
          left={<Button onClick={() => setSideNavOpen(true)} type="text" icon={<MenuUnfoldOutlined />} />}
          title="Home"
        />
        <Outlet />

        <div className={`${sideNavOpen ? "" : "hidden"}`}>
          <div onClick={() => setSideNavOpen(false)} className="absolute inset-0 z-20 bg-black/50"></div>
          <div className="w-25% absolute left-0 top-0 bottom-0 z-[21] min-w-[300px] bg-white py-8">
            <div className="flex items-center gap-2 px-4">
              <Avatar size="large" />
              <div className="">
                <div className="font-semibold leading-4">
                  {user.fullname}
                </div>
                <div className="text-xs">Vendor</div>
              </div>
            </div>
            <Divider />

            <div className="flex flex-col pr-4">
              <div className="flex items-center gap-2 rounded-r-full bg-primary py-2 pl-8 text-white">
                <HomeFilled />
                Home
              </div>

              <div className="flex items-center gap-2 rounded-r-full py-2 pl-8">
                <BellFilled />
                Notifications
              </div>

              <div className="flex items-center gap-2 rounded-r-full py-2 pl-8">
                <MessageFilled />
                Messages
              </div>

              <div className="flex items-center gap-2 rounded-r-full py-2 pl-8">
                <UserFilled />
                Profile
              </div>

              <div className="flex items-center gap-2 rounded-r-full py-2 pl-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[14px] w-[14px]"
                >
                  <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
                </svg>
                Orders
              </div>

              <Divider />

              <div className="flex items-center gap-2 rounded-r-full py-2 pl-8">
                <SettingFilled />
                Settings
              </div>

              <div className="flex items-center gap-2 rounded-r-full py-2 pl-8">
                <QuestionCircleFilled />
                Help
              </div>

              <Divider />

              <div className="flex items-center gap-2 rounded-r-full py-2 pl-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[14px] w-[14px]"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </VendorLayoutContext.Provider>
  );
};
