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
} from "antd";

// Images
import face from "/assets/images/banana-com.png";
import face2 from "/assets/images/garlic-com.png";
import face3 from "/assets/images/eggplant-com.png";
import face4 from "/assets/images/cabbage-com.png";
import face5 from "/assets/images/onion-com.png";
import face6 from "/assets/images/pineapple-com.png";

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
    title: "COMMODITIES",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "PLACE HARVESTED",
    dataIndex: "function",
    key: "function",
  },

  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "DATE HARVESTED",
    key: "employed",
    dataIndex: "employed",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar mr-2"
            shape="square"
            size={40}
            src={face}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Banana</Title>
            <p>Description</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Mindanao</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          AVAILABLE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/04/23</span>
          <a href="#">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar mr-2"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Garlic</Title>
            <p>Description</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Luzon</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">AVAILABLE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/12/23</span>
          <a href="#">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar mr-2"
            shape="square"
            size={40}
            src={face3}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Eggplant</Title>
            <p>Description</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Visayas</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          AVAILABLE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/23</span>
          <a href="#">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar mr-2"
            shape="square"
            size={40}
            src={face4}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Cabbage</Title>
            <p>Description</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Visayas</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          AVAILABLE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03/04/23</span>
          <a href="#">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar mr-2"
            shape="square"
            size={40}
            src={face5}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Onion</Title>
            <p>Description</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Mindanao</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">AVAILABLE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/03/23</span>
          <a href="#">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar mr-2"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Pineapple</Title>
            <p>Description</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Mindanao</Title>
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">AVAIABLE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>14/04/23</span>
          <a href="#">Edit</a>
        </div>
      </>
    ),
  },
];

function Product({ src, price, title }) {
  return (
    <>
      <div className="flex flex-col">
        <img
          src={src}
          alt="farmer's-profile"
          className="h-56 w-48 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        />
        <div className="my-2 flex flex-col text-center">
          <span>{title}</span>
          <span className="text-primary">{price}</span>
        </div>
      </div>
    </>
  );
}

export default function Commodities() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  return (
    <div>
      <div className="my-2 text-center text-xl text-primary-accent-3">
        <span>Featured Commodities</span>
      </div>
      <div className="text-center text-4xl">
        <h1>Our Commodities</h1>
      </div>
      <div className="mx-52 mt-10 grid grid-cols-4 items-center gap-4 my-16">
        <div>
          <Card className="flex h-80 w-64 justify-center bg-slate-50 text-lg">
            <Product
              src={"/assets/images/banana-com.png"}
              price={"₱120.00"}
              title={"Banana"}
            />
          </Card>
        </div>
        <div className="flex items-center">
          <Card className="flex h-80 w-64 justify-center bg-slate-50 text-lg ">
            <Product
              src={"/assets/images/garlic-com.png"}
              price={"₱80.00"}
              title={"Garlic"}
            />
          </Card>
        </div>
        <div>
          <Card className="flex h-80 w-64 justify-center bg-slate-50 text-lg ">
            <Product
              src={"/assets/images/eggplant-com.png"}
              price={"₱100.00"}
              title={"Eggplant"}
            />
          </Card>
        </div>
        <div>
          <Card className="flex h-80 w-64 justify-center bg-slate-50 text-lg ">
            <Product
              src={"/assets/images/cabbage-com.png"}
              price={"₱150.00"}
              title={"Cabbage"}
            />
          </Card>
        </div>
        <div>
          <Card className="flex h-80 w-64 justify-center bg-slate-50 text-lg">
            <Product
              src={"/assets/images/onion-com.png"}
              price={"₱450.00"}
              title={"Onion"}
            />
          </Card>
        </div>
        <div>
          <Card className="flex h-80 w-64 justify-center bg-slate-50 text-lg">
            <Product
              src={"/assets/images/pineapple-com.png"}
              price={"₱120.00"}
              title={"Pineapple"}
            />
          </Card>
        </div>
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
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">All</Radio.Button>
                    <Radio.Button value="b">Available</Radio.Button>
                  </Radio.Group>
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
