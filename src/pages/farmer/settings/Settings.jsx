import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useLogoutModal } from "@/hooks/useLogoutModal";
import {
  useCurrentUserAddress,
  useCurrentUserQuery,
} from "@/query/queries/useCurrentUserQuery";
import { RightOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Search from "antd/lib/transfer/search";
import { Link } from "react-router-dom";

export default function Settings() {
  const { confirmLogout } = useLogoutModal();
  const { data: user } = useCurrentUserQuery();
  const { data: address } = useCurrentUserAddress();

  return (
    <Page className="bg-white">
      <PageHeader title="Settings" back="/" />
      <div className="p-4">
        <div className="mb-2 flex flex-col gap-2">
          <span className="font-bold">Personal Information</span>

          <Link
            className="mx-4 mb-3 flex justify-between border-b-2 pb-2"
            to="/farmer/settings/change-name"
          >
            <div className="flex flex-col">
              <span>Fullname</span>
              <span className="text-slate-400">{user.fullname}</span>
            </div>

            <RightOutlined />
          </Link>

          <Link
            className="mx-4 mb-3 flex justify-between border-b-2 pb-2"
            to="/farmer/settings/change-username"
          >
            <div className="flex flex-col">
              <span>Username</span>
              <span className="text-slate-400">{user.username}</span>
            </div>
            <RightOutlined />
          </Link>
          <Link
            className="mx-4 mb-3 flex justify-between border-b-2 pb-2"
            to="/farmer/settings/change-number"
          >
            <div className="flex flex-col">
              <span>Number</span>
              <span className="text-slate-400">{user.contact_number}</span>
            </div>
            <RightOutlined />
          </Link>
          <Link
            className="mx-4 mb-3 flex justify-between border-b-2 pb-2"
            to="/farmer/settings/change-email"
          >
            <div className="flex flex-col">
              <span>E-mail Address</span>
              <span className="text-slate-400">{user.email}</span>
            </div>
            <RightOutlined />
          </Link>
        </div>
        <div className="mb-2 flex flex-col gap-2">
          <span className="font-bold">Account settings</span>

          <Link
            className="mx-4 mb-3 flex justify-between border-b-2 pb-2"
            to="/farmer/settings/change-address"
          >
            <div className="flex flex-col">
              <span>Delivery Address</span>
              <span className="text-slate-400">{address.house_number}</span>
            </div>
            <RightOutlined />
          </Link>
          <Link
            className="mx-4 mb-3 flex justify-between border-b-2 pb-2"
            to="/farmer/settings/account-deletion"
          >
            <div className="flex flex-col">
              <span>Account Deletion</span>
              <span className="text-slate-400">
                <em>Note: This will only take effect after 30days.</em>
              </span>
            </div>
            <RightOutlined />
          </Link>
          <Link
            className="mx-4 mb-3 flex justify-between border-b-2 pb-2"
            to="/farmer/settings/change-password"
          >
            <div className="flex flex-col">
              <span>Change password</span>
              <span className="text-slate-400">
                <em>Note: Always use strong password.</em>
              </span>
            </div>
            <RightOutlined />
          </Link>
          <Link
            className="mx-4 flex justify-between border-b-2 pb-4"
            onClick={confirmLogout}
          >
            <div className="flex flex-col">
              <span>Logout</span>
              <span className="text-slate-400">
                <em>Your account will be sign out.</em>
              </span>
            </div>
            <RightOutlined />
          </Link>
        </div>
      </div>
    </Page>
  );
}
