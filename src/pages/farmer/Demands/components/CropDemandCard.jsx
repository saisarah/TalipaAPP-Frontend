import { ArrowUpOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

export default function CropDemandsCard({ id, name, percentage, avatars, request_count }) {
  return (
    <Link to={`/farmer/demands?crop_id=${id}`}>
      <div className="mt-2 rounded border border-[#e5e7eb] p-4 py-2 text-base shadow-sm">
        <div className="flex justify-between">
          <div className="text-xl font-bold leading-tight text-black ">
            {name} <br />
            <span className="text-sm font-thin text-slate-400">
              Requested commodity
            </span>
          </div>
          <div className="px-6 pt-1 text-4xl font-bold text-black">
            {parseInt(percentage)}%
          </div>
        </div>

        <div className="flex justify-between  border-b-2 py-2 ">
          <div className="">
            <Avatar.Group
              className="align-middle"
              maxCount={4}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "pointer",
              }}
            >
              {avatars.map(avatar => (
                <Avatar src={avatar} key={avatar} />
              ))}
              {/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

              <Avatar style={{ backgroundColor: "#f56a00" }}>J</Avatar>
              <Avatar src="" />
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>

              <Avatar
                style={{ backgroundColor: "#1890ff" }}
                icon={<AntDesignOutlined />}
              /> */}
            </Avatar.Group>
          </div>
          <div className="pt-2 text-sm font-thin text-black">
            Requested by {request_count} vendors
          </div>
        </div>
        <div className="w-full pt-2 text-right">
          <button className="rounded border px-2 font-normal text-black">
            View Demands
            <ArrowUpOutlined className="ml-2 rotate-45" />
          </button>
        </div>
      </div>
    </Link>
  );
}
