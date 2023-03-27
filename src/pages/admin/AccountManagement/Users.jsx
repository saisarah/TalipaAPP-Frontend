import { MenuOutlined, MoreOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Dropdown,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tag,
} from "antd";

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
      label: "approve",
    },
    {
      key: "2",
      label: "pending",
    },
    {
      key: "3",
      label: "Resubmit",
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
      title: "Contact No.",
      dataIndex: "contact",
      key: "contact",
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
            let color = tag.length > 6 ? "green" : "";
            if (tag === "resubmit") {
              color = "volcano";
            }
            if (tag === "pending") {
              color = "geekblue";
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
                trigger={["click"]}
              >
                <a>
                  <MoreOutlined />
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
      contact: "09123456789",
      email: "email@gmail.com",
      roles: "Super admin",
      tags: ["approve"],
    },
    {
      key: "2",
      name: "Jim Green",
      contact: "09123456789",
      email: "email@gmail.com",
      roles: "Chat support",
      tags: ["pending"],
    },
    {
      key: "3",
      name: "Joe Black",
      contact: "09123456789",
      email: "email@gmail.com",
      roles: "Moderator",
      tags: ["resubmit"],
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
    <>
      <Card
        title="Account management"
        extra={
          <Button type="primary" onClick={() => setModal1Open(true)}>
            <PlusOutlined />
            Add new user
          </Button>
        }
      >
        <div className="table-responsive">
          <Table columns={columns} dataSource={data} pagination={true} />
        </div>
      </Card>

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
          <Input placeholder="Lastname" />
          <Input placeholder="Firstname" />
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
              {
                value: "Resubmit",
                label: "Resubmit",
              },
            ]}
          />
        </Form>
      </Modal>
    </>
  );
}
