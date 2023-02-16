import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Table } from "antd";
import Search from "antd/lib/transfer/search";
import { Space, Tag } from "antd";

export default function Users() {
  const onSearch = (value) => console.log(value);
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
      email: "email@gmail.com",
      tags: ["active"],
    },
    {
      key: "2",
      name: "Jim Green",
      email: "email@gmail.com",
      tags: ["Inactive"],
    },
    {
      key: "3",
      name: "Joe Black",
      email: "email@gmail.com",
      tags: ["active"],
    },
  ];
  return (
    <div>
      {/* <div className="flex">
        <div className="container flex grow ">
          <Search placeholder="Search account" onSearch={onSearch} />
        </div>
      </div> */}
      <div className="pt-5 pb-3">
        <div className="flex flex-row justify-end px-20">
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
