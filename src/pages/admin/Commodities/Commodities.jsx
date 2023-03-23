import FormItem from "@/components/FormItem";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Avatar,
  Dropdown,
  Modal,
  Form,
  Input,
  Space,
} from "antd";
import React, { useState } from "react";
import { rules } from "./rules";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Commodities() {
  const items = [
    {
      key: "1",
      label: "Edit",
    },
    {
      key: "2",
      label: "Delete",
    },
  ];
  const data = [
    {
      key: "1",
      name: "Banana",
      isGroup: "63",
      product: "101",
    },
    {
      key: "2",
      name: "Garlic",
      isGroup: "51",
      product: "92",
    },
    {
      key: "3",
      name: "Eggplant",
      isGroup: "72",
      product: "57",
    },
    {
      key: "4",
      name: "Cabbage",
      isGroup: "90",
      product: "86",
    },
    {
      key: "5",
      name: "Onion",
      isGroup: "221",
      product: "167",
    },
    {
      key: "6",
      name: "Pineapple",
      isGroup: "80",
      product: "91",
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
      title: "Commodities",
      dataIndex: "name",
      key: "name",
      // width: "30%",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
      render: (_, record) => <Link to="#">{record.name}</Link>,
    },
    {
      title: "Number of Posts",
      dataIndex: "isGroup",
      key: "isGroup",
      // width: "30%",
      // ...getColumnSearchProps("isGroup"),
      sorter: (a, b) => a.isGroup.length - b.isGroup.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Number of Demands",
      dataIndex: "product",
      key: "product",
      // width: "20%",
      // ...getColumnSearchProps("product"),
      sorter: (a, b) => a.product.length - b.product.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Actions",
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
                  <MenuOutlined />
                </a>
              </Dropdown>
            </Space>
          </div>
        </div>
      ),
    },
  ];

  const handleSubmit = (personalData) => {
    setData((data) => ({ ...data, ...personalData }));
    setStep((step) => step + 1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <Modal
          title="Add Commodities"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form initialValues={data} layout="vertical" onFinish={handleSubmit}>
            <FormItem
              name="name"
              rules={rules.name}
              placeholder="Enter your name here"
            />
          </Form>
        </Modal>
      </div>
      <div className="flex justify-end">
        <Button type="primary" onClick={showModal} className="flex">
          Add Commodities
        </Button>
      </div>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card bordered={false}>
              <div className="table-responsive">
                <h1>Commodities</h1>
                <Table columns={columns} dataSource={data} pagination={true} />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
