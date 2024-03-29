import { MenuOutlined, MoreOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Dropdown, Input, Space, Table, Tag } from "antd";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
//import Highlighter from "react-highlight-words";

export default function FarmerGroup() {
  const items = [
    {
      key: "1",
      label: <Link to="/admin/farmer-groups/profile">View group</Link>,
    },
    {
      key: "2",
      label: "Set as Active",
    },
    {
      key: "3",
      label: "Set as Inactive",
    },
    {
      key: "4",
      label: "Resend Email Verification",
    },
  ];
  const data = [
    {
      key: "1",
      name: "Totong Lipay Farmers Association",
      type: "Association",
      members: 21,
      address: "682 Elcano Street Binondo 1000",
      tags: ["Active"],
    },
    {
      key: "2",
      name: "Federation of Free Farmers",
      type: "Association",
      members: 50,
      address: "Masbate No. 1 Lake Park",
      tags: ["pending"],
    },
    {
      key: "3",
      name: "Maharlika Organic Food Producers and Farmers Association",
      type: "Association",
      members: 30,
      address: "San Felipe, West Feria",
      tags: ["Inactive"],
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#739559" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex
        ? null
        : // <Highlighter
          //   highlightStyle={{
          //     backgroundColor: "#ffc069",
          //     padding: 0,
          //   }}
          //   searchWords={[searchText]}
          //   autoEscape
          //   textToHighlight={text ? text.toString() : ""}
          // />
          text,
  });
  const columns = [
    {
      title: "Group Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("name"),
      render: (avatar, record) => (
        <div className="flex gap-2">
          <Avatar src={avatar} alt="avatar" size="large" />
          <Link to="/admin/farmer-groups/profile">{record.name}</Link>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      sorter: (a, b) => a.type.length - b.type.length,
      sortDirections: ["descend", "ascend"],
      // ...getColumnSearchProps("type"),
    },
    {
      title: "Members",
      dataIndex: "members",
      key: "members",
      width: "20%",
      sorter: (a, b) => a.members.value - b.members.value,
      sortDirections: ["descend", "ascend"],
      // ...getColumnSearchProps("members"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
      // ...getColumnSearchProps("address"),
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 6 ? "geekblue" : "green";
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

  return (
    <>
      <Card title="Farmers groups">
        <div className="table-responsive">
          <Table columns={columns} dataSource={data} pagination={true} />
        </div>
      </Card>
    </>
  );
}
