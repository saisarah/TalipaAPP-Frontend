import { PlusOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Row, Space } from "antd";
import { Link } from "react-router-dom";

export default function Profile(name, status, gender, phone, email) {
  return (
    <>
      <h1>GROUP INFORMATION</h1>
      <Row gutter={10}>
        <Col span={16}>
          <Card className="mb-3">
            <h1>GROUP DESCRIPTION</h1>

            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              harum accusamus recusandae hic ipsam quis doloribus ipsum velit
              iste ut qui exercitationem atque aperiam quisquam, nesciunt cumque
              fugit culpa. Dolorem sunt tempora maxime nam. Ab quisquam iste
              inventore? Optio laudantium iure praesentium, molestiae nesciunt
              ratione
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="mb-3">
            <h1>GROUP RECORDS</h1>
            <h1>Ratings</h1>
            <p>
              <span>
                <StarFilled className="text-yellow-400" />
                <StarFilled className="text-yellow-400" />
                <StarFilled className="text-yellow-400" />
                <StarFilled className="text-yellow-400" />
                <StarOutlined className="text-yellow-400" />
              </span>
            </p>
            <div className="flex justify-between">
              <div>
                <h1>Transactions</h1>
                <p>
                  {/* <PlusOutlined /> */}
                  245
                </p>
              </div>
              <div>
                <h1>Post</h1>
                <p>43</p>
              </div>
              <div>
                <h1>Members</h1>
                <p>7</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <h1>GROUP MEMBERS</h1>
      <Row gutter={10}>
        <Member
          name="Joshua Villanueva"
          status="President"
          gender="Male"
          phone="+63 976 140 1847"
          email="villanuevajoshua27@gmail.com"
        />
        <Member
          name="Jhunriz Lalata"
          status="Vice President"
          gender="Male"
          phone="+63 976 140 1847"
          email="villanuevajoshua27@gmail.com"
        />
        <Member
          name="Ruel Almonia"
          status="Member"
          gender="Male"
          phone="+63 976 140 1847"
          email="villanuevajoshua27@gmail.com"
        />
        <Member
          name="Sarah Grace Oben"
          status="Member"
          gender="Female"
          phone="+63 976 140 1847"
          email="villanuevajoshua27@gmail.com"
        />
        <Member
          name="Sarah Grace Oben"
          status="Member"
          gender="Female"
          phone="+63 976 140 1847"
          email="villanuevajoshua27@gmail.com"
        />
      </Row>
    </>
  );
}

function Member(props) {
  return (
    <>
      {/* <div className="lex m-1 justify-start rounded border bg-white  px-2 py-6">
      <div className="flex gap-4">
        <div>
          <img src="https://via.placeholder.com/100" className="rounded-full" />
        </div>

        <div className="flex flex-col">
          <h1>{props.name}</h1>
          <p>{props.status}</p>
          <p>{props.gender}</p>
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div> */}

      <Col span={8} style={{ marginBottom: "10px" }}>
        <Card bordered={false}>
          <div className="flex gap-10 bg-white">
            <div>
              <img
                src="https://via.placeholder.com/100"
                className="rounded-full"
              />
            </div>
            <div className="flex-col">
              <h1>{props.name}</h1>
              <p>{props.status}</p>
              <p>{props.gender}</p>
              <p>{props.phone}</p>
              <p>{props.email}</p>
              <div className="flex">
                <Link
                  to="/admin/farmers/profile"
                  className="rounded bg-primary px-2 text-white hover:text-white"
                >
                  Visit Profile
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}
