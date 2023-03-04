import FormItem from "@/components/FormItem";
import { MenuOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  message,
  Button,
  Avatar,
  Typography,
  Dropdown,
  Modal,
  Form,
  Input,
  Space,
  Select,
} from "antd";
import React, { useState } from "react";
import { rules } from "./rules";

// Images
// import face from "/assets/images/banana-com.png";
// import face2 from "/assets/images/garlic-com.png";
// import face3 from "/assets/images/eggplant-com.png";
// import face4 from "/assets/images/cabbage-com.png";
// import face5 from "/assets/images/onion-com.png";
// import face6 from "/assets/images/pineapple-com.png";

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

const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// table code start
const columns = [
  {
    title: "Commodities",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "Number of Posts",
    dataIndex: "posts",
    key: "posts",
  },

  {
    title: "Number of Demands",
    key: "demands",
    dataIndex: "demands",
  },
  {
    title: "Actions",
    key: "actions",
    dataIndex: "actions",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group
          // shape="square"
          size={40}
          // src={face}
        >
          <Title level={4}>Banana</Title>
        </Avatar.Group>{" "}
      </>
    ),
    posts: (
      <>
        <Title level={4}>54</Title>
      </>
    ),

    demands: (
      <>
        <Title level={4}>63</Title>
      </>
    ),
    actions: (
      <>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a>
            <MenuOutlined />
          </a>
        </Dropdown>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group
          // shape="square"
          size={40}
          // src={face2}
        >
          <Title level={4}>Garlic</Title>
        </Avatar.Group>{" "}
      </>
    ),
    posts: (
      <>
        <Title level={4}>108</Title>
      </>
    ),

    demands: (
      <>
        <Title level={4}>99</Title>
      </>
    ),
    actions: (
      <>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a>
            <MenuOutlined />
          </a>
        </Dropdown>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group
          // shape="square"
          size={40}
          // src={face3}
        >
          <Title level={4}>Eggplant</Title>
        </Avatar.Group>{" "}
      </>
    ),
    posts: (
      <>
        <Title level={4}>97</Title>
      </>
    ),

    demands: (
      <>
        <Title level={4}>56</Title>
      </>
    ),
    actions: (
      <>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a>
            <MenuOutlined />
          </a>
        </Dropdown>
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        <Avatar.Group
          // shape="square"
          size={40}
          // src={face4}
        >
          <Title level={4}>Cabbage</Title>
        </Avatar.Group>{" "}
      </>
    ),
    posts: (
      <>
        <Title level={4}>88</Title>
      </>
    ),

    demands: (
      <>
        <Title level={4}>105</Title>
      </>
    ),
    actions: (
      <>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a>
            <MenuOutlined />
          </a>
        </Dropdown>
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        <Avatar.Group
          // shape="square"
          size={40}
          // src={face5}
        >
          <Title level={4}>Onion</Title>
        </Avatar.Group>{" "}
      </>
    ),
    posts: (
      <>
        <Title level={4}>110</Title>
      </>
    ),

    demands: (
      <>
        <Title level={4}>91</Title>
      </>
    ),
    actions: (
      <>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a>
            <MenuOutlined />
          </a>
        </Dropdown>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group
          // shape="square"
          size={40}
          // src={face6}
        >
          <Title level={4}>Pineapple</Title>
        </Avatar.Group>{" "}
      </>
    ),
    posts: (
      <>
        <Title level={4}>41</Title>
      </>
    ),

    demands: (
      <>
        <Title level={4}>87</Title>
      </>
    ),
    actions: (
      <>
        {/* <FormItem name="action" placeholder="Actions" className="w-24">
          <Select size="large"  placeholder="Actions">
            <Select.Option value="edit">Edit</Select.Option>
            <Select.Option value="delete">Delete</Select.Option>
          </Select>
        </FormItem> */}

        <Dropdown
          menu={{
            items,
          }}
        >
          <a>
            <MenuOutlined />
          </a>
        </Dropdown>
      </>
    ),
  },
];

// function Product({ src, price, title }) {
//   return (
//     <>
//       <div className="flex flex-col">
//         <img
//           src={src}
//           alt="farmer's-profile"
//           className="h-56 w-48 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
//         />
//         <div className="my-2 flex flex-col text-center">
//           <span>{title}</span>
//           <span className="text-primary">{price}</span>
//         </div>
//       </div>
//     </>
//   );
// }

export default function Commodities() {
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
      <div className="my-2 text-center text-xl text-primary-accent-3">
        <span>Featured Commodities</span>
      </div>
      <div className="tabled mx-52">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Commodities Table"
              extra={
                <>
                  <Button type="primary" onClick={showModal}>
                    Add Commodities
                  </Button>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
