import PageHeader from "@/components/PageHeader";
import queryKeyFactory from "@/query/queryKeyFactory";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import { setAuthorization } from "../../../helpers/Http";
import { MenuButton } from "./components/MenuButton";

//assets
import homeImg from "./images/home.png";
import commentsImg from "./images/comments.png";
import cropsImg from "./images/crops.png";
import farmerImg from "./images/farmer.png";
import groupImg from "./images/group.png";
import notificationsImg from "./images/notifications.png";
import ordersImg from "./images/orders.png";
import settingsImg from "./images/settings.png";

export default function MainMenu() {
  const queryClient = useQueryClient();

  const confirmLogout = () => {
    Modal.confirm({
      icon: <QuestionCircleTwoTone />,
      onOk() {
        localStorage.clear();
        setAuthorization(undefined);
        queryClient.setQueryData(queryKeyFactory.currentUser, null);
      },
      content: "Are you sure you want to log out?",
    });
  };

  return (
    <div className="app-size bg-white">
      <PageHeader
        left={<img src="/assets/talipaapp.svg" className="h-16" />}
        title="TalipaAPP"
      />

      <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-3">
        <MenuButton src={homeImg} to="/farmer/home" label="Home" />
        <MenuButton to="/farmer/messages" src={commentsImg} label="Messages" />
        <MenuButton
          to="/farmer/notifications"
          src={notificationsImg}
          label="Notifications"
        />
        <MenuButton to="/farmer/groups" src={groupImg} label="Group" />

        <MenuButton to="/farmer/profile" src={farmerImg} label="Profile" />
        <MenuButton to="/farmer/orders" src={ordersImg} label="Orders" />
        <MenuButton to="/farmer/wallet" src={cropsImg} label="Wallet" />
        <MenuButton label="Help" />
        <MenuButton to="/farmer/settings" src={settingsImg} label="Settings" />
        {/* <MenuButton onClick={confirmLogout} label="Logout" /> */}
      </div>
    </div>
  );
}
