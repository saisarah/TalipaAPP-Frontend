import { AntDesignOutlined, QuestionCircleTwoTone } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { setAuthorization } from "../../../helpers/Http";
import queryKeyFactory from "../../../query/queryKeyFactory";

const MainButton = ({ onClick, to, label, src = null }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex aspect-square flex-col items-center justify-center gap-4 p-4 transition duration-300 hover:bg-primary-accent-3 hover:text-white"
    >
      {src === null ? (
        <AntDesignOutlined style={{ fontSize: "48px" }} />
      ) : (
        <img src={src} height="48px" width="48px" />
      )}
      <span>{label}</span>
    </Link>
  );
};

export default function FarmerHome() {
  const queryClient = useQueryClient();

  const confirmLogout = () => {
    Modal.confirm({
      icon: <QuestionCircleTwoTone />,
      onOk() {
        localStorage.clear();
        setAuthorization(undefined);
        queryClient.setQueryData(queryKeyFactory.currentUser, null);
      },
      content: "Are you sure you want to log?",
    });
  };

  return (
    <div className="mx-auto min-h-screen max-w-md bg-white">
      <PageHeader
        left={<img src="/assets/images/logo.png" className="h-16" />}
        title="TalipaAPP"
      />

      <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-3">
        <MainButton
          src="/assets/icons/home.png"
          to="/farmer/home"
          label="Home"
        />
        <MainButton src="/assets/icons/comments.png" label="Messages" />
        <MainButton
          src="/assets/icons/notifications.png"
          label="Notifications"
        />
        <MainButton src="/assets/icons/group.png" label="Group" />
        <MainButton src="/assets/icons/settings.png" label="Settings" />
        <MainButton
          to="/farmer/profile"
          src="/assets/icons/farmer.png"
          label="Profile"
        />
        <MainButton src="/assets/icons/orders.png" label="Orders" />
        <MainButton src="/assets/icons/crops.png" label="Crops" />
        <MainButton label="Help" />
        <MainButton onClick={confirmLogout} label="Logout" />
      </div>
    </div>
  );
}
