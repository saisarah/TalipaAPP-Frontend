import {
  CoffeeOutlined,
  ExclamationOutlined,
  HeartOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Segmented, Table } from "antd";
import { useState } from "react";
import { Space, Tag } from "antd";
import UserOutlined from "@/icons/heroicons/UserOutlined";

export default function Roles() {
  const [show, setShow] = useState(true);
  const columns = [
    {
      title: "Roles",
      key: "roles",
      dataIndex: "roles",
    },
    {
      title: "Permissions",
      dataIndex: "permissions",
      key: "permissions",
      render: (_, { permissions }) => (
        <>
          {permissions.map((tag) => {
            let color = tag.length > 10 ? "geekblue" : "green";
            if (permissions === "moderator") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={permissions}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  const data = [
    {
      key: "1",
      roles: "Super Admin",
      permissions: ["chat support", "moderator", "Account Manager"],
      action: "",
    },
    {
      key: "2",
      roles: "Chat Support",
      permissions: ["chat support"],
      action: "",
    },
    {
      key: "3",
      roles: "Moderator",
      permissions: ["moderator"],
      action: "",
    },
    {
      key: "4",
      roles: "Account Manager",
      permissions: ["Account Manager"],
      action: "",
    },
  ];

  return (
    <div>
      <div className="flex pt-7">
        <div className="flex grow justify-end">
          {/* <Segmented
            options={[
              {
                label: "Active User License",
                value: "Active User License",
                icon: <LikeOutlined />,
              },
              {
                label: "Invited Users",
                value: "Invited Users",
                icon: <HeartOutlined />,
              },
              {
                label: "Disabled Users",
                value: "Disabled Users",
                icon: <ExclamationOutlined />,
              },
              {
                label: "User Waiting Approval",
                value: "User Waiting Approval",
                icon: <CoffeeOutlined />,
              },
            ]}
          /> */}
          <Button type="primary">Add new roles</Button>
        </div>
      </div>
      <div className="p-5">
        <Table columns={columns} dataSource={data} />;
      </div>
    </div>
  );
}
