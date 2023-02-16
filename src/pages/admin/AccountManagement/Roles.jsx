import {Button, Form, Input, Modal, Select, Table, Tag } from "antd";
import { useState } from "react"; 

export default function Roles() {
  const [modal1Open, setModal1Open] = useState(false);
  const [show, setShow] = useState(true);
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
          <div className="flex flex-row justify-end">
            <Button type="primary" onClick={() => setModal1Open(true)}>
              Display a modal dialog at 20px to Top
            </Button>
            <Modal
              title="20px to Top"
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
        </div>
      </div>
      <div className="p-5">
        <Table columns={columns} dataSource={data} />;
      </div>
    </div>
  );
}
