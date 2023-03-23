import { MenuOutlined, MoreOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Dropdown, Input, Space, Table, Tag } from "antd";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

// import Highlighter from "react-highlight-words";

export default function Farmer() {
  const items = [
    {
      key: "1",
      label: <Link to="/admin/farmers/profile">View profile</Link>,
    },
    {
      key: "2",
      label: "Approved",
    },
    {
      key: "3",
      label: "Pending",
    },
    {
      key: "4",
      label: "Resubmit",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      isGroup: "Not in Group",
      product: "Apple , Banana",
      address: "New York No. 1 Lake Park",
      status: ["approved"],
    },
    {
      key: "2",
      name: "Joe Black",
      isGroup: "Not in Group",
      product: "Apple, Banana",
      address: "London No. 1 Lake Park",
      status: ["pending"],
    },
    {
      key: "3",
      name: "Jim Green",
      isGroup: "In Group",
      product: "Apple, Banana, Onion",
      address: "Sydney No. 1 Lake Park",
      status: ["pending"],
    },
    {
      key: "4",
      name: "Jim Red",
      isGroup: "In Group",
      product: "Garlic",
      address: "London No. 2 Lake Park",
      status: ["resubmit"],
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
          color: filtered ? "#1890ff" : undefined,
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
        ? // <Highlighter
          //   highlightStyle={{
          //     backgroundColor: "#ffc069",
          //     padding: 0,
          //   }}
          //   searchWords={[searchText]}
          //   autoEscape
          //   textToHighlight={text ? text.toString() : ""}
          // />
          null
        : text,
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      // width: "30%",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
      render: (avatar, record) => (
        <div className="flex gap-2">
          <Avatar src={avatar} alt="avatar" size="large" />
          <Link to="/admin/farmers/profile">{record.name}</Link>
        </div>
      ),
    },
    {
      title: "isGroup",
      dataIndex: "isGroup",
      key: "isGroup",
      // width: "30%",
      // ...getColumnSearchProps("isGroup"),
      sorter: (a, b) => a.isGroup.length - b.isGroup.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      // width: "20%",
      // ...getColumnSearchProps("product"),
      sorter: (a, b) => a.product.length - b.product.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      // ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status.map((tag) => {
            let color = tag.length > 7 ? "green" : "geekblue";
            if (tag === "resubmit") {
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
      <Card title="Farmers">
        <div className="table-responsive">
          <Table columns={columns} dataSource={data} pagination={true} />
        </div>
      </Card>
    </>
  );
}
