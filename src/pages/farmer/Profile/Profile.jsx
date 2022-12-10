import {
  ArrowLeftOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { Avatar } from "antd";
import useCurrentUserQuery from "../../../query/queries/useCurrentUserQuery";
import { Button, Empty } from "antd";

export default function Profile() {
  const { data: user } = useCurrentUserQuery();

  return (
    <div className="mx-auto min-h-screen max-w-md  bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Profile"
      />
      <div className="flex aspect-video flex-col items-center justify-end bg-slate-300">
        <Avatar
          icon={<UserOutlined />}
          size={120}
          className="relative -bottom-[60px]"
        />
      </div>
      <div className="flex flex-col items-center gap-2  bg-white pt-[60px]">
        <span className="mt-2 font-bold">
          {user.firstname} {user.lastname}
        </span>
        <Button shape="round" icon={<EditOutlined />}>
          Edit Profile
        </Button>

        <div className="grid h-16 w-full grid-cols-2 bg-white text-lg shadow-md">
          <div className="flex items-center justify-center border-b border-primary text-primary">
            Posts
          </div>

          <div className="flex items-center justify-center">About</div>
        </div>
      </div>

      <div className="py-16">
        <Empty description="You don't have any post yet">
          <Button type="primary">Create Now</Button>
        </Empty>
      </div>
    </div>
  );
}
