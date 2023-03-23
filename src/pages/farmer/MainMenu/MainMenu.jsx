import PageHeader from "@/components/PageHeader/PageHeader";
import { MenuButton } from "./components/MenuButton";

//assets
import commentsImg from "./images/comments.png";
import farmerImg from "./images/farmer.png";
import groupImg from "./images/group.png";
import helpImg from "./images/help.svg";
import homeImg from "./images/home.png";
import notificationsImg from "./images/notifications.png";
import ordersImg from "./images/orders.png";
import settingsImg from "./images/settings.png";
import walletImg from "./images/wallet.svg";

export default function MainMenu() {

  return (
    <div className="app-size bg-white">
      <PageHeader
        left={<img src="/assets/talipaapp.svg" className="h-12" />}
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
        <MenuButton to="/farmer/wallet" src={walletImg} label="Wallet" />
        <MenuButton to="/farmer/help" src={helpImg} label="Help" />
        <MenuButton to="/farmer/settings" src={settingsImg} label="Settings" />
      </div>
    </div>
  );
}
