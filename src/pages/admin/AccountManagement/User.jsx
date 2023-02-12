import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Table } from "antd";
import Search from "antd/lib/transfer/search";
import { Space, Tag } from "antd";

export default function User() {
  const onSearch = (value) => console.log(value);
  const columns = [
    {
      title: "Fullname",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Contact Number",
      dataIndex: "contact",
      key: "contact",
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
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      contact: "0912345667",
      tags: ["active"],
    },
    {
      key: "2",
      name: "Jim Green",
      contact: "0912345667",
      tags: ["Inactive"],
    },
    {
      key: "3",
      name: "Joe Black",
      contact: "0912345667",
      tags: ["active"],
    },
  ];
  return (
    <div>
      <div className="flex">
        <div className="container flex grow flex-row">
          <Search placeholder="Search account" onSearch={onSearch} />
        </div>
      </div>
      <div className="pt-5 pb-3">
        <div className="flex flex-row ">
          <Button type="primary" size="large">
            <PlusOutlined />
          </Button>
          <p className="p-2">add new account</p>
        </div>
        <div className="container pt-2">
          <Table className="rounded" columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}
