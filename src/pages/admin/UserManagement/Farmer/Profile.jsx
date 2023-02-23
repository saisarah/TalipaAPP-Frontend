import { Card, Col, Row } from "antd";

export default function Profile() {
  return (
    <>
      <Card>
        <h1 className="mb-3">Farmer Profile</h1>

        <Row>
          <Col span="2">
            <p>Name</p>
          </Col>
          <Col>
            <h1>Joshua Villanueva</h1>
          </Col>
        </Row>
        <Row>
          <Col span="2">
            <p>Gender</p>
          </Col>
          <Col>
            <h1>Male</h1>
          </Col>
        </Row>
        <Row>
          <Col span="2">
            <p>Phone</p>
          </Col>
          <Col>
            <h1>+63 976 140 1847</h1>
          </Col>
        </Row>
        <Row>
          <Col span="2">
            <p>Email</p>
          </Col>
          <Col>
            <h1>villanuevajoshua27@gmail.com</h1>
          </Col>
        </Row>
        <Row>
          <Col span="2">
            <p>Address</p>
          </Col>
          <Col>
            <h1>
              Zamboanga del Sur, Zamboanga City, G/F Interco Building, N. S.
              Valderrosa Street
            </h1>
          </Col>
        </Row>
        <Row>
          <Col span="2">
            <p>Farm Area</p>
          </Col>
          <Col>
            <h1>5 - hectares</h1>
          </Col>
        </Row>
        <Row>
          <Col span="2">
            <p>Farm Type</p>
          </Col>
          <Col>
            <h1>Irrigated</h1>
          </Col>
        </Row>
        <Row>
          <Col span="2">
            <p>Ownership type</p>
          </Col>
          <Col>
            <h1>Registered Owner</h1>
          </Col>
        </Row>
      </Card>
    </>
  );
}
