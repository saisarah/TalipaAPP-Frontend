import { useLogoutModal } from "@/hooks/useLogoutModal";
import UserFilled from "@/icons/heroicons/UserFilled";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import {
  BellFilled,
  HomeFilled,
  MessageFilled,
  QuestionCircleFilled,
  SettingFilled,
  WalletFilled,
} from "@ant-design/icons";
import { Avatar, Divider } from "antd";
import { NavLink } from "react-router-dom";

const SideBarLink = ({ icon, label, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "bg-primary text-slate-100 hover:text-white" : ""}
        flex items-center gap-2 rounded-r-full py-2 pl-8
        `
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default function Sidebar({ sideNavOpen, setSideNavOpen }) {
  const { data: user } = useCurrentUserQuery();
  const { confirmLogout } = useLogoutModal();

  return (
    <>
      <div
        onClick={() => setSideNavOpen(false)}
        className={`${
          sideNavOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } absolute inset-0 z-30 bg-black/50 transition-opacity duration-500`}
      />
      <div
        className={`${
          sideNavOpen ? "animate-slide-in" : "animate-slide-out"
        } w-25% fixed top-0 bottom-0 z-30 h-screen  min-w-[300px] overflow-y-auto bg-white py-8`}
      >
        <div className="flex items-center gap-2 px-4">
          <Avatar size="large" src={user.profile_picture} />
          <div className="">
            <div className="font-semibold leading-4">{user.fullname}</div>
            <div className="text-xs">Vendor</div>
          </div>
        </div>
        <Divider />

        <div className="flex flex-col pr-4">
          <SideBarLink to="/" icon={<HomeFilled />} label="Home" isActive />
          <SideBarLink
            to="/notifications"
            icon={<BellFilled />}
            label="Notifications"
          />
          <SideBarLink
            to="/messages"
            icon={<MessageFilled />}
            label="Messages"
          />
          <SideBarLink to="/profile" icon={<UserFilled />} label="Profile" />

          <SideBarLink to="/wallet" icon={<WalletFilled />} label="Wallet" />

          <SideBarLink
            to="/orders"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[14px] w-[14px]"
              >
                <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
              </svg>
            }
            label="Orders"
          />

          <Divider />

          <SideBarLink
            to="/settings"
            icon={<SettingFilled />}
            label="Settings"
          />

          <SideBarLink
            to="/help"
            icon={<QuestionCircleFilled />}
            label="Help"
          />

          <Divider />

          <button
            onClick={confirmLogout}
            className="flex items-center gap-2 rounded-r-full py-2 pl-8"
          >
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
          </button>
        </div>
      </div>
    </>
  );
}
