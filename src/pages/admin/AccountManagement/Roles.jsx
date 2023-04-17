import { Card, Table, Tag } from "antd";
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
    // {
    //   title: "Status",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "green" : "geekblue";
    //         if (tag === "Inactive") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
  ];
  const data = [
    {
      key: "1",
      roles: "Admin",
      permissions: ["chat support", "moderator", "Super Admin"],
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
  ];

  return (
    <>
      <Card title="Roles management">
        <div className="table-responsive">
          <Table columns={columns} dataSource={data} pagination={true} />
        </div>
      </Card>
    </>
  );
}
