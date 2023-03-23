import { MenuOutlined, MoreOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Dropdown, Input, Space, Table, Tag } from "antd";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

// import Highlighter from "react-highlight-words";

export default function Transaction() {
  const items = [
    {
      key: "1",
      label: "Approved",
    },
    {
      key: "2",
      label: "Pending",
    },
    {
      key: "3",
      label: "Resubmit",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      isGroup: "Banana",
      product: "Bert",
      address: "January 25, 2022",
      tags: "200",
      price: "200",
      totalPrice: "14000",
    },
    {
      key: "2",
      name: "Joe Black",
      isGroup: "Garlic",
      product: "Juaniato",
      address: "February 6, 2019",
      tags: "150",
      price: "90",
      totalPrice: "6000",
    },
    {
      key: "3",
      name: "Jim Green",
      isGroup: "Onion",
      product: "Sebastian",
      address: "December 1, 2018",
      tags: "200",
      price: "150",
      totalPrice: "7000",
    },
    {
      key: "4",
      name: "Jim Red",
      isGroup: "Cabbage",
      product: "Stehr",
      address: "December 5, 2018",
      tags: "17",
      price: "3",
      totalPrice: "720",
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
      title: "Vendor",
      dataIndex: "name",
      key: "name",
      // width: "30%",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
      render: (_, record) => (
        <Link to="/admin/vendor/profile1">{record.name}</Link>
      ),
    },
    {
      title: "Commodities",
      dataIndex: "isGroup",
      key: "isGroup",
      // width: "30%",
      // ...getColumnSearchProps("isGroup"),
      sorter: (a, b) => a.isGroup.length - b.isGroup.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Customer",
      dataIndex: "product",
      key: "product",
      // width: "20%",
      // ...getColumnSearchProps("product"),
      sorter: (a, b) => a.product.length - b.product.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Date",
      dataIndex: "address",
      key: "address",
      // ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Quantity",
      dataIndex: "tags",
      key: "tags",
      // ...getColumnSearchProps("tags"),
      sorter: (a, b) => a.tags.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      // ...getColumnSearchProps("price"),
      sorter: (a, b) => a.price.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      // ...getColumnSearchProps("totalPrice"),
      sorter: (a, b) => a.totalPrice.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    // {
    //   dataIndex: "operation",
    //   key: "operation",
    //   render: () => (
    //     <div className="flex">
    //       <div className="flex grow">
    //         <Space size="middle">
    //           <Dropdown
    //             menu={{
    //               items,
    //             }}
    //             trigger={["click"]}
    //           >
    //             <a>
    //               <MoreOutlined />
    //             </a>
    //           </Dropdown>
    //         </Space>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <Card title="Transaction">
      <div className="table-responsive">
        <Table columns={columns} dataSource={data} pagination={true} />
      </div>
    </Card>
  );
}
