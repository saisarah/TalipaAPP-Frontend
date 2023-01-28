import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { CameraOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";

export default function EditProfiles() {
  return (
    <>
      <Page className="bg-white">
        <PageHeader back="/farmer/profile" title="Edit Profile" />

        <div className="flex aspect-video flex-col items-center justify-end bg-slate-300">
          <div className="absolute flex basis-auto flex-col justify-center"></div>
        </div>

        <div className="relative flex justify-center">
          <Avatar
            icon={<UserOutlined />}
            // src={user.profile_picture}
            // src="/public/assets/images/himeno.jpg"
            size={120}
            className="-top-[60px] z-0 border-2 border-solid border-[#739559]"
          />
          <Button
            className="edit-button z-1 absolute -top-[25px] border-none bg-slate-900 bg-opacity-40 text-white  hover:border-none hover:bg-slate-500 hover:bg-opacity-40 hover:text-white"
            icon={<CameraOutlined />}
            shape="circle"
            size="large"
          />
        </div>
      </Page>
    </>
  );
}
