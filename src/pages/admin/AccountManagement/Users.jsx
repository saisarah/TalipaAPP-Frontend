import { DownOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Form,
  Input,
  Modal,
  Table,
  Space,
  Tag,
  Select,
} from "antd";
import Search from "antd/lib/transfer/search";

import { useState } from "react";

export default function Users() {
  const onSearch = (value) => console.log(value);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const items = [
    {
      key: "1",
      label: "Update",
    },
    {
      key: "2",
      label: "Remove",
    },
  ];

  const columns = [
    {
      title: "Fullname",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles",
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 7 ? "volcano" : "";
            if (tag === "active") {
              color = "green";
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
      dataIndex: "operation",
      key: "operation",
      render: () => (
        <div className="flex">
          <div className="flex grow">
            <Space size="middle">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a>
                  Settings <DownOutlined />
                </a>
              </Dropdown>
            </Space>
          </div>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      email: "email@gmail.com",
      roles: "Super admin",
      tags: ["active"],
    },
    {
      key: "2",
      name: "Jim Green",
      email: "email@gmail.com",
      roles: "Chat support",
      tags: ["Inactive"],
    },
    {
      key: "3",
      name: "Joe Black",
      email: "email@gmail.com",
      roles: "Moderator",
      tags: ["active"],
    },
  ];
  const items1 = [
    {
      key: "1",
      label: "Update",
    },
    {
      key: "2",
      label: "Remove",
    },
  ];

  return (
    <div>
      <div className="pt-5 pb-3">
        <div className="flex justify-between">
          <h1>User management</h1>
          <Button
            size="small"
            type="primary"
            onClick={() => setModal1Open(true)}
          >
            <PlusOutlined />
            Add new user
          </Button>
          <Modal
            title="Add user"
            style={{
              top: 20,
            }}
            open={modal1Open}
            onOk={() => setModal1Open(false)}
            onCancel={() => setModal1Open(false)}
          >
            <Form className="space-y-4">
              <Input placeholder="E-mail" />
              <Input placeholder="Fullname" />
              <Input placeholder="Contact" />
              <Input placeholder="Age" />
              <Input placeholder="Address" />
              <Select
                defaultValue="Select status"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Select status",
                    label: "Select status",
                    disabled: true,
                  },
                  {
                    value: "Active",
                    label: "Active",
                  },
                  {
                    value: "Inactive",
                    label: "Inactive",
                  },
                ]}
              />
            </Form>
          </Modal>
        </div>
        <div className="pt-2">
          <Table className="rounded" columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}
