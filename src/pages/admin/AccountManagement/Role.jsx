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

export default function Role() {
  const [show, setShow] = useState(true);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      icon: <Avatar shape="square" size="small" icon={<UserOutlined />} />,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Roles",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 6 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      email: "example@gmail.com",
      address: "New York No. 1 Lake Park",
      tags: ["chat support"],
      status: "Inactive",
    },
    {
      key: "2",
      name: "Jim Green",
      email: "example@gmail.com",
      address: "London No. 1 Lake Park",
      tags: ["moderator"],
      status: "Active",
    },
    {
      key: "3",
      name: "Joe Black",
      email: "example@gmail.com",
      address: "Sydney No. 1 Lake Park",
      tags: ["super admin"],
      status: "Active",
    },
    {
      key: "4",
      name: "Ruel Almonia",
      email: "example@gmail.com",
      address: "Sydney No. 1 Lake Park",
      tags: ["account manager"],
      status: "Active",
    },
  ];

  return (
    <div>
      <div className="flex pt-7">
        <div className="flex grow justify-center">
          <Segmented
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
          />
        </div>
      </div>
      <div className="p-5">
        <Table columns={columns} dataSource={data} />;
      </div>
    </div>
  );
}
