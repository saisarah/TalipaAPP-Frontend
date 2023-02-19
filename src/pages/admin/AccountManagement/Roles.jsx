import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
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

export default function Roles() {
  const [modal1Open, setModal1Open] = useState(false);
  const [show, setShow] = useState(true);
  const items = [
    {
      key: "1",
      label: "Update",
    },
    {
      key: "2",
      label: "Delete",
    },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
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
      title: "Actions",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "green" : "geekblue";
            if (tag === "Inactive") {
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
      dataIndex: "operation",
      key: "operation",
      render: () => (
        <Space size="middle">
          <Dropdown
            menu={{
              items,
            }}
          >
            <a>
              More <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      roles: "Admin",
      permissions: ["chat support", "moderator", "Account Manager"],
      action: "",
      tags: ["Active"],
    },
    {
      key: "2",
      roles: "Chat Support",
      permissions: ["chat support"],
      action: "",
      tags: ["Active"],
    },
    {
      key: "3",
      roles: "Moderator",
      permissions: ["moderator"],
      action: "",
      tags: ["Inactive"],
    },
    {
      key: "4",
      roles: "Account Manager",
      permissions: ["Account Manager"],
      action: "",
      tags: ["Active"],
    },
  ];

  return (
    <div>
      <div className="flex pt-7">
        <div className="flex grow justify-end">
          <div className="flex flex-row justify-end">
            <Button
              type="primary"
              size="small"
              onClick={() => setModal1Open(true)}
            >
              <PlusOutlined />
              Add new role
            </Button>
            <Modal
              title="Add new role"
              style={{
                top: 20,
              }}
              open={modal1Open}
              onOk={() => setModal1Open(false)}
              onCancel={() => setModal1Open(false)}
            >
              <Form className="space-y-4">
                <Input placeholder="Name of roles" />
                <Select
                  mode="multiple"
                  style={{
                    width: "100%",
                  }}
                  placeholder="Select Permission"
                  onChange={handleChange}
                  optionLabelProp="label"
                >
                  <Option value="Admin" label="Admin">
                    Admin
                  </Option>
                  <Option value="Chat Support" label="Chat Support">
                    Chat Support
                  </Option>
                  <Option value="Moderator" label="Moderator">
                    Moderator
                  </Option>
                  <Option value="Account Manager" label="Account Manager">
                    Account Manager
                  </Option>
                </Select>

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
        </div>
      </div>
      <div className="p-5">
        <Table columns={columns} dataSource={data} />;
      </div>
    </div>
  );
}
