import logo from "@/assets/logo-text.svg";
import { useAppContext } from "@/contexts/AppContext";
import { useFarmerContext } from "@/contexts/FarmerContext";
import { useLogoutModal } from "@/hooks/useLogoutModal";
import {
  LogoutOutlined,
  QuestionCircleFilled,
  SettingFilled,
} from "@ant-design/icons";
import { Avatar, Button, Popover } from "antd";
import { useRef } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ children, ...props }) => {
  const activeClassName = "font-bold text-primary border-b-2 border-primary";
  const className = "text-base text-slate-500";
  return (
    <RouterNavLink
      className={({ isActive }) =>
        `${isActive ? activeClassName : ""} ${className}`
      }
      {...props}
    >
      {children}
    </RouterNavLink>
  );
};

const FarmerAvatar = () => {
  const { user } = useFarmerContext();
  const { confirmLogout } = useLogoutModal();
  const avatar = useRef()

  const handleClick = ({ target }) => {
    avatar.current.click()
  }

  return (
    <Popover
      placement="bottomRight"
      content={
        <div className="min-w-[200px]" onClick={handleClick}>
          <div className="flex items-center gap-2 border-b pb-2">
            <Avatar src={user.profile_picture} />
            <div className="font-bold">{user.fullname}</div>
          </div>
          <Link to="/farmer/profile">See profile</Link>

          <div className="mt-4">
            <Link
              to="/farmer/settings"
              className="-mx-4 flex items-center gap-2 py-1 px-4 font-bold text-inherit hover:bg-slate-200 hover:text-inherit"
            >
              <span className="rounded-full bg-slate-200 p-2 leading-[0]">
                <SettingFilled />
              </span>
              <span>Settings</span>
            </Link>
            <Link
              to="/farmer/help"
              className="-mx-4 flex items-center gap-2 py-1 px-4 font-bold text-inherit hover:bg-slate-200 hover:text-inherit"
            >
              <span className="rounded-full bg-slate-200 p-2 leading-[0]">
                <QuestionCircleFilled />
              </span>
              <span>Help</span>
            </Link>
            <Link
              onClick={() => {
                confirmLogout();
              }}
              className="-mx-4 flex items-center gap-2 py-1 px-4 font-bold text-inherit hover:bg-slate-200 hover:text-inherit"
            >
              <span className="rounded-full bg-slate-200 p-2 leading-[0]">
                <LogoutOutlined />
              </span>
              <span>Logout</span>
            </Link>
          </div>
        </div>
      }
      trigger="click"
    >
      <Avatar ref={avatar} src={user.profile_picture} />
    </Popover>
  );
};

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex h-16 items-center justify-center bg-white px-4 shadow-md">
      <nav className="container flex max-w-screen-lg items-center gap-12 ">
        <div>
          <img src={logo} className="h-12" />
        </div>
        <div className="flex flex-grow gap-6">
          <NavLink to="/farmer/home">Home</NavLink>
          <NavLink to="/farmer/messages">Messages</NavLink>
          <NavLink to="/farmer/notifications">Notifications</NavLink>
          <NavLink to="/farmer/farmer-groups">Group</NavLink>
          <NavLink to="/farmer/orders">Orders</NavLink>
          <NavLink to="/farmer/wallet">Wallet</NavLink>
        </div>
        <div>
          <FarmerAvatar />
        </div>
      </nav>
    </header>
  );
};

export default function FarmerLayout({ children }) {
  const { viewport } = useAppContext();

  if (viewport.isMedium)
    return (
      <div className="flex min-h-screen flex-col pt-16">
        <Navbar />
        <div className="mx-auto flex w-full max-w-screen-lg flex-grow flex-col">
          {children}
        </div>
      </div>
    );

  return children;
}
