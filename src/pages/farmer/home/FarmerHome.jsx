import { AntDesignOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";

const MainButton = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="flex aspect-square flex-col items-center justify-center gap-4 p-4 transition duration-300 hover:bg-primary-accent-3 hover:text-white"
    >
      <AntDesignOutlined style={{ fontSize: "48px" }} />
      <span>{label}</span>
    </Link>
  );
};

export default function FarmerHome() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-white">
      <PageHeader
        left={<img src="/assets/images/logo.png" className="h-16" />}
        title="TalipaAPP"
      />

      <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-3">
        <MainButton to="/farmer/home" label="Home" />
        <MainButton label="Messages" />
        <MainButton label="Notifications" />
        <MainButton label="Group" />
        <MainButton label="Settings" />
        <MainButton label="Profile" />
        <MainButton label="Orders" />
        <MainButton label="Crops" />
        <MainButton label="Help" />
        <MainButton label="Logout" />
      </div>
    </div>
  );
}
