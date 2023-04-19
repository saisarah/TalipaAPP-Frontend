import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  MenuOutlined,
  MoreOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { rules } from "./rules";
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
import FormItem from "@/components/FormItem";

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
      label: "Set as Active",
    },
    {
      key: "2",
      label: "Set as Inactive",
    },
    {
      key: "3",
      label: "Resend Email Verification",
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
            let color = tag.length > 6 ? "geeblue" : "green";
            if (tag === "Inactive") {
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
      contact: "+63 976 114 2584",
      email: "johnbr0wn@gmail.com",
      roles: "Super admin",
      tags: ["Active"],
    },
    {
      key: "2",
      name: "Jim Green",
      contact: "+63 936 478 5479",
      email: "jim.green76@mailinator.com",
      roles: "Chat support",
      tags: ["pending"],
    },
    {
      key: "3",
      name: "Joe Black",
      contact: "+63 976 589 1473",
      email: "black.john.09@yahoo.com",
      roles: "Moderator",
      tags: ["Inactive"],
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
        <Form className="space-y-4" layout="vertical">
          {/* <Input placeholder="E-mail"/>
          <Input placeholder="Lastname"/>
          <Input placeholder="Firstname"/>
          <Input placeholder="Contact"/>
          <Input placeholder="Age" />
          <Input placeholder="Address" />
          <Input placeholder="Password"
                /> */}
          <FormItem
            name="email"
            placeholder="Enter your email here"
            rules={rules.email}
            type="email"
            label="Email"
            validateFirst
          />

          <FormItem
            name="lastname"
            rules={rules.lastname}
            label="Lastname"
            placeholder="Enter your lastname here"
          />

          <FormItem
            name="firstname"
            rules={rules.firstname}
            label="Firstname"
            placeholder="Enter your firstname here"
          />

          <FormItem
            name="contact_number"
            rules={rules.phone}
            label="Phone"
            placeholder="912 3456 789"
            inputProps={{ prefix: "+63" }}
            type="number"
            validateFirst
            max={10}
          />
          <FormItem
            name="age"
            rules={rules.age}
            label="Age"
            placeholder="Enter your age here"
            type="number"
            validateFirst
            max={3}
          />
          <FormItem
            name="address"
            label="Address"
            placeholder="Enter your address here"
          />
          {/* <FormItem
            name="password"
            label="Password"
            rules={rules.password}
            tooltip={
              <span>
                - Must be atleast 8 characters
                <br />
                - Must Contain Letters and Numbers
                <br />- Must contain Uppercase and Lowecase letter
              </span>
            }
          >
            <Input.Password
              required
              placeholder="Enter your password here"
              size="large"
              className="rounded"
            />
          </FormItem> */}
          <Select
            size="large"
            className="rounded"
            defaultValue="Select status"
            style={{
              width: 130,
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
