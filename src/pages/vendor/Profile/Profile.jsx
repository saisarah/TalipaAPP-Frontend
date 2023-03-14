
import Page from "@/components/Page";
import { useTitle } from "@/contexts/VendorContext";
import UserOutlined from "@/icons/heroicons/UserOutlined";
import { rules } from "@/pages/auth/register/rules";
import useCropsQuery from "@/query/queries/useCropsQuery";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { CameraOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Select } from "antd";

export default function Profile() {
 
  const { data: user } = useCurrentUserQuery();
  
  useTitle("Profile");
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
    </Page>
  );
}
