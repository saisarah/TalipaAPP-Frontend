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
      transaction: "T-8873320",
      farmer: "John Brown",
      commcodities: "Banana",
      vendor: "Bert",
      date: "January 25, 2022",
      quantity: "200",
      price: "200",
      totalPrice: "14000",
    },
    {
      key: "2",
      transaction: "T-8195847",
      farmer: "Joe Black",
      commcodities: "Garlic",
      vendor: "Juaniato",
      date: "February 6, 2019",
      quantity: "150",
      price: "90",
      totalPrice: "6000",
    },
    {
      key: "3",
      transaction: "T-8195838",
      farmer: "Jim Green",
      commcodities: "Onion",
      vendor: "Sebastian",
      date: "December 1, 2018",
      quantity: "200",
      price: "150",
      totalPrice: "7000",
    },
    {
      key: "4",
      transaction: "T-7875860",
      farmer: "Jim Red",
      commcodities: "Cabbage",
      vendor: "Stehr",
      date: "December 5, 2018",
      quantity: "17",
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
      title: "Transaction ID",
      dataIndex: "transaction",
      key: "transaction",
      ...getColumnSearchProps("transaction"),
      sorter: (a, b) => a.transaction.length - b.transaction.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Farmer",
      dataIndex: "farmer",
      key: "farmer",
      ...getColumnSearchProps("farmer"),
      sorter: (a, b) => a.farmer.length - b.farmer.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Commodities",
      dataIndex: "commcodities",
      key: "commcodities",
      sorter: (a, b) => a.commcodities.length - b.commcodities.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Vendor",
      dataIndex: "vendor",
      key: "vendor",
      sorter: (a, b) => a.vendor.length - b.vendor.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => a.date.length - b.date.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => a.quantity.length - b.quantity.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price.length - b.price.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      sorter: (a, b) => a.totalPrice.length - b.totalPrice.length,
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
