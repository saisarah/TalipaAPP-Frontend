import Page from "@/components/Page";
import { useTitle } from "@/contexts/VendorContext";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { CameraOutlined, RightOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Select } from "antd";
import { Link } from "react-router-dom";
import ChangeNames from "./Forms/form/ChangeName";

export default function Settings() {
  const { data: user } = useCurrentUserQuery();

  useTitle("Settings");
  return (
    <Page className="bg-white text-black">
      <div className="flex flex-col justify-center p-4 text-center">
        <div className="flex justify-center text-center">
          <div className="relative">
            <Avatar
              className=" z-1 relative border border-[#739559]"
              size={80}
              icon={<UserOutlined />}
              src={user.profile_picture}
            ></Avatar>
            <Button
              className="z-2 absolute right-0 bottom-0  opacity-70"
              shape="circle"
              size="small"
              icon={<CameraOutlined />}
            />
          </div>
        </div>

        <div className="flex w-full justify-center p-4 text-center">
          <div className=" leading-4">
            <div className="text-xl font-bold">
              {user.firstname} {user.lastname}
            </div>
            <span className="text-slate-500">Sarah Oben's Store</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-4">
        <span className="font-bold">Personal Information</span>

        <Link
          className="mb-3 flex items-center justify-between border-b-2 "
          to="{<ChangeNames />}"
        >
          <div>
            Fullname
            <div className="text-slate-400">Sarah Oben</div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </Link>

        <Link
          className="mb-3 flex items-center justify-between border-b-2 "
          to="/farmer/settings/change-name"
        >
          <div>
            Contact Number
            <div className="text-slate-400">0999 099 0999</div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </Link>

        <Link
          className="mb-3 flex items-center justify-between border-b-2 "
          to="/farmer/settings/change-name"
        >
          <div>
            Email address
            <div className="text-slate-400">saisarah@gmail.com</div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </Link>

        <Link
          className="mb-3 flex items-center justify-between border-b-2 "
          to="/farmer/settings/change-name"
        >
          <div>
            Gender
            <div className="text-slate-400">Female</div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </Link>

        <Link
          className="mb-3 flex items-center justify-between border-b-2 "
          to="/farmer/settings/change-name"
        >
          <div>
            Username
            <div className="text-slate-400">Sarah#2463</div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </Link>
        <span className="font-bold">Market Store Information</span>

        <Link
          className="mb-3 flex items-center justify-between border-b-2 "
          to="/farmer/settings/change-name"
        >
          <div>
            Store Name
            <div className="text-slate-400">Sarah dry and wet food</div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </Link>

        <Link
          className="mb-3 flex items-center justify-between border-b-2 "
          to="/farmer/settings/change-name"
        >
          <div>
            Delivery Address
            <div className="text-slate-400">
              Phase 1 Bagong Silang Caloocan City
            </div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </Link>

        <Link
          className="mb-3 flex items-center justify-between border-b-2 "
          to="/farmer/settings/change-name"
        >
          <div>
            Commodity Interest
            <div className="text-slate-400">Mango | Example only</div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </Link>
        <span className="font-bold">Account Settings</span>

        <Link
          className="mb-3 flex items-center justify-between border-b-2 "
          to="/farmer/settings/change-name"
        >
          <div>
            Change Password
            <div className="text-slate-400">
              Note: you can only change password once a month
            </div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </Link>

        <Link
          className="mb-3 flex items-center justify-between border-b-2 "
          to="/farmer/settings/change-name"
        >
          <div>
            Account Deletion
            <div className="text-slate-400">
              Note: this will render after 30 working days
            </div>
          </div>
          <div>
            <RightOutlined />
          </div>
        </Link>
      </div>
    </Page>
  );
}
