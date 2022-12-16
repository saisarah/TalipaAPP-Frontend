import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

export default function GroupPosts({ id, name, title, description }) {
  return (
    <div className="bg-white p-4">
      <div className="flex gap-4 ">
        <div className="h-[65px] w-[65px] flex-shrink-0 rounded-full bg-slate-300"></div>
        <div className="flex flex-grow flex-col">
          <Link to={`/farmer/groups/${id}`} className="font-bold">
            {name}
          </Link>
          <span>6hrs ago</span>
        </div>
      </div>
      <h1 className="py-2 font-bold">{title}</h1>
      <p>{description}</p>
      <hr />

      {/* <div className="mt-4 flex">
        <div className="">
          <button>
            <LikeOutlined />
          </button>
          |
          <button>
            <CommentOutlined />
          </button>
          |
        </div>
        <div className="">
          <button
            className="rounded bg-[#424242] p-1"
            style={{ color: "#fff" }}
          >
            Banana
          </button>
          <button className="rounded p-1">Selling</button>
        </div>
      </div> */}
      <Row>
        <Col span={8}>
          <button>
            <LikeOutlined />
          </button>
          |
          <button>
            <CommentOutlined />
          </button>
          |
        </Col>

        <Col span={8} offset={8}>
          <button
            className="rounded bg-[#424242] p-1"
            style={{ color: "#fff" }}
          >
            Banana
          </button>
          <button className="rounded p-1">Selling</button>
        </Col>
      </Row>
    </div>
  );
}
